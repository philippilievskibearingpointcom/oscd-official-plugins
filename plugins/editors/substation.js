import { css as G, property as h, customElement as F, LitElement as Z, html as c, query as N, state as _, queryAsync as zi, eventOptions as Co, svg as T, queryAssignedNodes as Li, unsafeCSS as Eo } from "lit-element";
import { NodePart as No, AttributePart as Io, directive as Ti, nothing as $t, html as C, render as _i } from "lit-html";
import "@material/mwc-fab";
import "@material/mwc-icon-button";
import "@material/mwc-icon-button-toggle";
import "@material/mwc-icon";
import "@material/mwc-menu";
import { Select as Do } from "@material/mwc-select";
import "@material/mwc-switch";
import { TextField as ko } from "@material/mwc-textfield";
import "@material/mwc-formfield";
import { List as zo } from "@material/mwc-list";
import "@material/mwc-button";
const Lo = 1e3 * 60, bn = "langChanged";
function To(e, t, n) {
  return Object.entries(gn(t || {})).reduce((i, [r, o]) => i.replace(new RegExp(`{{[  ]*${r}[  ]*}}`, "gm"), String(gn(o))), e);
}
function _o(e, t) {
  const n = e.split(".");
  let i = t.strings;
  for (; i != null && n.length > 0; )
    i = i[n.shift()];
  return i != null ? i.toString() : null;
}
function gn(e) {
  return typeof e == "function" ? e() : e;
}
const Vo = () => ({
  loader: () => Promise.resolve({}),
  empty: (e) => `[${e}]`,
  lookup: _o,
  interpolate: To,
  translationCache: {}
});
let Pt = Vo();
function Po(e) {
  return Pt = Object.assign(Object.assign({}, Pt), e);
}
function Ro(e) {
  window.dispatchEvent(new CustomEvent(bn, { detail: e }));
}
function qo(e, t, n = Pt) {
  Ro({
    previousStrings: n.strings,
    previousLang: n.lang,
    lang: n.lang = e,
    strings: n.strings = t
  });
}
function Mo(e, t) {
  const n = (i) => e(i.detail);
  return window.addEventListener(bn, n, t), () => window.removeEventListener(bn, n);
}
async function Oo(e, t = Pt) {
  const n = await t.loader(e, t);
  t.translationCache = {}, qo(e, n, t);
}
function s(e, t, n = Pt) {
  let i = n.translationCache[e] || (n.translationCache[e] = n.lookup(e, n) || n.empty(e, n));
  return t = t != null ? gn(t) : null, t != null ? n.interpolate(i, t, n) : i;
}
function Vi(e) {
  return e instanceof No ? e.startNode.isConnected : e instanceof Io ? e.committer.element.isConnected : e.element.isConnected;
}
function Fo(e) {
  for (const [t] of e)
    Vi(t) || e.delete(t);
}
function Ho(e) {
  "requestIdleCallback" in window ? window.requestIdleCallback(e) : setTimeout(e);
}
function Bo(e, t) {
  setInterval(() => Ho(() => Fo(e)), t);
}
const Ln = /* @__PURE__ */ new Map();
function Wo() {
  Mo((e) => {
    for (const [t, n] of Ln)
      Vi(t) && Pi(t, n, e);
  });
}
Wo();
Bo(Ln, Lo);
function Pi(e, t, n) {
  const i = t(n);
  e.value !== i && (e.setValue(i), e.commit());
}
Ti((e) => (t) => {
  Ln.set(t, e), Pi(t, e);
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
const Ri = /* @__PURE__ */ new WeakMap(), Xt = (e) => (...t) => {
  const n = e(...t);
  return Ri.set(n, !0), n;
}, Xn = (e) => typeof e == "function" && Ri.has(e);
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
const sn = {};
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
`${String(Math.random()).slice(2)}`;
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
window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: (e) => e });
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
const qi = (e) => e === null || !(typeof e == "object" || typeof e == "function");
class Qt {
  constructor(t) {
    this.value = void 0, this.committer = t;
  }
  setValue(t) {
    t !== sn && (!qi(t) || t !== this.value) && (this.value = t, Xn(t) || (this.committer.dirty = !0));
  }
  commit() {
    for (; Xn(this.value); ) {
      const t = this.value;
      this.value = sn, t(this);
    }
    this.value !== sn && this.committer.commit();
  }
}
class Mi extends Qt {
}
let Go = !1;
(() => {
  try {
    const e = {
      get capture() {
        return Go = !0, !1;
      }
    };
    window.addEventListener("test", e, e), window.removeEventListener("test", e, e);
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
var jo = Object.defineProperty, Uo = Object.getOwnPropertyDescriptor, Et = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? Uo(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
  return i && r && jo(t, n, r), r;
};
let Qe = class extends Z {
  constructor() {
    super(...arguments), this.secondary = !1, this.highlighted = !1, this.hideActions = !1;
  }
  async firstUpdated() {
    this.tabIndex = 0;
  }
  renderIcon() {
    return c`<span>
      <slot name="icon"
        >${this.icon ? c`<mwc-icon>${this.icon}</mwc-icon>` : $t}</slot
      ></span
    > `;
  }
  render() {
    return c`<header>${this.label ?? $t}</header>
      <section>${this.renderIcon()}<slot name="action"></slot></section>
      <footer>${this.label ?? $t}</footer>`;
  }
};
Qe.styles = G`
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
Et([
  h({ type: String })
], Qe.prototype, "label", 2);
Et([
  h({ type: String })
], Qe.prototype, "icon", 2);
Et([
  h({ type: Boolean })
], Qe.prototype, "secondary", 2);
Et([
  h({ type: Boolean })
], Qe.prototype, "highlighted", 2);
Et([
  h({ type: Boolean })
], Qe.prototype, "hideActions", 2);
Qe = Et([
  F("action-icon")
], Qe);
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
class Ko {
  constructor(t) {
    this.classes = /* @__PURE__ */ new Set(), this.changed = !1, this.element = t;
    const n = (t.getAttribute("class") || "").split(/\s+/);
    for (const i of n)
      this.classes.add(i);
  }
  add(t) {
    this.classes.add(t), this.changed = !0;
  }
  remove(t) {
    this.classes.delete(t), this.changed = !0;
  }
  commit() {
    if (this.changed) {
      let t = "";
      this.classes.forEach((n) => t += n + " "), this.element.setAttribute("class", t);
    }
  }
}
const Qn = /* @__PURE__ */ new WeakMap(), We = Xt((e) => (t) => {
  if (!(t instanceof Qt) || t instanceof Mi || t.committer.name !== "class" || t.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: n } = t, { element: i } = n;
  let r = Qn.get(t);
  r === void 0 && (i.setAttribute("class", n.strings.join(" ")), Qn.set(t, r = /* @__PURE__ */ new Set()));
  const o = i.classList || new Ko(i);
  r.forEach((a) => {
    a in e || (o.remove(a), r.delete(a));
  });
  for (const a in e) {
    const l = e[a];
    l != r.has(a) && (l ? (o.add(a), r.add(a)) : (o.remove(a), r.delete(a)));
  }
  typeof o.commit == "function" && o.commit();
});
var Zo = Object.defineProperty, Xo = Object.getOwnPropertyDescriptor, Nt = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? Xo(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
  return i && r && Zo(t, n, r), r;
};
function Oi(e, t) {
  const n = e.nodeType === Node.ELEMENT_NODE ? e.closest(t) : null;
  if (n) return n;
  const i = e.getRootNode();
  return i instanceof ShadowRoot ? Oi(i.host, t) : null;
}
let Ye = class extends Z {
  constructor() {
    super(...arguments), this.secondary = !1, this.highlighted = !1, this.level = 1;
  }
  async firstUpdated() {
    this.tabIndex = 0;
    const e = Oi(this.parentNode, "action-pane");
    e && (this.level = e.level + 1), this.level = Math.floor(this.level);
  }
  renderHeader() {
    const e = c`<span
        ><slot name="icon"
          >${this.icon ? c`<mwc-icon>${this.icon}</mwc-icon>` : $t}</slot
        ></span
      >
      ${this.label ?? $t}
      <nav><slot name="action"></slot></nav>`, t = Math.floor(Math.max(this.level, 1)), n = typeof this.label == "string" ? this.label : "";
    switch (t) {
      case 1:
        return c`<h1 title="${n}">${e}</h1>`;
      case 2:
        return c`<h2 title="${n}">${e}</h2>`;
      case 3:
        return c`<h3 title="${n}">${e}</h3>`;
      default:
        return c`<h4 title="${n}">${e}</h4>`;
    }
  }
  render() {
    return c`<section
      class="${We({
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
Ye.styles = G`
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
Nt([
  h({ type: String })
], Ye.prototype, "label", 2);
Nt([
  h({ type: String })
], Ye.prototype, "icon", 2);
Nt([
  h({ type: Boolean })
], Ye.prototype, "secondary", 2);
Nt([
  h({ type: Boolean })
], Ye.prototype, "highlighted", 2);
Nt([
  h({ type: Number })
], Ye.prototype, "level", 2);
Ye = Nt([
  F("action-pane")
], Ye);
var yn = function(e, t) {
  return yn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
    n.__proto__ = i;
  } || function(n, i) {
    for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (n[r] = i[r]);
  }, yn(e, t);
};
function Qo(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  yn(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var Tt = function() {
  return Tt = Object.assign || function(t) {
    for (var n, i = 1, r = arguments.length; i < r; i++) {
      n = arguments[i];
      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, Tt.apply(this, arguments);
};
function w(e, t, n, i) {
  var r = arguments.length, o = r < 3 ? t : i === null ? i = Object.getOwnPropertyDescriptor(t, n) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o = Reflect.decorate(e, t, n, i);
  else for (var l = e.length - 1; l >= 0; l--) (a = e[l]) && (o = (r < 3 ? a(o) : r > 3 ? a(t, n, o) : a(t, n)) || o);
  return r > 3 && o && Object.defineProperty(t, n, o), o;
}
function Ot(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], i = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == "number") return {
    next: function() {
      return e && i >= e.length && (e = void 0), { value: e && e[i++], done: !e };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
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
function Yo(e, t) {
  var n = e.matches || e.webkitMatchesSelector || e.msMatchesSelector;
  return n.call(e, t);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Jo = (e) => e.nodeType === Node.ELEMENT_NODE, Fi = () => {
}, ea = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", Fi, ea);
document.removeEventListener("x", Fi);
const Hi = (e = window.document) => {
  let t = e.activeElement;
  const n = [];
  if (!t)
    return n;
  for (; t && (n.push(t), t.shadowRoot); )
    t = t.shadowRoot.activeElement;
  return n;
}, ta = (e) => {
  const t = Hi();
  if (!t.length)
    return !1;
  const n = t[t.length - 1], i = new Event("check-if-focused", { bubbles: !0, composed: !0 });
  let r = [];
  const o = (a) => {
    r = a.composedPath();
  };
  return document.body.addEventListener("check-if-focused", o), n.dispatchEvent(i), document.body.removeEventListener("check-if-focused", o), r.indexOf(e) !== -1;
};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Tn extends Z {
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
var Bi = (
  /** @class */
  function() {
    function e(t) {
      t === void 0 && (t = {}), this.adapter = t;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.init = function() {
    }, e.prototype.destroy = function() {
    }, e;
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
var na = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, ia = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Yn = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
function ra(e, t, n) {
  if (!e)
    return { x: 0, y: 0 };
  var i = t.x, r = t.y, o = i + n.left, a = r + n.top, l, d;
  if (e.type === "touchstart") {
    var u = e;
    l = u.changedTouches[0].pageX - o, d = u.changedTouches[0].pageY - a;
  } else {
    var p = e;
    l = p.pageX - o, d = p.pageY - a;
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
var Jn = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], ei = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Ft = [], oa = (
  /** @class */
  function(e) {
    Qo(t, e);
    function t(n) {
      var i = e.call(this, Tt(Tt({}, t.defaultAdapter), n)) || this;
      return i.activationAnimationHasEnded = !1, i.activationTimer = 0, i.fgDeactivationRemovalTimer = 0, i.fgScale = "0", i.frame = { width: 0, height: 0 }, i.initialSize = 0, i.layoutFrame = 0, i.maxRadius = 0, i.unboundedCoords = { left: 0, top: 0 }, i.activationState = i.defaultActivationState(), i.activationTimerCallback = function() {
        i.activationAnimationHasEnded = !0, i.runDeactivationUXLogicIfReady();
      }, i.activateHandler = function(r) {
        i.activateImpl(r);
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
    return Object.defineProperty(t, "cssClasses", {
      get: function() {
        return na;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "strings", {
      get: function() {
        return ia;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "numbers", {
      get: function() {
        return Yn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "defaultAdapter", {
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
    }), t.prototype.init = function() {
      var n = this, i = this.supportsPressRipple();
      if (this.registerRootHandlers(i), i) {
        var r = t.cssClasses, o = r.ROOT, a = r.UNBOUNDED;
        requestAnimationFrame(function() {
          n.adapter.addClass(o), n.adapter.isUnbounded() && (n.adapter.addClass(a), n.layoutInternal());
        });
      }
    }, t.prototype.destroy = function() {
      var n = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(t.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(t.cssClasses.FG_DEACTIVATION));
        var i = t.cssClasses, r = i.ROOT, o = i.UNBOUNDED;
        requestAnimationFrame(function() {
          n.adapter.removeClass(r), n.adapter.removeClass(o), n.removeCssVars();
        });
      }
      this.deregisterRootHandlers(), this.deregisterDeactivationHandlers();
    }, t.prototype.activate = function(n) {
      this.activateImpl(n);
    }, t.prototype.deactivate = function() {
      this.deactivateImpl();
    }, t.prototype.layout = function() {
      var n = this;
      this.layoutFrame && cancelAnimationFrame(this.layoutFrame), this.layoutFrame = requestAnimationFrame(function() {
        n.layoutInternal(), n.layoutFrame = 0;
      });
    }, t.prototype.setUnbounded = function(n) {
      var i = t.cssClasses.UNBOUNDED;
      n ? this.adapter.addClass(i) : this.adapter.removeClass(i);
    }, t.prototype.handleFocus = function() {
      var n = this;
      requestAnimationFrame(function() {
        return n.adapter.addClass(t.cssClasses.BG_FOCUSED);
      });
    }, t.prototype.handleBlur = function() {
      var n = this;
      requestAnimationFrame(function() {
        return n.adapter.removeClass(t.cssClasses.BG_FOCUSED);
      });
    }, t.prototype.supportsPressRipple = function() {
      return this.adapter.browserSupportsCssVars();
    }, t.prototype.defaultActivationState = function() {
      return {
        activationEvent: void 0,
        hasDeactivationUXRun: !1,
        isActivated: !1,
        isProgrammatic: !1,
        wasActivatedByPointer: !1,
        wasElementMadeActive: !1
      };
    }, t.prototype.registerRootHandlers = function(n) {
      var i, r;
      if (n) {
        try {
          for (var o = Ot(Jn), a = o.next(); !a.done; a = o.next()) {
            var l = a.value;
            this.adapter.registerInteractionHandler(l, this.activateHandler);
          }
        } catch (d) {
          i = { error: d };
        } finally {
          try {
            a && !a.done && (r = o.return) && r.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
      }
      this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
    }, t.prototype.registerDeactivationHandlers = function(n) {
      var i, r;
      if (n.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var o = Ot(ei), a = o.next(); !a.done; a = o.next()) {
            var l = a.value;
            this.adapter.registerDocumentInteractionHandler(l, this.deactivateHandler);
          }
        } catch (d) {
          i = { error: d };
        } finally {
          try {
            a && !a.done && (r = o.return) && r.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
    }, t.prototype.deregisterRootHandlers = function() {
      var n, i;
      try {
        for (var r = Ot(Jn), o = r.next(); !o.done; o = r.next()) {
          var a = o.value;
          this.adapter.deregisterInteractionHandler(a, this.activateHandler);
        }
      } catch (l) {
        n = { error: l };
      } finally {
        try {
          o && !o.done && (i = r.return) && i.call(r);
        } finally {
          if (n) throw n.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, t.prototype.deregisterDeactivationHandlers = function() {
      var n, i;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var r = Ot(ei), o = r.next(); !o.done; o = r.next()) {
          var a = o.value;
          this.adapter.deregisterDocumentInteractionHandler(a, this.deactivateHandler);
        }
      } catch (l) {
        n = { error: l };
      } finally {
        try {
          o && !o.done && (i = r.return) && i.call(r);
        } finally {
          if (n) throw n.error;
        }
      }
    }, t.prototype.removeCssVars = function() {
      var n = this, i = t.strings, r = Object.keys(i);
      r.forEach(function(o) {
        o.indexOf("VAR_") === 0 && n.adapter.updateCssVariable(i[o], null);
      });
    }, t.prototype.activateImpl = function(n) {
      var i = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var r = this.activationState;
        if (!r.isActivated) {
          var o = this.previousActivationEvent, a = o && n !== void 0 && o.type !== n.type;
          if (!a) {
            r.isActivated = !0, r.isProgrammatic = n === void 0, r.activationEvent = n, r.wasActivatedByPointer = r.isProgrammatic ? !1 : n !== void 0 && (n.type === "mousedown" || n.type === "touchstart" || n.type === "pointerdown");
            var l = n !== void 0 && Ft.length > 0 && Ft.some(function(d) {
              return i.adapter.containsEventTarget(d);
            });
            if (l) {
              this.resetActivationState();
              return;
            }
            n !== void 0 && (Ft.push(n.target), this.registerDeactivationHandlers(n)), r.wasElementMadeActive = this.checkElementMadeActive(n), r.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Ft = [], !r.wasElementMadeActive && n !== void 0 && (n.key === " " || n.keyCode === 32) && (r.wasElementMadeActive = i.checkElementMadeActive(n), r.wasElementMadeActive && i.animateActivation()), r.wasElementMadeActive || (i.activationState = i.defaultActivationState());
            });
          }
        }
      }
    }, t.prototype.checkElementMadeActive = function(n) {
      return n !== void 0 && n.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, t.prototype.animateActivation = function() {
      var n = this, i = t.strings, r = i.VAR_FG_TRANSLATE_START, o = i.VAR_FG_TRANSLATE_END, a = t.cssClasses, l = a.FG_DEACTIVATION, d = a.FG_ACTIVATION, u = t.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var p = "", f = "";
      if (!this.adapter.isUnbounded()) {
        var b = this.getFgTranslationCoordinates(), y = b.startPoint, v = b.endPoint;
        p = y.x + "px, " + y.y + "px", f = v.x + "px, " + v.y + "px";
      }
      this.adapter.updateCssVariable(r, p), this.adapter.updateCssVariable(o, f), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(l), this.adapter.computeBoundingRect(), this.adapter.addClass(d), this.activationTimer = setTimeout(function() {
        n.activationTimerCallback();
      }, u);
    }, t.prototype.getFgTranslationCoordinates = function() {
      var n = this.activationState, i = n.activationEvent, r = n.wasActivatedByPointer, o;
      r ? o = ra(i, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : o = {
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
    }, t.prototype.runDeactivationUXLogicIfReady = function() {
      var n = this, i = t.cssClasses.FG_DEACTIVATION, r = this.activationState, o = r.hasDeactivationUXRun, a = r.isActivated, l = o || !a;
      l && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(i), this.fgDeactivationRemovalTimer = setTimeout(function() {
        n.adapter.removeClass(i);
      }, Yn.FG_DEACTIVATION_MS));
    }, t.prototype.rmBoundedActivationClasses = function() {
      var n = t.cssClasses.FG_ACTIVATION;
      this.adapter.removeClass(n), this.activationAnimationHasEnded = !1, this.adapter.computeBoundingRect();
    }, t.prototype.resetActivationState = function() {
      var n = this;
      this.previousActivationEvent = this.activationState.activationEvent, this.activationState = this.defaultActivationState(), setTimeout(function() {
        return n.previousActivationEvent = void 0;
      }, t.numbers.TAP_DELAY_MS);
    }, t.prototype.deactivateImpl = function() {
      var n = this, i = this.activationState;
      if (i.isActivated) {
        var r = Tt({}, i);
        i.isProgrammatic ? (requestAnimationFrame(function() {
          n.animateDeactivation(r);
        }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(function() {
          n.activationState.hasDeactivationUXRun = !0, n.animateDeactivation(r), n.resetActivationState();
        }));
      }
    }, t.prototype.animateDeactivation = function(n) {
      var i = n.wasActivatedByPointer, r = n.wasElementMadeActive;
      (i || r) && this.runDeactivationUXLogicIfReady();
    }, t.prototype.layoutInternal = function() {
      var n = this;
      this.frame = this.adapter.computeBoundingRect();
      var i = Math.max(this.frame.height, this.frame.width), r = function() {
        var a = Math.sqrt(Math.pow(n.frame.width, 2) + Math.pow(n.frame.height, 2));
        return a + t.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? i : r();
      var o = Math.floor(i * t.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && o % 2 !== 0 ? this.initialSize = o - 1 : this.initialSize = o, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, t.prototype.updateLayoutCssVars = function() {
      var n = t.strings, i = n.VAR_FG_SIZE, r = n.VAR_LEFT, o = n.VAR_TOP, a = n.VAR_FG_SCALE;
      this.adapter.updateCssVariable(i, this.initialSize + "px"), this.adapter.updateCssVariable(a, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(r, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(o, this.unboundedCoords.top + "px"));
    }, t;
  }(Bi)
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
const ti = /* @__PURE__ */ new WeakMap(), aa = Xt((e) => (t) => {
  if (!(t instanceof Qt) || t instanceof Mi || t.committer.name !== "style" || t.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: n } = t, { style: i } = n.element;
  let r = ti.get(t);
  r === void 0 && (i.cssText = n.strings.join(" "), ti.set(t, r = /* @__PURE__ */ new Set())), r.forEach((o) => {
    o in e || (r.delete(o), o.indexOf("-") === -1 ? i[o] = null : i.removeProperty(o));
  });
  for (const o in e)
    r.add(o), o.indexOf("-") === -1 ? i[o] = e[o] : i.setProperty(o, e[o]);
});
class ie extends Tn {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = oa;
  }
  get isActive() {
    return Yo(this.parentElement || this, ":active");
  }
  createAdapter() {
    return {
      browserSupportsCssVars: () => !0,
      isUnbounded: () => this.unbounded,
      isSurfaceActive: () => this.isActive,
      isSurfaceDisabled: () => this.disabled,
      addClass: (t) => {
        switch (t) {
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
      removeClass: (t) => {
        switch (t) {
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
      updateCssVariable: (t, n) => {
        switch (t) {
          case "--mdc-ripple-fg-scale":
            this.fgScale = n;
            break;
          case "--mdc-ripple-fg-size":
            this.fgSize = n;
            break;
          case "--mdc-ripple-fg-translate-end":
            this.translateEnd = n;
            break;
          case "--mdc-ripple-fg-translate-start":
            this.translateStart = n;
            break;
          case "--mdc-ripple-left":
            this.leftPos = n;
            break;
          case "--mdc-ripple-top":
            this.topPos = n;
            break;
        }
      },
      computeBoundingRect: () => (this.parentElement || this).getBoundingClientRect(),
      getWindowPageOffset: () => ({ x: window.pageXOffset, y: window.pageYOffset })
    };
  }
  startPress(t) {
    this.waitForFoundation(() => {
      this.mdcFoundation.activate(t);
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
  waitForFoundation(t) {
    this.mdcFoundation ? t() : this.updateComplete.then(t);
  }
  update(t) {
    t.has("disabled") && this.disabled && this.endHover(), super.update(t);
  }
  /** @soyTemplate */
  render() {
    const t = this.activated && (this.primary || !this.accent), n = this.selected && (this.primary || !this.accent), i = {
      "mdc-ripple-surface--accent": this.accent,
      "mdc-ripple-surface--primary--activated": t,
      "mdc-ripple-surface--accent--activated": this.accent && this.activated,
      "mdc-ripple-surface--primary--selected": n,
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
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${We(i)}"
          style="${aa({
      "--mdc-ripple-fg-scale": this.fgScale,
      "--mdc-ripple-fg-size": this.fgSize,
      "--mdc-ripple-fg-translate-end": this.translateEnd,
      "--mdc-ripple-fg-translate-start": this.translateStart,
      "--mdc-ripple-left": this.leftPos,
      "--mdc-ripple-top": this.topPos
    })}"></div>`;
  }
}
w([
  N(".mdc-ripple-surface")
], ie.prototype, "mdcRoot", void 0);
w([
  h({ type: Boolean })
], ie.prototype, "primary", void 0);
w([
  h({ type: Boolean })
], ie.prototype, "accent", void 0);
w([
  h({ type: Boolean })
], ie.prototype, "unbounded", void 0);
w([
  h({ type: Boolean })
], ie.prototype, "disabled", void 0);
w([
  h({ type: Boolean })
], ie.prototype, "activated", void 0);
w([
  h({ type: Boolean })
], ie.prototype, "selected", void 0);
w([
  h({ type: Boolean })
], ie.prototype, "internalUseStateLayerCustomProperties", void 0);
w([
  _()
], ie.prototype, "hovering", void 0);
w([
  _()
], ie.prototype, "bgFocused", void 0);
w([
  _()
], ie.prototype, "fgActivation", void 0);
w([
  _()
], ie.prototype, "fgDeactivation", void 0);
w([
  _()
], ie.prototype, "fgScale", void 0);
w([
  _()
], ie.prototype, "fgSize", void 0);
w([
  _()
], ie.prototype, "translateStart", void 0);
w([
  _()
], ie.prototype, "translateEnd", void 0);
w([
  _()
], ie.prototype, "leftPos", void 0);
w([
  _()
], ie.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const sa = G`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let vn = class extends ie {
};
vn.styles = [sa];
vn = w([
  F("mwc-ripple")
], vn);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Je = (e) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (t, n) => {
    if (t.constructor._observers) {
      if (!t.constructor.hasOwnProperty("_observers")) {
        const i = t.constructor._observers;
        t.constructor._observers = /* @__PURE__ */ new Map(), i.forEach(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (r, o) => t.constructor._observers.set(o, r)
        );
      }
    } else {
      t.constructor._observers = /* @__PURE__ */ new Map();
      const i = t.updated;
      t.updated = function(r) {
        i.call(this, r), r.forEach((o, a) => {
          const d = this.constructor._observers.get(a);
          d !== void 0 && d.call(this, this[a], o);
        });
      };
    }
    t.constructor._observers.set(n, e);
  }
);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Wi {
  constructor(t) {
    this.startPress = (n) => {
      t().then((i) => {
        i && i.startPress(n);
      });
    }, this.endPress = () => {
      t().then((n) => {
        n && n.endPress();
      });
    }, this.startFocus = () => {
      t().then((n) => {
        n && n.startFocus();
      });
    }, this.endFocus = () => {
      t().then((n) => {
        n && n.endFocus();
      });
    }, this.startHover = () => {
      t().then((n) => {
        n && n.startHover();
      });
    }, this.endHover = () => {
      t().then((n) => {
        n && n.endHover();
      });
    };
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class se extends Z {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new Wi(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
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
        cb: (t) => {
          const n = t.type;
          this.onDown(n === "mousedown" ? "mouseup" : "touchend", t);
        }
      }
    ];
  }
  get text() {
    const t = this.textContent;
    return t ? t.trim() : "";
  }
  render() {
    const t = this.renderText(), n = this.graphic ? this.renderGraphic() : c``, i = this.hasMeta ? this.renderMeta() : c``;
    return c`
      ${this.renderRipple()}
      ${n}
      ${t}
      ${i}`;
  }
  renderRipple() {
    return this.shouldRenderRipple ? c`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>` : this.activated ? c`<div class="fake-activated-ripple"></div>` : "";
  }
  renderGraphic() {
    const t = {
      multi: this.multipleGraphics
    };
    return c`
      <span class="mdc-deprecated-list-item__graphic material-icons ${We(t)}">
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
    const t = this.twoline ? this.renderTwoline() : this.renderSingleLine();
    return c`
      <span class="mdc-deprecated-list-item__text">
        ${t}
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
  onDown(t, n) {
    const i = () => {
      window.removeEventListener(t, i), this.rippleHandlers.endPress();
    };
    window.addEventListener(t, i), this.rippleHandlers.startPress(n);
  }
  fireRequestSelected(t, n) {
    if (this.noninteractive)
      return;
    const i = new CustomEvent("request-selected", { bubbles: !0, composed: !0, detail: { source: n, selected: t } });
    this.dispatchEvent(i);
  }
  connectedCallback() {
    super.connectedCallback(), this.noninteractive || this.setAttribute("mwc-list-item", "");
    for (const t of this.listeners)
      for (const n of t.eventNames)
        t.target.addEventListener(n, t.cb, { passive: !0 });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    for (const t of this.listeners)
      for (const n of t.eventNames)
        t.target.removeEventListener(n, t.cb);
    this._managingList && (this._managingList.debouncedLayout ? this._managingList.debouncedLayout(!0) : this._managingList.layout(!0));
  }
  // composed flag, event fire through shadow root and up through composed tree
  firstUpdated() {
    const t = new Event("list-item-rendered", { bubbles: !0, composed: !0 });
    this.dispatchEvent(t);
  }
}
w([
  N("slot")
], se.prototype, "slotElement", void 0);
w([
  zi("mwc-ripple")
], se.prototype, "ripple", void 0);
w([
  h({ type: String })
], se.prototype, "value", void 0);
w([
  h({ type: String, reflect: !0 })
], se.prototype, "group", void 0);
w([
  h({ type: Number, reflect: !0 })
], se.prototype, "tabindex", void 0);
w([
  h({ type: Boolean, reflect: !0 }),
  Je(function(e) {
    e ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], se.prototype, "disabled", void 0);
w([
  h({ type: Boolean, reflect: !0 })
], se.prototype, "twoline", void 0);
w([
  h({ type: Boolean, reflect: !0 })
], se.prototype, "activated", void 0);
w([
  h({ type: String, reflect: !0 })
], se.prototype, "graphic", void 0);
w([
  h({ type: Boolean })
], se.prototype, "multipleGraphics", void 0);
w([
  h({ type: Boolean })
], se.prototype, "hasMeta", void 0);
w([
  h({ type: Boolean, reflect: !0 }),
  Je(function(e) {
    e ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], se.prototype, "noninteractive", void 0);
w([
  h({ type: Boolean, reflect: !0 }),
  Je(function(e) {
    const t = this.getAttribute("role"), n = t === "gridcell" || t === "option" || t === "row" || t === "tab";
    if (n && e ? this.setAttribute("aria-selected", "true") : n && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(e, "property");
  })
], se.prototype, "selected", void 0);
w([
  _()
], se.prototype, "shouldRenderRipple", void 0);
w([
  _()
], se.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Gi = G`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let wn = class extends se {
};
wn.styles = [Gi];
wn = w([
  F("mwc-list-item")
], wn);
function z(e, t, n) {
  const i = e.createElementNS(e.documentElement.namespaceURI, t);
  return Object.entries(n).filter(([r, o]) => o !== null).forEach(([r, o]) => i.setAttribute(r, o)), i;
}
function O(e, t) {
  const n = e.cloneNode(!1);
  return Object.entries(t).forEach(([i, r]) => {
    r === null ? n.removeAttribute(i) : n.setAttribute(i, r);
  }), n;
}
function $(e, t) {
  return !e || !t ? [] : Array.from(e.children).filter(
    (n) => n.tagName === t
  );
}
function Yt(e, t, n = 1) {
  const i = "new" + t + n;
  return e.querySelector(`:scope > ${t}[name="${i}"]`) ? Yt(e, t, ++n) : i;
}
var ca = Object.defineProperty, la = Object.getOwnPropertyDescriptor, Ce = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? la(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
  return i && r && ca(t, n, r), r;
};
let ue = class extends ko {
  constructor() {
    super(), this.nullable = !1, this.multipliers = [null, ""], this.multiplierIndex = 0, this.unit = "", this.isNull = !1, this.defaultValue = "", this.reservedValues = [], this.disabledSwitch = !1, this.nulled = null, this.disabledSwitch = this.hasAttribute("disabled");
  }
  get multiplier() {
    return this.unit == "" ? null : this.multipliers[this.multiplierIndex] ?? this.multipliers[0] ?? null;
  }
  set multiplier(e) {
    const t = this.multipliers.indexOf(e);
    t >= 0 && (this.multiplierIndex = t), this.suffix = (this.multiplier ?? "") + this.unit;
  }
  get null() {
    return this.nullable && this.isNull;
  }
  set null(e) {
    !this.nullable || e === this.isNull || (this.isNull = e, this.null ? this.disable() : this.enable());
  }
  get maybeValue() {
    return this.null ? null : this.value;
  }
  set maybeValue(e) {
    e === null ? this.null = !0 : (this.null = !1, this.value = e);
  }
  selectMultiplier(e) {
    this.multiplier = this.multipliers[e.detail.index];
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
    return this.reservedValues && this.reservedValues.some((e) => e === this.value) ? (this.setCustomValidity(s("textfield.unique")), !1) : (this.setCustomValidity(""), super.checkValidity());
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
      (e) => c`<mwc-list-item ?selected=${e === this.multiplier}
          >${e === null ? s("textfield.noMultiplier") : e}</mwc-list-item
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
Ce([
  h({ type: Boolean })
], ue.prototype, "nullable", 2);
Ce([
  h({ type: Array })
], ue.prototype, "multipliers", 2);
Ce([
  h({ type: String })
], ue.prototype, "multiplier", 1);
Ce([
  h({ type: String })
], ue.prototype, "unit", 2);
Ce([
  _()
], ue.prototype, "null", 1);
Ce([
  h({ type: String })
], ue.prototype, "maybeValue", 1);
Ce([
  h({ type: String })
], ue.prototype, "defaultValue", 2);
Ce([
  h({ type: Array })
], ue.prototype, "reservedValues", 2);
Ce([
  N("mwc-switch")
], ue.prototype, "nullSwitch", 2);
Ce([
  N("mwc-menu")
], ue.prototype, "multiplierMenu", 2);
Ce([
  N("mwc-icon-button")
], ue.prototype, "multiplierButton", 2);
ue = Ce([
  F("wizard-textfield")
], ue);
var da = Object.defineProperty, ua = Object.getOwnPropertyDescriptor, vt = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? ua(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
  return i && r && da(t, n, r), r;
};
let He = class extends Do {
  constructor() {
    super(), this.nullable = !1, this.isNull = !1, this.defaultValue = "", this.reservedValues = [], this.disabledSwitch = !1, this.nulled = null, this.disabledSwitch = this.hasAttribute("disabled");
  }
  get null() {
    return this.nullable && this.isNull;
  }
  set null(e) {
    !this.nullable || e === this.isNull || (this.isNull = e, this.null ? this.disable() : this.enable());
  }
  get maybeValue() {
    return this.null ? null : this.value;
  }
  set maybeValue(e) {
    e === null ? this.null = !0 : (this.null = !1, this.value = e);
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
vt([
  h({ type: Boolean })
], He.prototype, "nullable", 2);
vt([
  _()
], He.prototype, "null", 1);
vt([
  h({ type: String })
], He.prototype, "maybeValue", 1);
vt([
  h({ type: String })
], He.prototype, "defaultValue", 2);
vt([
  h({ type: Array })
], He.prototype, "reservedValues", 2);
vt([
  N("mwc-switch")
], He.prototype, "nullSwitch", 2);
He = vt([
  F("wizard-select")
], He);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function ma(e, t, n) {
  const i = e.constructor;
  if (!n) {
    const l = `__${t}`;
    if (n = i.getPropertyDescriptor(t, l), !n)
      throw new Error("@ariaProperty must be used after a @property decorator");
  }
  const r = n;
  let o = "";
  if (!r.set)
    throw new Error(`@ariaProperty requires a setter for ${t}`);
  const a = {
    configurable: !0,
    enumerable: !0,
    set(l) {
      o === "" && (o = i.getPropertyOptions(t).attribute), this.hasAttribute(o) && this.removeAttribute(o), r.set.call(this, l);
    }
  };
  return r.get && (a.get = function() {
    return r.get.call(this);
  }), a;
}
function _n(e, t, n) {
  if (t !== void 0)
    return ma(e, t, n);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class ji extends Tn {
  click() {
    this.formElement && (this.formElement.focus(), this.formElement.click());
  }
  setAriaLabel(t) {
    this.formElement && this.formElement.setAttribute("aria-label", t);
  }
  firstUpdated() {
    super.firstUpdated(), this.shadowRoot && this.mdcRoot.addEventListener("change", (t) => {
      this.dispatchEvent(new Event("change", t));
    });
  }
}
ji.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
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
const cn = /* @__PURE__ */ new WeakMap(), Fe = Xt((e) => (t) => {
  const n = cn.get(t);
  if (e === void 0 && t instanceof Qt) {
    if (n !== void 0 || !cn.has(t)) {
      const i = t.committer.name;
      t.committer.element.removeAttribute(i);
    }
  } else e !== n && t.setValue(e);
  cn.set(t, e);
});
class oe extends ji {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.useStateLayerCustomProperties = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new Wi(() => (this.shouldRenderRipple = !0, this.ripple.then((t) => this.rippleElement = t), this.ripple));
  }
  createAdapter() {
    return {};
  }
  update(t) {
    const n = t.get("indeterminate"), i = t.get("checked"), r = t.get("disabled");
    if (n !== void 0 || i !== void 0 || r !== void 0) {
      const o = this.calculateAnimationStateName(!!i, !!n, !!r), a = this.calculateAnimationStateName(this.checked, this.indeterminate, this.disabled);
      this.animationClass = `${o}-${a}`;
    }
    super.update(t);
  }
  calculateAnimationStateName(t, n, i) {
    return i ? "disabled" : n ? "indeterminate" : t ? "checked" : "unchecked";
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
    const t = this.indeterminate || this.checked, n = {
      "mdc-checkbox--disabled": this.disabled,
      "mdc-checkbox--selected": t,
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
    return c`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${We(n)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${Fe(this.name)}"
              aria-checked="${Fe(i)}"
              aria-label="${Fe(this.ariaLabel)}"
              aria-labelledby="${Fe(this.ariaLabelledBy)}"
              aria-describedby="${Fe(this.ariaDescribedBy)}"
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
  handleRippleMouseDown(t) {
    const n = () => {
      window.removeEventListener("mouseup", n), this.handleRippleDeactivate();
    };
    window.addEventListener("mouseup", n), this.rippleHandlers.startPress(t);
  }
  handleRippleTouchStart(t) {
    this.rippleHandlers.startPress(t);
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
    var t;
    return ((t = this.rippleElement) === null || t === void 0 ? void 0 : t.isActive) || !1;
  }
}
w([
  N(".mdc-checkbox")
], oe.prototype, "mdcRoot", void 0);
w([
  N("input")
], oe.prototype, "formElement", void 0);
w([
  h({ type: Boolean, reflect: !0 })
], oe.prototype, "checked", void 0);
w([
  h({ type: Boolean })
], oe.prototype, "indeterminate", void 0);
w([
  h({ type: Boolean, reflect: !0 })
], oe.prototype, "disabled", void 0);
w([
  h({ type: String, reflect: !0 })
], oe.prototype, "name", void 0);
w([
  h({ type: String })
], oe.prototype, "value", void 0);
w([
  _n,
  h({ type: String, attribute: "aria-label" })
], oe.prototype, "ariaLabel", void 0);
w([
  _n,
  h({ type: String, attribute: "aria-labelledby" })
], oe.prototype, "ariaLabelledBy", void 0);
w([
  _n,
  h({ type: String, attribute: "aria-describedby" })
], oe.prototype, "ariaDescribedBy", void 0);
w([
  h({ type: Boolean })
], oe.prototype, "reducedTouchTarget", void 0);
w([
  _()
], oe.prototype, "animationClass", void 0);
w([
  _()
], oe.prototype, "shouldRenderRipple", void 0);
w([
  _()
], oe.prototype, "focused", void 0);
w([
  _()
], oe.prototype, "useStateLayerCustomProperties", void 0);
w([
  zi("mwc-ripple")
], oe.prototype, "ripple", void 0);
w([
  Co({ passive: !0 })
], oe.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const pa = G`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let An = class extends oe {
};
An.styles = [pa];
An = w([
  F("mwc-checkbox")
], An);
var ha = Object.defineProperty, fa = Object.getOwnPropertyDescriptor, Ae = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? fa(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
  return i && r && ha(t, n, r), r;
};
let me = class extends Z {
  constructor() {
    super(...arguments), this.label = "", this.helper = "", this.nullable = !1, this.defaultChecked = !1, this.disabled = !1, this.isNull = !1, this.initChecked = !1, this.deactivateCheckbox = !1, this.nulled = null;
  }
  get maybeValue() {
    return this.null ? null : this.checked ? "true" : "false";
  }
  set maybeValue(e) {
    e === null ? this.null = !0 : (this.null = !1, this.checked = e === "true");
  }
  get null() {
    return this.nullable && this.isNull;
  }
  set null(e) {
    !this.nullable || e === this.isNull || (this.isNull = e, this.null ? this.disable() : this.enable());
  }
  get checked() {
    return this.checkbox?.checked ?? this.initChecked;
  }
  set checked(e) {
    this.checkbox ? this.checkbox.checked = e : this.initChecked = e;
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
Ae([
  h({ type: String })
], me.prototype, "label", 2);
Ae([
  h({ type: String })
], me.prototype, "helper", 2);
Ae([
  h({ type: Boolean })
], me.prototype, "nullable", 2);
Ae([
  h({ type: Boolean })
], me.prototype, "defaultChecked", 2);
Ae([
  h({ type: String })
], me.prototype, "maybeValue", 1);
Ae([
  h({ type: Boolean })
], me.prototype, "disabled", 2);
Ae([
  _()
], me.prototype, "null", 1);
Ae([
  _()
], me.prototype, "checked", 1);
Ae([
  _()
], me.prototype, "deactivateCheckbox", 2);
Ae([
  _()
], me.prototype, "formfieldLabel", 1);
Ae([
  N("mwc-switch")
], me.prototype, "nullSwitch", 2);
Ae([
  N("mwc-checkbox")
], me.prototype, "checkbox", 2);
me = Ae([
  F("wizard-checkbox")
], me);
function ba(e) {
  return typeof e == "function";
}
function g(e) {
  return e instanceof ue || e instanceof He || e instanceof me ? e.maybeValue : e.value ?? null;
}
function Vn(e) {
  return e instanceof ue ? e.multiplier : null;
}
function E(e, t) {
  if (!e)
    return new CustomEvent("wizard", {
      bubbles: !0,
      composed: !0,
      ...t,
      detail: { wizard: null, ...t?.detail }
    });
  const n = ba(e) ? e : () => e;
  return new CustomEvent("wizard", {
    bubbles: !0,
    composed: !0,
    ...t,
    detail: { wizard: n, ...t?.detail }
  });
}
function ge(e) {
  return E(e, { detail: { subwizard: !0 } });
}
function ga(e) {
  let t = "", n = e.parentElement;
  for (; n?.getAttribute("name"); )
    t = "/" + n.getAttribute("name") + t, n = n.parentElement;
  return t;
}
function ya(e) {
  const t = e.getAttribute("name");
  return t || void 0;
}
function ae(e) {
  const t = e.split(">"), n = t.pop() ?? "";
  return [t.join(">"), n];
}
const Q = ":not(*)";
function va(e) {
  return `${e.getAttribute("version")}	${e.getAttribute("revision")}`;
}
function wa(e, t) {
  const [n, i] = t.split("	");
  return !n || !i ? Q : `${e}[version="${n}"][revision="${i}"]`;
}
function ni(e) {
  return I(e.parentElement) + ">" + e.getAttribute("connectivityNode");
}
function ii(e, t) {
  const [n, i] = ae(t), r = V[e].parents.flatMap(
    (o) => ce(o, n).split(",")
  );
  return re(
    r,
    [">"],
    [`${e}[connectivityNode="${i}"]`]
  ).map((o) => o.join("")).join(",");
}
function Aa(e) {
  const [t, n, i, r, o, a] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "lnType"
  ].map((l) => e.getAttribute(l));
  return t === "None" ? `${I(e.parentElement)}>(${r} ${a} ${o})` : `${t} ${n || "(Client)"}/${i ?? ""} ${r} ${o ?? ""}`;
}
function Sa(e, t) {
  if (t.endsWith(")")) {
    const [b, y] = ae(t), [v, k, L] = y.substring(1, y.length - 1).split(" ");
    if (!v || !k) return Q;
    const A = V[e].parents.flatMap(
      (H) => ce(H, b).split(",")
    );
    return re(
      A,
      [">"],
      [`${e}[iedName="None"][lnClass="${v}"][lnType="${k}"][lnInst="${L}"]`]
    ).map((H) => H.join("")).join(",");
  }
  const [n, i, r, o, a] = t.split(/[ /]/);
  if (!n || !i || !o) return Q;
  const [
    l,
    d,
    u,
    p,
    f
  ] = [
    [`[iedName="${n}"]`],
    i === "(Client)" ? [":not([ldInst])", '[ldInst=""]'] : [`[ldInst="${i}"]`],
    r ? [`[prefix="${r}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${o}"]`],
    a ? [`[lnInst="${a}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return re(
    [e],
    l,
    d,
    u,
    p,
    f
  ).map((b) => b.join("")).join(",");
}
function xa(e) {
  return `${I(e.parentElement)}>${e.getAttribute(
    "iedName"
  )} ${e.getAttribute("apName")}`;
}
function $a(e, t) {
  const [n, i] = ae(t), [r, o] = i.split(" ");
  return `${ce(
    "IED",
    n
  )}>${e}[iedName="${r}"][apName="${o}"]`;
}
function Ca(e) {
  return `${I(e.parentElement)}>${e.getAttribute("associationID") ?? ""}`;
}
function Ea(e, t) {
  const [n, i] = ae(t);
  return i ? `${ce(
    "Server",
    n
  )}>${e}[associationID="${i}"]` : Q;
}
function Na(e) {
  return `${I(e.closest("IED"))}>>${e.getAttribute("inst")}`;
}
function Ia(e, t) {
  const [n, i] = t.split(">>");
  return i ? `IED[name="${n}"] ${e}[inst="${i}"]` : Q;
}
function Da(e) {
  const t = e.textContent, [n, i, r, o, a] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((l) => e.getAttribute(l));
  return `${I(e.parentElement)}>${t} ${n || ""} ${i || ""}/${r ?? ""} ${o ?? ""} ${a ?? ""}`;
}
function ka(e, t) {
  const [n, i] = ae(t), [r, o, a, l, d, u] = i.split(/[ /]/), [
    p,
    f,
    b,
    y,
    v,
    k
  ] = [
    V[e].parents.flatMap(
      (L) => ce(L, n).split(",")
    ),
    [`${r}`],
    o ? [`[apRef="${o}"]`] : [":not([apRef])", '[apRef=""]'],
    a ? [`[ldInst="${a}"]`] : [":not([ldInst])", '[ldInst=""]'],
    l ? [`[prefix="${l}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${d}"]`],
    u ? [`[lnInst="${u}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return re(
    p,
    [">"],
    [e],
    f,
    b,
    y,
    v,
    k
  ).map((L) => L.join("")).join(",");
}
function za(e) {
  const [t, n, i, r, o, a, l, d] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc",
    "ix"
  ].map((p) => e.getAttribute(p)), u = `${t}/${n ?? ""} ${i} ${r ?? ""}.${o} ${a || ""}`;
  return `${I(e.parentElement)}>${u} (${l}${d ? " [" + d + "]" : ""})`;
}
function La(e, t) {
  const [n, i] = ae(t), [r, o, a, l] = i.split(/[ /.]/), d = i.match(
    /.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/
  ), u = d && d[1] ? d[1] : "", p = d && d[2] ? d[2] : "", f = i.match(/\(([A-Z]{2})/), b = i.match(/ \[([0-9]{1,2})\]/), y = f && f[1] ? f[1] : "", v = b && b[1] ? b[1] : "", [
    k,
    L,
    A,
    H,
    B,
    J,
    W,
    de,
    an
  ] = [
    V[e].parents.flatMap(
      (kt) => ce(kt, n).split(",")
    ),
    [`[ldInst="${r}"]`],
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${a}"]`],
    l ? [`[lnInst="${l}"]`] : [":not([lnInst])", '[lnInst=""]'],
    [`[doName="${u}"]`],
    p ? [`[daName="${p}"]`] : [":not([daName])", '[daName=""]'],
    [`[fc="${y}"]`],
    v ? [`[ix="${v}"]`] : [":not([ix])", '[ix=""]']
  ];
  return re(
    k,
    [">"],
    [e],
    L,
    A,
    H,
    B,
    J,
    W,
    de,
    an
  ).map((kt) => kt.join("")).join(",");
}
function Ta(e) {
  if (!e.parentElement) return NaN;
  const t = I(e.parentElement), n = e.getAttribute("iedName"), i = e.getAttribute("intAddr"), r = Array.from(
    e.parentElement.querySelectorAll(`ExtRef[intAddr="${i}"]`)
  ).indexOf(e);
  if (i) return `${t}>${i}[${r}]`;
  const [
    o,
    a,
    l,
    d,
    u,
    p,
    f,
    b,
    y,
    v,
    k,
    L
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
  ].map((B) => e.getAttribute(B)), A = L ? `${f}:${L} ${b ?? ""}/${y ?? ""} ${v ?? ""} ${k ?? ""}` : "", H = `${n} ${o}/${a ?? ""} ${l} ${d ?? ""} ${u} ${p || ""}`;
  return `${t}>${A ? A + " " : ""}${H}${i ? `@${i}` : ""}`;
}
function _a(e, t) {
  const [n, i] = ae(t), r = V[e].parents.flatMap(
    (zt) => ce(zt, n).split(",")
  );
  if (i.endsWith("]")) {
    const [zt] = i.split("["), xo = [`[intAddr="${zt}"]`];
    return re(r, [">"], [e], xo).map(($o) => $o.join("")).join(",");
  }
  let o, a, l, d, u, p, f, b, y, v, k, L, A, H;
  !i.includes(":") && !i.includes("@") ? [o, a, l, d, u, p, f] = i.split(/[ /]/) : i.includes(":") && !i.includes("@") ? [
    b,
    y,
    v,
    k,
    L,
    A,
    o,
    a,
    l,
    d,
    u,
    p,
    f
  ] = i.split(/[ /:]/) : !i.includes(":") && i.includes("@") ? [o, a, l, d, u, p, f, H] = i.split(/[ /@]/) : [
    b,
    y,
    v,
    k,
    L,
    A,
    o,
    a,
    l,
    d,
    u,
    p,
    f,
    H
  ] = i.split(/[ /:@]/);
  const [
    B,
    J,
    W,
    de,
    an,
    kt,
    fo,
    bo,
    go,
    yo,
    vo,
    wo,
    Ao,
    So
  ] = [
    o ? [`[iedName="${o}"]`] : [":not([iedName])"],
    a ? [`[ldInst="${a}"]`] : [":not([ldInst])", '[ldInst=""]'],
    l ? [`[prefix="${l}"]`] : [":not([prefix])", '[prefix=""]'],
    d ? [`[lnClass="${d}"]`] : [":not([lnClass])"],
    u ? [`[lnInst="${u}"]`] : [":not([lnInst])", '[lnInst=""]'],
    p ? [`[doName="${p}"]`] : [":not([doName])"],
    f ? [`[daName="${f}"]`] : [":not([daName])", '[daName=""]'],
    b ? [`[serviceType="${b}"]`] : [":not([serviceType])", '[serviceType=""]'],
    y ? [`[srcCBName="${y}"]`] : [":not([srcCBName])", '[srcCBName=""]'],
    v ? [`[srcLDInst="${v}"]`] : [":not([srcLDInst])", '[srcLDInst=""]'],
    k ? [`[srcPrefix="${k}"]`] : [":not([srcPrefix])", '[srcPrefix=""]'],
    L ? [`[srcLNClass="${L}"]`] : [":not([srcLNClass])", '[srcLNClass=""]'],
    A ? [`[srcLNInst="${A}"]`] : [":not([srcLNInst])", '[srcLNInst=""]'],
    H ? [`[intAddr="${H}"]`] : [":not([intAddr])", '[intAddr=""]']
  ];
  return re(
    r,
    [">"],
    [e],
    B,
    J,
    W,
    de,
    an,
    kt,
    fo,
    bo,
    go,
    yo,
    vo,
    wo,
    Ao,
    So
  ).map((zt) => zt.join("")).join(",");
}
function Va(e) {
  const [t, n, i] = ["prefix", "lnClass", "inst"].map(
    (r) => e.getAttribute(r)
  );
  return `${I(e.parentElement)}>${t ?? ""} ${n} ${i}`;
}
function Pa(e, t) {
  const [n, i] = ae(t), r = V[e].parents.flatMap(
    (f) => ce(f, n).split(",")
  ), [o, a, l] = i.split(" ");
  if (!a) return Q;
  const [d, u, p] = [
    o ? [`[prefix="${o}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${a}"]`],
    [`[inst="${l}"]`]
  ];
  return re(
    r,
    [">"],
    [e],
    d,
    u,
    p
  ).map((f) => f.join("")).join(",");
}
function Ra(e) {
  const [t, n, i, r, o, a] = [
    "apRef",
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((l) => e.getAttribute(l));
  return `${I(e.parentElement)}>${n} ${t || ""} ${i}/${r ?? ""} ${o} ${a}`;
}
function qa(e, t) {
  const [n, i] = ae(t), r = V[e].parents.flatMap(
    (A) => ce(A, n).split(",")
  ), [o, a, l, d, u, p] = i.split(/[ /]/), [
    f,
    b,
    y,
    v,
    k,
    L
  ] = [
    o ? [`[iedName="${o}"]`] : [":not([iedName])", '[iedName=""]'],
    a ? [`[apRef="${a}"]`] : [":not([apRef])", '[apRef=""]'],
    l ? [`[ldInst="${l}"]`] : [":not([ldInst])", '[ldInst=""]'],
    d ? [`[prefix="${d}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${u}"]`],
    p ? [`[lnInst="${p}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return re(
    r,
    [">"],
    [e],
    f,
    b,
    y,
    v,
    k,
    L
  ).map((A) => A.join("")).join(",");
}
function ri(e) {
  const [t, n] = ["name", "ix"].map((i) => e.getAttribute(i));
  return `${I(e.parentElement)}>${t}${n ? "[" + n + "]" : ""}`;
}
function Sn(e, t, n = -1) {
  n === -1 && (n = t.split(">").length);
  const [i, r] = ae(t), [o, a, l, d] = r.match(/([^[]*)(\[([0-9]*)\])?/) ?? [];
  if (!a) return Q;
  if (n === 0) return `${e}[name="${a}"]`;
  const u = V[e].parents.flatMap(
    (b) => b === "SDI" ? Sn(b, i, n - 1).split(",") : ce(b, i).split(",")
  ).filter((b) => !b.startsWith(Q));
  if (u.length === 0) return Q;
  const [p, f] = [
    [`[name="${a}"]`],
    d ? [`[ix="${d}"]`] : ['[ix=""]', ":not([ix])"]
  ];
  return re(
    u,
    [">"],
    [e],
    p,
    f
  ).map((b) => b.join("")).join(",");
}
function Ma(e) {
  if (!e.parentElement) return NaN;
  const t = e.getAttribute("sGroup"), n = Array.from(e.parentElement.children).filter((i) => i.getAttribute("sGroup") === t).findIndex((i) => i.isSameNode(e));
  return `${I(e.parentElement)}>${t ? t + "." : ""} ${n}`;
}
function Oa(e, t) {
  const [n, i] = ae(t), [r, o] = i.split(" "), a = parseFloat(o), l = V[e].parents.flatMap(
    (p) => ce(p, n).split(",")
  ), [d, u] = [
    r ? [`[sGroup="${r}"]`] : [""],
    a ? [`:nth-child(${a + 1})`] : [""]
  ];
  return re(
    l,
    [">"],
    [e],
    d,
    u
  ).map((p) => p.join("")).join(",");
}
function Fa(e) {
  const [t, n] = ["iedName", "apName"].map(
    (i) => e.getAttribute(i)
  );
  return `${t} ${n}`;
}
function Ha(e, t) {
  const [n, i] = t.split(" ");
  return !n || !i ? Q : `${e}[iedName="${n}"][apName="${i}"]`;
}
function oi(e) {
  const [t, n] = ["ldInst", "cbName"].map(
    (i) => e.getAttribute(i)
  );
  return `${t} ${n}`;
}
function ai(e, t) {
  const [n, i] = t.split(" ");
  return !n || !i ? Q : `${e}[ldInst="${n}"][cbName="${i}"]`;
}
function Ba(e) {
  if (!e.parentElement) return NaN;
  if (!e.parentElement.querySelector('PhysConn[type="RedConn"]')) return NaN;
  const t = e.getAttribute("type");
  return e.parentElement.children.length > 1 && t !== "Connection" && t !== "RedConn" ? NaN : `${I(e.parentElement)}>${t}`;
}
function Wa(e, t) {
  const [n, i] = ae(t), [r, o] = [
    V[e].parents.flatMap(
      (a) => ce(a, n).split(",")
    ),
    i ? [`[type="${i}"]`] : [""]
  ];
  return re(r, [">"], [e], o).map((a) => a.join("")).join(",");
}
function Ga(e) {
  if (!e.parentElement) return NaN;
  const t = e.parentElement, n = e.getAttribute("type");
  if (t.tagName === "PhysConn")
    return `${I(e.parentElement)}>${n}`;
  const i = Array.from(e.parentElement.children).filter((r) => r.getAttribute("type") === n).findIndex((r) => r.isSameNode(e));
  return `${I(e.parentElement)}>${n} [${i}]`;
}
function ja(e, t) {
  const [n, i] = ae(t), [r] = i.split(" "), o = i && i.match(/\[([0-9]+)\]/) && i.match(/\[([0-9]+)\]/)[1] ? parseFloat(i.match(/\[([0-9]+)\]/)[1]) : NaN, [a, l, d] = [
    V[e].parents.flatMap(
      (u) => ce(u, n).split(",")
    ),
    [`[type="${r}"]`],
    o ? [`:nth-child(${o + 1})`] : [""]
  ];
  return re(
    a,
    [">"],
    [e],
    l,
    d
  ).map((u) => u.join("")).join(",");
}
function Ua(e) {
  return `${I(e.parentElement)}>${e.getAttribute("ord")}`;
}
function Ka(e, t) {
  const [n, i] = ae(t);
  return `${ce("EnumType", n)}>${e}[ord="${i}"]`;
}
function Za(e) {
  return `${I(e.parentElement)}>${e.getAttribute("type") || "8-MMS"}	${e.textContent}`;
}
function Xa(e, t) {
  const [n, i] = ae(t), [r, o] = i.split("	"), [a] = [
    V[e].parents.flatMap(
      (l) => ce(l, n).split(",")
    )
  ];
  return re(
    a,
    [">"],
    [e],
    [`[type="${r}"]`],
    [">"],
    [o]
  ).map((l) => l.join("")).join(",");
}
function Qa() {
  return "";
}
function Ya() {
  return ":root";
}
function M(e) {
  return e.parentElement.tagName === "SCL" ? e.getAttribute("name") : `${I(e.parentElement)}>${e.getAttribute("name")}`;
}
function R(e, t, n = -1) {
  n === -1 && (n = t.split(">").length);
  const [i, r] = ae(t);
  if (!r) return Q;
  if (n === 0) return `${e}[name="${r}"]`;
  const o = V[e].parents;
  if (!o) return Q;
  const a = o.flatMap(
    (l) => V[l].selector === V.Substation.selector ? R(l, i, n - 1).split(",") : ce(l, i).split(",")
  ).filter((l) => !l.startsWith(Q));
  return a.length === 0 ? Q : re(a, [">"], [e], [`[name="${r}"]`]).map((l) => l.join("")).join(",");
}
function S(e) {
  return I(e.parentElement).toString();
}
function x(e, t) {
  const n = V[e].parents;
  if (!n) return Q;
  const i = n.flatMap((r) => ce(r, t).split(",")).filter((r) => !r.startsWith(Q));
  return i.length === 0 ? Q : re(i, [">"], [e]).map((r) => r.join("")).join(",");
}
function Ht(e) {
  return `#${e.id}`;
}
function Bt(e, t) {
  const n = t.replace(/^#/, "");
  return n ? `${e}[id="${n}"]` : Q;
}
const Ui = [
  "TransformerWinding",
  "ConductingEquipment"
], Ki = [
  "GeneralEquipment",
  "PowerTransformer",
  ...Ui
], xn = ["Substation", "VoltageLevel", "Bay"], Zi = ["Process", "Line"], Xi = ["EqSubFunction", "EqFunction"], Ja = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...Ki,
  ...xn,
  ...Zi,
  ...Xi
], Qi = ["ConnectivityNode", ...Ja], es = ["GOOSESecurity", "SMVSecurity"], ts = ["SubNetwork", ...es, ...Qi], ns = ["BDA", "DA"], is = ["SampledValueControl", "GSEControl"], rs = ["LogControl", "ReportControl"], os = [...is, ...rs], as = ["GSE", "SMV"], ss = [
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
  ...os,
  ...as,
  ...ns
], ht = ["LN0", "LN"], cs = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], ls = ["Subject", "IssuerName"], ds = ["MinTime", "MaxTime"], us = ["LNodeType", "DOType", "DAType", "EnumType"], ms = [
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
], ps = ["DynDataSet", "ConfDataSet"], hs = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...ps
], fs = ["ConfLogControl", "ConfSigRef"], bs = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], gs = ["SCL", ...ts, ...ss, ...us], Yi = [
  ...gs,
  ...cs,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...ls,
  ...ds,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...ht,
  ...ms,
  "DynAssociation",
  "SettingGroups",
  ...hs,
  ...fs,
  ...bs,
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
], ys = new Set(Yi);
function Jt(e) {
  return ys.has(e);
}
const en = ["Text", "Private"], Ze = [...en], X = [...en], Wt = [...en], si = [...X, "Val"], Ji = [...Ze, "LNode"], Xe = [...Ji], $n = [...Xe], ln = [
  ...Xe,
  "PowerTransformer",
  "GeneralEquipment"
], ci = [
  ...$n,
  "Terminal"
], li = [...X, "Address"], er = [...Ze], di = [...er, "IEDName"], ui = [
  ...X,
  "DataSet",
  "ReportControl",
  "LogControl",
  "DOI",
  "Inputs",
  "Log"
], mi = [
  ...Xe,
  "GeneralEquipment",
  "Function"
], pi = [...er, "TrgOps"], hi = [
  ...Xe,
  "GeneralEquipment",
  "EqSubFunction"
], V = {
  AccessControl: {
    identity: S,
    selector: x,
    parents: ["LDevice"],
    children: []
  },
  AccessPoint: {
    identity: M,
    selector: R,
    parents: ["IED"],
    children: [
      ...Ze,
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
    selector: x,
    parents: ["ConnectedAP", "GSE", "SMV"],
    children: ["P"]
  },
  Association: {
    identity: Ca,
    selector: Ea,
    parents: ["Server"],
    children: []
  },
  Authentication: {
    identity: S,
    selector: x,
    parents: ["Server"],
    children: []
  },
  BDA: {
    identity: M,
    selector: R,
    parents: ["DAType"],
    children: [...si]
  },
  BitRate: {
    identity: S,
    selector: x,
    parents: ["SubNetwork"],
    children: []
  },
  Bay: {
    identity: M,
    selector: R,
    parents: ["VoltageLevel"],
    children: [
      ...ln,
      "ConductingEquipment",
      "ConnectivityNode",
      "Function"
    ]
  },
  ClientLN: {
    identity: Ra,
    selector: qa,
    parents: ["RptEnabled"],
    children: []
  },
  ClientServices: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: ["TimeSyncProt", "McSecurity"]
  },
  CommProt: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  Communication: {
    identity: S,
    selector: x,
    parents: ["SCL"],
    children: [...X, "SubNetwork"]
  },
  ConductingEquipment: {
    identity: M,
    selector: R,
    parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
    children: [
      ...ci,
      "EqFunction",
      "SubEquipment"
    ]
  },
  ConfDataSet: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  ConfLdName: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  ConfLNs: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  ConfLogControl: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  ConfReportControl: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  ConfSG: {
    identity: S,
    selector: x,
    parents: ["SettingGroups"],
    children: []
  },
  ConfSigRef: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  ConnectedAP: {
    identity: Fa,
    selector: Ha,
    parents: ["SubNetwork"],
    children: [...X, "Address", "GSE", "SMV", "PhysConn"]
  },
  ConnectivityNode: {
    identity: M,
    selector: R,
    parents: ["Bay", "Line"],
    children: [...Ji]
  },
  DA: {
    identity: M,
    selector: R,
    parents: ["DOType"],
    children: [...si]
  },
  DAI: {
    identity: ri,
    selector: Sn,
    parents: ["DOI", "SDI"],
    children: [...X, "Val"]
  },
  DAType: {
    identity: Ht,
    selector: Bt,
    parents: ["DataTypeTemplates"],
    children: [...Wt, "BDA", "ProtNs"]
  },
  DO: {
    identity: M,
    selector: R,
    parents: ["LNodeType"],
    children: [...X]
  },
  DOI: {
    identity: M,
    selector: R,
    parents: [...ht],
    children: [...X, "SDI", "DAI"]
  },
  DOType: {
    identity: Ht,
    selector: Bt,
    parents: ["DataTypeTemplates"],
    children: [...Wt, "SDO", "DA"]
  },
  DataObjectDirectory: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  DataSet: {
    identity: M,
    selector: R,
    parents: [...ht],
    children: [...Ze, "FCDA"]
  },
  DataSetDirectory: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  DataTypeTemplates: {
    identity: S,
    selector: x,
    parents: ["SCL"],
    children: ["LNodeType", "DOType", "DAType", "EnumType"]
  },
  DynAssociation: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  DynDataSet: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  EnumType: {
    identity: Ht,
    selector: Bt,
    parents: ["DataTypeTemplates"],
    children: [...Wt, "EnumVal"]
  },
  EnumVal: {
    identity: Ua,
    selector: Ka,
    parents: ["EnumType"],
    children: []
  },
  EqFunction: {
    identity: M,
    selector: R,
    parents: [
      "GeneralEquipment",
      "TapChanger",
      "TransformerWinding",
      "PowerTransformer",
      "SubEquipment",
      "ConductingEquipment"
    ],
    children: [...hi]
  },
  EqSubFunction: {
    identity: M,
    selector: R,
    parents: ["EqSubFunction", "EqFunction"],
    children: [...hi]
  },
  ExtRef: {
    identity: Ta,
    selector: _a,
    parents: ["Inputs"],
    children: []
  },
  FCDA: {
    identity: za,
    selector: La,
    parents: ["DataSet"],
    children: []
  },
  FileHandling: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  Function: {
    identity: M,
    selector: R,
    parents: ["Bay", "VoltageLevel", "Substation", "Process", "Line"],
    children: [
      ...Xe,
      "SubFunction",
      "GeneralEquipment",
      "ConductingEquipment"
    ]
  },
  GeneralEquipment: {
    identity: M,
    selector: R,
    parents: [
      "SubFunction",
      "Function",
      ...Zi,
      ...Xi,
      ...xn
    ],
    children: [...$n, "EqFunction"]
  },
  GetCBValues: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  GetDataObjectDefinition: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  GetDataSetValue: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  GetDirectory: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  GOOSE: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  GOOSESecurity: {
    identity: M,
    selector: R,
    parents: ["AccessPoint"],
    children: [...Ze, "Subject", "IssuerName"]
  },
  GSE: {
    identity: oi,
    selector: ai,
    parents: ["ConnectedAP"],
    children: [...li, "MinTime", "MaxTime"]
  },
  GSEDir: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  GSEControl: {
    identity: M,
    selector: R,
    parents: ["LN0"],
    children: [...di, "Protocol"]
  },
  GSESettings: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  GSSE: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  Header: {
    identity: S,
    selector: x,
    parents: ["SCL"],
    children: ["Text", "History"]
  },
  History: {
    identity: S,
    selector: x,
    parents: ["Header"],
    children: ["Hitem"]
  },
  Hitem: {
    identity: va,
    selector: wa,
    parents: ["History"],
    children: []
  },
  IED: {
    identity: M,
    selector: R,
    parents: ["SCL"],
    children: [...X, "Services", "AccessPoint", "KDC"]
  },
  IEDName: {
    identity: Da,
    selector: ka,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  Inputs: {
    identity: S,
    selector: x,
    parents: [...ht],
    children: [...X, "ExtRef"]
  },
  IssuerName: {
    identity: S,
    selector: x,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  KDC: {
    identity: xa,
    selector: $a,
    parents: ["IED"],
    children: []
  },
  LDevice: {
    identity: Na,
    selector: Ia,
    parents: ["Server"],
    children: [...X, "LN0", "LN", "AccessControl"]
  },
  LN: {
    identity: Va,
    selector: Pa,
    parents: ["AccessPoint", "LDevice"],
    children: [...ui]
  },
  LN0: {
    identity: S,
    selector: x,
    parents: ["LDevice"],
    children: [
      ...ui,
      "GSEControl",
      "SampledValueControl",
      "SettingControl"
    ]
  },
  LNode: {
    identity: Aa,
    selector: Sa,
    parents: [...Qi],
    children: [...X]
  },
  LNodeType: {
    identity: Ht,
    selector: Bt,
    parents: ["DataTypeTemplates"],
    children: [...Wt, "DO"]
  },
  Line: {
    identity: M,
    selector: R,
    parents: ["Process", "SCL"],
    children: [
      ...mi,
      "Voltage",
      "ConductingEquipment"
    ]
  },
  Log: {
    identity: M,
    selector: R,
    parents: [...ht],
    children: [...X]
  },
  LogControl: {
    identity: M,
    selector: R,
    parents: [...ht],
    children: [...pi]
  },
  LogSettings: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  MaxTime: {
    identity: S,
    selector: x,
    parents: ["GSE"],
    children: []
  },
  McSecurity: {
    identity: S,
    selector: x,
    parents: ["GSESettings", "SMVSettings", "ClientServices"],
    children: []
  },
  MinTime: {
    identity: S,
    selector: x,
    parents: ["GSE"],
    children: []
  },
  NeutralPoint: {
    identity: ni,
    selector: ii,
    parents: ["TransformerWinding"],
    children: [...X]
  },
  OptFields: {
    identity: S,
    selector: x,
    parents: ["ReportControl"],
    children: []
  },
  P: {
    identity: Ga,
    selector: ja,
    parents: ["Address", "PhysConn"],
    children: []
  },
  PhysConn: {
    identity: Ba,
    selector: Wa,
    parents: ["ConnectedAP"],
    children: [...X, "P"]
  },
  PowerTransformer: {
    identity: M,
    selector: R,
    parents: [...xn],
    children: [
      ...$n,
      "TransformerWinding",
      "SubEquipment",
      "EqFunction"
    ]
  },
  Private: {
    identity: () => NaN,
    selector: () => Q,
    parents: [],
    children: []
  },
  Process: {
    identity: M,
    selector: R,
    parents: ["Process", "SCL"],
    children: [
      ...mi,
      "ConductingEquipment",
      "Substation",
      "Line",
      "Process"
    ]
  },
  ProtNs: {
    identity: Za,
    selector: Xa,
    parents: ["DAType", "DA"],
    children: []
  },
  Protocol: {
    identity: S,
    selector: x,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  ReadWrite: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  RedProt: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  ReportControl: {
    identity: M,
    selector: R,
    parents: [...ht],
    children: [...pi, "OptFields", "RptEnabled"]
  },
  ReportSettings: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  RptEnabled: {
    identity: S,
    selector: x,
    parents: ["ReportControl"],
    children: [...X, "ClientLN"]
  },
  SamplesPerSec: {
    identity: S,
    selector: x,
    parents: ["SMVSettings"],
    children: []
  },
  SampledValueControl: {
    identity: M,
    selector: R,
    parents: ["LN0"],
    children: [...di, "SmvOpts"]
  },
  SecPerSamples: {
    identity: S,
    selector: x,
    parents: ["SMVSettings"],
    children: []
  },
  SCL: {
    identity: Qa,
    selector: Ya,
    parents: [],
    children: [
      ...en,
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
    identity: ri,
    selector: Sn,
    parents: ["DOI", "SDI"],
    children: [...X, "SDI", "DAI"]
  },
  SDO: {
    identity: M,
    selector: R,
    parents: ["DOType"],
    children: [...Ze]
  },
  Server: {
    identity: S,
    selector: x,
    parents: ["AccessPoint"],
    children: [
      ...X,
      "Authentication",
      "LDevice",
      "Association"
    ]
  },
  ServerAt: {
    identity: S,
    selector: x,
    parents: ["AccessPoint"],
    children: [...X]
  },
  Services: {
    identity: S,
    selector: x,
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
    selector: x,
    parents: ["Services"],
    children: []
  },
  SettingControl: {
    identity: S,
    selector: x,
    parents: ["LN0"],
    children: [...X]
  },
  SettingGroups: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: ["SGEdit", "ConfSG"]
  },
  SGEdit: {
    identity: S,
    selector: x,
    parents: ["SettingGroups"],
    children: []
  },
  SmpRate: {
    identity: S,
    selector: x,
    parents: ["SMVSettings"],
    children: []
  },
  SMV: {
    identity: oi,
    selector: ai,
    parents: ["ConnectedAP"],
    children: [...li]
  },
  SmvOpts: {
    identity: S,
    selector: x,
    parents: ["SampledValueControl"],
    children: []
  },
  SMVsc: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  SMVSecurity: {
    identity: M,
    selector: R,
    parents: ["AccessPoint"],
    children: [...Ze, "Subject", "IssuerName"]
  },
  SMVSettings: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: ["SmpRate", "SamplesPerSec", "SecPerSamples", "McSecurity"]
  },
  SubEquipment: {
    identity: M,
    selector: R,
    parents: [
      "TapChanger",
      "PowerTransformer",
      "ConductingEquipment",
      "TransformerWinding",
      ...Ui
    ],
    children: [...Xe, "EqFunction"]
  },
  SubFunction: {
    identity: M,
    selector: R,
    parents: ["SubFunction", "Function"],
    children: [
      ...Xe,
      "GeneralEquipment",
      "ConductingEquipment",
      "SubFunction"
    ]
  },
  SubNetwork: {
    identity: M,
    selector: R,
    parents: ["Communication"],
    children: [...Ze, "BitRate", "ConnectedAP"]
  },
  Subject: {
    identity: S,
    selector: x,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  Substation: {
    identity: M,
    selector: R,
    parents: ["SCL"],
    children: [...ln, "VoltageLevel", "Function"]
  },
  SupSubscription: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  TapChanger: {
    identity: M,
    selector: R,
    parents: ["TransformerWinding"],
    children: [...Xe, "SubEquipment", "EqFunction"]
  },
  Terminal: {
    identity: ni,
    selector: ii,
    parents: [...Ki],
    children: [...X]
  },
  Text: {
    identity: S,
    selector: x,
    parents: Yi.filter((e) => e !== "Text" && e !== "Private"),
    children: []
  },
  TimerActivatedControl: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  TimeSyncProt: {
    identity: S,
    selector: x,
    parents: ["Services", "ClientServices"],
    children: []
  },
  TransformerWinding: {
    identity: M,
    selector: R,
    parents: ["PowerTransformer"],
    children: [
      ...ci,
      "TapChanger",
      "NeutralPoint",
      "EqFunction",
      "SubEquipment"
    ]
  },
  TrgOps: {
    identity: S,
    selector: x,
    parents: ["ReportControl"],
    children: []
  },
  Val: {
    identity: Ma,
    selector: Oa,
    parents: ["DAI", "DA", "BDA"],
    children: []
  },
  ValueHandling: {
    identity: S,
    selector: x,
    parents: ["Services"],
    children: []
  },
  Voltage: {
    identity: S,
    selector: x,
    parents: ["VoltageLevel"],
    children: []
  },
  VoltageLevel: {
    identity: M,
    selector: R,
    parents: ["Substation"],
    children: [...ln, "Voltage", "Bay", "Function"]
  }
};
function vs(e, t) {
  const n = e.tagName, i = Array.from(e.children);
  if (n === "Services" || n === "SettingGroups" || !Jt(n))
    return i.find((l) => l.tagName === t) ?? null;
  const r = V[n]?.children ?? [];
  let o = r.findIndex((l) => l === t);
  if (o < 0) return null;
  let a;
  for (; o < r.length && !a; )
    a = i.find((l) => l.tagName === r[o]), o++;
  return a ?? null;
}
function ce(e, t) {
  return typeof t != "string" ? Q : Jt(e) ? V[e].selector(e, t) : e;
}
function Y(e, t, n) {
  if (typeof n != "string" || !Jt(t)) return null;
  const i = e.querySelector(V[t].selector(t, n));
  return i === null || q(i) ? i : Array.from(
    e.querySelectorAll(V[t].selector(t, n))
  ).find(q) ?? null;
}
function I(e) {
  if (e === null) return NaN;
  if (e.closest("Private")) return NaN;
  const t = e.tagName;
  return Jt(t) ? V[t].identity(e) : NaN;
}
Ti((e) => (t) => {
  Object.keys(e).length ? t.setValue(e) : t.setValue("");
});
const Rt = {
  normalizedString: "([ -~]|[]|[ -퟿]|[-�])*",
  decimal: "[+\\-]?[0-9]+(([.][0-9]*)?|([.][0-9]+))",
  unsigned: "[+]?[0-9]+(([.][0-9]*)?|([.][0-9]+))"
};
function ws(e, t) {
  return typeof e == "string" && typeof t == "string" ? e.localeCompare(t) : typeof e == "object" && typeof t == "string" ? (e.getAttribute("name") ?? "").localeCompare(t) : typeof e == "string" && typeof t == "object" ? e.localeCompare(t.getAttribute("name")) : typeof e == "object" && typeof t == "object" ? (e.getAttribute("name") ?? "").localeCompare(
    t.getAttribute("name") ?? ""
  ) : 0;
}
function re(...e) {
  return e.reduce(
    (t, n) => t.flatMap((i) => n.map((r) => [i, r].flat())),
    [[]]
  );
}
function tr(e, t = /* @__PURE__ */ new WeakSet()) {
  if (t.has(e)) return 1 / 0;
  switch (e?.constructor) {
    case Object:
    case Array:
      return t.add(e), 1 + Math.max(
        -1,
        ...Object.values(e).map((n) => tr(n, t))
      );
    default:
      return 0;
  }
}
function As(e) {
  if (e.tagName !== "ExtRef" || e.closest("Private")) return [];
  const [t, n, i, r, o, a, l] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName"
  ].map((u) => e.getAttribute(u)), d = Array.from(e.ownerDocument.getElementsByTagName("IED")).find(
    (u) => u.getAttribute("name") === t && !u.closest("Private")
  );
  return d ? Array.from(d.getElementsByTagName("FCDA")).filter((u) => !u.closest("Private")).filter(
    (u) => (u.getAttribute("ldInst") ?? "") === (n ?? "") && (u.getAttribute("prefix") ?? "") === (i ?? "") && (u.getAttribute("lnClass") ?? "") === (r ?? "") && (u.getAttribute("lnInst") ?? "") === (o ?? "") && (u.getAttribute("doName") ?? "") === (a ?? "") && (u.getAttribute("daName") ?? "") === (l ?? "")
  ) : [];
}
const Ss = {
  GOOSE: ["GSEControl"],
  SMV: ["SampledValueControl"],
  Report: ["ReportControl"],
  NONE: ["LogControl", "GSEControl", "SampledValueControl", "ReportControl"]
};
function nr(e) {
  const t = As(e), n = Ss[e.getAttribute("serviceType") ?? "NONE"] ?? [];
  return new Set(
    t.flatMap((r) => {
      const o = r.parentElement, a = o.getAttribute("name") ?? "", l = o.parentElement;
      return n.flatMap((d) => Array.from(l.getElementsByTagName(d))).filter((d) => d.getAttribute("datSet") === a);
    })
  );
}
function q(e) {
  return !e.closest("Private");
}
const xs = 99, $s = Array(xs).fill(1).map((e, t) => `${t + 1}`);
function ir(e) {
  const t = /* @__PURE__ */ new Map();
  return (n) => {
    if (!t.has(n)) {
      const i = new Set(
        $(e, "LNode").filter((r) => r.getAttribute("lnClass") === n).map((r) => r.getAttribute("lnInst"))
      );
      t.set(n, () => {
        const r = $s.find((o) => !i.has(o));
        return r && i.add(r), r;
      });
    }
    return t.get(n)();
  };
}
function Cs(e, t) {
  const n = {};
  return Array.from(e.attributes).forEach((i) => {
    n[i.name] = i.value;
  }), { element: e, oldAttributes: n, newAttributes: t };
}
function K(e, t = "user", n) {
  return new CustomEvent("editor-action", {
    bubbles: !0,
    composed: !0,
    ...n,
    detail: { action: e, initiator: t, ...n?.detail }
  });
}
const rr = T`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H11V15H15V17H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Es = T`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M11,7H13A2,2 0 0,1 15,9V17H13V13H11V17H9V9A2,2 0 0,1 11,7M11,9V11H13V9H11M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />
</svg>`, Ns = T`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M11,7H13A2,2 0 0,1 15,9V10H13V9H11V15H13V14H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Is = T`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H15V9H11V11H14V13H11V17H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Ds = T`<svg  viewBox="0 0 24 24">
    <path fill="currentColor" d="M11,7H15V9H11V15H13V11H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, ks = T`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M14,7V9H13V15H14V17H10V15H11V9H10V7H14M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, zs = T`<svg viewBox="0 0 24 24">
<path fill="currentColor" d="M9,7H11V10.33L13,7H15L12,12L15,17H13L11,13.67V17H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Ls = T`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H15A2,2 0 0,1 17,9V17H15V9H13V16H11V9H9V17H7V9A2,2 0 0,1 9,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Ts = T`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H13A2,2 0 0,1 15,9V11A2,2 0 0,1 13,13H11V17H9V7M11,9V11H13V9H11M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, _s = T`<svg  viewBox="0 0 24 24">
    <path fill="currentColor" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,7H13A2,2 0 0,1 15,9V15A2,2 0 0,1 13,17V19H11V17A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M11,9V15H13V9H11Z" />
</svg>`, Vs = T`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H13A2,2 0 0,1 15,9V11C15,11.84 14.5,12.55 13.76,12.85L15,17H13L11.8,13H11V17H9V7M11,9V11H13V9H11M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,16.41 7.58,20 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Ps = T`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Rs = T`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H15V9H13V17H11V9H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, qs = T`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H11L12,9.5L13,7H15L13,12L15,17H13L12,14.5L11,17H9L11,12L9,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Ms = T`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H11L12,10L13,7H15L13,13V17H11V13L9,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, Os = T`<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H15V9L11,15H15V17H9V15L13,9H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`, or = {
  IED: [
    {
      attributeName: "iedName",
      filter: pt("Association")
    },
    {
      attributeName: "iedName",
      filter: pt("ClientLN")
    },
    {
      attributeName: "iedName",
      filter: pt("ConnectedAP")
    },
    {
      attributeName: "iedName",
      filter: pt("ExtRef")
    },
    {
      attributeName: "iedName",
      filter: pt("KDC")
    },
    {
      attributeName: "iedName",
      filter: pt("LNode")
    },
    {
      attributeName: null,
      filter: dn("GSEControl > IEDName")
    },
    {
      attributeName: null,
      filter: dn("SampledValueControl > IEDName")
    },
    {
      attributeName: null,
      filter: dn("LN > DOI > DAI > Val")
    }
  ],
  Substation: [
    {
      attributeName: "substationName",
      filter: pt("Terminal")
    }
  ],
  VoltageLevel: [
    {
      attributeName: "voltageLevelName",
      filter: fi("Terminal", {
        Substation: "substationName"
      })
    }
  ],
  Bay: [
    {
      attributeName: "bayName",
      filter: fi("Terminal", {
        Substation: "substationName",
        VoltageLevel: "voltageLevelName"
      })
    }
  ]
};
function pt(e) {
  return function(n, i, r) {
    return `${e}[${i}="${r}"]`;
  };
}
function dn(e) {
  return function() {
    return `${e}`;
  };
}
function fi(e, t) {
  return function(i, r, o) {
    return `${e}${Object.entries(t).map(([a, l]) => {
      const d = i.closest(a);
      if (d && d.hasAttribute("name")) {
        const u = d.getAttribute("name");
        return `[${l}="${u}"]`;
      }
      return null;
    }).join("")}[${r}="${o}"]`;
  };
}
function Fs(e, t, n) {
  const i = e.cloneNode(!1);
  return i.setAttribute(t, n), i;
}
function ar(e, t) {
  const n = e.cloneNode(!1);
  return n.textContent = t, n;
}
function Pn(e, t, n) {
  if (t === null || t === n)
    return [];
  const i = or[e.tagName];
  if (i === void 0)
    return [];
  const r = [];
  return i.forEach((o) => {
    const a = o.filter(e, o.attributeName, t);
    o.attributeName ? Array.from(e.ownerDocument.querySelectorAll(`${a}`)).filter(q).forEach((l) => {
      const d = Fs(
        l,
        o.attributeName,
        n
      );
      r.push({ old: { element: l }, new: { element: d } });
    }) : Array.from(e.ownerDocument.querySelectorAll(`${a}`)).filter((l) => l.textContent === t).filter(q).forEach((l) => {
      const d = ar(l, n);
      r.push({ old: { element: l }, new: { element: d } });
    });
  }), e.tagName === "IED" && r.push(...Hs(e, t, n)), r;
}
function Hs(e, t, n) {
  const i = [];
  return e.ownerDocument.querySelectorAll("IED").forEach((o) => {
    const a = Array.from(
      o.querySelectorAll(
        ':scope > AccessPoint > Server > LDevice > LN[lnClass="LGOS"] > DOI > DAI > Val, :scope > AccessPoint > Server > LDevice > LN[lnClass="LSVS"] > DOI > DAI > Val'
      )
    );
    if (a.length === 0) return;
    const l = o.querySelector(
      `:scope > AccessPoint > Server > LDevice > LN0 > Inputs > ExtRef[iedName="${t}"][srcCBName]`
    ), d = l?.getAttribute("srcLDInst") + "/" + l?.getAttribute("srcLNClass") + "." + l?.getAttribute("srcCBName");
    for (let u of a)
      if (t + d === u.textContent.trim()) {
        const p = ar(
          u,
          n + d
        );
        i.push({
          old: { element: u },
          new: { element: p }
        });
        break;
      }
  }), i;
}
function sr(e) {
  const t = ya(e) ?? null;
  if (t === null)
    return [];
  const n = or[e.tagName];
  if (n === void 0)
    return [];
  const i = [];
  return n.forEach((r) => {
    const o = r.filter(e, r.attributeName, t);
    r.attributeName ? Array.from(e.ownerDocument.querySelectorAll(`${o}`)).filter(q).forEach((a) => {
      i.push({ old: { parent: a.parentElement, element: a } });
    }) : Array.from(e.ownerDocument.querySelectorAll(`${o}`)).filter((a) => a.textContent === t).filter(q).forEach((a) => {
      a.parentElement && i.push({
        old: {
          parent: a.parentElement.parentElement,
          element: a.parentElement
        }
      });
    });
  }), i;
}
function cr(e) {
  return (t) => {
    const n = g(t.find((o) => o.label === "name")), i = g(t.find((o) => o.label === "desc"));
    if (n === e.getAttribute("name") && i === e.getAttribute("desc"))
      return [];
    const r = O(e, { name: n, desc: i });
    return [{ old: { element: e }, new: { element: r } }];
  };
}
function Bs(e, t) {
  return (n) => {
    const i = g(n.find((d) => d.label === "name")), r = e.getAttribute("name"), o = g(n.find((d) => d.label === "desc"));
    if (i === r && o === e.getAttribute("desc"))
      return [];
    const a = O(e, { name: i, desc: o }), l = {
      actions: [],
      title: s(t, { name: i })
    };
    return l.actions.push({
      old: { element: e },
      new: { element: a }
    }), l.actions.push(...Pn(e, r, i)), l.actions.length ? [l] : [];
  };
}
function lr(e, t) {
  return (n) => {
    const i = {};
    if (Ws(i, e, n), Object.keys(i).length == 0)
      return [];
    Gs(e, i);
    const r = g(n.find((a) => a.label === "name")), o = {
      actions: [],
      title: s(t, { name: r })
    };
    return o.actions.push(Cs(e, i)), o.actions.push(
      ...Pn(e, e.getAttribute("name"), r)
    ), o.actions.length ? [o] : [];
  };
}
function Ws(e, t, n) {
  const i = g(n.find((o) => o.label === "name")), r = g(n.find((o) => o.label === "desc"));
  i !== t.getAttribute("name") && (e.name = i), r !== t.getAttribute("desc") && (e.desc = r);
}
function Gs(e, t) {
  const n = Object.keys(t);
  return Array.from(e.attributes).filter((i) => !n.includes(i.name)).forEach((i) => {
    t[i.name] = i.value;
  }), t;
}
function dr(e, t) {
  return [
    C`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${s("bay.wizard.nameHelper")}"
      required
      validationMessage="${s("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    C`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${s("bay.wizard.descHelper")}"
    ></wizard-textfield>`
  ];
}
function js(e) {
  return (t) => {
    const n = g(t.find((a) => a.label === "name")), i = g(t.find((a) => a.label === "desc")), r = z(e.ownerDocument, "Bay", {
      name: n,
      desc: i
    });
    return [{
      new: {
        parent: e,
        element: r
      }
    }];
  };
}
function Us(e) {
  return [
    {
      title: s("bay.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "",
        label: s("add"),
        action: js(e)
      },
      content: dr("", "")
    }
  ];
}
function Ks(e) {
  return [
    {
      title: s("bay.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: s("save"),
        action: Bs(
          e,
          "bay.action.updateBay"
        )
      },
      content: dr(
        e.getAttribute("name"),
        e.getAttribute("desc")
      )
    }
  ];
}
const Cn = {
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
function Zs(e) {
  if (!e) return null;
  const [t, n, i, r, o] = [
    "lnInst",
    "lnClass",
    "iedName",
    "ldInst",
    "prefix"
  ].map((p) => e?.getAttribute(p)), a = [`IED[name="${i}"]`, "IED"], l = ["AccessPoint > Server"], d = [
    `LDevice[inst="${r}"] > LN[inst="${t}"][lnClass="${n}"]`
  ], u = o && o !== "" ? [`[prefix="${o}"]`] : ['[prefix=""]', ":not(prefix)"];
  return e.ownerDocument.querySelector(
    re(
      a,
      [" > "],
      l,
      [" > "],
      d,
      u
    ).map((p) => p.join("")).join(",")
  );
}
function ur(e) {
  const t = e?.ownerDocument, n = e.getAttribute("lnType"), i = e.getAttribute("lnClass"), r = t.querySelector(
    `DataTypeTemplates > LNodeType[id="${n}"][lnClass="${i}"] > DO[name="SwTyp"]`
  );
  if (r) {
    const o = r.getAttribute("type");
    return t.querySelector(
      `DataTypeTemplates > DOType[id="${o}"] > DA[name="stVal"] > Val`
    )?.innerHTML.trim();
  }
}
function Xs(e) {
  const t = e.querySelector(
    'DOI[name="SwTyp"] > DAI[name="stVal"]'
  );
  return t ? t.querySelector("Val")?.innerHTML.trim() : ur(e);
}
function Qs(e) {
  return Array.from(e.querySelectorAll("Terminal")).some(
    (t) => t.getAttribute("cNodeName") === "grounded"
  );
}
function Ys(e) {
  const t = e.querySelector('LNode[lnClass="XSWI"]'), n = Zs(t);
  let i;
  return n ? i = Xs(n) : t && (i = ur(t)), i ? ["Earthing Switch", "High Speed Earthing Switch"].includes(i) : !1;
}
function mr(e) {
  return e.getAttribute("type") === "DIS" && (Qs(e) || Ys(e)) ? "ERS" : e.getAttribute("type") ?? "";
}
function Js(e) {
  return Cn[mr(e)] ?? s("conductingequipment.unknownType");
}
function ec(e, t) {
  return e === "create" ? c`<mwc-select
        style="--mdc-menu-max-height: 196px;"
        required
        label="type"
        helper="${s("conductingequipment.wizard.typeHelper")}"
        validationMessage="${s("textfield.required")}"
      >
        ${Object.keys(Cn).map(
    (n) => c`<mwc-list-item value="${n}">${Cn[n]}</mwc-list-item>`
  )}
      </mwc-select>` : c`<mwc-select
        label="type"
        helper="${s("conductingequipment.wizard.typeHelper")}"
        validationMessage="${s("textfield.required")}"
        disabled
      >
        <mwc-list-item selected value="0">${t}</mwc-list-item>
      </mwc-select>`;
}
function pr(e, t, n, i, r) {
  return [
    ec(n, i),
    c`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${s("conductingequipment.wizard.nameHelper")}"
      required
      validationMessage="${s("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${r}
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${s("conductingequipment.wizard.descHelper")}"
    ></wizard-textfield>`
  ];
}
function tc(e) {
  return (t) => {
    const n = g(t.find((k) => k.label === "name")), i = g(t.find((k) => k.label === "desc")), r = g(t.find((k) => k.label === "type")), o = r === "ERS" ? "DIS" : r, a = z(e.ownerDocument, "ConductingEquipment", {
      name: n,
      type: o,
      desc: i
    });
    if (r !== "ERS") return [{ new: { parent: e, element: a } }];
    const l = e.closest("VoltageLevel")?.querySelector('ConnectivityNode[name="grounded"]'), d = l ? l.closest("Substation")?.getAttribute("name") ?? null : e.closest("Substation")?.getAttribute("name") ?? null, u = l ? l.closest("VoltageLevel")?.getAttribute("name") ?? null : e.closest("VoltageLevel")?.getAttribute("name") ?? null, p = l ? l.closest("Bay")?.getAttribute("name") ?? null : e.closest("Bay")?.getAttribute("name") ?? null, f = p && u && d ? d + "/" + u + "/" + p + "/grounded" : null;
    a.appendChild(
      z(e.ownerDocument, "Terminal", {
        name: "T1",
        cNodeName: "grounded",
        substationName: d,
        voltageLevelName: u,
        bayName: p,
        connectivityNode: f
      })
    );
    const b = {
      new: {
        parent: e,
        element: a
      }
    };
    if (l) return [b];
    const y = z(
      e.ownerDocument,
      "ConnectivityNode",
      {
        name: "grounded",
        pathName: f
      }
    );
    return [b, {
      new: {
        parent: e,
        element: y
      }
    }];
  };
}
function hr(e, t) {
  return Array.from(e.querySelectorAll("ConductingEquipment")).filter(q).map((n) => n.getAttribute("name") ?? "").filter((n) => t && n !== t);
}
function nc(e) {
  const t = hr(e);
  return [
    {
      title: s("conductingequipment.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "add",
        label: s("add"),
        action: tc(e)
      },
      content: pr(
        "",
        "",
        "create",
        "",
        t
      )
    }
  ];
}
function ic(e) {
  const t = hr(
    e.parentNode,
    e.getAttribute("name")
  );
  return [
    {
      title: s("conductingequipment.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: s("save"),
        action: cr(e)
      },
      content: pr(
        e.getAttribute("name"),
        e.getAttribute("desc"),
        "edit",
        Js(e),
        t
      )
    }
  ];
}
function rc(e, t, n) {
  return [
    c`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${s("connectivitynode.wizard.nameHelper")}"
      required
      validationMessage="${s("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${n}
      readonly
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="pathName"
      .maybeValue=${t}
      helper="${s("connectivitynode.wizard.pathNameHelper")}"
      required
      validationMessage="${s("textfield.required")}"
      readonly
    ></wizard-textfield>`
  ];
}
function oc(e) {
  const t = Array.from(
    e.parentNode.querySelectorAll("ConnectivityNode")
  ).filter(q).map((n) => n.getAttribute("name") ?? "").filter((n) => n !== e.getAttribute("name"));
  return [
    {
      title: s("connectivitynode.wizard.title.edit"),
      element: e,
      content: rc(
        e.getAttribute("name"),
        e.getAttribute("pathName"),
        t
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
const bi = /* @__PURE__ */ new WeakMap(), gi = 2147483647, ac = Xt((...e) => (t) => {
  let n = bi.get(t);
  n === void 0 && (n = {
    lastRenderedIndex: gi,
    values: []
  }, bi.set(t, n));
  const i = n.values;
  let r = i.length;
  n.values = e;
  for (let o = 0; o < e.length && !(o > n.lastRenderedIndex); o++) {
    const a = e[o];
    if (qi(a) || typeof a.then != "function") {
      t.setValue(a), n.lastRenderedIndex = o;
      break;
    }
    o < r && a === i[o] || (n.lastRenderedIndex = gi, r = 0, Promise.resolve(a).then((l) => {
      const d = n.values.indexOf(a);
      d > -1 && d < n.lastRenderedIndex && (n.lastRenderedIndex = d, t.setValue(l), t.commit());
    }));
  }
});
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class qt extends se {
  constructor() {
    super(...arguments), this.left = !1, this.graphic = "control";
  }
  render() {
    const t = {
      "mdc-deprecated-list-item__graphic": this.left,
      "mdc-deprecated-list-item__meta": !this.left
    }, n = this.renderText(), i = this.graphic && this.graphic !== "control" && !this.left ? this.renderGraphic() : c``, r = this.hasMeta && this.left ? this.renderMeta() : c``, o = this.renderRipple();
    return c`
      ${o}
      ${i}
      ${this.left ? "" : n}
      <span class=${We(t)}>
        <mwc-checkbox
            reducedTouchTarget
            tabindex=${this.tabindex}
            .checked=${this.selected}
            ?disabled=${this.disabled}
            @change=${this.onChange}>
        </mwc-checkbox>
      </span>
      ${this.left ? n : ""}
      ${r}`;
  }
  async onChange(t) {
    const n = t.target;
    this.selected === n.checked || (this._skipPropRequest = !0, this.selected = n.checked, await this.updateComplete, this._skipPropRequest = !1);
  }
}
w([
  N("slot")
], qt.prototype, "slotElement", void 0);
w([
  N("mwc-checkbox")
], qt.prototype, "checkboxElement", void 0);
w([
  h({ type: Boolean })
], qt.prototype, "left", void 0);
w([
  h({ type: String, reflect: !0 })
], qt.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const sc = G`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let Ct = class extends qt {
};
Ct.styles = [Gi, sc];
Ct = w([
  F("mwc-check-list-item")
], Ct);
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
var P = {
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
}, pe = /* @__PURE__ */ new Set();
pe.add(P.BACKSPACE);
pe.add(P.ENTER);
pe.add(P.SPACEBAR);
pe.add(P.PAGE_UP);
pe.add(P.PAGE_DOWN);
pe.add(P.END);
pe.add(P.HOME);
pe.add(P.ARROW_LEFT);
pe.add(P.ARROW_UP);
pe.add(P.ARROW_RIGHT);
pe.add(P.ARROW_DOWN);
pe.add(P.DELETE);
pe.add(P.ESCAPE);
pe.add(P.TAB);
var ye = {
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
}, he = /* @__PURE__ */ new Map();
he.set(ye.BACKSPACE, P.BACKSPACE);
he.set(ye.ENTER, P.ENTER);
he.set(ye.SPACEBAR, P.SPACEBAR);
he.set(ye.PAGE_UP, P.PAGE_UP);
he.set(ye.PAGE_DOWN, P.PAGE_DOWN);
he.set(ye.END, P.END);
he.set(ye.HOME, P.HOME);
he.set(ye.ARROW_LEFT, P.ARROW_LEFT);
he.set(ye.ARROW_UP, P.ARROW_UP);
he.set(ye.ARROW_RIGHT, P.ARROW_RIGHT);
he.set(ye.ARROW_DOWN, P.ARROW_DOWN);
he.set(ye.DELETE, P.DELETE);
he.set(ye.ESCAPE, P.ESCAPE);
he.set(ye.TAB, P.TAB);
var et = /* @__PURE__ */ new Set();
et.add(P.PAGE_UP);
et.add(P.PAGE_DOWN);
et.add(P.END);
et.add(P.HOME);
et.add(P.ARROW_LEFT);
et.add(P.ARROW_UP);
et.add(P.ARROW_RIGHT);
et.add(P.ARROW_DOWN);
function Ue(e) {
  var t = e.key;
  if (pe.has(t))
    return t;
  var n = he.get(e.keyCode);
  return n || P.UNKNOWN;
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
var Ke, Oe, U = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
Ke = {}, Ke["" + U.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", Ke["" + U.LIST_ITEM_CLASS] = "mdc-list-item", Ke["" + U.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", Ke["" + U.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", Ke["" + U.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", Ke["" + U.ROOT] = "mdc-list";
var xt = (Oe = {}, Oe["" + U.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", Oe["" + U.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", Oe["" + U.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", Oe["" + U.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", Oe["" + U.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", Oe["" + U.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", Oe["" + U.ROOT] = "mdc-deprecated-list", Oe), Gt = {
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
    .` + U.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + U.LIST_ITEM_CLASS + ` a,
    .` + xt[U.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + xt[U.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + U.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + U.LIST_ITEM_CLASS + ` a,
    .` + U.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + U.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + xt[U.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + xt[U.LIST_ITEM_CLASS] + ` a,
    .` + xt[U.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + xt[U.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, be = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const En = (e, t) => e - t, cc = (e, t) => {
  const n = Array.from(e), i = Array.from(t), r = { added: [], removed: [] }, o = n.sort(En), a = i.sort(En);
  let l = 0, d = 0;
  for (; l < o.length || d < a.length; ) {
    const u = o[l], p = a[d];
    if (u === p) {
      l++, d++;
      continue;
    }
    if (u !== void 0 && (p === void 0 || u < p)) {
      r.removed.push(u), l++;
      continue;
    }
    if (p !== void 0 && (u === void 0 || p < u)) {
      r.added.push(p), d++;
      continue;
    }
  }
  return r;
}, lc = ["input", "button", "textarea", "select"];
function _t(e) {
  return e instanceof Set;
}
const un = (e) => {
  const t = e === be.UNSET_INDEX ? /* @__PURE__ */ new Set() : e;
  return _t(t) ? new Set(t) : /* @__PURE__ */ new Set([t]);
};
class Rn extends Bi {
  constructor(t) {
    super(Object.assign(Object.assign({}, Rn.defaultAdapter), t)), this.isMulti_ = !1, this.wrapFocus_ = !1, this.isVertical_ = !0, this.selectedIndex_ = be.UNSET_INDEX, this.focusedItemIndex_ = be.UNSET_INDEX, this.useActivatedClass_ = !1, this.ariaCurrentAttrValue_ = null;
  }
  static get strings() {
    return Gt;
  }
  static get numbers() {
    return be;
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
  setWrapFocus(t) {
    this.wrapFocus_ = t;
  }
  /**
   * Sets the private wrapFocus_ variable.
   */
  setMulti(t) {
    this.isMulti_ = t;
    const n = this.selectedIndex_;
    if (t) {
      if (!_t(n)) {
        const i = n === be.UNSET_INDEX;
        this.selectedIndex_ = i ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([n]);
      }
    } else if (_t(n))
      if (n.size) {
        const i = Array.from(n).sort(En);
        this.selectedIndex_ = i[0];
      } else
        this.selectedIndex_ = be.UNSET_INDEX;
  }
  /**
   * Sets the isVertical_ private variable.
   */
  setVerticalOrientation(t) {
    this.isVertical_ = t;
  }
  /**
   * Sets the useActivatedClass_ private variable.
   */
  setUseActivatedClass(t) {
    this.useActivatedClass_ = t;
  }
  getSelectedIndex() {
    return this.selectedIndex_;
  }
  setSelectedIndex(t) {
    this.isIndexValid_(t) && (this.isMulti_ ? this.setMultiSelectionAtIndex_(un(t)) : this.setSingleSelectionAtIndex_(t));
  }
  /**
   * Focus in handler for the list items.
   */
  handleFocusIn(t, n) {
    n >= 0 && this.adapter.setTabIndexForElementIndex(n, 0);
  }
  /**
   * Focus out handler for the list items.
   */
  handleFocusOut(t, n) {
    n >= 0 && this.adapter.setTabIndexForElementIndex(n, -1), setTimeout(() => {
      this.adapter.isFocusInsideList() || this.setTabindexToFirstSelectedItem_();
    }, 0);
  }
  /**
   * Key handler for the list.
   */
  handleKeydown(t, n, i) {
    const r = Ue(t) === "ArrowLeft", o = Ue(t) === "ArrowUp", a = Ue(t) === "ArrowRight", l = Ue(t) === "ArrowDown", d = Ue(t) === "Home", u = Ue(t) === "End", p = Ue(t) === "Enter", f = Ue(t) === "Spacebar";
    if (this.adapter.isRootFocused()) {
      o || u ? (t.preventDefault(), this.focusLastElement()) : (l || d) && (t.preventDefault(), this.focusFirstElement());
      return;
    }
    let b = this.adapter.getFocusedElementIndex();
    if (b === -1 && (b = i, b < 0))
      return;
    let y;
    if (this.isVertical_ && l || !this.isVertical_ && a)
      this.preventDefaultEvent(t), y = this.focusNextElement(b);
    else if (this.isVertical_ && o || !this.isVertical_ && r)
      this.preventDefaultEvent(t), y = this.focusPrevElement(b);
    else if (d)
      this.preventDefaultEvent(t), y = this.focusFirstElement();
    else if (u)
      this.preventDefaultEvent(t), y = this.focusLastElement();
    else if ((p || f) && n) {
      const v = t.target;
      if (v && v.tagName === "A" && p)
        return;
      this.preventDefaultEvent(t), this.setSelectedIndexOnAction_(b, !0);
    }
    this.focusedItemIndex_ = b, y !== void 0 && (this.setTabindexAtIndex_(y), this.focusedItemIndex_ = y);
  }
  /**
   * Click handler for the list.
   */
  handleSingleSelection(t, n, i) {
    t !== be.UNSET_INDEX && (this.setSelectedIndexOnAction_(t, n, i), this.setTabindexAtIndex_(t), this.focusedItemIndex_ = t);
  }
  /**
   * Focuses the next element on the list.
   */
  focusNextElement(t) {
    const n = this.adapter.getListItemCount();
    let i = t + 1;
    if (i >= n)
      if (this.wrapFocus_)
        i = 0;
      else
        return t;
    return this.adapter.focusItemAtIndex(i), i;
  }
  /**
   * Focuses the previous element on the list.
   */
  focusPrevElement(t) {
    let n = t - 1;
    if (n < 0)
      if (this.wrapFocus_)
        n = this.adapter.getListItemCount() - 1;
      else
        return t;
    return this.adapter.focusItemAtIndex(n), n;
  }
  focusFirstElement() {
    return this.adapter.focusItemAtIndex(0), 0;
  }
  focusLastElement() {
    const t = this.adapter.getListItemCount() - 1;
    return this.adapter.focusItemAtIndex(t), t;
  }
  /**
   * @param itemIndex Index of the list item
   * @param isEnabled Sets the list item to enabled or disabled.
   */
  setEnabled(t, n) {
    this.isIndexValid_(t) && this.adapter.setDisabledStateForElementIndex(t, !n);
  }
  /**
   * Ensures that preventDefault is only called if the containing element
   * doesn't consume the event, and it will cause an unintended scroll.
   */
  preventDefaultEvent(t) {
    const i = `${t.target.tagName}`.toLowerCase();
    lc.indexOf(i) === -1 && t.preventDefault();
  }
  setSingleSelectionAtIndex_(t, n = !0) {
    this.selectedIndex_ !== t && (this.selectedIndex_ !== be.UNSET_INDEX && (this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, !1)), n && this.adapter.setSelectedStateForElementIndex(t, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(t, !0), this.setAriaForSingleSelectionAtIndex_(t), this.selectedIndex_ = t, this.adapter.notifySelected(t));
  }
  setMultiSelectionAtIndex_(t, n = !0) {
    const i = un(this.selectedIndex_), r = cc(i, t);
    if (!(!r.removed.length && !r.added.length)) {
      for (const o of r.removed)
        n && this.adapter.setSelectedStateForElementIndex(o, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(o, !1);
      for (const o of r.added)
        n && this.adapter.setSelectedStateForElementIndex(o, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(o, !0);
      this.selectedIndex_ = t, this.adapter.notifySelected(t, r);
    }
  }
  /**
   * Sets aria attribute for single selection at given index.
   */
  setAriaForSingleSelectionAtIndex_(t) {
    this.selectedIndex_ === be.UNSET_INDEX && (this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(t, Gt.ARIA_CURRENT));
    const n = this.ariaCurrentAttrValue_ !== null, i = n ? Gt.ARIA_CURRENT : Gt.ARIA_SELECTED;
    this.selectedIndex_ !== be.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex_, i, "false");
    const r = n ? this.ariaCurrentAttrValue_ : "true";
    this.adapter.setAttributeForElementIndex(t, i, r);
  }
  setTabindexAtIndex_(t) {
    this.focusedItemIndex_ === be.UNSET_INDEX && t !== 0 ? this.adapter.setTabIndexForElementIndex(0, -1) : this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== t && this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1), this.adapter.setTabIndexForElementIndex(t, 0);
  }
  setTabindexToFirstSelectedItem_() {
    let t = 0;
    typeof this.selectedIndex_ == "number" && this.selectedIndex_ !== be.UNSET_INDEX ? t = this.selectedIndex_ : _t(this.selectedIndex_) && this.selectedIndex_.size > 0 && (t = Math.min(...this.selectedIndex_)), this.setTabindexAtIndex_(t);
  }
  isIndexValid_(t) {
    if (t instanceof Set) {
      if (!this.isMulti_)
        throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
      if (t.size === 0)
        return !0;
      {
        let n = !1;
        for (const i of t)
          if (n = this.isIndexInRange_(i), n)
            break;
        return n;
      }
    } else if (typeof t == "number") {
      if (this.isMulti_)
        throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + t);
      return t === be.UNSET_INDEX || this.isIndexInRange_(t);
    } else
      return !1;
  }
  isIndexInRange_(t) {
    const n = this.adapter.getListItemCount();
    return t >= 0 && t < n;
  }
  /**
   * Sets selected index on user action, toggles checkbox / radio based on
   * toggleCheckbox value. User interaction should not toggle list item(s) when
   * disabled.
   */
  setSelectedIndexOnAction_(t, n, i) {
    if (this.adapter.getDisabledStateForElementIndex(t))
      return;
    let r = t;
    this.isMulti_ && (r = /* @__PURE__ */ new Set([t])), this.isIndexValid_(r) && (this.isMulti_ ? this.toggleMultiAtIndex(t, i, n) : n || i ? this.setSingleSelectionAtIndex_(t, n) : this.selectedIndex_ === t && this.setSingleSelectionAtIndex_(be.UNSET_INDEX), n && this.adapter.notifyAction(t));
  }
  toggleMultiAtIndex(t, n, i = !0) {
    let r = !1;
    n === void 0 ? r = !this.adapter.getSelectedStateForElementIndex(t) : r = n;
    const o = un(this.selectedIndex_);
    r ? o.add(t) : o.delete(t), this.setMultiSelectionAtIndex_(o, i);
  }
}
function dc(e, t = 50) {
  let n;
  return function(i = !0) {
    clearTimeout(n), n = setTimeout(() => {
      e(i);
    }, t);
  };
}
const jt = (e) => e.hasAttribute("mwc-list-item");
function uc() {
  const e = this.itemsReadyResolver;
  this.itemsReady = new Promise((t) => this.itemsReadyResolver = t), e();
}
class ve extends Tn {
  constructor() {
    super(), this.mdcAdapter = null, this.mdcFoundationClass = Rn, this.activatable = !1, this.multi = !1, this.wrapFocus = !1, this.itemRoles = null, this.innerRole = null, this.innerAriaLabel = null, this.rootTabbable = !1, this.previousTabindex = null, this.noninteractive = !1, this.itemsReadyResolver = () => {
    }, this.itemsReady = Promise.resolve([]), this.items_ = [];
    const t = dc(this.layout.bind(this));
    this.debouncedLayout = (n = !0) => {
      uc.call(this), t(n);
    };
  }
  // tslint:disable:ban-ts-ignore
  async getUpdateComplete() {
    const t = await super.getUpdateComplete();
    return await this.itemsReady, t;
  }
  get items() {
    return this.items_;
  }
  updateItems() {
    var t;
    const n = (t = this.assignedElements) !== null && t !== void 0 ? t : [], i = [];
    for (const a of n)
      jt(a) && (i.push(a), a._managingList = this), a.hasAttribute("divider") && !a.hasAttribute("role") && a.setAttribute("role", "separator");
    this.items_ = i;
    const r = /* @__PURE__ */ new Set();
    if (this.items_.forEach((a, l) => {
      this.itemRoles ? a.setAttribute("role", this.itemRoles) : a.removeAttribute("role"), a.selected && r.add(l);
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
    const t = this.index;
    if (!_t(t))
      return t === -1 ? null : this.items[t];
    const n = [];
    for (const i of t)
      n.push(this.items[i]);
    return n;
  }
  get index() {
    return this.mdcFoundation ? this.mdcFoundation.getSelectedIndex() : -1;
  }
  render() {
    const t = this.innerRole === null ? void 0 : this.innerRole, n = this.innerAriaLabel === null ? void 0 : this.innerAriaLabel, i = this.rootTabbable ? "0" : "-1";
    return c`
      <!-- @ts-ignore -->
      <ul
          tabindex=${i}
          role="${Fe(t)}"
          aria-label="${Fe(n)}"
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
    var t;
    const n = (t = this.assignedElements) !== null && t !== void 0 ? t : [];
    return this.emptyMessage !== void 0 && n.length === 0 ? c`
        <mwc-list-item noninteractive>${this.emptyMessage}</mwc-list-item>
      ` : null;
  }
  firstUpdated() {
    super.firstUpdated(), this.items.length || (this.mdcFoundation.setMulti(this.multi), this.layout());
  }
  onFocusIn(t) {
    if (this.mdcFoundation && this.mdcRoot) {
      const n = this.getIndexOfTarget(t);
      this.mdcFoundation.handleFocusIn(t, n);
    }
  }
  onFocusOut(t) {
    if (this.mdcFoundation && this.mdcRoot) {
      const n = this.getIndexOfTarget(t);
      this.mdcFoundation.handleFocusOut(t, n);
    }
  }
  onKeydown(t) {
    if (this.mdcFoundation && this.mdcRoot) {
      const n = this.getIndexOfTarget(t), i = t.target, r = jt(i);
      this.mdcFoundation.handleKeydown(t, r, n);
    }
  }
  onRequestSelected(t) {
    if (this.mdcFoundation) {
      let n = this.getIndexOfTarget(t);
      if (n === -1 && (this.layout(), n = this.getIndexOfTarget(t), n === -1) || this.items[n].disabled)
        return;
      const r = t.detail.selected, o = t.detail.source;
      this.mdcFoundation.handleSingleSelection(n, o === "interaction", r), t.stopPropagation();
    }
  }
  getIndexOfTarget(t) {
    const n = this.items, i = t.composedPath();
    for (const r of i) {
      let o = -1;
      if (Jo(r) && jt(r) && (o = n.indexOf(r)), o !== -1)
        return o;
    }
    return -1;
  }
  createAdapter() {
    return this.mdcAdapter = {
      getListItemCount: () => this.mdcRoot ? this.items.length : 0,
      getFocusedElementIndex: this.getFocusedItemIndex,
      getAttributeForElementIndex: (t, n) => {
        if (!this.mdcRoot)
          return "";
        const r = this.items[t];
        return r ? r.getAttribute(n) : "";
      },
      setAttributeForElementIndex: (t, n, i) => {
        if (!this.mdcRoot)
          return;
        const r = this.items[t];
        r && r.setAttribute(n, i);
      },
      focusItemAtIndex: (t) => {
        const n = this.items[t];
        n && n.focus();
      },
      setTabIndexForElementIndex: (t, n) => {
        const i = this.items[t];
        i && (i.tabindex = n);
      },
      notifyAction: (t) => {
        const n = { bubbles: !0, composed: !0 };
        n.detail = { index: t };
        const i = new CustomEvent("action", n);
        this.dispatchEvent(i);
      },
      notifySelected: (t, n) => {
        const i = { bubbles: !0, composed: !0 };
        i.detail = { index: t, diff: n };
        const r = new CustomEvent("selected", i);
        this.dispatchEvent(r);
      },
      isFocusInsideList: () => ta(this),
      isRootFocused: () => {
        const t = this.mdcRoot;
        return t.getRootNode().activeElement === t;
      },
      setDisabledStateForElementIndex: (t, n) => {
        const i = this.items[t];
        i && (i.disabled = n);
      },
      getDisabledStateForElementIndex: (t) => {
        const n = this.items[t];
        return n ? n.disabled : !1;
      },
      setSelectedStateForElementIndex: (t, n) => {
        const i = this.items[t];
        i && (i.selected = n);
      },
      getSelectedStateForElementIndex: (t) => {
        const n = this.items[t];
        return n ? n.selected : !1;
      },
      setActivatedStateForElementIndex: (t, n) => {
        const i = this.items[t];
        i && (i.activated = n);
      }
    }, this.mdcAdapter;
  }
  selectUi(t, n = !1) {
    const i = this.items[t];
    i && (i.selected = !0, i.activated = n);
  }
  deselectUi(t) {
    const n = this.items[t];
    n && (n.selected = !1, n.activated = !1);
  }
  select(t) {
    this.mdcFoundation && this.mdcFoundation.setSelectedIndex(t);
  }
  toggle(t, n) {
    this.multi && this.mdcFoundation.toggleMultiAtIndex(t, n);
  }
  onListItemConnected(t) {
    const n = t.target;
    this.layout(this.items.indexOf(n) === -1);
  }
  layout(t = !0) {
    t && this.updateItems();
    const n = this.items[0];
    for (const i of this.items)
      i.tabindex = -1;
    n && (this.noninteractive ? this.previousTabindex || (this.previousTabindex = n) : n.tabindex = 0), this.itemsReadyResolver();
  }
  getFocusedItemIndex() {
    if (!this.mdcRoot || !this.items.length)
      return -1;
    const t = Hi();
    if (!t.length)
      return -1;
    for (let n = t.length - 1; n >= 0; n--) {
      const i = t[n];
      if (jt(i))
        return this.items.indexOf(i);
    }
    return -1;
  }
  focusItemAtIndex(t) {
    for (const n of this.items)
      if (n.tabindex === 0) {
        n.tabindex = -1;
        break;
      }
    this.items[t].tabindex = 0, this.items[t].focus();
  }
  focus() {
    const t = this.mdcRoot;
    t && t.focus();
  }
  blur() {
    const t = this.mdcRoot;
    t && t.blur();
  }
}
w([
  h({ type: String })
], ve.prototype, "emptyMessage", void 0);
w([
  N(".mdc-deprecated-list")
], ve.prototype, "mdcRoot", void 0);
w([
  Li("", !0, "*")
], ve.prototype, "assignedElements", void 0);
w([
  Li("", !0, '[tabindex="0"]')
], ve.prototype, "tabbableElements", void 0);
w([
  h({ type: Boolean }),
  Je(function(e) {
    this.mdcFoundation && this.mdcFoundation.setUseActivatedClass(e);
  })
], ve.prototype, "activatable", void 0);
w([
  h({ type: Boolean }),
  Je(function(e, t) {
    this.mdcFoundation && this.mdcFoundation.setMulti(e), t !== void 0 && this.layout();
  })
], ve.prototype, "multi", void 0);
w([
  h({ type: Boolean }),
  Je(function(e) {
    this.mdcFoundation && this.mdcFoundation.setWrapFocus(e);
  })
], ve.prototype, "wrapFocus", void 0);
w([
  h({ type: String }),
  Je(function(e, t) {
    t !== void 0 && this.updateItems();
  })
], ve.prototype, "itemRoles", void 0);
w([
  h({ type: String })
], ve.prototype, "innerRole", void 0);
w([
  h({ type: String })
], ve.prototype, "innerAriaLabel", void 0);
w([
  h({ type: Boolean })
], ve.prototype, "rootTabbable", void 0);
w([
  h({ type: Boolean, reflect: !0 }),
  Je(function(e) {
    var t, n;
    if (e) {
      const i = (n = (t = this.tabbableElements) === null || t === void 0 ? void 0 : t[0]) !== null && n !== void 0 ? n : null;
      this.previousTabindex = i, i && i.setAttribute("tabindex", "-1");
    } else !e && this.previousTabindex && (this.previousTabindex.setAttribute("tabindex", "0"), this.previousTabindex = null);
  })
], ve.prototype, "noninteractive", void 0);
var mc = Object.defineProperty, pc = Object.getOwnPropertyDescriptor, wt = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? pc(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
  return i && r && mc(t, n, r), r;
};
function Nn(e) {
  return !e.closest("filtered-list") || !e.parentElement || e.parentElement instanceof ke ? e : Nn(e.parentElement);
}
function hc(e, t) {
  const n = e.innerText + `
`, i = Array.from(e.children).map((l) => l.innerText).join(`
`), r = e.value, o = (n + i + r).toUpperCase(), a = t.toUpperCase().replace(/[.+^${}()|[\]\\]/g, "\\$&").trim().split(/\s+/g);
  a.length === 1 && a[0] === "" || a.every((l) => new RegExp(
    `*${l}*`.replace(/\*/g, ".*").replace(/\?/g, ".{1}"),
    "i"
  ).test(o)) ? Nn(e).classList.remove("hidden") : Nn(e).classList.add("hidden");
}
let ke = class extends ve {
  constructor() {
    super(), this.disableCheckAll = !1, this.addEventListener("selected", () => {
      this.requestUpdate();
    });
  }
  get existCheckListItem() {
    return this.items.some((e) => e instanceof Ct);
  }
  get isAllSelected() {
    return this.items.filter((e) => !e.disabled).filter((e) => e instanceof Ct).every((e) => e.selected);
  }
  get isSomeSelected() {
    return this.items.filter((e) => !e.disabled).filter((e) => e instanceof Ct).some((e) => e.selected);
  }
  onCheckAll() {
    const e = !this.isAllSelected;
    this.items.filter((t) => !t.disabled && !t.classList.contains("hidden")).forEach((t) => t.selected = e);
  }
  onFilterInput() {
    Array.from(
      this.querySelectorAll(
        "mwc-list-item, mwc-check-list-item, mwc-radio-list-item"
      )
    ).forEach(
      (e) => hc(e, this.searchField.value)
    );
  }
  onListItemConnected(e) {
    super.onListItemConnected(e), this.requestUpdate();
  }
  update(e) {
    super.update(e), this.onFilterInput();
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
ke.styles = G`
    ${Eo(zo.styles)}

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
wt([
  h({ type: String })
], ke.prototype, "searchFieldLabel", 2);
wt([
  h({ type: Boolean })
], ke.prototype, "disableCheckAll", 2);
wt([
  _()
], ke.prototype, "existCheckListItem", 1);
wt([
  _()
], ke.prototype, "isAllSelected", 1);
wt([
  _()
], ke.prototype, "isSomeSelected", 1);
wt([
  N("mwc-textfield")
], ke.prototype, "searchField", 2);
ke = wt([
  F("filtered-list")
], ke);
var fc = Object.defineProperty, bc = Object.getOwnPropertyDescriptor, Ge = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? bc(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
  return i && r && fc(t, n, r), r;
};
const gc = c`<div class="column">
  <mwc-list
    ><mwc-list-item noninteractive hasMeta
      >${s("loading")}<mwc-icon slot="meta">pending</mwc-icon></mwc-list-item
    ></mwc-list
  >
</div>`;
let Ie = class extends Z {
  constructor() {
    super(...arguments), this.selection = {}, this.multi = !1, this.read = async (e) => ({
      path: e,
      header: c`<h2>${"/" + e.join("/")}</h2>`,
      entries: []
    }), this.loaded = Promise.resolve();
  }
  get depth() {
    return tr(this.selection);
  }
  get paths() {
    return this.getPaths();
  }
  set paths(e) {
    const t = {};
    for (const n of e) {
      let i = t;
      for (const r of n)
        Object.prototype.hasOwnProperty.call(i, r) || (i[r] = {}), i = i[r];
    }
    this.selection = t;
  }
  get path() {
    return this.paths[0] ?? [];
  }
  set path(e) {
    this.paths = [e];
  }
  getTitle(e) {
    return e.join("/");
  }
  getDisplayString(e, t) {
    return e;
  }
  getPaths(e) {
    let t = Object.keys(this.selection).map((i) => [i]), n = e ?? this.depth - 1;
    for (; n-- > 0; )
      t = t.flatMap((i) => {
        let r = this.selection;
        for (const a of i) r = r[a];
        const o = Object.keys(r).map((a) => i.concat(a));
        return o.length === 0 ? [i] : o;
      });
    return e === void 0 ? t : t.filter((i) => i.length > e);
  }
  multiSelect(e, t, n) {
    let i = this.selection;
    for (const r of t) i = i[r];
    i && i[n] ? delete i[n] : i[n] = {};
  }
  singleSelect(e, t, n) {
    this.path[t.length] === n ? this.path = t : this.path = t.concat(n);
  }
  async select(e, t) {
    const n = e.target.selected.value;
    this.multi ? this.multiSelect(e, t, n) : this.singleSelect(e, t, n), this.requestUpdate(), await this.updateComplete, await new Promise((i) => setTimeout(i, 250)), this.container.scrollLeft = 1e3 * this.depth;
  }
  renderDirectory(e, t) {
    return c`<filtered-list
      @selected=${(n) => this.select(n, e)}
      searchFieldLabel="${this.getTitle(e)}"
    >
      ${t.map(
      (n) => c`<mwc-list-item
            value="${n}"
            ?activated=${this.getPaths(e.length).map((i) => JSON.stringify(i)).includes(JSON.stringify(e.concat(n)))}
            >${this.getDisplayString(n, e)}</mwc-list-item
          >`
    )}
    </filtered-list>`;
  }
  async renderColumn(e) {
    const n = this.getPaths(e).map((r) => this.read(r)), i = [];
    for await (const { header: r, entries: o, path: a } of n)
      (r || o.length > 0) && i.push(
        c`${Fe(r)} ${this.renderDirectory(a, o)}`
      );
    return i.length === 0 ? c`` : c`<div class="column">${i}</div>`;
  }
  render() {
    const e = new Array(this.depth).fill(0).map((t, n) => this.renderColumn(n));
    return this.loaded = Promise.allSettled(e).then(), c`<div class="pane">
      ${e.map((t) => ac(t, gc))}
    </div>`;
  }
};
Ie.styles = G`
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
Ge([
  h({ type: Object })
], Ie.prototype, "selection", 2);
Ge([
  h({ type: Boolean })
], Ie.prototype, "multi", 2);
Ge([
  h({ type: Number })
], Ie.prototype, "depth", 1);
Ge([
  h({ type: Array })
], Ie.prototype, "paths", 1);
Ge([
  h({ type: Array })
], Ie.prototype, "path", 1);
Ge([
  h({ attribute: !1 })
], Ie.prototype, "read", 2);
Ge([
  h({ attribute: !1 })
], Ie.prototype, "loaded", 2);
Ge([
  N("div")
], Ie.prototype, "container", 2);
Ie = Ge([
  F("finder-list")
], Ie);
function qn(e) {
  return e.startsWith("IED:") ? e.replace(/^.*:/, "").trim() : e.startsWith("LN0:") ? "LLN0" : e.replace(/^.*>/, "").trim();
}
function Mn(e, t) {
  return async (n) => {
    const [i, r] = n[n.length - 1]?.split(": ", 2), o = Y(e, i, r);
    return o ? {
      path: n,
      header: void 0,
      entries: t(o).map(
        (a) => `${a.tagName}: ${I(a)}`
      )
    } : { path: n, header: c`<p>${s("error")}</p>`, entries: [] };
  };
}
function yc(e) {
  return e.tagName === "SCL" ? Array.from(e.querySelectorAll("IED")).filter(q) : [];
}
function On(e) {
  return c`<finder-list
    path="${JSON.stringify(["SCL: "])}"
    .read=${Mn(e, yc)}
    .getDisplayString=${qn}
    .getTitle=${(t) => t[t.length - 1]}
  ></finder-list>`;
}
function fr(e) {
  if (["LDevice", "Server"].includes(e.tagName))
    return Array.from(e.children).filter(
      (n) => n.tagName === "LDevice" || n.tagName === "LN0" || n.tagName === "LN"
    );
  const t = e.tagName === "LN" || e.tagName === "LN0" ? e.getAttribute("lnType") : e.getAttribute("type");
  return Array.from(
    e.ownerDocument.querySelectorAll(
      `LNodeType[id="${t}"] > DO, DOType[id="${t}"] > SDO, DOType[id="${t}"] > DA, DAType[id="${t}"] > BDA`
    )
  );
}
function Zt(e) {
  return c`<finder-list
    multi
    .paths=${[["Server: " + I(e)]]}
    .read=${Mn(e.ownerDocument, fr)}
    .getDisplayString=${qn}
    .getTitle=${(t) => t[t.length - 1]}
  ></finder-list>`;
}
function vc(e) {
  if (e.tagName === "Server")
    return Array.from(e.children).filter(
      (i) => i.tagName === "LDevice" && i.querySelector('LN[lnClass="TCTR"],LN[lnClass="TVTR"]')
    );
  if (e.tagName === "LDevice")
    return Array.from(e.children).filter(
      (i) => i.tagName === "LN" && (i.getAttribute("lnClass") === "TCTR" || i.getAttribute("lnClass") === "TVTR")
    );
  const t = e.tagName === "LN" || e.tagName === "LN0" ? e.getAttribute("lnType") : e.getAttribute("type"), n = e.ownerDocument.querySelector(
    `LNodeType[id="${t}"], DOType[id="${t}"], DAType[id="${t}"]`
  );
  return n ? n?.tagName === "LNodeType" ? Array.from(n.querySelectorAll("DO") ?? []).filter(
    (i) => i.ownerDocument.querySelector(
      `DOType[id="${i.getAttribute("type")}"][cdc="SAV"]`
    )
  ) : n?.tagName === "DOType" ? Array.from(n.querySelectorAll("DA") ?? []).filter(
    (i) => i.getAttribute("name") === "instMag" || i.getAttribute("name") === "q"
  ) : Array.from(
    e.ownerDocument.querySelectorAll(
      `LNodeType[id="${t}"] > DO, DOType[id="${t}"] > SDO, DOType[id="${t}"] > DA, DAType[id="${t}"] > BDA`
    )
  ) : [];
}
function yi(e) {
  return c`<finder-list
    multi
    paths=${JSON.stringify([["Server: " + I(e)]])}
    .read=${Mn(e.ownerDocument, vc)}
    .getDisplayString=${qn}
    .getTitle=${(t) => t[t.length - 1]}
  ></finder-list>`;
}
function tn(e, t) {
  const [n, i] = t[t.length - 1].split(": "), r = Y(e.ownerDocument, n, i);
  if (!r || fr(r).length > 0) return;
  const o = t.find((L) => L.startsWith("LN"));
  if (!o) return;
  const [a, l] = o.split(": "), d = Y(e.ownerDocument, a, l);
  if (!d) return;
  const u = d.closest("LDevice")?.getAttribute("inst"), p = d.getAttribute("prefix") ?? "", f = d.getAttribute("lnClass"), b = d.getAttribute("inst") && d.getAttribute("inst") !== "" ? d.getAttribute("inst") : null;
  let y = "", v = "", k = "";
  for (const L of t) {
    const [A, H] = L.split(": ");
    if (!["DO", "DA", "SDO", "BDA"].includes(A)) continue;
    const B = Y(e.ownerDocument, A, H);
    if (!B) return;
    const J = B.getAttribute("name");
    A === "DO" && (y = J), A === "SDO" && (y = y + "." + J), A === "DA" && (v = J, k = B.getAttribute("fc") ?? ""), A === "BDA" && (v = v + "." + J);
  }
  if (!(!u || !f || !y || !v || !k))
    return z(e.ownerDocument, "FCDA", {
      ldInst: u,
      prefix: p,
      lnClass: f,
      lnInst: b,
      doName: y,
      daName: v,
      fc: k
    });
}
function wc(e) {
  return (t, n) => {
    const r = n.shadowRoot.querySelector("finder-list")?.paths ?? [], o = [];
    for (const a of r) {
      const l = tn(e, a);
      l && o.push({
        new: {
          parent: e,
          element: l,
          reference: null
        }
      });
    }
    return o;
  };
}
function br(e) {
  const t = e.closest("Server");
  return [
    {
      title: s("wizard.title.add", { tagName: "FCDA" }),
      primary: {
        label: "add",
        icon: "add",
        action: wc(e)
      },
      content: [t ? Zt(t) : c``]
    }
  ];
}
const De = {
  normalizedString: "([ -~]|[]|[ -퟿]|[-�])*",
  asciName: "[A-Za-z][0-9,A-Z,a-z_]*",
  abstractDataAttributeName: "((T)|(Test)|(Check)|(SIUnit)|(Oper)|(SBO)|(SBOw)|(Cancel)|[a-z][0-9A-Za-z]*)"
}, nn = {
  cbName: 32,
  abstracDaName: 60
};
function mn(e, t) {
  return new CustomEvent("log", {
    bubbles: !0,
    composed: !0,
    ...t,
    detail: { ...e, ...t?.detail }
  });
}
function Ac(e) {
  return (t, n, i) => {
    const r = i.items.filter((l) => l.selected).map((l) => l.value).map((l) => Y(e.ownerDocument, "LNodeType", l)).filter((l) => l !== null), o = ir(e);
    return r.map((l) => {
      const d = l.getAttribute("lnClass");
      if (!d) return null;
      const u = o(d);
      if (!u) {
        n.dispatchEvent(
          mn({
            kind: "error",
            title: s("lnode.log.title", { lnClass: d }),
            message: s("lnode.log.nonuniquelninst")
          })
        );
        return;
      }
      const p = $(e, "LNode").some(
        (v) => v.getAttribute("lnClass") === "LLN0"
      );
      if (d === "LLN0" && p) {
        n.dispatchEvent(
          mn({
            kind: "error",
            title: s("lnode.log.title", { lnClass: d }),
            message: s("lnode.log.uniqueln0", { lnClass: d })
          })
        );
        return;
      }
      const f = $(e, "LNode").some(
        (v) => v.getAttribute("lnClass") === "LPHD"
      );
      if (d === "LPHD" && f) {
        n.dispatchEvent(
          mn({
            kind: "error",
            title: s("lnode.log.title", { lnClass: d }),
            message: s("lnode.log.uniqueln0", { lnClass: d })
          })
        );
        return;
      }
      const b = d === "LLN0" ? "" : u, y = z(e.ownerDocument, "LNode", {
        iedName: "None",
        ldInst: null,
        prefix: null,
        lnClass: d,
        lnInst: b,
        lnType: l.getAttribute("id")
      });
      return { new: { parent: e, element: y } };
    }).filter((l) => l);
  };
}
function Sc(e) {
  return (t) => {
    t.dispatchEvent(E()), t.dispatchEvent(E(vr(e)));
  };
}
function gr(e) {
  const t = Array.from(
    e.ownerDocument.querySelectorAll("LNodeType")
  );
  return [
    {
      title: s("lnode.wizard.title.selectLNodeTypes"),
      menuActions: [
        {
          icon: "",
          label: s("lnode.wizard.reference"),
          action: Sc(e)
        }
      ],
      primary: {
        icon: "save",
        label: s("save"),
        action: Ac(e)
      },
      content: [
        C`<filtered-list multi
          >${t.map((n) => {
          const i = n.getAttribute("lnClass") === "LLN0" && $(e, "LNode").some(
            (r) => r.getAttribute("lnClass") === "LLN0"
          ) || n.getAttribute("lnClass") === "LPHD" && $(e, "LNode").some(
            (r) => r.getAttribute("lnClass") === "LPHD"
          );
          return C`<mwc-check-list-item
              twoline
              value="${I(n)}"
              ?disabled=${i}
              ><span>${n.getAttribute("lnClass")}</span
              ><span slot="secondary"
                >${i ? s("lnode.wizard.uniquewarning") : I(n)}</span
              ></mwc-check-list-item
            >`;
        })}</filtered-list
        >`
      ]
    }
  ];
}
const xc = {
  CBR: ["CSWI", "CILO", "XCBR"],
  DIS: ["CSWI", "CILO", "XSWI"],
  VTR: ["TVTR"],
  CTR: ["TCTR"],
  Bay: ["LLN0"],
  VoltageLevel: ["LLN0"],
  Substation: ["LLN0"]
};
function yr(e, t) {
  return e.disabled !== t.disabled ? t.disabled ? -1 : 1 : e.preferred !== t.preferred ? e.preferred ? -1 : 1 : e.selected !== t.selected ? e.selected ? -1 : 1 : 0;
}
const $c = "Client LN";
function vi(e, t) {
  return Array.from(e.getElementsByTagName("LNode")).filter((n) => !n.closest("Private")).filter((n) => Fn(t, n))[0] ?? null;
}
function Fn(e, t) {
  return (t.getAttribute("iedName") ?? "") === (e.closest("IED")?.getAttribute("name") ?? "") && (t.getAttribute("ldInst") ?? "") === (e.closest("LDevice")?.getAttribute("inst") ?? "") && (t.getAttribute("prefix") ?? "") === (e.getAttribute("prefix") ?? "") && (t.getAttribute("lnClass") ?? "") === (e.getAttribute("lnClass") ?? "") && (t.getAttribute("lnInst") ?? "") === (e.getAttribute("inst") ?? "");
}
function Cc(e, t) {
  const n = z(e.ownerDocument, "LNode", {
    iedName: t.closest("IED")?.getAttribute("name") ?? "",
    ldInst: t.closest("LDevice")?.getAttribute("inst") ?? "",
    prefix: t.getAttribute("prefix") ?? "",
    lnClass: t.getAttribute("lnClass") ?? "",
    lnInst: t.getAttribute("inst") ?? ""
  });
  return {
    new: {
      parent: e,
      element: n
    }
  };
}
function Ec(e, t) {
  return {
    old: {
      parent: e,
      element: t,
      reference: t.nextElementSibling
    }
  };
}
function Nc(e, t) {
  return e.some((n) => Fn(n, t));
}
function Ic(e, t) {
  return t.some((n) => Fn(e, n));
}
function Dc(e) {
  return (t, n, i) => {
    const r = i.items.filter((d) => d.selected).map((d) => d.value).map((d) => {
      const u = Y(e.ownerDocument, "LN0", d);
      return u || Y(e.ownerDocument, "LN", d);
    }).filter((d) => d !== null), o = $(e, "LNode").filter(
      q
    ), a = o.filter((d) => !Nc(r, d)).map((d) => Ec(e, d)), l = r.filter((d) => !Ic(d, o)).map((d) => Cc(e, d));
    return a.concat(l);
  };
}
function kc(e, t) {
  return e.parentElement?.parentElement?.nextElementSibling?.querySelector(
    t
  ) ?? null;
}
function zc(e, t) {
  if (!(e.target instanceof ve)) return;
  const n = kc(e.target, "#lnList");
  if (n === null) return;
  const i = t.ownerDocument, a = e.target.selected.flatMap(
    (l) => Array.from(
      i.querySelectorAll(
        `:root > IED[name="${l.value}"] > AccessPoint > LN,:root > IED[name="${l.value}"] > AccessPoint > Server > LDevice > LN,:root > IED[name="${l.value}"] > AccessPoint > Server > LDevice > LN0`
      )
    ).filter((d) => !d.closest("Private"))
  ).filter((l) => l !== null).map((l) => {
    const d = xc[t.getAttribute("type") ? t.getAttribute("type") ?? "" : t.tagName ?? ""]?.includes(l.getAttribute("lnClass") ?? "") ?? !1, u = vi(t.ownerDocument, l), p = u?.parentElement === t;
    return {
      selected: p,
      disabled: u !== null && !p,
      prefered: d,
      element: l
    };
  }).sort(yr).map((l) => C`<mwc-check-list-item
      ?selected=${l.selected}
      ?disabled=${l.disabled}
      value="${I(l.element)}"
      twoline
      ><span
        >${l.element.getAttribute("prefix") ?? ""}${l.element.getAttribute("lnClass")}${l.element.getAttribute(
    "inst"
  ) ?? ""}
        ${l.disabled ? C` <mwc-icon style="--mdc-icon-size: 1em;"
                >account_tree</mwc-icon
              >
              ${ga(vi(i, l.element))}` : ""}</span
      ><span slot="secondary"
        >${l.element.closest("IED")?.getAttribute("name") ?? ""} |
        ${l.element.closest("LDevice") ? l.element.closest("LDevice")?.getAttribute("inst") : $c}</span
      ></mwc-check-list-item
    >`);
  _i(C`${a}`, n);
}
function Lc(e) {
  const t = e.ownerDocument;
  return t.querySelectorAll(":root > IED").length > 0 ? C`<filtered-list
      disableCheckAll
      multi
      id="iedList"
      @selected=${(n) => zc(n, e)}
      >${Array.from(t.querySelectorAll(":root > IED")).map((n) => n.getAttribute("name")).map((n) => ({
    selected: Array.from(e.children).filter((i) => !i.closest("Private")).filter(
      (i) => i.tagName === "LNode" && i.getAttribute("iedName") === n
    ).length > 0,
    iedName: n
  })).sort(yr).map(
    (n) => C`<mwc-check-list-item
              value="${n.iedName ?? ""}"
              ?selected=${n.selected}
              >${n.iedName}</mwc-check-list-item
            >`
  )}</filtered-list
    >` : C`<mwc-list-item noninteractive graphic="icon">
      <span>${s("lnode.wizard.placeholder")}</span>
      <mwc-icon slot="graphic">info</mwc-icon>
    </mwc-list-item>`;
}
function Tc(e) {
  return (t) => {
    t.dispatchEvent(E()), t.dispatchEvent(E(gr(e)));
  };
}
function vr(e) {
  return [
    {
      title: s("lnode.wizard.title.selectIEDs"),
      menuActions: [
        {
          icon: "",
          label: s("lnode.wizard.instance"),
          action: Tc(e)
        }
      ],
      content: [Lc(e)]
    },
    {
      initial: Array.from(e.children).some(
        (t) => t.tagName === "LNode"
      ),
      title: s("lnode.wizard.title.selectLNs"),
      primary: {
        icon: "save",
        label: s("save"),
        action: Dc(e)
      },
      content: [C`<filtered-list multi id="lnList"></filtered-list>`]
    }
  ];
}
function _c(e) {
  return e.tagName === "Function" || e.tagName === "SubFunction" || e.tagName === "EqFunction" || e.tagName === "EqSubFunction" ? gr(e) : vr(e);
}
function Vc(e) {
  const t = e.iedName !== "None";
  return [
    C`<wizard-textfield
      label="iedName"
      .maybeValue=${e.iedName}
      helper="${s("scl.iedName")}"
      helperPersistent
      disabled
    ></wizard-textfield>`,
    C`<wizard-textfield
      label="ldInst"
      .maybeValue=${e.ldInst}
      helper="${s("scl.ldInst")}"
      helperPersistent
      nullable
      disabled
    ></wizard-textfield>`,
    C`<wizard-textfield
      label="prefix"
      .maybeValue=${e.prefix}
      helper="${s("scl.prefix")}"
      pattern="${De.asciName}"
      maxLength="11"
      helperPersistent
      nullable
      ?disabled=${t}
    ></wizard-textfield>`,
    C`<wizard-textfield
      label="lnClass"
      .maybeValue=${e.lnClass}
      helper="${s("scl.lnClass")}"
      helperPersistent
      disabled
    ></wizard-textfield>`,
    C`<wizard-textfield
      label="lnInst"
      .maybeValue=${e.lnInst}
      helper="${s("scl.lnInst")}"
      helperPersistent
      type="number"
      min="1"
      max="99"
      .reservedValues=${e.reservedLnInst}
      ?disabled=${t}
    ></wizard-textfield>`
  ];
}
function Pc(e) {
  return (t) => {
    const n = {}, i = ["iedName", "ldInst", "prefix", "lnClass", "lnInst"];
    i.forEach((o) => {
      n[o] = g(t.find((a) => a.label === o));
    });
    let r = null;
    if (i.some((o) => n[o] !== e.getAttribute(o))) {
      const o = O(e, n);
      return r = {
        old: { element: e },
        new: { element: o }
      }, [r];
    }
    return [];
  };
}
function Rc(e) {
  const [t, n, i, r, o] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((l) => e.getAttribute(l)), a = $(
    e.parentElement,
    "LNode"
  ).filter(
    (l) => l !== e && l.getAttribute("lnClass") === e.getAttribute("lnClass")
  ).map((l) => l.getAttribute("lnInst"));
  return [
    {
      title: s("wizard.title.edit", { tagName: "LNode" }),
      element: e,
      primary: {
        label: s("save"),
        icon: "save",
        action: Pc(e)
      },
      content: [
        ...Vc({
          iedName: t,
          ldInst: n,
          prefix: i,
          lnClass: r,
          lnInst: o,
          reservedLnInst: a
        })
      ]
    }
  ];
}
function wr(e) {
  return Object.entries(e).map(
    ([t, n]) => c`<wizard-checkbox
        label="${t}"
        .maybeValue=${n}
        nullable
        helper="${s(`scl.${t}`)}"
      ></wizard-checkbox>`
  );
}
function qc(e) {
  return (t) => {
    const n = g(t.find((f) => f.label === "seqNum")), i = g(t.find((f) => f.label === "timeStamp")), r = g(t.find((f) => f.label === "dataSet")), o = g(t.find((f) => f.label === "reasonCode")), a = g(t.find((f) => f.label === "dataRef")), l = g(t.find((f) => f.label === "entryID")), d = g(t.find((f) => f.label === "configRef")), u = g(t.find((f) => f.label === "bufOvfl"));
    if (n === e.getAttribute("seqNum") && i === e.getAttribute("timeStamp") && r === e.getAttribute("dataSet") && o === e.getAttribute("reasonCode") && a === e.getAttribute("dataRef") && l === e.getAttribute("entryID") && d === e.getAttribute("configRef") && u === e.getAttribute("bufOvfl"))
      return [];
    const p = O(e, {
      seqNum: n,
      timeStamp: i,
      dataSet: r,
      reasonCode: o,
      dataRef: a,
      entryID: l,
      configRef: d,
      bufOvfl: u
    });
    return [{ old: { element: e }, new: { element: p } }];
  };
}
function Ar(e) {
  const [
    t,
    n,
    i,
    r,
    o,
    a,
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
  ].map((u) => e.getAttribute(u));
  return [
    {
      title: s("wizard.title.edit", { tagName: e.tagName }),
      primary: {
        icon: "save",
        label: s("save"),
        action: qc(e)
      },
      content: wr({
        seqNum: t,
        timeStamp: n,
        dataSet: i,
        reasonCode: r,
        dataRef: o,
        entryID: a,
        configRef: l,
        bufOvfl: d
      })
    }
  ];
}
let Mc = 1, Sr = 1, xr = 1;
function Oc(e, t) {
  return t.parentElement?.querySelectorAll(
    `LN[lnClass="CSWI"]${t.getAttribute("prefix") ? `[prefix="${t.getAttribute("prefix")}"]` : ""}${t.getAttribute("inst") ? `[inst="${t.getAttribute("inst")}"]` : ""},LN[lnClass="CILO"]${t.getAttribute("prefix") ? `[prefix="${t.getAttribute("prefix")}"]` : ""}${t.getAttribute("inst") ? `[inst="${t.getAttribute("inst")}"]` : ""},LN[lnClass="XCBR"]${t.getAttribute("prefix") ? `[prefix="${t.getAttribute("prefix")}"]` : ""}${t.getAttribute("inst") ? `[inst="${t.getAttribute("inst")}"]` : ""},LN[lnClass="XSWI"]${t.getAttribute("prefix") ? `[prefix="${t.getAttribute("prefix")}"]` : ""}${t.getAttribute("inst") ? `[inst="${t.getAttribute("inst")}"]` : ""}`
  ).forEach((n) => {
    e.appendChild(
      z(t.ownerDocument, "LNode", {
        iedName: n.parentElement?.parentElement?.parentElement?.parentElement?.getAttribute(
          "name"
        ) ?? null,
        ldInst: t.parentElement?.getAttribute("inst") ?? null,
        prefix: n.getAttribute("prefix"),
        lnClass: n.getAttribute("lnClass"),
        lnInst: n.getAttribute("inst")
      })
    );
  }), e;
}
function $r(e) {
  return e.parentElement?.querySelector(
    `LN[lnClass="XCBR"]${e.getAttribute("prefix") ? `[prefix="${e.getAttribute("prefix")}"]` : ""}${e.getAttribute("inst") ? `[inst="${e.getAttribute("inst")}"]` : ""}`
  ) ? "CBR" : "DIS";
}
function Fc(e) {
  return e.getAttribute("prefix") && e.getAttribute("inst") ? e.getAttribute("prefix") + e.getAttribute("inst") : e.getAttribute("inst") && $r(e) === "CBR" ? "QA" + Sr++ : "QB" + xr++;
}
function Hc(e, t) {
  if (Array.from(
    e.querySelectorAll('DOI[name="Pos"] > DAI[name="ctlModel"] > Val')
  ).filter((i) => t.includes(i.innerHTML.trim())).length)
    return !0;
  const n = e.ownerDocument;
  return Array.from(
    n.querySelectorAll(
      `DataTypeTemplates > LNodeType[id="${e.getAttribute(
        "lnType"
      )}"] > DO[name="Pos"]`
    )
  ).map((i) => i.getAttribute("type")).flatMap(
    (i) => Array.from(
      n.querySelectorAll(
        `DOType[id="${i}"] > DA[name="ctlModel"] > Val`
      )
    )
  ).filter((i) => t.includes(i.innerHTML.trim())).length > 0;
}
function Bc(e) {
  return Array.from(
    e.querySelectorAll('AccessPoint > Server > LDevice > LN[lnClass="CSWI"]')
  );
}
function Wc(e, t) {
  return e.parentElement ? Bc(e).filter((n) => Hc(n, t)) : [];
}
function Gc(e, t) {
  const n = Wc(e, t);
  if (Sr = 1, xr = 1, n.length) {
    const i = z(e.ownerDocument, "Bay", {
      name: "Q" + Mc++,
      desc: "Bay for controller " + e.getAttribute("name")
    });
    return n.map((o) => Oc(
      z(e.ownerDocument, "ConductingEquipment", {
        name: Fc(o),
        type: $r(o)
      }),
      o
    )).forEach((o) => i.appendChild(o)), i;
  }
  return null;
}
function jc(e, t) {
  return (n, i, r) => {
    const o = [], a = r.selected.map(
      (u) => u.value
    ), l = z(e, "VoltageLevel", {
      name: "E1",
      desc: "guessed by OpenSCD",
      nomFreq: "50.0",
      numPhases: "3"
    }), d = z(e, "Voltage", {
      unit: "V",
      multiplier: "k"
    });
    return d.textContent = "110.00", l.appendChild(d), o.push({
      new: { parent: e.querySelector("SCL"), element: t }
    }), o.push({
      new: {
        parent: t,
        element: l
      }
    }), Array.from(e.querySelectorAll(":root > IED")).sort(ws).map((u) => Gc(u, a)).forEach((u) => {
      u && o.push({ new: { parent: l, element: u } });
    }), o;
  };
}
function Uc(e, t) {
  return [
    {
      title: s("guess.wizard.title"),
      primary: {
        icon: "play_arrow",
        label: s("guess.wizard.primary"),
        action: jc(e, t)
      },
      content: [
        c`<p>${s("guess.wizard.description")}</p>`,
        c`<mwc-list multi id="ctlModelList"
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
const Kc = {
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
}, Zc = {
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
}, wi = { en: Zc, de: Kc };
async function Xc(e) {
  return Object.keys(wi).includes(e) ? wi[e] : {};
}
Po({ loader: Xc, empty: (e) => e });
const Cr = localStorage.getItem("language") || "en";
console.log("SETTING LANGUAGE TO", Cr);
Oo(Cr);
function Er(e, t, n) {
  return [
    c`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${s("substation.wizard.nameHelper")}"
      required
      validationMessage="${s("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${s("substation.wizard.descHelper")}"
    ></wizard-textfield>`,
    n ? c`<mwc-formfield label="${s("guess.wizard.primary")}">
          <mwc-checkbox></mwc-checkbox>
        </mwc-formfield>` : c``
  ];
}
function Qc(e) {
  return (t, n) => {
    const i = g(t.find((l) => l.label === "name")), r = g(t.find((l) => l.label === "desc")), o = n.shadowRoot?.querySelector("mwc-checkbox")?.checked;
    e.ownerDocument.createElement("Substation");
    const a = z(e.ownerDocument, "Substation", {
      name: i,
      desc: r
    });
    return o ? [() => Uc(e.ownerDocument, a)] : [{ new: { parent: e, element: a } }];
  };
}
function Yc(e) {
  const t = e.ownerDocument.querySelector("Substation") === null && e.tagName === "SCL";
  return [
    {
      title: s("substation.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "add",
        label: s("add"),
        action: Qc(e)
      },
      content: Er("", "", t)
    }
  ];
}
function Jc(e) {
  return [
    {
      title: s("substation.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: s("save"),
        action: lr(
          e,
          "substation.action.updatesubstation"
        )
      },
      content: Er(
        e.getAttribute("name") ?? "",
        e.getAttribute("desc"),
        !1
      )
    }
  ];
}
function el(e, t, n, i) {
  return [
    c`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${s("terminal.wizard.nameHelper")}"
      required
      validationMessage="${s("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${i}
      readonly
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="connectivityNode"
      .maybeValue=${t}
      helper="${s("terminal.wizard.connectivityNodeHelper")}"
      required
      validationMessage="${s("textfield.required")}"
      readonly
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="cNodeName"
      .maybeValue=${n}
      helper="${s("terminal.wizard.cNodeNameHelper")}"
      required
      validationMessage="${s("textfield.required")}"
      readonly
    ></wizard-textfield>`
  ];
}
function tl(e) {
  const t = Array.from(
    e.parentNode.querySelectorAll("ConnectivityNode")
  ).filter(q).map((n) => n.getAttribute("name") ?? "").filter((n) => n !== e.getAttribute("name"));
  return [
    {
      title: s("terminal.wizard.title.edit"),
      element: e,
      content: el(
        e.getAttribute("name"),
        e.getAttribute("connectivityNode"),
        e.getAttribute("cNodeName"),
        t
      )
    }
  ];
}
const Ut = {
  nomFreq: "50",
  numPhases: "3",
  Voltage: "110",
  multiplier: "k"
};
function Nr(e, t, n, i, r, o) {
  return [
    C`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${s("voltagelevel.wizard.nameHelper")}"
      required
      validationMessage="${s("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    C`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${s("voltagelevel.wizard.descHelper")}"
    ></wizard-textfield>`,
    C`<wizard-textfield
      label="nomFreq"
      .maybeValue=${n}
      nullable
      helper="${s("voltagelevel.wizard.nomFreqHelper")}"
      suffix="Hz"
      required
      validationMessage="${s("textfield.nonempty")}"
      pattern="${Rt.unsigned}"
    ></wizard-textfield>`,
    C`<wizard-textfield
      label="numPhases"
      .maybeValue=${i}
      nullable
      helper="${s("voltagelevel.wizard.numPhaseHelper")}"
      suffix="#"
      required
      validationMessage="${s("textfield.nonempty")}"
      type="number"
      min="1"
      max="255"
    ></wizard-textfield>`,
    C`<wizard-textfield
      label="Voltage"
      .maybeValue=${r}
      nullable
      unit="V"
      .multipliers=${[null, "G", "M", "k", "", "m"]}
      .multiplier=${o}
      helper="${s("voltagelevel.wizard.voltageHelper")}"
      required
      validationMessage="${s("textfield.nonempty")}"
      pattern="${Rt.decimal}"
    ></wizard-textfield>`
  ];
}
function nl(e) {
  return (t) => {
    const n = g(t.find((u) => u.label === "name")), i = g(t.find((u) => u.label === "desc")), r = g(t.find((u) => u.label === "nomFreq")), o = g(t.find((u) => u.label === "numPhases")), a = g(t.find((u) => u.label === "Voltage")), l = Vn(t.find((u) => u.label === "Voltage")), d = z(e.ownerDocument, "VoltageLevel", {
      name: n,
      desc: i,
      nomFreq: r,
      numPhases: o
    });
    if (a !== null) {
      const u = z(e.ownerDocument, "Voltage", {
        unit: "V",
        multiplier: l
      });
      u.textContent = a, d.appendChild(u);
    }
    return [
      {
        new: {
          parent: e,
          element: d
        }
      }
    ];
  };
}
function il(e) {
  return [
    {
      title: s("voltagelevel.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "add",
        label: s("add"),
        action: nl(e)
      },
      content: Nr(
        "",
        "",
        Ut.nomFreq,
        Ut.numPhases,
        Ut.Voltage,
        Ut.multiplier
      )
    }
  ];
}
function rl(e, t, n, i) {
  if (e === null) {
    const o = z(i.ownerDocument, "Voltage", {
      unit: "V",
      multiplier: n
    });
    return o.textContent = t, {
      new: {
        parent: i,
        element: o,
        reference: i.firstElementChild
      }
    };
  }
  if (t === null)
    return {
      old: {
        parent: i,
        element: e,
        reference: e.nextSibling
      }
    };
  const r = O(e, { multiplier: n });
  return r.textContent = t, {
    old: { element: e },
    new: { element: r }
  };
}
function ol(e) {
  return (t) => {
    const n = t.find((f) => f.label === "name").value, i = g(t.find((f) => f.label === "desc")), r = g(t.find((f) => f.label === "nomFreq")), o = g(t.find((f) => f.label === "numPhases")), a = g(t.find((f) => f.label === "Voltage")), l = Vn(t.find((f) => f.label === "Voltage"));
    let d, u;
    if (n === e.getAttribute("name") && i === e.getAttribute("desc") && r === e.getAttribute("nomFreq") && o === e.getAttribute("numPhases"))
      d = null;
    else {
      const f = O(e, {
        name: n,
        desc: i,
        nomFreq: r,
        numPhases: o
      });
      d = { old: { element: e }, new: { element: f } };
    }
    a === (e.querySelector("VoltageLevel > Voltage")?.textContent?.trim() ?? null) && l === (e.querySelector("VoltageLevel > Voltage")?.getAttribute("multiplier") ?? null) ? u = null : u = rl(
      e.querySelector("VoltageLevel > Voltage"),
      a,
      l,
      d?.new.element ?? e
    );
    const p = {
      actions: [],
      title: s("voltagelevel.action.updateVoltagelevel", { name: n })
    };
    return d && p.actions.push(d), u && p.actions.push(u), p.actions.push(
      ...Pn(e, e.getAttribute("name"), n)
    ), p.actions.length ? [p] : [];
  };
}
function al(e) {
  return [
    {
      title: s("voltagelevel.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: s("save"),
        action: ol(e)
      },
      content: Nr(
        e.getAttribute("name") ?? "",
        e.getAttribute("desc"),
        e.getAttribute("nomFreq"),
        e.getAttribute("numPhases"),
        e.querySelector("VoltageLevel > Voltage")?.textContent?.trim() ?? null,
        e.querySelector("VoltageLevel > Voltage")?.getAttribute("multiplier") ?? null
      )
    }
  ];
}
const Ir = "PTR";
function sl(e) {
  return (t) => {
    const n = g(t.find((a) => a.label === "name")), i = g(t.find((a) => a.label === "desc")), r = z(e.ownerDocument, "PowerTransformer", {
      name: n,
      desc: i,
      type: Ir
    });
    return [{
      new: {
        parent: e,
        element: r
      }
    }];
  };
}
function Dr(e, t, n, i) {
  return [
    c`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${s("powertransformer.wizard.nameHelper")}"
      required
      validationMessage="${s("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${i}
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${s("powertransformer.wizard.descHelper")}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="type"
      .maybeValue=${n}
      disabled
      helper="${s("powertransformer.wizard.typeHelper")}"
    ></wizard-textfield>`
  ];
}
function kr(e, t) {
  return Array.from(e.querySelectorAll("PowerTransformer")).filter(q).map((n) => n.getAttribute("name") ?? "").filter((n) => t && n !== t);
}
function cl(e) {
  const t = kr(e);
  return [
    {
      title: s("powertransformer.wizard.title.add"),
      element: void 0,
      primary: {
        icon: "",
        label: s("add"),
        action: sl(e)
      },
      content: Dr(
        "",
        null,
        Ir,
        t
      )
    }
  ];
}
function ll(e) {
  const t = kr(
    e.parentNode,
    e.getAttribute("name")
  );
  return [
    {
      title: s("powertransformer.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: s("save"),
        action: cr(e)
      },
      content: Dr(
        e.getAttribute("name"),
        e.getAttribute("desc"),
        e.getAttribute("type"),
        t
      )
    }
  ];
}
function dl(e) {
  return [
    c`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${s("subnetwork.wizard.nameHelper")}"
      required
      validationMessage="${s("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${s("subnetwork.wizard.descHelper")}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      nullable
      helper="${s("subnetwork.wizard.typeHelper")}"
      pattern="${Rt.normalizedString}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="BitRate"
      .maybeValue=${e.BitRate}
      nullable
      unit="b/s"
      .multipliers=${[null, "M"]}
      .multiplier=${e.multiplier}
      helper="${s("subnetwork.wizard.bitrateHelper")}"
      required
      validationMessage="${s("textfield.nonempty")}"
      pattern="${Rt.decimal}"
    ></wizard-textfield>`
  ];
}
function ul(e, t, n, i) {
  if (e === null) {
    const o = z(i.ownerDocument, "BitRate", {
      unit: "b/s"
    });
    return n && o.setAttribute("multiplier", n), t && (o.textContent = t), {
      new: {
        parent: i,
        element: o,
        reference: i.firstElementChild
      }
    };
  }
  if (t === null)
    return {
      old: {
        parent: i,
        element: e,
        reference: e.nextSibling
      }
    };
  const r = O(e, { multiplier: n });
  return r.textContent = t, {
    old: { element: e },
    new: { element: r }
  };
}
function ml(e) {
  return (t) => {
    const n = t.find((p) => p.label === "name").value, i = g(t.find((p) => p.label === "desc")), r = g(t.find((p) => p.label === "type")), o = g(t.find((p) => p.label === "BitRate")), a = Vn(t.find((p) => p.label === "BitRate"));
    let l, d;
    if (n === e.getAttribute("name") && i === e.getAttribute("desc") && r === e.getAttribute("type"))
      l = null;
    else {
      const p = O(e, { name: n, desc: i, type: r });
      l = { old: { element: e }, new: { element: p } };
    }
    o === (e.querySelector("SubNetwork > BitRate")?.textContent?.trim() ?? null) && a === (e.querySelector("SubNetwork > BitRate")?.getAttribute("multiplier") ?? null) ? d = null : d = ul(
      e.querySelector("SubNetwork > BitRate"),
      o,
      a,
      l?.new.element ?? e
    );
    const u = [];
    return l && u.push(l), d && u.push(d), u;
  };
}
function pl(e) {
  const t = e.getAttribute("name"), n = e.getAttribute("desc"), i = e.getAttribute("type"), r = e.querySelector("SubNetwork > BitRate")?.textContent?.trim() ?? null, o = e.querySelector("SubNetwork > BitRate")?.getAttribute("multiplier") ?? null;
  return [
    {
      title: s("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        icon: "save",
        label: s("save"),
        action: ml(e)
      },
      content: dl({ name: t, desc: n, type: i, BitRate: r, multiplier: o })
    }
  ];
}
const hl = [
  "ldInst",
  "lnClass",
  "lnInst",
  "prefix",
  "doName",
  "daName"
];
function fl(e) {
  return hl.map(
    (t) => e.getAttribute(t) ? `[${t}="${e.getAttribute(
      t
    )}"]` : ""
  ).join("");
}
const bl = ["srcLDInst", "srcLNClass", "srcLNInst", "srcCBName"];
function gl(e) {
  return bl.map(
    (t) => e.getAttribute(t) ? `[${t}="${e.getAttribute(t)}"]` : ""
  ).join("");
}
function yl(e) {
  if (!e.length) return [];
  const t = [], n = {};
  for (const i of e) {
    const r = i.old.element, o = i.old.parent, a = I(o);
    n[a] || (n[a] = o.cloneNode(!0));
    const l = n[a].querySelector(
      `ExtRef${r.getAttribute("iedName") ? `[iedName="${r.getAttribute("iedName")}"]` : ""}${fl(r)}${r.getAttribute("serviceType") ? `[serviceType="${r.getAttribute("serviceType")}"]` : ""}${gl(r)}`
    );
    l && n[a].removeChild(l);
  }
  return Object.entries(n).forEach(([i, r]) => {
    if (r.children.length == 0) {
      const o = e[0].old.parent.ownerDocument, a = Y(o, "Inputs", i);
      a && a.parentElement && t.push({
        old: { parent: a.parentElement, element: a }
      });
    }
  }), t;
}
const vl = "[A-Za-z][0-9A-Za-z_]{0,2}|[A-Za-z][0-9A-Za-z_]{4,63}|[A-MO-Za-z][0-9A-Za-z_]{3}|N[0-9A-Za-np-z_][0-9A-Za-z_]{2}|No[0-9A-Za-mo-z_][0-9A-Za-z_]|Non[0-9A-Za-df-z_]";
function wl(e, t, n, i, r, o, a, l, d) {
  return [
    c`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${s("ied.wizard.nameHelper")}"
      required
      validationMessage="${s("textfield.required")}"
      dialogInitialFocus
      .reservedValues=${d}
      pattern="${vl}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${s("ied.wizard.descHelper")}"
      pattern="${De.normalizedString}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="type"
      .maybeValue=${n || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="manufacturer"
      .maybeValue=${i || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="configVersion"
      .maybeValue=${r || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="originalSclVersion"
      .maybeValue=${o || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="engRight"
      .maybeValue=${a || "-"}
      readOnly
      disabled
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="owner"
      .maybeValue=${l || "-"}
      readOnly
      disabled
    ></wizard-textfield>`
  ];
}
function Al(e) {
  return [
    c` <section>
      <h1>${s("ied.wizard.title.references")}</h1>
      <mwc-list>
        ${e.map((t) => {
      const n = t.old.element;
      return c` <mwc-list-item noninteractive twoline>
            <span>${n.tagName}</span>
            <span slot="secondary"
              >${I(t.old.element)}</span
            >
          </mwc-list-item>`;
    })}
      </mwc-list>
    </section>`
  ];
}
function Sl(e) {
  return (e.getAttribute("originalSclVersion") ?? "").concat(e.getAttribute("originalSclRevision") ?? "").concat(e.getAttribute("originalSclRelease") ?? "");
}
function xl(e) {
  return Array.from(e.parentNode.querySelectorAll("IED")).filter(q).map((t) => t.getAttribute("name") ?? "").filter((t) => t !== e.getAttribute("name"));
}
function $l(e) {
  return (t, n) => {
    n.dispatchEvent(E());
    const i = sr(e), r = i.filter(
      (d) => d.old.element.tagName === "ExtRef"
    ), o = yl(r), a = e.getAttribute("name") ?? "Unknown", l = {
      actions: [],
      title: s("ied.action.deleteied", { name: a })
    };
    return l.actions.push({
      old: { parent: e.parentElement, element: e }
    }), l.actions.push(...i), l.actions.push(...o), [l];
  };
}
function zr(e) {
  const t = sr(e);
  return t.length > 0 ? [
    {
      title: s("ied.wizard.title.delete"),
      content: Al(t),
      primary: {
        icon: "delete",
        label: s("remove"),
        action: $l(e)
      }
    }
  ] : null;
}
function Cl(e) {
  function t(n) {
    return (i) => {
      const r = zr(n);
      r && i.dispatchEvent(ge(() => r)), i.dispatchEvent(
        K({ old: { parent: n.parentElement, element: n } })
      ), i.dispatchEvent(E());
    };
  }
  return [
    {
      title: s("ied.wizard.title.edit"),
      element: e,
      menuActions: [
        {
          icon: "delete",
          label: s("remove"),
          action: t(e)
        }
      ],
      primary: {
        icon: "edit",
        label: s("save"),
        action: lr(
          e,
          "ied.action.updateied"
        )
      },
      content: wl(
        e.getAttribute("name"),
        e.getAttribute("desc"),
        e.getAttribute("type"),
        e.getAttribute("manufacturer"),
        e.getAttribute("configVersion"),
        Sl(e),
        e.getAttribute("engRight"),
        e.getAttribute("owner"),
        xl(e)
      )
    }
  ];
}
const El = "[A-Za-z][0-9A-Za-z_]{0,2}|[A-Za-z][0-9A-Za-z_]{4,63}|[A-MO-Za-z][0-9A-Za-z_]{3}|N[0-9A-Za-np-z_][0-9A-Za-z_]{2}|No[0-9A-Za-mo-z_][0-9A-Za-z_]|Non[0-9A-Za-df-z_]";
function Nl(e, t, n, i) {
  return [
    t ? c`<wizard-textfield
          label="ldName"
          .maybeValue=${e}
          helper="${s("ldevice.wizard.noNameSupportHelper")}"
          helperPersistent
          readOnly
          disabled
        ></wizard-textfield>` : c`<wizard-textfield
          label="ldName"
          .maybeValue=${e}
          nullable
          helper="${s("ldevice.wizard.nameHelper")}"
          validationMessage="${s("textfield.required")}"
          dialogInitialFocus
          pattern="${El}"
        ></wizard-textfield>`,
    c`<wizard-textfield
      label="desc"
      .maybeValue=${n}
      nullable
      helper="${s("ldevice.wizard.descHelper")}"
      pattern="${De.normalizedString}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="ldInst"
      .maybeValue=${i}
      readOnly
      disabled
    ></wizard-textfield>`
  ];
}
function Il(e) {
  return !!e.closest("IED")?.querySelector("Services > ConfLdName");
}
function Dl(e) {
  return (t) => {
    const n = {}, i = ["ldName", "desc"];
    if (i.forEach((r) => {
      n[r] = g(t.find((o) => o.label === r));
    }), i.some((r) => n[r] !== e.getAttribute(r))) {
      const r = O(e, n);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function kl(e) {
  return [
    {
      title: s("ldevice.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: s("save"),
        action: Dl(e)
      },
      content: Nl(
        e.getAttribute("ldName"),
        !Il(e),
        e.getAttribute("desc"),
        e.getAttribute("inst")
      )
    }
  ];
}
function Lr(e) {
  return Object.entries(e).map(
    ([t, n]) => c`<wizard-checkbox
        label="${t}"
        .maybeValue=${n}
        nullable
        helper="${s(`scl.${t}`)}"
      ></wizard-checkbox>`
  );
}
function zl(e) {
  return (t) => {
    const n = g(t.find((u) => u.label === "dchg")), i = g(t.find((u) => u.label === "qchg")), r = g(t.find((u) => u.label === "dupd")), o = g(t.find((u) => u.label === "period")), a = g(t.find((u) => u.label === "gi"));
    if (n === e.getAttribute("dchg") && i === e.getAttribute("qchg") && r === e.getAttribute("dupd") && o === e.getAttribute("period") && a === e.getAttribute("gi"))
      return [];
    const l = O(e, {
      dchg: n,
      qchg: i,
      dupd: r,
      period: o,
      gi: a
    });
    return [{ old: { element: e }, new: { element: l } }];
  };
}
function Tr(e) {
  const [t, n, i, r, o] = [
    "dchg",
    "qchg",
    "dupd",
    "period",
    "gi"
  ].map((a) => e.getAttribute(a));
  return [
    {
      title: s("wizard.title.edit", { tagName: e.tagName }),
      primary: {
        icon: "save",
        label: s("save"),
        action: zl(e)
      },
      content: Lr({ dchg: t, qchg: n, dupd: i, period: r, gi: o })
    }
  ];
}
const Ll = [
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
], Tl = [
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
], _l = ["Spec", "Conf", "RO", "Set"], Vl = ["SmpPerPeriod", "SmpPerSec", "SecPerSmp"], _r = [
  "None",
  "Signature",
  "SignatureAndEncryption"
];
function Pl(e, t, n) {
  if (!e.target || !e.target.parentElement) return;
  const i = e.target.selected?.value;
  if (e.target.parentElement.querySelector(
    'wizard-select[label="bType"]'
  ).value !== "Enum") return;
  const o = Array.from(
    t.querySelectorAll(`EnumType[id="${i}"] > EnumVal`)
  ).map(
    (l) => C`<mwc-list-item
        value="${l.textContent?.trim() ?? ""}"
        ?selected=${l.textContent?.trim() === n}
        >${l.textContent?.trim()}</mwc-list-item
      >`
  ), a = e.target.parentElement.querySelector(
    'wizard-select[label="Val"]'
  );
  _i(C`${o}`, a), a.requestUpdate();
}
function Rl(e, t, n) {
  const i = e.target.selected.value, r = e.target.parentElement.querySelector(
    'wizard-select[label="type"]'
  );
  r.disabled = !(i === "Enum" || i === "Struct");
  const o = [];
  Array.from(r.children).forEach((d) => {
    const u = d;
    u.disabled = !d.classList.contains(i), u.noninteractive = !d.classList.contains(i), u.style.display = d.classList.contains(i) ? "" : "none", u.disabled || o.push(u);
  }), r.value = o.length ? o[0].value : "";
  const a = e.target.parentElement.querySelector(
    'wizard-select[label="Val"]'
  );
  i === "Enum" ? a.style.display = "" : a.style.display = "none";
  const l = e.target.parentElement.querySelector(
    'wizard-textfield[label="Val"]'
  );
  i === "Enum" || i === "Struct" ? l.style.display = "none" : l.style.display = "", a.requestUpdate(), l.requestUpdate(), r.requestUpdate();
}
function ql(e, t, n, i, r, o, a, l, d, u) {
  return [
    C`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${s("scl.name")}"
      required
      pattern="${De.abstractDataAttributeName}"
      maxLength="${nn.abstracDaName}"
      dialogInitialFocus
    >
      ></wizard-textfield
    >`,
    C`<wizard-textfield
      label="desc"
      helper="${s("scl.desc")}"
      .maybeValue=${t}
      nullable
      pattern="${De.normalizedString}"
    ></wizard-textfield>`,
    C`<wizard-select
      fixedMenuPosition
      label="bType"
      .value=${n}
      helper="${s("scl.bType")}"
      required
      @selected=${(p) => Rl(p)}
      >${Tl.map(
      (p) => C`<mwc-list-item value="${p}"
            >${p}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    C`<wizard-select
      label="type"
      .maybeValue=${r}
      helper="${s("scl.type")}"
      fixedMenuPosition
      @selected=${(p) => Pl(p, u, d)}
      >${i.map(
      (p) => C`<mwc-list-item
            class="${p.tagName === "EnumType" ? "Enum" : "Struct"}"
            value=${p.id}
            >${p.id}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    C`<wizard-textfield
      label="sAddr"
      .maybeValue=${o}
      helper="${s("scl.sAddr")}"
      nullable
      pattern="${De.normalizedString}"
    ></wizard-textfield>`,
    C`<wizard-select
      label="valKind"
      .maybeValue=${a}
      helper="${s("scl.valKind")}"
      nullable
      required
      fixedMenuPosition
      >${_l.map(
      (p) => C`<mwc-list-item value="${p}"
            >${p}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    C`<wizard-checkbox
      label="valImport"
      .maybeValue=${l}
      helper="${s("scl.valImport")}"
      nullable
      required
    ></wizard-checkbox>`,
    C`<wizard-select
      label="Val"
      .maybeValue=${d}
      helper="${s("scl.Val")}"
      nullable
      >${Array.from(
      u.querySelectorAll(`EnumType > EnumVal[id="${r}"]`)
    ).map(
      (p) => C`<mwc-list-item value="${p.textContent?.trim() ?? ""}"
            >${p.textContent?.trim()}</mwc-list-item
          >`
    )}</wizard-select
    >`,
    C`<wizard-textfield
      label="Val"
      .maybeValue=${d}
      helper="${s("scl.Val")}"
      nullable
    ></wizard-textfield>`
  ];
}
function Ml(e, t, n, i) {
  return [
    C`<wizard-select
      label="fc"
      .maybeValue=${e}
      helper="${s("scl.fc")}"
      required
      fixedMenuPosition
      >${Ll.map(
      (r) => C`<mwc-list-item value="${r}">${r}</mwc-list-item>`
    )}</wizard-select
    >`,
    C`<wizard-checkbox
      label="dchg"
      .maybeValue=${t}
      helper="${s("scl.dchg")}"
      nullable
    ></wizard-checkbox>`,
    C`<wizard-checkbox
      label="qchg"
      .maybeValue=${n}
      helper="${s("scl.qchg")}"
      nullable
    ></wizard-checkbox>`,
    C`<wizard-checkbox
      label="dupd"
      .maybeValue=${i}
      helper="${s("scl.dupd")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function Ol(e) {
  return (t) => {
    const n = g(t.find((A) => A.label === "name")), i = g(t.find((A) => A.label === "desc")), r = g(t.find((A) => A.label === "bType")), o = r === "Enum" || r === "Struct" ? g(t.find((A) => A.label === "type")) : null, a = g(t.find((A) => A.label === "sAddr")), l = g(t.find((A) => A.label === "valKind")), d = g(t.find((A) => A.label === "valImport")), u = t.find(
      (A) => A.label === "Val" && A.style.display !== "none"
    ), p = u ? g(u) : null, f = g(t.find((A) => A.label === "fc")) ?? "", b = g(t.find((A) => A.label === "dchg")), y = g(t.find((A) => A.label === "qchg")), v = g(t.find((A) => A.label === "dupd")), k = [], L = z(e.ownerDocument, "DA", {
      name: n,
      desc: i,
      bType: r,
      type: o,
      sAddr: a,
      valKind: l,
      valImport: d,
      fc: f,
      dchg: b,
      qchg: y,
      dupd: v
    });
    if (p !== null) {
      const A = z(e.ownerDocument, "Val", {});
      A.textContent = p, L.appendChild(A);
    }
    return k.push({
      new: {
        parent: e,
        element: L
      }
    }), k;
  };
}
function Fl(e) {
  const t = e.ownerDocument, n = "", i = null, r = "", o = null, a = null, l = null, d = null, u = null, p = "", f = null, b = null, y = null, v = Array.from(t.querySelectorAll("DAType, EnumType")).filter(q).filter((L) => L.getAttribute("id")), k = e.closest("DataTypeTemplates");
  return [
    {
      title: s("da.wizard.title.edit"),
      primary: {
        icon: "",
        label: s("save"),
        action: Ol(e)
      },
      content: [
        ...ql(
          n,
          i,
          r,
          v,
          o,
          a,
          d,
          u,
          l,
          k
        ),
        ...Ml(p, f, b, y)
      ]
    }
  ];
}
const fe = (e, t) => e === null ? "" : t;
function Vr() {
  return {
    BOOLEAN: e(),
    Enum: t(),
    FLOAT32: n("FLOAT32", -4294967296, 2 ** 32 - 1),
    FLOAT64: n("FLOAT64", -18446744073709552e3, 2 ** 64 - 1),
    INT8: i("INT8", -256, 2 ** 8 - 1),
    INT16: i("INT16", -65536, 2 ** 16 - 1),
    INT24: i("INT24", -16777216, 2 ** 24 - 1),
    INT32: i("INT32", -4294967296, 2 ** 32 - 1),
    INT64: i("INT64", -18446744073709552e3, 2 ** 64 - 1),
    INT128: i("INT128", -3402823669209385e23, 2 ** 128 - 1),
    INT8U: i("INT8U", 0, 2 ** 8 - 1),
    INT16U: i("INT16U", 0, 2 ** 16 - 1),
    INT24U: i("INT24U", 0, 2 ** 24 - 1),
    INT32U: i("INT32U", 0, 2 ** 32 - 1),
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
  function e() {
    return {
      render: (d, u, p = null) => (p ? [...Array(p)] : [p]).map((f, b) => C`<wizard-select
            id="Val${fe(f, `${b + 1}`)}"
            label="Val${fe(f, ` for sGroup ${b + 1}`)}"
            .maybeValue=${a(u)}
            fixedMenuPosition
          >
            <mwc-list-item value="true">true</mwc-list-item>
            <mwc-list-item value="false">false</mwc-list-item>
          </wizard-select>`),
      value: (d, u) => g(
        d.find((p) => p.id === `Val${u || ""}`)
      )
    };
  }
  function t() {
    return {
      render: (d, u, p = null) => (p ? [...Array(p)] : [p]).map((f, b) => C`<wizard-select
            id="Val${fe(f, `${b + 1}`)}"
            label="Val${fe(f, ` for sGroup ${b + 1}`)}"
            .maybeValue=${a(u)}
            fixedMenuPosition
          >
            ${l(d).map((y) => C`<mwc-list-item value="${y}"
                >${y}</mwc-list-item
              >`)}
          </wizard-select>`),
      value: (d, u) => g(
        d.find((p) => p.id === `Val${u || ""}`)
      )
    };
  }
  function n(d, u, p) {
    return {
      render: (f, b, y = null) => (y ? [...Array(y)] : [y]).map((v, k) => C`<wizard-textfield
            id="Val${fe(v, `${k + 1}`)}"
            label="Val${fe(v, ` for sGroup ${k + 1}`)}"
            .maybeValue=${a(b)}
            helper="${s("dai.wizard.valueHelper", { type: d })}"
            type="number"
            min=${u}
            max=${p}
            step="0.1"
          >
          </wizard-textfield>`),
      value: (f, b) => g(
        f.find((y) => y.id === `Val${b || ""}`)
      )
    };
  }
  function i(d, u, p) {
    return {
      render: (f, b, y = null) => (y ? [...Array(y)] : [y]).map((v, k) => C`<wizard-textfield
            id="Val${fe(v, `${k + 1}`)}"
            label="Val${fe(v, ` for sGroup ${k + 1}`)}"
            .maybeValue=${a(b)}
            helper="${s("dai.wizard.valueHelper", { type: d })}"
            type="number"
            min=${u}
            max=${p}
          >
          </wizard-textfield>`),
      value: (f, b) => g(
        f.find((y) => y.id === `Val${b || ""}`)
      )
    };
  }
  function r() {
    return {
      render: (d, u, p = null) => {
        const f = a(u);
        return (p ? [...Array(p)] : [p]).reduce(
          (b, y, v) => b.concat([
            C`<wizard-textfield
                id="ValDate${fe(y, `${v + 1}`)}"
                label="Val (Date)${fe(y, ` for sGroup ${v + 1}`)}"
                .maybeValue=${Hl(f)}
                type="date"
              >
              </wizard-textfield>`,
            C`<wizard-textfield
                id="ValTime${fe(y, `${v + 1}`)}"
                label="Val (Time)${fe(y, ` for sGroup ${v + 1}`)}"
                .maybeValue=${Bl(f)}
                type="time"
                step="1"
              >
              </wizard-textfield>`
          ]),
          []
        );
      },
      value: (d, u) => {
        const p = [`ValDate${u || ""}`, `ValTime${u || ""}`].map(
          (y) => g(d.find((v) => v.id === y))
        ), f = p[0] ? p[0] : "0000-00-00", b = p[1] ? p[1] : "00:00:00";
        return f + "T" + b + ".000";
      }
    };
  }
  function o(d, u) {
    return {
      render: (p, f, b = null) => (b ? [...Array(b)] : [b]).map((y, v) => C`<wizard-textfield
            id="Val${fe(y, ` ${v + 1}`)}"
            label="Val${fe(y, ` for sGroup ${v + 1}`)}"
            .maybeValue=${a(f)}
            helper="${s("dai.wizard.valueHelper", { type: d })}"
            maxLength=${u}
            type="text"
          >
          </wizard-textfield>`),
      value: (p, f) => g(
        p.find((b) => b.id === `Val${f || ""}`)
      )
    };
  }
  function a(d) {
    return (d?.querySelector("Val") ? d?.querySelector("Val") : d)?.textContent?.trim() ?? "";
  }
  function l(d) {
    const u = d.getAttribute("type"), p = [];
    return Array.from(
      d.ownerDocument.querySelectorAll(
        `EnumType[id="${u}"] > EnumVal`
      )
    ).filter(
      (f) => f.textContent && f.textContent !== ""
    ).sort(
      (f, b) => parseInt(f.getAttribute("ord") ?? "0") - parseInt(b.getAttribute("ord") ?? "0")
    ).forEach((f) => {
      p.push(f.textContent ?? "");
    }), p;
  }
}
function Hl(e) {
  let n = e.split("T")[0];
  return /^\d{4}-\d{2}-\d{2}$/.test(n) || (n = null), n === "0000-00-00" && (n = null), n;
}
function Bl(e) {
  const t = e.split("T");
  let n = null;
  return t.length == 2 && (n = t[1], n.length > 8 && (n = n.substring(0, 8)), /^\d{2}:\d{2}:\d{2}$/.test(n) || (n = null), n === "00:00:00" && (n = null)), n;
}
function Wl(e, t) {
  return (n) => {
    const i = e.getAttribute("bType"), r = Vr()[i].value(n), o = t.parentElement?.getAttribute("name") ?? "", a = {
      actions: [],
      title: s("dai.action.updatedai", { daiName: o })
    }, l = t.cloneNode(!1);
    return l.textContent = r, a.actions.push({
      old: { element: t },
      new: { element: l }
    }), [a];
  };
}
function Gl(e, t, n = null) {
  const i = e.getAttribute("bType"), r = e.querySelector("Val")?.textContent?.trim() ?? "";
  return [
    c` ${Vr()[i].render(
      e,
      t,
      n
    )}
    ${r ? c`<wizard-textfield
          id="daVal"
          label="DA Template Value"
          .maybeValue=${r}
          readonly
          disabled
        >
        </wizard-textfield>` : $t}`
  ];
}
function jl(e, t) {
  const n = t?.tagName === "DAI" ? t?.getAttribute("name") ?? "" : t?.parentElement?.getAttribute("name") ?? "";
  return [
    {
      title: s("dai.wizard.title.edit", {
        daiName: n
      }),
      element: t,
      primary: {
        icon: "edit",
        label: s("save"),
        action: Wl(e, t)
      },
      content: Gl(e, t)
    }
  ];
}
function Ul(e) {
  return (t) => {
    t.dispatchEvent(ge(() => br(e)));
  };
}
function Kl(e) {
  return (t, n) => {
    const i = t.find((u) => u.label === "name").value, r = g(t.find((u) => u.label === "desc")), o = e.getAttribute("name"), a = [];
    if (!(i === o && r === e.getAttribute("desc"))) {
      const u = O(e, { name: i, desc: r });
      a.push({
        old: { element: e },
        new: { element: u }
      });
    }
    const l = i !== o ? Array.from(
      e.parentElement?.querySelectorAll(
        `ReportControlBock[datSet=${o}], GSEControl[datSet=${o}],SampledValueControl[datSet=${o}] `
      ) ?? []
    ).map((u) => {
      const p = O(u, { datSet: i });
      return { old: { element: u }, new: { element: p } };
    }) : [];
    return [
      ...Array.from(
        n.shadowRoot.querySelectorAll(
          "filtered-list > mwc-check-list-item:not([selected])"
        )
      ).map((u) => Y(e, "FCDA", u.value)).filter((u) => u).map((u) => ({
        old: {
          parent: e,
          element: u,
          reference: u.nextSibling
        }
      })),
      ...a,
      ...l
    ];
  };
}
function Hn(e) {
  const t = e.getAttribute("name"), n = e.getAttribute("desc");
  return [
    {
      title: s("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        label: s("save"),
        icon: "save",
        action: Kl(e)
      },
      menuActions: [
        {
          icon: "add",
          label: s("dataset.fcda.add"),
          action: Ul(e)
        }
      ],
      content: [
        c`<wizard-textfield
          label="name"
          .maybeValue=${t}
          helper="${s("scl.name")}"
          required
          disabled="true"
        >
        </wizard-textfield>`,
        c`<wizard-textfield
          label="desc"
          .maybeValue=${n}
          helper="${s("scl.desc")}"
          nullable
          required
        >
        </wizard-textfield>`,
        c`<filtered-list multi
          >${Array.from(e.querySelectorAll("FCDA")).map(
          (i) => c`<mwc-check-list-item selected value="${I(i)}"
                >${I(i).split(">").pop()}</mwc-check-list-item
              >`
        )}</filtered-list
        >`
      ]
    }
  ];
}
const j = {
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
}, Zl = {
  IP: j.IP,
  "IP-SUBNET": j.IP,
  "IP-GATEWAY": j.IP,
  "OSI-TSEL": j.OSI,
  "OSI-SSEL": j.OSI,
  "OSI-PSEL": j.OSI,
  "OSI-AP-Title": j.OSIAPi,
  "OSI-AP-Invoke": j.OSId,
  "OSI-AE-Qualifier": j.OSId,
  "OSI-AE-Invoke": j.OSId,
  "MAC-Address": j.MAC,
  APPID: j.APPID,
  "VLAN-ID": j.VLANid,
  "VLAN-PRIORITY": j.VLANp,
  "OSI-NSAP": j.OSI,
  "SNTP-Port": j.port,
  "MMS-Port": j.port,
  DNSName: "[^ ]*",
  "UDP-Port": j.port,
  "TCP-Port": j.port,
  "C37-118-IP-Port": "102[5-9]|10[3-9][0-9]|1[1-9][0-9][0-9]|[2-9][0-9]{3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]",
  IPv6: j.IPv6,
  "IPv6-SUBNET": j.IPv6sub,
  "IPv6-GATEWAY": j.IPv6,
  IPv6FlowLabel: "[0-9a-fA-F]{1,5}",
  IPv6ClassOfTraffic: "[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]",
  "IPv6-IGMPv3Src": j.IPv6,
  "IP-IGMPv3Sr": j.IP,
  "IP-ClassOfTraffic": j.OSI
}, Xl = {
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
function rn(e) {
  return [
    C`<mwc-formfield label="${s("connectedap.wizard.addschemainsttype")}">
      <mwc-checkbox
        id="instType"
        ?checked="${e.hasInstType}"
      ></mwc-checkbox>
    </mwc-formfield>`,
    C`${Object.entries(e.attributes).map(
      ([t, n]) => C`<wizard-textfield
          label="${t}"
          ?nullable=${Xl[t]}
          .maybeValue=${n}
          pattern="${Fe(Zl[t])}"
          required
        ></wizard-textfield>`
    )}`
  ];
}
function Ql(e, t) {
  return e.querySelectorAll("P").length !== t.querySelectorAll("P").length ? !1 : Array.from(e.querySelectorAll("P")).filter(
    (n) => !t.querySelector(`Address > P[type="${n.getAttribute("type")}"]`)?.isEqualNode(n)
  ).length === 0;
}
function Bn(e, t, n) {
  const i = z(t.ownerDocument, "Address", {});
  return Object.entries(e).filter(([r, o]) => o !== null).forEach(([r, o]) => {
    const a = r, l = z(t.ownerDocument, "P", { type: a });
    n && l.setAttributeNS(
      "http://www.w3.org/2001/XMLSchema-instance",
      "xsi:type",
      "tP_" + r
    ), l.textContent = o, i.appendChild(l);
  }), i;
}
function Pr(e, t, n) {
  const i = [], r = Bn(t, e, n), o = e.querySelector("Address");
  return o !== null && !Ql(o, r) ? (i.push({
    old: {
      parent: e,
      element: o,
      reference: o.nextSibling
    }
  }), i.push({
    new: {
      parent: e,
      element: r,
      reference: o.nextSibling
    }
  })) : o === null && i.push({
    new: {
      parent: e,
      element: r
    }
  }), i;
}
function Ai(e, t, n, i) {
  if (t === null) {
    const o = z(i.ownerDocument, e, {
      unit: "s",
      multiplier: "m"
    });
    return o.textContent = n, {
      new: {
        parent: i,
        element: o,
        reference: i.firstElementChild
      }
    };
  }
  if (n === null)
    return {
      old: {
        parent: i,
        element: t,
        reference: t.nextSibling
      }
    };
  const r = t.cloneNode(!1);
  return r.textContent = n, {
    old: { element: t },
    new: { element: r }
  };
}
function Yl(e) {
  return (t, n) => {
    const i = {
      actions: [],
      title: s("gse.action.addaddress", {
        identity: I(e)
      })
    }, r = n.shadowRoot?.querySelector("#instType")?.checked ?? !1, o = {};
    o["MAC-Address"] = g(
      t.find((u) => u.label === "MAC-Address")
    ), o.APPID = g(t.find((u) => u.label === "APPID")), o["VLAN-ID"] = g(
      t.find((u) => u.label === "VLAN-ID")
    ), o["VLAN-PRIORITY"] = g(
      t.find((u) => u.label === "VLAN-PRIORITY")
    ), Pr(e, o, r).forEach((u) => {
      i.actions.push(u);
    });
    const l = g(t.find((u) => u.label === "MinTime")), d = g(t.find((u) => u.label === "MaxTime"));
    return l !== (e.querySelector("MinTime")?.textContent?.trim() ?? null) && i.actions.push(
      Ai(
        "MinTime",
        e.querySelector("MinTime"),
        l,
        e
      )
    ), d !== (e.querySelector("MaxTime")?.textContent?.trim() ?? null) && i.actions.push(
      Ai(
        "MaxTime",
        e.querySelector("MaxTime"),
        d,
        e
      )
    ), [i];
  };
}
function Jl(e) {
  const t = e.querySelector("MinTime")?.innerHTML.trim() ?? null, n = e.querySelector("MaxTime")?.innerHTML.trim() ?? null, i = Array.from(e.querySelectorAll("Address > P")).some(
    (o) => o.getAttribute("xsi:type")
  ), r = {};
  return ["MAC-Address", "APPID", "VLAN-ID", "VLAN-PRIORITY"].forEach((o) => {
    r[o] || (r[o] = e.querySelector(`Address > P[type="${o}"]`)?.innerHTML.trim() ?? null);
  }), [
    {
      title: s("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        label: s("save"),
        icon: "save",
        action: Yl(e)
      },
      content: [
        ...rn({ hasInstType: i, attributes: r }),
        c`<wizard-textfield
          label="MinTime"
          .maybeValue=${t}
          nullable
          suffix="ms"
          type="number"
        ></wizard-textfield>`,
        c`<wizard-textfield
          label="MaxTime"
          .maybeValue=${n}
          nullable
          suffix="ms"
          type="number"
        ></wizard-textfield>`
      ]
    }
  ];
}
function Wn(e) {
  return e.ownerDocument.querySelector(
    `:root > Communication > SubNetwork > ConnectedAP[iedName="${e.closest("IED")?.getAttribute("name")}"][apName="${e.closest("AccessPoint")?.getAttribute("name")}"]`
  );
}
function on(e) {
  return !!Wn(e);
}
function ed(e) {
  const t = e.split("-").join("");
  return ("0" + (parseInt(t, 16) + 1).toString(16).toUpperCase()).match(/.{1,2}/g).join("-");
}
function Rr(e, t) {
  const n = t === "GOOSE" ? "01-0C-CD-01-01-FF" : "01-0C-CD-04-01-FF", i = t === "GOOSE" ? "01-0C-CD-01-00-00" : "01-0C-CD-04-00-00", r = Array.from(e.querySelectorAll("Address > P")).filter((a) => a.getAttribute("type") === "MAC-Address").map((a) => a.innerHTML.trim());
  let o = i;
  for (; o !== n; ) {
    if (!r.includes(o)) return o;
    o = ed(o);
  }
  return r.includes(o) ? null : o;
}
function td(e) {
  return (parseInt(e, 16) + 1).toString(16).toUpperCase().padStart(4, "0");
}
function qr(e) {
  const t = "FFFF", n = "0001", i = Array.from(e.querySelectorAll("Address > P")).filter((o) => o.getAttribute("type") === "APPID").map((o) => o.innerHTML.trim());
  if (i.length === 0) return null;
  let r = n;
  for (; r !== t; ) {
    if (!i.includes(r)) return r;
    r = td(r);
  }
  return i.includes(r) ? null : r;
}
function Mr(e) {
  const t = e.getAttribute("name"), n = e.closest("IED")?.getAttribute("name"), i = e.closest("AccessPoint")?.getAttribute("name"), r = e.closest("LDevice")?.getAttribute("inst");
  return e.closest("SCL")?.querySelector(
    `:root > Communication > SubNetwork > ConnectedAP[iedName="${n}"][apName="${i}"] > GSE[ldInst="${r}"][cbName="${t}"]`
  );
}
function In(e) {
  return [
    c`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${s("scl.name")}"
      required
      validationMessage="${s("textfield.required")}"
      pattern="${De.asciName}"
      maxLength="${nn.cbName}"
      dialogInitialFocus
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${s("scl.desc")}"
    ></wizard-textfield>`,
    c`<wizard-select
      label="type"
      .maybeValue=${e.type}
      helper="${s("scl.type")}"
      nullable
      required
      >${["GOOSE", "GSSE"].map(
      (t) => c`<mwc-list-item value="${t}">${t}</mwc-list-item>`
    )}</wizard-select
    >`,
    c`<wizard-textfield
      label="appID"
      .maybeValue=${e.appID}
      helper="${s("scl.id")}"
      required
      validationMessage="${s("textfield.nonempty")}"
    ></wizard-textfield>`,
    c`<wizard-checkbox
      label="fixedOffs"
      .maybeValue=${e.fixedOffs}
      nullable
      helper="${s("scl.fixedOffs")}"
    ></wizard-checkbox>`,
    c`<wizard-select
      label="securityEnabled"
      .maybeValue=${e.securityEnabled}
      nullable
      required
      helper="${s("scl.securityEnable")}"
      >${_r.map(
      (t) => c`<mwc-list-item value="${t}">${t}</mwc-list-item>`
    )}</wizard-select
    >`
  ];
}
function Si(e) {
  return (t, n) => {
    const i = [], r = {};
    [
      "name",
      "desc",
      "type",
      "appID",
      "fixedOffs",
      "securityEnabled"
    ].forEach((f) => {
      r[f] = g(t.find((b) => b.label === f));
    }), r.confRev = "1";
    const a = r.name + "sDataSet";
    r.datSet = a;
    const l = z(
      e.ownerDocument,
      "GSEControl",
      r
    );
    if (i.push({ new: { parent: e, element: l } }), on(e)) {
      const f = Wn(e), b = z(e.ownerDocument, "GSE", {
        ldInst: e.closest("LDevice")?.getAttribute("inst") ?? "",
        cbName: r.name
      });
      i.push({ new: { parent: f, element: b } });
      const y = n.shadowRoot?.querySelector("#instType")?.checked ?? !1, v = {};
      ["MAC-Address", "APPID", "VLAN-ID", "VLAN-PRIORITY"].forEach((W) => {
        v[W] = g(t.find((de) => de.label === W));
      });
      const L = Bn(v, b, y);
      i.push({ new: { parent: b, element: L } });
      const A = g(t.find((W) => W.label === "MinTime")), H = z(e.ownerDocument, "MinTime", {
        unit: "s",
        multiplier: "m"
      });
      H.textContent = A, i.push({ new: { parent: b, element: H } });
      const B = g(t.find((W) => W.label === "MaxTime")), J = z(e.ownerDocument, "MaxTime", {
        unit: "s",
        multiplier: "m"
      });
      J.textContent = B, i.push({ new: { parent: b, element: J } });
    }
    const d = z(e.ownerDocument, "DataSet", {
      name: a
    });
    i.push({ new: { parent: e, element: d } });
    const p = n.shadowRoot.querySelector("finder-list")?.paths ?? [];
    for (const f of p) {
      const b = tn(e, f);
      b && i.push({ new: { parent: d, element: b } });
    }
    return [
      {
        title: s("editing.created", { name: "GSEControl" }),
        actions: i
      }
    ];
  };
}
function Or(e) {
  const t = e.closest("Server"), n = Yt(e, "GSEControl"), i = null, r = "GOOSE", o = "", a = null, l = null, d = !0, u = {
    "MAC-Address": Rr(e.ownerDocument, "GOOSE"),
    APPID: qr(e.ownerDocument),
    "VLAN-ID": null,
    "VLAN-PRIORITY": null
  };
  return on(e) ? [
    {
      title: s("wizard.title.add", { tagName: "GSEControl" }),
      content: In({
        name: n,
        desc: i,
        type: r,
        appID: o,
        fixedOffs: a,
        securityEnabled: l
      })
    },
    {
      title: s("wizard.title.add", { tagName: "GSE" }),
      content: [
        ...rn({ hasInstType: d, attributes: u }),
        c`<wizard-textfield
              label="MinTime"
              .maybeValue=${"10"}
              nullable
              suffix="ms"
              type="number"
            ></wizard-textfield>`,
        c`<wizard-textfield
              label="MaxTime"
              .maybeValue=${"1000"}
              nullable
              suffix="ms"
              type="number"
            ></wizard-textfield>`
      ]
    },
    {
      title: s("dataset.fcda.add"),
      primary: {
        icon: "save",
        label: s("save"),
        action: Si(e)
      },
      content: [t ? Zt(t) : c``]
    }
  ] : [
    {
      title: s("wizard.title.add", { tagName: "GSEControl" }),
      content: In({
        name: n,
        desc: i,
        type: r,
        appID: o,
        fixedOffs: a,
        securityEnabled: l
      })
    },
    {
      title: s("wizard.title.add", { tagName: "GSE" }),
      content: [
        c`<h3
              style="color: var(--mdc-theme-on-surface);
                      font-family: 'Roboto', sans-serif;
                      font-weight: 300;"
            >
              ${s("gse.missingaccp")}
            </h3>`
      ]
    },
    {
      title: s("dataset.fcda.add"),
      primary: {
        icon: "save",
        label: s("save"),
        action: Si(e)
      },
      content: [t ? Zt(t) : c``]
    }
  ];
}
function nd(e) {
  return (t, n) => {
    const r = n.shadowRoot?.querySelector("finder-list")?.path ?? [];
    if (r.length === 0) return [];
    const [o, a] = r.pop().split(": ");
    if (o !== "IED") return [];
    const l = Y(e, o, a);
    if (!l) return [];
    const d = l.querySelector("LN0");
    return d ? [() => Or(d)] : [];
  };
}
function id(e) {
  return [
    {
      title: s("gsecontrol.wizard.location"),
      primary: {
        icon: "",
        label: s("next"),
        action: nd(e)
      },
      content: [On(e)]
    }
  ];
}
function rd(e) {
  return () => e.tagName === "IED" && e.querySelector("LN0") ? [() => Or(e.querySelector("LN0"))] : [() => id(e.ownerDocument)];
}
function od(e) {
  if (!e.parentElement) return null;
  const t = e.parentElement.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), n = Mr(e), i = Array.from(
    e.parentElement?.querySelectorAll(
      "ReportControl, GSEControl, SampledValueControl"
    ) ?? []
  ).filter(
    (l) => l.getAttribute("datSet") === t?.getAttribute("name")
  ).length <= 1, r = [];
  r.push({
    old: {
      parent: e.parentElement,
      element: e,
      reference: e.nextSibling
    }
  }), t && i && r.push({
    old: {
      parent: e.parentElement,
      element: t,
      reference: t.nextSibling
    }
  }), n && r.push({
    old: {
      parent: n.parentElement,
      element: n,
      reference: n.nextSibling
    }
  });
  const o = e.getAttribute("name"), a = e.closest("IED")?.getAttribute("name") ?? "";
  return {
    title: s("controlblock.action.remove", {
      type: e.tagName,
      name: o,
      iedName: a
    }),
    actions: r
  };
}
function ad(e) {
  return (t) => {
    const n = od(e);
    n && t.dispatchEvent(K(n)), t.dispatchEvent(E());
  };
}
function sd(e) {
  return (t) => {
    t.dispatchEvent(ge(() => Hn(e)));
  };
}
function cd(e) {
  return (t) => {
    t.dispatchEvent(ge(() => Jl(e)));
  };
}
function ld(e) {
  return (t) => {
    const n = t.find((u) => u.label === "name").value, i = g(t.find((u) => u.label === "desc")), r = g(t.find((u) => u.label === "type")), o = g(t.find((u) => u.label === "appID")), a = g(t.find((u) => u.label === "fixedOffs")), l = g(
      t.find((u) => u.label === "securityEnabled")
    );
    if (n === e.getAttribute("name") && i === e.getAttribute("desc") && r === e.getAttribute("type") && o === e.getAttribute("appID") && a === e.getAttribute("fixedOffs") && l === e.getAttribute("securityEnabled"))
      return [];
    const d = O(e, {
      name: n,
      desc: i,
      type: r,
      appID: o,
      fixedOffs: a,
      securityEnabled: l
    });
    return [{ old: { element: e }, new: { element: d } }];
  };
}
function Fr(e) {
  const t = e.getAttribute("name"), n = e.getAttribute("desc"), i = e.getAttribute("type"), r = e.getAttribute("appID"), o = e.getAttribute("fixedOffs"), a = e.getAttribute("securityEnabled"), l = Mr(e), d = e.parentElement?.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), u = [];
  return u.push({
    icon: "delete",
    label: s("remove"),
    action: ad(e)
  }), d && u.push({
    icon: "edit",
    label: s("scl.DataSet"),
    action: sd(d)
  }), l && u.push({
    icon: "edit",
    label: s("scl.Communication"),
    action: cd(l)
  }), [
    {
      title: s("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        icon: "save",
        label: s("save"),
        action: ld(e)
      },
      menuActions: u,
      content: [
        ...In({
          name: t,
          desc: n,
          type: i,
          appID: r,
          fixedOffs: o,
          securityEnabled: a
        })
      ]
    }
  ];
}
function Hr(e) {
  const t = Array.from(e.querySelectorAll("GSEControl")).filter(
    q
  ), n = e.querySelector("LN0") ? {
    icon: "add",
    label: s("GOOSE"),
    action: rd(e)
  } : void 0;
  return [
    {
      title: s("wizard.title.select", { tagName: "GSEcontrol" }),
      primary: n,
      content: [
        c`<filtered-list
          @selected=${(i) => {
          const r = i.target.selected.value, o = Y(e, "GSEControl", r);
          o && i.target.dispatchEvent(
            ge(() => Fr(o))
          );
        }}
          >${t.map(
          (i) => c`<mwc-list-item twoline value="${I(i)}"
                ><span>${i.getAttribute("name")}</span
                ><span slot="secondary"
                  >${I(i)}</span
                ></mwc-list-item
              >`
        )}</filtered-list
        >`
      ]
    }
  ];
}
function tt(e) {
  return [
    c`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${s("scl.name")}"
      required
      validationMessage="${s("textfield.required")}"
      .reservedValues=${e.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${s("scl.desc")}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      helper="${s("scl.type")}"
      nullable
    ></wizard-textfield>`
  ];
}
function dd(e) {
  return (t) => {
    const n = {}, i = ["name", "desc", "type"];
    if (i.forEach((r) => {
      n[r] = g(t.find((o) => o.label === r));
    }), i.some((r) => n[r] !== e.getAttribute(r))) {
      const r = O(e, n);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function ud(e) {
  const t = e.getAttribute("name"), n = e.getAttribute("desc"), i = e.getAttribute("type"), r = $(
    e.parentElement,
    "Function"
  ).filter((o) => o !== e).map((o) => o.getAttribute("name"));
  return [
    {
      title: s("wizard.title.edit", { tagName: "Function" }),
      primary: {
        icon: "save",
        label: s("save"),
        action: dd(e)
      },
      content: [
        ...tt({
          name: t,
          desc: n,
          type: i,
          reservedNames: r
        })
      ]
    }
  ];
}
function md(e) {
  return (t) => {
    const n = {};
    ["name", "desc", "type"].forEach((o) => {
      n[o] = g(t.find((a) => a.label === o));
    });
    const r = z(
      e.ownerDocument,
      "Function",
      n
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function pd(e) {
  const t = "", r = Array.from(e.querySelectorAll("Function")).map(
    (o) => o.getAttribute("name")
  );
  return [
    {
      title: s("wizard.title.add", { tagName: "Function" }),
      primary: {
        icon: "save",
        label: s("save"),
        action: md(e)
      },
      content: [
        ...tt({
          name: t,
          desc: null,
          type: null,
          reservedNames: r
        })
      ]
    }
  ];
}
function hd(e) {
  return (t) => {
    const n = {}, i = ["name", "desc", "type"];
    if (i.forEach((r) => {
      n[r] = g(t.find((o) => o.label === r));
    }), i.some((r) => n[r] !== e.getAttribute(r))) {
      const r = O(e, n);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function fd(e) {
  const t = e.getAttribute("name"), n = e.getAttribute("desc"), i = e.getAttribute("type"), r = $(
    e.parentElement,
    "EqSubFunction"
  ).filter((o) => o !== e).map((o) => o.getAttribute("name"));
  return [
    {
      title: s("wizard.title.edit", { tagName: "EqSubFunction" }),
      element: e,
      primary: {
        icon: "save",
        label: s("save"),
        action: hd(e)
      },
      content: [
        ...tt({
          name: t,
          desc: n,
          type: i,
          reservedNames: r
        })
      ]
    }
  ];
}
function bd(e) {
  return (t) => {
    const n = {};
    ["name", "desc", "type"].forEach((o) => {
      n[o] = g(t.find((a) => a.label === o));
    });
    const r = z(
      e.ownerDocument,
      "EqSubFunction",
      n
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function gd(e) {
  const t = "", r = Array.from(
    e.querySelectorAll("EqSubFunction")
  ).map((o) => o.getAttribute("name"));
  return [
    {
      title: s("wizard.title.add", { tagName: "EqSubFunction" }),
      primary: {
        icon: "save",
        label: s("save"),
        action: bd(e)
      },
      content: [
        ...tt({
          name: t,
          desc: null,
          type: null,
          reservedNames: r
        })
      ]
    }
  ];
}
function yd(e) {
  return (t) => {
    const n = {}, i = ["name", "desc", "type"];
    if (i.forEach((r) => {
      n[r] = g(t.find((o) => o.label === r));
    }), i.some((r) => n[r] !== e.getAttribute(r))) {
      const r = O(e, n);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function vd(e) {
  const t = e.getAttribute("name"), n = e.getAttribute("desc"), i = e.getAttribute("type"), r = $(
    e.parentElement,
    "EqFunction"
  ).filter((o) => o !== e).map((o) => o.getAttribute("name"));
  return [
    {
      title: s("wizard.title.edit", { tagName: "EqFunction" }),
      element: e,
      primary: {
        icon: "save",
        label: s("save"),
        action: yd(e)
      },
      content: [
        ...tt({
          name: t,
          desc: n,
          type: i,
          reservedNames: r
        })
      ]
    }
  ];
}
function wd(e) {
  return (t) => {
    const n = {};
    ["name", "desc", "type"].forEach((o) => {
      n[o] = g(t.find((a) => a.label === o));
    });
    const r = z(
      e.ownerDocument,
      "EqFunction",
      n
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function Ad(e) {
  const t = "", r = Array.from(e.querySelectorAll("EqFunction")).map(
    (o) => o.getAttribute("name")
  );
  return [
    {
      title: s("wizard.title.add", { tagName: "EqFunction" }),
      primary: {
        icon: "save",
        label: s("save"),
        action: wd(e)
      },
      content: [
        ...tt({
          name: t,
          desc: null,
          type: null,
          reservedNames: r
        })
      ]
    }
  ];
}
function Sd(e) {
  return (t) => {
    const n = {}, i = ["name", "desc", "type"];
    if (i.forEach((r) => {
      n[r] = g(t.find((o) => o.label === r));
    }), i.some(
      (r) => n[r] !== e.getAttribute(r)
    )) {
      const r = O(e, n);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function xd(e) {
  const t = e.getAttribute("name"), n = e.getAttribute("desc"), i = e.getAttribute("type"), r = $(
    e.parentElement,
    "SubFunction"
  ).filter((o) => o !== e).map((o) => o.getAttribute("name"));
  return [
    {
      title: s("wizard.title.edit", { tagName: "SubFunction" }),
      primary: {
        icon: "save",
        label: s("save"),
        action: Sd(e)
      },
      content: [
        ...tt({
          name: t,
          desc: n,
          type: i,
          reservedNames: r
        })
      ]
    }
  ];
}
function $d(e) {
  return (t) => {
    const n = {};
    ["name", "desc", "type"].forEach((o) => {
      n[o] = g(t.find((a) => a.label === o));
    });
    const r = z(
      e.ownerDocument,
      "SubFunction",
      n
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function Cd(e) {
  const t = "", r = Array.from(e.querySelectorAll("SubFunction")).map(
    (o) => o.getAttribute("name")
  );
  return [
    {
      title: s("wizard.title.add", { tagName: "SubFunction" }),
      primary: {
        icon: "save",
        label: s("save"),
        action: $d(e)
      },
      content: [
        ...tt({
          name: t,
          desc: null,
          type: null,
          reservedNames: r
        })
      ]
    }
  ];
}
function Ed(e) {
  return (t, n) => {
    const i = {
      actions: [],
      title: s("smv.action.addaddress", {
        identity: I(e)
      })
    }, r = n.shadowRoot?.querySelector("#instType")?.checked, o = {};
    o["MAC-Address"] = g(
      t.find((l) => l.label === "MAC-Address")
    ), o.APPID = g(t.find((l) => l.label === "APPID")), o["VLAN-ID"] = g(
      t.find((l) => l.label === "VLAN-ID")
    ), o["VLAN-PRIORITY"] = g(
      t.find((l) => l.label === "VLAN-PRIORITY")
    );
    const a = Pr(e, o, r);
    return a.length ? (a.forEach((l) => {
      i.actions.push(l);
    }), [i]) : [];
  };
}
function Nd(e) {
  const t = Array.from(e.querySelectorAll("Address > P")).some(
    (i) => i.getAttribute("xsi:type")
  ), n = {};
  return ["MAC-Address", "APPID", "VLAN-ID", "VLAN-PRIORITY"].forEach((i) => {
    n[i] || (n[i] = e.querySelector(`Address > P[type="${i}"]`)?.innerHTML.trim() ?? null);
  }), [
    {
      title: s("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        label: s("save"),
        icon: "edit",
        action: Ed(e)
      },
      content: [...rn({ hasInstType: t, attributes: n })]
    }
  ];
}
function Dn(e) {
  return Object.entries(e).map(
    ([t, n]) => c`<wizard-checkbox
        label="${t}"
        .maybeValue=${n}
        nullable
        helper="${s(`scl.${t}`)}"
      ></wizard-checkbox>`
  );
}
function Id(e) {
  return (t) => {
    const n = {}, i = [
      "refreshTime",
      "sampleRate",
      "dataSet",
      "security",
      "synchSourceId"
    ];
    if (i.forEach((o) => {
      n[o] = g(t.find((a) => a.label === o));
    }), !i.some((o) => n[o] !== e.getAttribute(o)))
      return [];
    const r = O(e, n);
    return [{ old: { element: e }, new: { element: r } }];
  };
}
function Dd(e) {
  const [t, n, i, r, o] = [
    "refreshTime",
    "sampleRate",
    "dataSet",
    "security",
    "synchSourceId"
  ].map((a) => e.getAttribute(a));
  return [
    {
      title: s("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        icon: "save",
        label: s("save"),
        action: Id(e)
      },
      content: [
        ...Dn({
          refreshTime: t,
          sampleRate: n,
          dataSet: i,
          security: r,
          synchSourceId: o
        })
      ]
    }
  ];
}
function Br(e) {
  const t = e.getAttribute("name"), n = e.closest("IED")?.getAttribute("name"), i = e.closest("AccessPoint")?.getAttribute("name"), r = e.closest("LDevice")?.getAttribute("inst");
  return e.closest("SCL")?.querySelector(
    `:root > Communication > SubNetwork > ConnectedAP[iedName="${n}"][apName="${i}"] > SMV[ldInst="${r}"][cbName="${t}"]`
  ) ?? null;
}
function kd(e) {
  if (!e.parentElement) return null;
  const t = e.parentElement.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), n = Br(e), i = Array.from(
    e.parentElement.querySelectorAll(
      "ReportControl, GSEControl, SampledValueControl"
    )
  ).filter(
    (l) => l.getAttribute("datSet") === t?.getAttribute("name")
  ).length <= 1, r = [];
  r.push({
    old: {
      parent: e.parentElement,
      element: e
    }
  }), t && i && r.push({
    old: {
      parent: e.parentElement,
      element: t
    }
  }), n && r.push({
    old: {
      parent: n.parentElement,
      element: n
    }
  });
  const o = e.getAttribute("name"), a = e.closest("IED")?.getAttribute("name") ?? "";
  return {
    title: s("controlblock.action.remove", {
      type: e.tagName,
      name: o,
      iedName: a
    }),
    actions: r
  };
}
function kn(e) {
  return [
    c`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${s("scl.name")}"
      required
      validationMessage="${s("textfield.required")}"
      pattern="${De.asciName}"
      maxLength="${nn.cbName}"
      dialogInitialFocus
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      pattern="${De.normalizedString}"
      helper="${s("scl.desc")}"
    ></wizard-textfield>`,
    e.multicast === "true" ? c`` : c`<wizard-checkbox
          label="multicast"
          .maybeValue=${e.multicast}
          helper="${s("scl.multicast")}"
          disabled
        ></wizard-checkbox>`,
    c`<wizard-textfield
      label="smvID"
      .maybeValue=${e.smvID}
      helper="${s("scl.id")}"
      required
      validationMessage="${s("textfield.nonempty")}"
    ></wizard-textfield>`,
    c`<wizard-select
      label="smpMod"
      .maybeValue=${e.smpMod}
      nullable
      required
      helper="${s("scl.smpMod")}"
      >${Vl.map(
      (t) => c`<mwc-list-item value="${t}">${t}</mwc-list-item>`
    )}</wizard-select
    >`,
    c`<wizard-textfield
      label="smpRate"
      .maybeValue=${e.smpRate}
      helper="${s("scl.smpRate")}"
      required
      type="number"
      min="0"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="nofASDU"
      .maybeValue=${e.nofASDU}
      helper="${s("scl.nofASDU")}"
      required
      type="number"
      min="0"
    ></wizard-textfield>`,
    c`<wizard-select
      label="securityEnabled"
      .maybeValue=${e.securityEnabled}
      nullable
      required
      helper="${s("scl.securityEnable")}"
      >${_r.map(
      (t) => c`<mwc-list-item value="${t}">${t}</mwc-list-item>`
    )}</wizard-select
    >`
  ];
}
function xi(e) {
  return (t, n) => {
    const i = {};
    [
      "name",
      "desc",
      "multicast",
      "smvID",
      "smpMod",
      "smpRate",
      "nofASDU",
      "securityEnabled"
    ].forEach((L) => {
      if (L === "multicast" && !t.find((H) => H.label === L)) {
        i.multicast = "true";
        return;
      }
      i[L] = g(
        t.find((H) => H.label === L)
      );
    }), i.confRev = "1";
    const o = i.name + "sDataSet";
    i.datSet = o;
    const a = z(
      e.ownerDocument,
      "SampledValueControl",
      i
    ), l = {};
    [
      "refreshTime",
      "sampleRate",
      "dataSet",
      "security",
      "synchSourceId"
    ].forEach((L) => {
      l[L] = g(t.find((A) => A.label === L));
    });
    const u = z(
      e.ownerDocument,
      "SmvOpts",
      l
    );
    a.appendChild(u);
    let p = null, f = null;
    if (on(e)) {
      const L = n.shadowRoot?.querySelector("#instType")?.checked ?? !1, A = {};
      ["MAC-Address", "APPID", "VLAN-ID", "VLAN-PRIORITY"].forEach((J) => {
        A[J] = g(t.find((W) => W.label === J));
      }), p = z(e.ownerDocument, "SMV", {
        ldInst: e.closest("LDevice")?.getAttribute("inst") ?? "",
        cbName: i.name
      });
      const B = Bn(A, p, L);
      p.appendChild(B), f = Wn(e);
    }
    const b = z(e.ownerDocument, "DataSet", {
      name: o
    }), v = n.shadowRoot.querySelector("finder-list")?.paths ?? [];
    for (const L of v) {
      const A = tn(e, L);
      A && b.appendChild(A);
    }
    return [p ? {
      title: "Create SampledValueControl",
      actions: [
        { new: { parent: e, element: a } },
        { new: { parent: f, element: p } },
        { new: { parent: e, element: b } }
      ]
    } : {
      title: "Create SampledValueControl",
      actions: [
        { new: { parent: e, element: a } },
        { new: { parent: e, element: b } }
      ]
    }];
  };
}
function Wr(e) {
  const t = e.closest("Server"), n = Yt(e, "SampledValueControl"), i = null, r = "true", o = "", a = "SmpPerPeriod", l = "80", d = "1", u = null, p = null, f = "true", b = "true", y = null, v = "true", k = !0, L = {
    "MAC-Address": Rr(e.ownerDocument, "SMV"),
    APPID: qr(e.ownerDocument),
    "VLAN-ID": null,
    "VLAN-PRIORITY": null
  };
  return on(e) ? [
    {
      title: s("wizard.title.add", { tagName: "SampledValueControl" }),
      content: kn({
        name: n,
        desc: i,
        multicast: r,
        smvID: o,
        smpMod: a,
        smpRate: l,
        nofASDU: d,
        securityEnabled: u
      })
    },
    {
      title: s("wizard.title.add", { tagName: "SmvOpts" }),
      content: Dn({
        refreshTime: p,
        sampleRate: f,
        dataSet: b,
        security: y,
        synchSourceId: v
      })
    },
    {
      title: s("wizard.title.add", { tagName: "SMV" }),
      content: [...rn({ hasInstType: k, attributes: L })]
    },
    {
      title: s("dataset.fcda.add"),
      primary: {
        icon: "save",
        label: s("save"),
        action: xi(e)
      },
      content: [t ? yi(t) : c``]
    }
  ] : [
    {
      title: s("wizard.title.add", { tagName: "SampledValueControl" }),
      content: kn({
        name: n,
        desc: i,
        multicast: r,
        smvID: o,
        smpMod: a,
        smpRate: l,
        nofASDU: d,
        securityEnabled: u
      })
    },
    {
      title: s("wizard.title.add", { tagName: "SmvOpts" }),
      content: Dn({
        refreshTime: p,
        sampleRate: f,
        dataSet: b,
        security: y,
        synchSourceId: v
      })
    },
    {
      title: s("wizard.title.add", { tagName: "SMV" }),
      content: [
        c`<h3
              style="color: var(--mdc-theme-on-surface);
                      font-family: 'Roboto', sans-serif;
                      font-weight: 300;"
            >
              ${s("smv.missingaccp")}
            </h3>`
      ]
    },
    {
      title: s("dataset.fcda.add"),
      primary: {
        icon: "save",
        label: s("save"),
        action: xi(e)
      },
      content: [t ? yi(t) : c``]
    }
  ];
}
function zd(e) {
  return (t, n) => {
    const r = n.shadowRoot?.querySelector("finder-list")?.path ?? [];
    if (r.length === 0) return [];
    const [o, a] = r.pop().split(": ");
    if (o !== "IED") return [];
    const l = Y(e, o, a);
    if (!l) return [];
    const d = l.querySelector("LN0");
    return d ? [() => Wr(d)] : [];
  };
}
function Ld(e) {
  return [
    {
      title: s("samvpledvaluecontrol.wizard.location"),
      primary: {
        icon: "",
        label: s("next"),
        action: zd(e)
      },
      content: [On(e)]
    }
  ];
}
function Td(e) {
  return () => e.tagName === "IED" && e.querySelector("LN0") ? [
    () => Wr(e.querySelector("LN0"))
  ] : [() => Ld(e.ownerDocument)];
}
function _d(e) {
  return (t) => {
    const n = kd(e);
    n && t.dispatchEvent(K(n)), t.dispatchEvent(E());
  };
}
function Vd(e) {
  return (t) => {
    t.dispatchEvent(ge(() => Hn(e)));
  };
}
function Pd(e) {
  return (t) => {
    t.dispatchEvent(ge(() => Dd(e)));
  };
}
function Rd(e) {
  return (t) => {
    t.dispatchEvent(ge(() => Nd(e)));
  };
}
function qd(e) {
  return (t) => {
    const n = {}, i = [
      "name",
      "desc",
      "multicast",
      "smvID",
      "smpMod",
      "smpRate",
      "nofASDU",
      "securityEnabled"
    ];
    i.forEach((a) => {
      if (a === "multicast" && !t.find((d) => d.label === a)) {
        n.multicast = "true";
        return;
      }
      n[a] = g(t.find((d) => d.label === a));
    });
    let r = null;
    if (i.some((a) => n[a] !== e.getAttribute(a))) {
      const a = O(e, n);
      r = {
        old: { element: e },
        new: { element: a }
      };
    }
    const o = [];
    return r && o.push(r), o;
  };
}
function Gr(e) {
  const t = e.getAttribute("name"), n = e.getAttribute("desc"), i = e.getAttribute("multicast"), r = e.getAttribute("smvID"), o = e.getAttribute("smpMod"), a = e.getAttribute("smpRate"), l = e.getAttribute("nofASDU"), d = e.getAttribute("securityEnabled"), u = Br(e), p = e.querySelector("SmvOpts"), f = e.parentElement?.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), b = [];
  return b.push({
    icon: "delete",
    label: s("remove"),
    action: _d(e)
  }), f && b.push({
    icon: "edit",
    label: s("scl.DataSet"),
    action: Vd(f)
  }), p && b.push({
    icon: "edit",
    label: s("scl.SmvOpts"),
    action: Pd(p)
  }), u && b.push({
    icon: "edit",
    label: s("scl.Communication"),
    action: Rd(u)
  }), [
    {
      title: s("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        icon: "save",
        label: s("save"),
        action: qd(e)
      },
      menuActions: b,
      content: [
        ...kn({
          name: t,
          desc: n,
          multicast: i,
          smvID: r,
          smpMod: o,
          smpRate: a,
          nofASDU: l,
          securityEnabled: d
        })
      ]
    }
  ];
}
function jr(e) {
  const t = Array.from(
    e.querySelectorAll("SampledValueControl")
  ).filter(q), n = e.querySelector("LN0") ? {
    icon: "add",
    label: s("scl.SampledValueControl"),
    action: Td(e)
  } : void 0;
  return [
    {
      title: s("wizard.title.select", { tagName: "SampledValueControl" }),
      primary: n,
      content: [
        c`<filtered-list
          @selected=${(i) => {
          const r = i.target.selected.value, o = Y(
            e,
            "SampledValueControl",
            r
          );
          o && i.target?.dispatchEvent(
            ge(
              () => Gr(o)
            )
          );
        }}
          >${t.map(
          (i) => c`<mwc-list-item twoline value="${I(i)}"
                ><span>${i.getAttribute("name")}</span
                ><span slot="secondary"
                  >${I(i)}</span
                ></mwc-list-item
              >`
        )}</filtered-list
        >`
      ]
    }
  ];
}
function Ur(e) {
  return [
    C`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      .reservedValues=${e.reservedNames}
      helper="${s("scl.name")}"
      required
      validationMessage="${s("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    C`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${s("scl.desc")}"
    ></wizard-textfield>`,
    C`<wizard-select
      label="phase"
      fixedMenuPosition
      .maybeValue=${e.phase}
      nullable
      helper="${s("scl.phase")}"
    >
      ${["A", "B", "C", "N", "all", "none", "AB", "BC", "CA"].map(
      (t) => C`<mwc-list-item value="${t}">
            ${t.charAt(0).toUpperCase() + t.slice(1)}
          </mwc-list-item>`
    )}
    </wizard-select> `,
    C`<wizard-checkbox
      label="virtual"
      .maybeValue=${e.virtual}
      nullable
      helper="${s("scl.virtual")}"
    ></wizard-checkbox>`
  ];
}
function Md(e) {
  return (t) => {
    const n = {}, i = ["name", "desc", "phase", "virtual"];
    if (i.forEach((r) => {
      n[r] = g(t.find((o) => o.label === r));
    }), i.some(
      (r) => n[r] !== e.getAttribute(r)
    )) {
      const r = O(e, n);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function Od(e) {
  const t = e.getAttribute("name"), n = e.getAttribute("desc"), i = e.getAttribute("phase"), r = e.getAttribute("virtual"), o = $(
    e.parentElement,
    "SubEquipment"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: s("wizard.title.edit", { tagName: "SubEquipment" }),
      primary: {
        icon: "save",
        label: s("save"),
        action: Md(e)
      },
      content: [
        ...Ur({
          name: t,
          desc: n,
          phase: i,
          virtual: r,
          reservedNames: o
        })
      ]
    }
  ];
}
function Fd(e) {
  return (t) => {
    const n = {};
    ["name", "desc", "phase", "virtual"].forEach((o) => {
      n[o] = g(t.find((a) => a.label === o));
    });
    const r = z(
      e.ownerDocument,
      "SubEquipment",
      n
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function Hd(e) {
  const t = "", o = Array.from(e.querySelectorAll("SubEquipment")).map(
    (a) => a.getAttribute("name")
  );
  return [
    {
      title: s("wizard.title.add", { tagName: "SubEquipment" }),
      primary: {
        icon: "save",
        label: s("save"),
        action: Fd(e)
      },
      content: [
        ...Ur({
          name: t,
          desc: null,
          phase: null,
          virtual: null,
          reservedNames: o
        })
      ]
    }
  ];
}
function Bd(e) {
  const t = e.getAttribute("name"), n = e.getAttribute("desc"), i = e.getAttribute("type"), r = e.getAttribute("virtual"), o = $(
    e.parentElement,
    "GeneralEquipment"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: s("wizard.title.edit", { tagName: "GeneralEquipment" }),
      primary: {
        icon: "save",
        label: s("save"),
        action: Wd(e)
      },
      content: [
        ...Kr({
          name: t,
          desc: n,
          type: i,
          virtual: r,
          reservedNames: o
        })
      ]
    }
  ];
}
function Wd(e) {
  return (t) => {
    const n = {}, i = ["name", "desc", "type", "virtual"];
    if (i.forEach((r) => {
      n[r] = g(t.find((o) => o.label === r));
    }), i.some(
      (r) => n[r] !== e.getAttribute(r)
    )) {
      const r = O(e, n);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function Kr(e) {
  return [
    c`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${s("scl.name")}"
      required
      validationMessage="${s("textfield.required")}"
      .reservedValues=${e.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${s("scl.desc")}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      helper="${s("scl.type")}"
      minLength="${3}"
      pattern="AXN|BAT|MOT|FAN|FIL|PMP|TNK|VLV|E[A-Z]*"
      required
    ></wizard-textfield>`,
    c`<wizard-checkbox
      label="virtual"
      .maybeValue=${e.virtual}
      helper="${s("scl.virtual")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function Gd(e) {
  const t = "", o = Array.from(
    e.querySelectorAll("GeneralEquipment")
  ).map((a) => a.getAttribute("name"));
  return [
    {
      title: s("wizard.title.add", { tagName: "GeneralEquipment" }),
      primary: {
        icon: "save",
        label: s("save"),
        action: jd(e)
      },
      content: [
        ...Kr({
          name: t,
          desc: null,
          type: null,
          virtual: null,
          reservedNames: o
        })
      ]
    }
  ];
}
function jd(e) {
  return (t) => {
    const n = {};
    ["name", "desc", "type", "virtual"].forEach((o) => {
      n[o] = g(t.find((a) => a.label === o));
    });
    const r = z(
      e.ownerDocument,
      "GeneralEquipment",
      n
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function Ud(e) {
  return (t) => {
    const n = {};
    ["name", "desc", "type", "virtual"].forEach((o) => {
      n[o] = g(
        t.find((a) => a.label === o)
      );
    });
    const r = z(
      e.ownerDocument,
      "TransformerWinding",
      n
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function Kd(e) {
  const t = "", o = Array.from(
    e.querySelectorAll("TransformerWinding")
  ).map((a) => a.getAttribute("name"));
  return [
    {
      title: s("wizard.title.add", { tagName: "TransformerWinding" }),
      primary: {
        icon: "save",
        label: s("save"),
        action: Ud(e)
      },
      content: [
        ...Zr({
          name: t,
          desc: null,
          type: null,
          virtual: null,
          reservedNames: o
        })
      ]
    }
  ];
}
function Zd(e) {
  return (t) => {
    const n = {}, i = ["name", "desc", "type", "virtual"];
    if (i.forEach((r) => {
      n[r] = g(
        t.find((o) => o.label === r)
      );
    }), i.some(
      (r) => n[r] !== e.getAttribute(r)
    )) {
      const r = O(e, n);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function Zr(e) {
  return [
    c`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${s("scl.name")}"
      required
      validationMessage="${s("textfield.required")}"
      .reservedValues=${e.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${s("scl.desc")}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      disabled
      helper="${s("scl.type")}"
    ></wizard-textfield>`,
    c`<wizard-checkbox
      label="virtual"
      .maybeValue=${e.virtual}
      helper="${s("scl.virtual")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function Xd(e) {
  const t = e.getAttribute("name"), n = e.getAttribute("desc"), i = e.getAttribute("type"), r = e.getAttribute("virtual"), o = $(
    e.parentElement,
    "TransformerWinding"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: s("wizard.title.edit", { tagName: "TransformerWinding" }),
      primary: {
        icon: "save",
        label: s("save"),
        action: Zd(e)
      },
      content: [
        ...Zr({
          name: t,
          desc: n,
          type: i,
          virtual: r,
          reservedNames: o
        })
      ]
    }
  ];
}
function Qd(e) {
  return (t) => {
    const n = {};
    ["name", "desc", "type", "virtual"].forEach((o) => {
      n[o] = g(t.find((a) => a.label === o));
    });
    const r = z(
      e.ownerDocument,
      "TapChanger",
      n
    );
    return [{ new: { parent: e, element: r } }];
  };
}
function Yd(e) {
  return (t) => {
    const n = {}, i = ["name", "desc", "type", "virtual"];
    if (i.forEach((r) => {
      n[r] = g(t.find((o) => o.label === r));
    }), i.some(
      (r) => n[r] !== e.getAttribute(r)
    )) {
      const r = O(e, n);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function Xr(e) {
  return [
    c`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${s("scl.name")}"
      required
      validationMessage="${s("textfield.required")}"
      .reservedValues=${e.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${s("scl.desc")}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      disabled
      helper="${s("scl.type")}"
    ></wizard-textfield>`,
    c`<wizard-checkbox
      label="virtual"
      .maybeValue=${e.virtual}
      helper="${s("scl.virtual")}"
      nullable
    ></wizard-checkbox>`
  ];
}
function Jd(e) {
  const t = "", i = "LTC", o = Array.from(e.querySelectorAll("TapChanger")).map(
    (a) => a.getAttribute("name")
  );
  return [
    {
      title: s("wizard.title.add", { tagName: "TapChanger" }),
      primary: {
        icon: "save",
        label: s("save"),
        action: Qd(e)
      },
      content: [
        ...Xr({
          name: t,
          desc: null,
          type: i,
          virtual: null,
          reservedNames: o
        })
      ]
    }
  ];
}
function eu(e) {
  const t = e.getAttribute("name"), n = e.getAttribute("desc"), i = e.getAttribute("type"), r = e.getAttribute("virtual"), o = $(
    e.parentElement,
    "TapChanger"
  ).filter((a) => a !== e).map((a) => a.getAttribute("name"));
  return [
    {
      title: s("wizard.title.edit", { tagName: "TapChanger" }),
      primary: {
        icon: "save",
        label: s("save"),
        action: Yd(e)
      },
      content: [
        ...Xr({
          name: t,
          desc: n,
          type: i,
          virtual: r,
          reservedNames: o
        })
      ]
    }
  ];
}
function Qr(e, t, n, i, r) {
  return [
    C`<wizard-textfield
      label="name"
      .maybeValue=${e}
      helper="${s("line.wizard.nameHelper")}"
      required
      validationMessage="${s("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    C`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${s("line.wizard.descHelper")}"
    ></wizard-textfield>`,
    C`<wizard-textfield
      label="type"
      .maybeValue=${n}
      nullable
      helper="${s("line.wizard.typeHelper")}"
    ></wizard-textfield>`,
    C`<wizard-textfield
      label="nomFreq"
      .maybeValue=${i}
      nullable
      helper="${s("voltagelevel.wizard.nomFreqHelper")}"
      suffix="Hz"
      validationMessage="${s("textfield.nonempty")}"
      pattern="${Rt.unsigned}"
    ></wizard-textfield>`,
    C`<wizard-textfield
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
function tu(e) {
  return (t) => {
    const n = {};
    ["name", "desc", "type", "nomFreq", "numPhases"].forEach((o) => {
      n[o] = g(t.find((a) => a.label === o));
    });
    const r = z(e.ownerDocument, "Line", n);
    return [{ new: { parent: e, element: r } }];
  };
}
function nu(e) {
  return (t) => {
    const n = {}, i = ["name", "desc", "type", "nomFreq", "numPhases"];
    if (i.forEach((r) => {
      n[r] = g(t.find((o) => o.label === r));
    }), i.some((r) => n[r] !== e.getAttribute(r))) {
      const r = O(e, n);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function iu(e) {
  return [
    {
      title: s("wizard.title.add", { tagName: "Line" }),
      primary: {
        icon: "save",
        label: s("save"),
        action: tu(e)
      },
      content: [...Qr("", "", "", "", "")]
    }
  ];
}
function ru(e) {
  return [
    {
      title: s("line.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: s("save"),
        action: nu(e)
      },
      content: Qr(
        e.getAttribute("name") ?? "",
        e.getAttribute("desc"),
        e.getAttribute("type"),
        e.getAttribute("nomFreq"),
        e.getAttribute("numPhases")
      )
    }
  ];
}
function ou(e) {
  return (t) => {
    const n = {};
    ["name", "desc", "type"].forEach((o) => {
      n[o] = g(t.find((a) => a.label === o));
    });
    const r = z(e.ownerDocument, "Process", n);
    return [{ new: { parent: e, element: r } }];
  };
}
function au(e) {
  return (t) => {
    const n = {}, i = ["name", "desc", "type"];
    if (i.forEach((r) => {
      n[r] = g(t.find((o) => o.label === r));
    }), i.some(
      (r) => n[r] !== e.getAttribute(r)
    )) {
      const r = O(e, n);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function Yr(e) {
  return [
    c`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${s("scl.name")}"
      required
      validationMessage="${s("textfield.required")}"
      .reservedValues=${e.reservedNames}
      dialogInitialFocus
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${s("scl.desc")}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="type"
      .maybeValue=${e.type}
      nullable
      helper="${s("scl.type")}"
    ></wizard-textfield>`
  ];
}
function su(e) {
  const t = "", n = "", i = "", r = $(
    e.parentElement,
    "Process"
  ).filter((o) => o !== e).map((o) => o.getAttribute("name"));
  return [
    {
      title: s("wizard.title.add", { tagName: "Process" }),
      primary: {
        icon: "save",
        label: s("save"),
        action: ou(e)
      },
      content: [
        ...Yr({
          name: t,
          desc: n,
          type: i,
          reservedNames: r
        })
      ]
    }
  ];
}
function cu(e) {
  const t = e.getAttribute("name"), n = e.getAttribute("desc"), i = e.getAttribute("type"), r = $(
    e.parentElement,
    "Process"
  ).filter((o) => o !== e).map((o) => o.getAttribute("name"));
  return [
    {
      title: s("wizard.title.edit", { tagName: "Process" }),
      primary: {
        icon: "save",
        label: s("save"),
        action: au(e)
      },
      content: [
        ...Yr({
          name: t,
          desc: n,
          type: i,
          reservedNames: r
        })
      ]
    }
  ];
}
function lu(e, t, n, i, r) {
  return [
    c`<wizard-textfield
      label="lnType"
      .maybeValue=${e}
      readonly
      required
      helper="${s("ln.wizard.lnTypeHelper")}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${s("ln.wizard.descHelper")}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="prefix"
      nullable
      readonly
      .maybeValue=${n}
      helper="${s("ln.wizard.prefixHelper")}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="lnClass"
      readonly
      required
      .maybeValue=${i}
      helper="${s("ln.wizard.lnClassHelper")}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="inst"
      .maybeValue=${r}
      readonly
      helper="${s("ln.wizard.instHelper")}"
    ></wizard-textfield>`
  ];
}
function du(e) {
  return (t) => {
    const n = {}, i = ["lnType", "desc", "prefix", "lnClass", "inst"];
    if (i.forEach((r) => {
      n[r] = g(t.find((o) => o.label === r));
    }), i.some((r) => n[r] !== e.getAttribute(r))) {
      const r = O(e, n);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function uu(e) {
  return [
    {
      title: s("ln.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: s("save"),
        action: du(e)
      },
      content: lu(
        e.getAttribute("lnType"),
        e.getAttribute("desc"),
        e.getAttribute("prefix"),
        e.getAttribute("lnClass"),
        e.getAttribute("inst")
      )
    }
  ];
}
function mu(e, t, n, i) {
  return [
    c`<wizard-textfield
      label="lnType"
      .maybeValue=${e}
      readonly
      required
      helper="${s("ln0.wizard.lnTypeHelper")}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="desc"
      .maybeValue=${t}
      nullable
      helper="${s("ln0.wizard.descHelper")}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="lnClass"
      readonly
      required
      .maybeValue=${n}
      helper="${s("ln0.wizard.lnClassHelper")}"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="inst"
      .maybeValue=${i}
      readonly
      helper="${s("ln0.wizard.instHelper")}"
    ></wizard-textfield>`
  ];
}
function pu(e) {
  return (t) => {
    const n = {}, i = ["lnType", "desc", "lnClass", "inst"];
    if (i.forEach((r) => {
      n[r] = g(t.find((o) => o.label === r));
    }), i.some((r) => n[r] !== e.getAttribute(r))) {
      const r = O(e, n);
      return [
        {
          old: { element: e },
          new: { element: r }
        }
      ];
    }
    return [];
  };
}
function hu(e) {
  return [
    {
      title: s("ln0.wizard.title.edit"),
      element: e,
      primary: {
        icon: "edit",
        label: s("save"),
        action: pu(e)
      },
      content: mu(
        e.getAttribute("lnType"),
        e.getAttribute("desc"),
        e.getAttribute("lnClass"),
        e.getAttribute("inst")
      )
    }
  ];
}
function m() {
}
const D = {
  AccessControl: {
    edit: m,
    create: m
  },
  AccessPoint: {
    edit: m,
    create: m
  },
  Address: {
    edit: m,
    create: m
  },
  Association: {
    edit: m,
    create: m
  },
  Authentication: {
    edit: m,
    create: m
  },
  BDA: {
    edit: m,
    create: m
  },
  BitRate: {
    edit: m,
    create: m
  },
  Bay: {
    edit: Ks,
    create: Us
  },
  ClientLN: {
    edit: m,
    create: m
  },
  ClientServices: {
    edit: m,
    create: m
  },
  CommProt: {
    edit: m,
    create: m
  },
  Communication: {
    edit: m,
    create: m
  },
  ConductingEquipment: {
    edit: ic,
    create: nc
  },
  ConfDataSet: {
    edit: m,
    create: m
  },
  ConfLdName: {
    edit: m,
    create: m
  },
  ConfLNs: {
    edit: m,
    create: m
  },
  ConfLogControl: {
    edit: m,
    create: m
  },
  ConfReportControl: {
    edit: m,
    create: m
  },
  ConfSG: {
    edit: m,
    create: m
  },
  ConfSigRef: {
    edit: m,
    create: m
  },
  ConnectedAP: {
    edit: m,
    create: m
  },
  ConnectivityNode: {
    edit: oc,
    create: m
  },
  DA: {
    edit: Fl,
    create: m
  },
  DAI: {
    edit: jl,
    create: m
  },
  DAType: {
    edit: m,
    create: m
  },
  DO: {
    edit: m,
    create: m
  },
  DOI: {
    edit: m,
    create: m
  },
  DOType: {
    edit: m,
    create: m
  },
  DataObjectDirectory: {
    edit: m,
    create: m
  },
  DataSet: {
    edit: m,
    create: m
  },
  DataSetDirectory: {
    edit: m,
    create: m
  },
  DataTypeTemplates: {
    edit: m,
    create: m
  },
  DynAssociation: {
    edit: m,
    create: m
  },
  DynDataSet: {
    edit: m,
    create: m
  },
  EnumType: {
    edit: m,
    create: m
  },
  EnumVal: {
    edit: m,
    create: m
  },
  EqFunction: {
    edit: vd,
    create: Ad
  },
  EqSubFunction: {
    edit: fd,
    create: gd
  },
  ExtRef: {
    edit: m,
    create: m
  },
  FCDA: {
    edit: m,
    create: br
  },
  FileHandling: {
    edit: m,
    create: m
  },
  Function: {
    edit: ud,
    create: pd
  },
  GeneralEquipment: {
    edit: Bd,
    create: Gd
  },
  GetCBValues: {
    edit: m,
    create: m
  },
  GetDataObjectDefinition: {
    edit: m,
    create: m
  },
  GetDataSetValue: {
    edit: m,
    create: m
  },
  GetDirectory: {
    edit: m,
    create: m
  },
  GOOSE: {
    edit: m,
    create: m
  },
  GOOSESecurity: {
    edit: m,
    create: m
  },
  GSE: {
    edit: m,
    create: m
  },
  GSEDir: {
    edit: m,
    create: m
  },
  GSEControl: {
    edit: Fr,
    create: m
  },
  GSESettings: {
    edit: m,
    create: m
  },
  GSSE: {
    edit: m,
    create: m
  },
  Header: {
    edit: m,
    create: m
  },
  History: {
    edit: m,
    create: m
  },
  Hitem: {
    edit: m,
    create: m
  },
  IED: {
    edit: Cl,
    create: m
  },
  IEDName: {
    edit: m,
    create: m
  },
  Inputs: {
    edit: m,
    create: m
  },
  IssuerName: {
    edit: m,
    create: m
  },
  KDC: {
    edit: m,
    create: m
  },
  LDevice: {
    edit: kl,
    create: m
  },
  LN: {
    edit: uu,
    create: m
  },
  LN0: {
    edit: hu,
    create: m
  },
  LNode: {
    edit: Rc,
    create: _c
  },
  LNodeType: {
    edit: m,
    create: m
  },
  Line: {
    edit: ru,
    create: iu
  },
  Log: {
    edit: m,
    create: m
  },
  LogControl: {
    edit: m,
    create: m
  },
  LogSettings: {
    edit: m,
    create: m
  },
  MaxTime: {
    edit: m,
    create: m
  },
  McSecurity: {
    edit: m,
    create: m
  },
  MinTime: {
    edit: m,
    create: m
  },
  NeutralPoint: {
    edit: m,
    create: m
  },
  OptFields: {
    edit: Ar,
    create: m
  },
  P: {
    edit: m,
    create: m
  },
  PhysConn: {
    edit: m,
    create: m
  },
  PowerTransformer: {
    edit: ll,
    create: cl
  },
  Private: {
    edit: m,
    create: m
  },
  Process: {
    edit: cu,
    create: su
  },
  ProtNs: {
    edit: m,
    create: m
  },
  Protocol: {
    edit: m,
    create: m
  },
  ReadWrite: {
    edit: m,
    create: m
  },
  RedProt: {
    edit: m,
    create: m
  },
  ReportControl: {
    edit: m,
    create: m
  },
  ReportSettings: {
    edit: m,
    create: m
  },
  RptEnabled: {
    edit: m,
    create: m
  },
  SamplesPerSec: {
    edit: m,
    create: m
  },
  SampledValueControl: {
    edit: Gr,
    create: m
  },
  SecPerSamples: {
    edit: m,
    create: m
  },
  SCL: {
    edit: m,
    create: m
  },
  SDI: {
    edit: m,
    create: m
  },
  SDO: {
    edit: m,
    create: m
  },
  Server: {
    edit: m,
    create: m
  },
  ServerAt: {
    edit: m,
    create: m
  },
  Services: {
    edit: m,
    create: m
  },
  SetDataSetValue: {
    edit: m,
    create: m
  },
  SettingControl: {
    edit: m,
    create: m
  },
  SettingGroups: {
    edit: m,
    create: m
  },
  SGEdit: {
    edit: m,
    create: m
  },
  SmpRate: {
    edit: m,
    create: m
  },
  SMV: {
    edit: m,
    create: m
  },
  SmvOpts: {
    edit: m,
    create: m
  },
  SMVsc: {
    edit: m,
    create: m
  },
  SMVSecurity: {
    edit: m,
    create: m
  },
  SMVSettings: {
    edit: m,
    create: m
  },
  SubEquipment: {
    edit: Od,
    create: Hd
  },
  SubFunction: {
    edit: xd,
    create: Cd
  },
  SubNetwork: {
    edit: pl,
    create: m
  },
  Subject: {
    edit: m,
    create: m
  },
  Substation: {
    edit: Jc,
    create: Yc
  },
  SupSubscription: {
    edit: m,
    create: m
  },
  TapChanger: {
    edit: eu,
    create: Jd
  },
  Terminal: {
    edit: tl,
    create: m
  },
  Text: {
    edit: m,
    create: m
  },
  TimerActivatedControl: {
    edit: m,
    create: m
  },
  TimeSyncProt: {
    edit: m,
    create: m
  },
  TransformerWinding: {
    edit: Xd,
    create: Kd
  },
  TrgOps: {
    edit: Tr,
    create: m
  },
  Val: {
    edit: m,
    create: m
  },
  ValueHandling: {
    edit: m,
    create: m
  },
  Voltage: {
    edit: m,
    create: m
  },
  VoltageLevel: {
    edit: al,
    create: il
  }
};
var fu = Object.defineProperty, bu = Object.getOwnPropertyDescriptor, It = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? bu(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
  return i && r && fu(t, n, r), r;
};
function gu(e) {
  const t = e.getAttribute("lnClass")?.charAt(0) ?? "";
  return yu[t] ?? rr;
}
const yu = {
  L: rr,
  A: Es,
  C: Ns,
  F: Is,
  G: Ds,
  I: ks,
  K: zs,
  M: Ls,
  P: Ts,
  Q: _s,
  R: Vs,
  S: Ps,
  T: Rs,
  X: qs,
  Y: Ms,
  Z: Os
};
let bt = class extends Z {
  get header() {
    const e = this.element.getAttribute("prefix") ?? "", t = this.element.getAttribute("lnClass"), n = this.element.getAttribute("lnInst"), i = this.missingIedReference ? `${e} ${t} ${n}` : I(this.element);
    return typeof i == "string" ? i : "";
  }
  get missingIedReference() {
    return this.element.getAttribute("iedName") === "None";
  }
  get isIEDReference() {
    return this.element.getAttribute("iedName") !== "None";
  }
  cloneLNodeElement() {
    const e = this.element.getAttribute("lnClass");
    if (!e) return;
    const t = ir(this.element.parentElement)(
      e
    );
    if (!t) return;
    const n = O(this.element, { lnInst: t });
    this.dispatchEvent(
      K({
        new: { parent: this.element.parentElement, element: n }
      })
    );
  }
  openEditWizard() {
    const e = D.LNode.edit(this.element);
    e && this.dispatchEvent(E(e));
  }
  remove() {
    this.element && this.dispatchEvent(
      K({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      })
    );
  }
  render() {
    return c`<action-icon
      label="${this.header}"
      ?secondary=${this.missingIedReference}
      ?highlighted=${this.missingIedReference}
      ><mwc-icon slot="icon">${gu(this.element)}</mwc-icon
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
      >${this.isIEDReference ? c`` : c`<mwc-fab
            slot="action"
            mini
            icon="content_copy"
            @click=${() => this.cloneLNodeElement()}
          ></mwc-fab>`}
    </action-icon>`;
  }
};
It([
  h({ attribute: !1 })
], bt.prototype, "doc", 2);
It([
  h({ attribute: !1 })
], bt.prototype, "element", 2);
It([
  _()
], bt.prototype, "header", 1);
It([
  _()
], bt.prototype, "missingIedReference", 1);
It([
  _()
], bt.prototype, "isIEDReference", 1);
bt = It([
  F("l-node-editor")
], bt);
c`<svg
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
const Mt = {
  action: T`<path d="M0 0h24v24H0z" fill="none"></path><path d="M13 3c-4.97 0-9
  4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7
  7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0
  9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" fill="currentColor"></path>`,
  dAIcon: T`<path fill="currentColor" d="m4.2 0c-2.31 0-4.2 1.89-4.2 4.2v11.6c0 2.31 1.89 4.2 4.2 4.2h18.1c2.31 0 4.2-1.89 4.2-4.2v-11.6c0-2.31-1.89-4.2-4.2-4.2zm0 1.89h18.1c1.29 0 2.3 1.01 2.3 2.3v11.6c0 1.29-1.01 2.31-2.3 2.31h-18.1c-1.29 0-2.3-1.01-2.3-2.31v-11.6c0-1.29 1.01-2.3 2.3-2.3z"/><path fill="currentColor" d="m12.5 9.94q0 1.55-0.509 2.71-0.503 1.15-1.43 1.76-0.923 0.611-2.12 0.611h-3.37v-10h3.02q2.11 0 3.26 1.28 1.15 1.27 1.15 3.65zm-1.76 0q0-1.61-0.698-2.46-0.698-0.852-1.99-0.852h-1.24v6.77h1.48q1.12 0 1.79-0.931 0.663-0.931 0.663-2.53z"/><path fill="currentColor" d="m19.7 15-0.74-2.56h-3.18l-0.74 2.56h-1.75l3.04-10h2.06l3.03 10zm-1.13-4.13-0.823-2.88-0.379-1.46q-0.0947 0.412-0.178 0.739-0.0829 0.327-1.02 3.59z"/>`,
  dOIcon: T`<path fill="none" stroke="currentColor" stroke-width="1.89" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path d="m12.1 9.94q0 1.55-0.509 2.71-0.503 1.15-1.43 1.76-0.923 0.611-2.12 0.611h-3.37v-10h3.02q2.11 0 3.26 1.28 1.15 1.27 1.15 3.65zm-1.76 0q0-1.61-0.698-2.46-0.698-0.852-1.99-0.852h-1.24v6.77h1.48q1.12 0 1.79-0.931 0.663-0.931 0.663-2.53z"/><path d="m21.6 9.97q0 1.56-0.515 2.75-0.515 1.19-1.47 1.82-0.959 0.625-2.24 0.625-1.97 0-3.08-1.39-1.11-1.39-1.11-3.81 0-2.41 1.11-3.76t3.1-1.35 3.1 1.36q1.12 1.36 1.12 3.74zm-1.78 0q0-1.62-0.639-2.54-0.639-0.923-1.79-0.923-1.17 0-1.81 0.916-0.639 0.909-0.639 2.54 0 1.65 0.651 2.6 0.657 0.945 1.79 0.945 1.17 0 1.81-0.923 0.639-0.923 0.639-2.62z"/>`,
  enumIcon: T`<path fill="none" stroke="currentColor" stroke-width="1.89" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path d="m5.37 15v-10h6.56v1.62h-4.81v2.51h4.45v1.62h-4.45v2.64h5.06v1.62z"/><path d="m18.5 15-3.63-7.71q0.107 1.12 0.107 1.8v5.9h-1.55v-10h1.99l3.69 7.77q-0.107-1.07-0.107-1.95v-5.82h1.55v10z"/>`,
  info: T`<path d="M0 0h24v24H0z" fill="none"></path><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"></path>`,
  warning: T`<path d="M0 0h24v24H0z" fill="none"></path><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" fill="currentColor"></path>`,
  error: T`<path d="M0 0h24v24H0V0z" fill="none"></path><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1v5.8z" fill="currentColor"></path><path d="M11 7h2v7h-2z" fill="currentColor"></path><circle cx="12" cy="16" r="1" fill="currentColor"></circle>`,
  gooseIcon: T`<path fill="currentColor" d="M11,7H15V9H11V15H13V11H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
  lNIcon: T`<path stroke="currentColor" stroke-width="1.89" fill="none" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path fill="currentColor" d="m5.71 15v-10h1.75v8.39h4.47v1.62z"/><path fill="currentColor" d="m18.2 15-3.63-7.71q0.107 1.12 0.107 1.8v5.9h-1.55v-10h1.99l3.69 7.77q-0.107-1.07-0.107-1.95v-5.82h1.55v10z"/>`,
  logIcon: T`<path fill="currentColor" d="M9,7H11V15H15V17H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
  reportIcon: T`<path fill="currentColor" d="M9,7H13A2,2 0 0,1 15,9V11C15,11.84 14.5,12.55 13.76,12.85L15,17H13L11.8,13H11V17H9V7M11,9V11H13V9H11M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,16.41 7.58,20 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
  smvIcon: T`<path fill="currentColor" d="M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`
}, Gn = T`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${Mt.gooseIcon}</svg>`, jn = T`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${Mt.reportIcon}</svg>`, Un = T`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${Mt.smvIcon}</svg>`, vu = T`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${Mt.logIcon}</svg>`, wu = {
  ReportControl: jn,
  LogControl: vu,
  GSEControl: Gn,
  SampledValueControl: Un
}, Au = T`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6A2,2 0 0,0 4,6V9H6V6H18V18H6V15H4V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18Z" />
</svg>`, Su = T`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M21,14V4H3V14H21M21,2A2,2 0 0,1 23,4V16A2,2 0 0,1 21,18H14L16,21V22H8V21L10,18H3C1.89,18 1,17.1 1,16V4C1,2.89 1.89,2 3,2H21M4,5H15V10H4V5M16,5H20V7H16V5M20,8V13H16V8H20M4,11H9V13H4V11M10,11H15V13H10V11Z" />
</svg>`;
T`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M4,1C2.89,1 2,1.89 2,3V7C2,8.11 2.89,9 4,9H1V11H13V9H10C11.11,9 12,8.11 12,7V3C12,1.89 11.11,1 10,1H4M4,3H10V7H4V3M14,13C12.89,13 12,13.89 12,15V19C12,20.11 12.89,21 14,21H11V23H23V21H20C21.11,21 22,20.11 22,19V15C22,13.89 21.11,13 20,13H14M3.88,13.46L2.46,14.88L4.59,17L2.46,19.12L3.88,20.54L6,18.41L8.12,20.54L9.54,19.12L7.41,17L9.54,14.88L8.12,13.46L6,15.59L3.88,13.46M14,15H20V19H14V15Z" />
</svg>`;
const $i = {
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
Kt("dAIcon"), Kt("dOIcon"), Kt("enumIcon"), Kt("lNIcon");
function Kt(e) {
  if (e === "reset") return c``;
  const t = $i[e]?.height ?? 24, n = $i[e]?.width ?? 24;
  return c`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${t}"
    viewBox="0 0 ${n} ${t}"
    width="${n}"
  >
    ${Mt[e]}
  </svg> `;
}
c`<svg
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
c`<svg
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
const xu = c`<svg
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
</svg>`, $u = c`<svg
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
</svg>`, Cu = c`<svg
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
</svg>`, Eu = c`<svg
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
</svg>`, Nu = c`<svg
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
</svg>`, Iu = c`<svg
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
</svg>`, Du = c`<svg
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
</svg>`, Jr = c`<svg
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
c`<svg
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
const Ci = c`<svg
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
c` <svg
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
T`
  <svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
  </svg>`;
T`<svg viewBox="0 0 24 24">
<path fill="currentColor" d="M11,7H15V9H11V15H13V11H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`;
const ku = T`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
</svg>`, zu = T`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
</svg>`, Lu = T`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
</svg>`, Tu = T`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
var _u = Object.defineProperty, Vu = Object.getOwnPropertyDescriptor, nt = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? Vu(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
  return i && r && _u(t, n, r), r;
};
function Pu(e) {
  return e ? V[e.tagName].children.filter(
    (t) => D[t].create !== m
  ) : [];
}
let ze = class extends Z {
  constructor() {
    super(...arguments), this.editCount = -1, this.showfunctions = !1;
  }
  get header() {
    const e = this.element.getAttribute("name") ?? "", t = this.element.getAttribute("desc");
    return this.showfunctions ? `${e} ${t ? `—  ${t}` : ""}` : `${e}`;
  }
  openEditWizard() {
    const e = D.GeneralEquipment.edit(this.element);
    e && this.dispatchEvent(E(e));
  }
  openCreateWizard(e) {
    const t = D[e].create(this.element);
    t && this.dispatchEvent(E(t));
  }
  updated() {
    this.addMenu && this.addButton && (this.addMenu.anchor = this.addButton);
  }
  remove() {
    this.element.parentElement && this.dispatchEvent(
      K({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      })
    );
  }
  renderLNodes() {
    const e = $(this.element, "LNode");
    return e.length ? c`<div class="container lnode">
          ${e.map(
      (t) => c`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
              ></l-node-editor>`
    )}
        </div>` : c``;
  }
  renderEqFunctions() {
    const e = $(this.element, "EqFunction");
    return e.length ? c`${e.map(
      (t) => c` <eq-function-editor
              .editCount=${this.editCount}
              .doc=${this.doc}
              .element=${t}
            ></eq-function-editor>`
    )}` : c``;
  }
  renderAddButtons() {
    return Pu(this.element).map(
      (e) => c`<mwc-list-item value="${e}"
          ><span>${e}</span></mwc-list-item
        >`
    );
  }
  render() {
    return this.showfunctions ? c`<action-pane label=${this.header}>
        <abbr slot="action" title="${s("edit")}">
          <mwc-icon-button
            icon="edit"
            @click=${() => this.openEditWizard()}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" title="${s("remove")}">
          <mwc-icon-button
            icon="delete"
            @click=${() => this.remove()}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" style="position:relative;" title="${s("add")}">
          <mwc-icon-button
            icon="playlist_add"
            @click=${() => this.addMenu.open = !0}
          ></mwc-icon-button
          ><mwc-menu
            corner="BOTTOM_RIGHT"
            menuCorner="END"
            @action=${(e) => {
      const t = e.target.selected.value;
      this.openCreateWizard(t);
    }}
            >${this.renderAddButtons()}</mwc-menu
          ></abbr
        >
        ${this.renderLNodes()} ${this.renderEqFunctions()}
      </action-pane>` : c`<action-icon label=${this.header}>
      <mwc-icon slot="icon">${Jr}</mwc-icon>
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
ze.styles = G`
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
nt([
  h({ attribute: !1 })
], ze.prototype, "doc", 2);
nt([
  h({ type: Number })
], ze.prototype, "editCount", 2);
nt([
  h({ attribute: !1 })
], ze.prototype, "element", 2);
nt([
  h({ type: Boolean })
], ze.prototype, "showfunctions", 2);
nt([
  _()
], ze.prototype, "header", 1);
nt([
  N("mwc-menu")
], ze.prototype, "addMenu", 2);
nt([
  N('mwc-icon-button[icon="playlist_add"]')
], ze.prototype, "addButton", 2);
ze = nt([
  F("general-equipment-editor")
], ze);
var Ru = Object.defineProperty, qu = Object.getOwnPropertyDescriptor, it = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? qu(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
  return i && r && Ru(t, n, r), r;
};
function Mu(e) {
  return e ? V[e.tagName].children.filter(
    (t) => D[t].create !== m
  ) : [];
}
let Le = class extends Z {
  constructor() {
    super(...arguments), this.editCount = -1, this.showfunctions = !1;
  }
  get header() {
    const e = this.element.getAttribute("name"), t = this.element.getAttribute("desc"), n = this.element.getAttribute("type");
    return `${e}${t ? ` - ${t}` : ""}${n ? ` (${n})` : ""}`;
  }
  openEditWizard() {
    const e = D.SubFunction.edit(this.element);
    e && this.dispatchEvent(E(e));
  }
  remove() {
    this.element.parentElement && this.dispatchEvent(
      K({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      })
    );
  }
  openCreateWizard(e) {
    const t = D[e].create(this.element);
    t && this.dispatchEvent(E(t));
  }
  updated() {
    this.addMenu.anchor = this.addButton;
  }
  renderLNodes() {
    const e = $(this.element, "LNode");
    return e.length ? c`<div class="container lnode">
          ${e.map(
      (t) => c`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
              ></l-node-editor>`
    )}
        </div>` : c``;
  }
  renderSubFunctions() {
    const e = $(this.element, "SubFunction");
    return c` ${e.map(
      (t) => c`<sub-function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
          ?showfunctions=${this.showfunctions}
        ></sub-function-editor>`
    )}`;
  }
  renderAddButtons() {
    return Mu(this.element).map(
      (e) => c`<mwc-list-item value="${e}"
          ><span>${e}</span></mwc-list-item
        >`
    );
  }
  render() {
    return c`<action-pane label="${this.header}" icon="functions" secondary
      ><abbr slot="action" title="${s("edit")}">
        <mwc-icon-button
          icon="edit"
          @click=${() => this.openEditWizard()}
        ></mwc-icon-button> </abbr
      ><abbr slot="action" title="${s("remove")}">
        <mwc-icon-button
          icon="delete"
          @click=${() => this.remove()}
        ></mwc-icon-button> </abbr
      ><abbr slot="action" style="position:relative;" title="${s("add")}">
        <mwc-icon-button
          icon="playlist_add"
          @click=${() => this.addMenu.open = !0}
        ></mwc-icon-button
        ><mwc-menu
          corner="BOTTOM_RIGHT"
          menuCorner="END"
          @action=${(e) => {
      const t = e.target.selected.value;
      this.openCreateWizard(t);
    }}
          >${this.renderAddButtons()}</mwc-menu
        >
      </abbr>
      ${At(this.doc, this.element, this.showfunctions)}
      ${this.renderLNodes()}${this.renderSubFunctions()}</action-pane
    >`;
  }
};
Le.styles = G`
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
it([
  h({ attribute: !1 })
], Le.prototype, "doc", 2);
it([
  h({ type: Number })
], Le.prototype, "editCount", 2);
it([
  h({ attribute: !1 })
], Le.prototype, "element", 2);
it([
  h({ type: Boolean })
], Le.prototype, "showfunctions", 2);
it([
  _()
], Le.prototype, "header", 1);
it([
  N("mwc-menu")
], Le.prototype, "addMenu", 2);
it([
  N('mwc-icon-button[icon="playlist_add"]')
], Le.prototype, "addButton", 2);
Le = it([
  F("sub-function-editor")
], Le);
var Ou = Object.defineProperty, Fu = Object.getOwnPropertyDescriptor, rt = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? Fu(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
  return i && r && Ou(t, n, r), r;
};
function Hu(e) {
  return e ? V[e.tagName].children.filter(
    (t) => D[t].create !== m
  ) : [];
}
let Te = class extends Z {
  constructor() {
    super(...arguments), this.editCount = -1, this.showfunctions = !1;
  }
  get header() {
    const e = this.element.getAttribute("name"), t = this.element.getAttribute("desc"), n = this.element.getAttribute("type");
    return `${e}${t ? ` - ${t}` : ""}${n ? ` (${n})` : ""}`;
  }
  openEditWizard() {
    const e = D.Function.edit(this.element);
    e && this.dispatchEvent(E(e));
  }
  remove() {
    this.element.parentElement && this.dispatchEvent(
      K({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      })
    );
  }
  openCreateWizard(e) {
    const t = D[e].create(this.element);
    t && this.dispatchEvent(E(t));
  }
  updated() {
    this.addMenu.anchor = this.addButton;
  }
  renderLNodes() {
    const e = $(this.element, "LNode");
    return e.length ? c`<div class="container lnode">
          ${e.map(
      (t) => c`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
              ></l-node-editor>`
    )}
        </div>` : c``;
  }
  renderSubFunctions() {
    const e = $(this.element, "SubFunction");
    return c` ${e.map(
      (t) => c`<sub-function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
          ?showfunctions=${this.showfunctions}
        ></sub-function-editor>`
    )}`;
  }
  renderAddButtons() {
    return Hu(this.element).map(
      (e) => c`<mwc-list-item value="${e}"
          ><span>${e}</span></mwc-list-item
        >`
    );
  }
  render() {
    return c`<action-pane
      label="${this.header}"
      icon="functions"
      secondary
      highlighted
      ><abbr slot="action" title="${s("edit")}">
        <mwc-icon-button
          icon="edit"
          @click=${() => this.openEditWizard()}
        ></mwc-icon-button> </abbr
      ><abbr slot="action" title="${s("remove")}">
        <mwc-icon-button
          icon="delete"
          @click=${() => this.remove()}
        ></mwc-icon-button> </abbr
      ><abbr slot="action" style="position:relative;" title="${s("add")}">
        <mwc-icon-button
          icon="playlist_add"
          @click=${() => this.addMenu.open = !0}
        ></mwc-icon-button
        ><mwc-menu
          corner="BOTTOM_RIGHT"
          menuCorner="END"
          @action=${(e) => {
      const t = e.target.selected.value;
      this.openCreateWizard(t);
    }}
          >${this.renderAddButtons()}</mwc-menu
        >
      </abbr>
      ${At(this.doc, this.element, this.showfunctions)}
      ${this.renderLNodes()}${this.renderSubFunctions()}</action-pane
    >`;
  }
};
Te.styles = G`
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
rt([
  h({ attribute: !1 })
], Te.prototype, "doc", 2);
rt([
  h({ type: Number })
], Te.prototype, "editCount", 2);
rt([
  h({ attribute: !1 })
], Te.prototype, "element", 2);
rt([
  h({ type: Boolean })
], Te.prototype, "showfunctions", 2);
rt([
  _()
], Te.prototype, "header", 1);
rt([
  N("mwc-menu")
], Te.prototype, "addMenu", 2);
rt([
  N('mwc-icon-button[icon="playlist_add"]')
], Te.prototype, "addButton", 2);
Te = rt([
  F("function-editor")
], Te);
function Bu(e, t) {
  return Array.from(e.getElementsByTagName("LNode")).filter(q).some((n) => n.getAttribute("iedName") === t);
}
function Wu(e, t) {
  return Array.from(e.children).some(
    (n) => n.tagName === "LNode" && n.getAttribute("iedName") === t
  );
}
function Ei(e, t) {
  const n = e.tagName === "Bay" ? 0 : 1;
  return Array.from(e.children).filter(
    (i) => Bu(i, t)
  ).length > n;
}
function Gu(e, t) {
  return Array.from(e.getElementsByTagName("LNode")).filter(q).some((n) => n.getAttribute("iedName") === t);
}
function ju(e, t) {
  return Array.from(e.getElementsByTagName("LNode")).filter(q).filter((n) => n.getAttribute("iedName") === t);
}
function Uu(e, t) {
  const n = ju(e, t), i = e.closest("SCL");
  return Array.from(i.getElementsByTagName("LNode")).filter(q).filter((r) => r.getAttribute("iedName") === t).some((r) => !n.includes(r));
}
function Ku(e, t) {
  const n = [];
  for (const i of t) {
    const r = i.getAttribute("name");
    if (e.tagName === "SCL") {
      (!Gu(e, r) || Ei(e, r)) && n.push(i);
      continue;
    }
    Uu(e, r) || (Ei(e, r) || Wu(e, r)) && n.push(i);
  }
  for (const i of n)
    t.delete(i);
  return n;
}
function Zu(e) {
  return (t) => {
    const n = new Set(
      Array.from(e.querySelectorAll("IED")).filter(q)
    );
    return Ku(t, n);
  };
}
function eo(e, t) {
  const [n, i, r, o] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((a) => t.getAttribute(a));
  return Array.from(e.querySelectorAll("LN, LN0")).filter(q).find(
    (a) => a?.closest("LDevice")?.getAttribute("inst") === n && (a.getAttribute("prefix") ?? "") === (i ?? "") && (a.getAttribute("lnClass") ?? "") === (r ?? "") && (a.getAttribute("inst") ?? "") === (o ?? "")
  );
}
function Xu(e) {
  const t = new Set(
    Array.from(e.querySelectorAll("LNode")).filter(q).map((n) => I(n))
  );
  return (n) => t.has(I(n)) ? !0 : (t.add(I(n)), !1);
}
function to(e, t, n) {
  const i = Xu(e.ownerDocument), r = e.cloneNode(!0);
  return r.querySelectorAll("LNode").forEach((o) => {
    const a = o.getAttribute("iedName");
    if (a === "None") return;
    if (!a) {
      o.parentElement?.removeChild(o);
      return;
    }
    if (!n || !n[a]) {
      o.parentElement?.removeChild(o);
      return;
    }
    if (n[a] === "No") {
      o.parentElement?.removeChild(o);
      return;
    }
    if (o.setAttribute("iedName", n[a]), i(o)) {
      o.parentElement?.removeChild(o);
      return;
    }
    const l = e.ownerDocument.querySelector(
      `IED[name="${n[a]}"]`
    );
    if (!l || !eo(l, o)) {
      o.parentElement?.removeChild(o);
      return;
    }
  }), r.querySelectorAll('Terminal:not([cNodeName="grounded"])').forEach((o) => o.parentElement?.removeChild(o)), r.querySelectorAll("ConnectivityNode").forEach((o) => o.parentElement?.removeChild(o)), r.setAttribute("name", t), r;
}
function Ni(e, t) {
  const n = e.target?.parentElement;
  if (!n || !Array.from(n.querySelectorAll("mwc-select, wizard-textfield")).every((d) => d.checkValidity())) return;
  const r = n.querySelector("wizard-textfield"), o = Array.from(
    n.querySelectorAll("mwc-select")
  ), a = {};
  if (o.forEach((d) => {
    a[d.label] || (a[d.label] = d.value);
  }), !t.parentElement) return;
  const l = to(
    t,
    r.value,
    a
  );
  n.dispatchEvent(
    K({
      new: {
        parent: t.parentElement,
        element: l,
        reference: t.nextSibling
      }
    })
  );
}
function Qu(e, t) {
  const n = e.getAttribute("name");
  return !t.some((i) => {
    const [r, o, a, l] = [
      "ldInst",
      "prefix",
      "lnClass",
      "lnInst"
    ].map((d) => i.getAttribute(d));
    return !Array.from(
      e.ownerDocument.querySelectorAll(
        `LNode[iedName="${n}"][ldInst="${r}"]`
      )
    ).filter(q).every(
      (d) => (d.getAttribute("prefix") ?? "") === (o ?? "") && (d.getAttribute("lnClass") ?? "") === (a ?? "") && (d.getAttribute("inst") ?? "") === (l ?? "")
    );
  });
}
function Yu(e, t) {
  return t.some((n) => eo(e, n));
}
function no(e, t) {
  const n = Array.from(
    t.querySelectorAll(`LNode[iedName="${e.getAttribute("name")}"]`)
  );
  return Array.from(e.ownerDocument.querySelectorAll("IED")).filter(
    (i) => e !== i && Yu(i, n) && Qu(i, n)
  );
}
function io(e) {
  const t = Array.from(
    e.querySelectorAll('LNode:not([iedName="None"])')
  ).map(
    (n) => e.ownerDocument.querySelector(
      `IED[name="${n.getAttribute("iedName")}"]`
    )
  ).filter((n) => n).filter((n) => q(n));
  return new Set(t);
}
function zn(e, t, n) {
  const i = $(e, t).map(
    (a) => a.getAttribute("name") ?? a.tagName
  );
  if (!i.length) return t + "01";
  const r = n ? n.match(/\d+$/)?.[0] : void 0;
  let o = "";
  for (let a = 0; a < i.length; a++) {
    if (!r) o = (n ?? t) + (a + 1);
    else {
      const l = (Number.parseInt(r, 10) + (a + 1)).toString().padStart(r.length, "0");
      o = n.replace(r, l);
    }
    if (!i.includes(o)) return o;
  }
  return o;
}
function Kn(e) {
  const t = e.parentElement, n = e.tagName, i = e.getAttribute("name"), r = t && i ? zn(t, n, i) : t ? zn(t, n) : "", o = (t ? $(t, n) : []).map((a) => a.getAttribute("name")).filter((a) => a);
  return c` <mwc-dialog
    stacked
    heading="${s("substation.clone.redirect")}"
  >
    <wizard-textfield
      label="${s("substation.clone.newname")}"
      value="${r}"
      .reservedValues="${o}"
    ></wizard-textfield>
    ${Array.from(io(e)).map((a) => {
    const l = no(a, e).map(
      (u) => u.getAttribute("name")
    ), d = ["no"].concat(l);
    return c`<mwc-select
        required
        fixedMenuPosition
        value="${d[0]}"
        label="${a.getAttribute("name")}"
        >${d.map(
      (u) => c`<mwc-list-item value="${u}"
            >${u}</mwc-list-item
          >`
    )}</mwc-select
      >`;
  })}
    <mwc-button
      slot="secondaryAction"
      dialogAction="close"
      label="${s("close")}"
      style="--mdc-theme-primary: var(--mdc-theme-error)"
    ></mwc-button>
    <mwc-button
      slot="primaryAction"
      dialogAction="close"
      label="${s("substation.clone.cloneclose")}"
      icon="content_copy"
      @click=${(a) => Ni(a, e)}
    ></mwc-button>
    <mwc-button
      slot="primaryAction"
      label="${s("substation.clone.cloneproc")}"
      icon="content_copy"
      @click=${(a) => Ni(a, e)}
    ></mwc-button>
  </mwc-dialog>`;
}
function Ju(e) {
  return !Array.from(io(e)).every(
    (t) => !no(t, e).length
  );
}
async function Zn(e) {
  const t = e.element;
  if (Ju(t))
    e.cloneUI = !0, await e.updateComplete, e.dialog.show();
  else {
    const n = e.element.parentElement, i = e.element.getAttribute("name") ?? void 0;
    if (!n) return;
    const r = zn(
      n,
      e.element.tagName,
      i
    ), o = to(e.element, r);
    e.dispatchEvent(K({ new: { parent: n, element: o } }));
  }
}
function gt(e, t, n) {
  if (!e.element) return;
  e.classList.add("moving");
  const i = (r) => {
    if (r instanceof KeyboardEvent && r.key !== "Escape" && r.key !== " " && r.key !== "Enter" || (r.preventDefault(), r.stopImmediatePropagation(), e.classList.remove("moving"), window.removeEventListener("keydown", i, !0), window.removeEventListener("click", i, !0), r instanceof KeyboardEvent && r.key === "Escape")) return;
    const o = r.composedPath().find(
      (l) => l instanceof t || em(l, n)
    );
    if (o === void 0 || o === e) return;
    const a = o instanceof t ? {
      parent: o.element.parentElement,
      reference: o.element
    } : { parent: o.element, reference: null };
    a.parent && (e.element.parentElement !== a.parent || e.element.nextElementSibling !== a.reference) && e.dispatchEvent(
      K({
        old: {
          element: e.element,
          parent: e.element.parentElement,
          reference: e.element.nextSibling
        },
        new: a
      })
    );
  };
  window.addEventListener("click", i, !0), window.addEventListener("keydown", i, !0);
}
function em(e, t) {
  return t.find((i) => e instanceof i) !== void 0;
}
function Ii(e) {
  return tm[mr(e)] ?? Jr;
}
function At(e, t, n) {
  const i = $(
    t,
    "GeneralEquipment"
  );
  return i.length ? c` <div
        class="${We({
    content: !0,
    actionicon: !n
  })}"
      >
        ${i.map(
    (r) => c`<general-equipment-editor
              .doc=${e}
              .element=${r}
              ?showfunctions=${n}
            ></general-equipment-editor>`
  )}
      </div>` : c``;
}
const tm = {
  CBR: Eu,
  DIS: Cu,
  CTR: Nu,
  VTR: Iu,
  ERS: Du
}, nm = [
  ":root",
  "Substation",
  "VoltageLevel",
  "Bay",
  "ConductingEquipment"
], Vt = Object.fromEntries(
  nm.map((e, t, n) => [e, n.slice(0, t + 1).join(" > ")])
), je = G`
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
var im = Object.defineProperty, rm = Object.getOwnPropertyDescriptor, ot = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? rm(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
  return i && r && im(t, n, r), r;
};
function om(e) {
  return e ? V[e.tagName].children.filter(
    (t) => D[t].create !== m
  ) : [];
}
let _e = class extends Z {
  constructor() {
    super(...arguments), this.editCount = -1, this.showfunctions = !1;
  }
  get header() {
    const e = this.element.getAttribute("name"), t = this.element.getAttribute("desc"), n = this.element.getAttribute("type");
    return `${e}${t ? ` - ${t}` : ""}${n ? ` (${n})` : ""}`;
  }
  openEditWizard() {
    const e = D.EqSubFunction.edit(this.element);
    e && this.dispatchEvent(E(e));
  }
  remove() {
    this.element.parentElement && this.dispatchEvent(
      K({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      })
    );
  }
  openCreateWizard(e) {
    const t = D[e].create(this.element);
    t && this.dispatchEvent(E(t));
  }
  updated() {
    this.addMenu.anchor = this.addButton;
  }
  renderLNodes() {
    const e = $(this.element, "LNode");
    return e.length ? c`<div class="container lnode">
          ${e.map(
      (t) => c`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
              ></l-node-editor>`
    )}
        </div>` : c``;
  }
  renderEqSubFunctions() {
    const e = $(
      this.element,
      "EqSubFunction"
    );
    return c` ${e.map(
      (t) => c`<eq-sub-function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
        ></eq-sub-function-editor>`
    )}`;
  }
  renderAddButtons() {
    return om(this.element).map(
      (e) => c`<mwc-list-item value="${e}"
          ><span>${e}</span></mwc-list-item
        >`
    );
  }
  render() {
    return c`<action-pane label="${this.header}" icon="functions" secondary
      ><abbr slot="action" title="${s("edit")}">
        <mwc-icon-button
          icon="edit"
          @click=${() => this.openEditWizard()}
        ></mwc-icon-button> </abbr
      ><abbr slot="action" title="${s("remove")}">
        <mwc-icon-button
          icon="delete"
          @click=${() => this.remove()}
        ></mwc-icon-button> </abbr
      ><abbr slot="action" style="position:relative;" title="${s("add")}">
        <mwc-icon-button
          icon="playlist_add"
          @click=${() => this.addMenu.open = !0}
        ></mwc-icon-button
        ><mwc-menu
          corner="BOTTOM_RIGHT"
          menuCorner="END"
          @action=${(e) => {
      const t = e.target.selected.value;
      this.openCreateWizard(t);
    }}
          >${this.renderAddButtons()}</mwc-menu
        ></abbr
      >
      ${At(this.doc, this.element, this.showfunctions)}
      ${this.renderLNodes()}${this.renderEqSubFunctions()}</action-pane
    >`;
  }
};
_e.styles = G`
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
ot([
  h({ attribute: !1 })
], _e.prototype, "doc", 2);
ot([
  h({ type: Number })
], _e.prototype, "editCount", 2);
ot([
  h({ attribute: !1 })
], _e.prototype, "element", 2);
ot([
  h({ type: Boolean })
], _e.prototype, "showfunctions", 2);
ot([
  _()
], _e.prototype, "header", 1);
ot([
  N("mwc-menu")
], _e.prototype, "addMenu", 2);
ot([
  N('mwc-icon-button[icon="playlist_add"]')
], _e.prototype, "addButton", 2);
_e = ot([
  F("eq-sub-function-editor")
], _e);
var am = Object.defineProperty, sm = Object.getOwnPropertyDescriptor, at = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? sm(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
  return i && r && am(t, n, r), r;
};
function cm(e) {
  return e ? V[e.tagName].children.filter(
    (t) => D[t].create !== m
  ) : [];
}
let Ve = class extends Z {
  constructor() {
    super(...arguments), this.editCount = -1, this.showfunctions = !1;
  }
  get header() {
    const e = this.element.getAttribute("name"), t = this.element.getAttribute("desc"), n = this.element.getAttribute("type");
    return `${e}${t ? ` - ${t}` : ""}${n ? ` (${n})` : ""}`;
  }
  openEditWizard() {
    const e = D.EqFunction.edit(this.element);
    e && this.dispatchEvent(E(e));
  }
  remove() {
    this.element.parentElement && this.dispatchEvent(
      K({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      })
    );
  }
  openCreateWizard(e) {
    const t = D[e].create(this.element);
    t && this.dispatchEvent(E(t));
  }
  updated() {
    this.addMenu.anchor = this.addButton;
  }
  renderLNodes() {
    const e = $(this.element, "LNode");
    return e.length ? c`<div class="container lnode">
          ${e.map(
      (t) => c`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
              ></l-node-editor>`
    )}
        </div>` : c``;
  }
  renderEqSubFunctions() {
    const e = $(
      this.element,
      "EqSubFunction"
    );
    return c` ${e.map(
      (t) => c`<eq-sub-function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
          ?showfunctions=${this.showfunctions}
        ></eq-sub-function-editor>`
    )}`;
  }
  renderAddButtons() {
    return cm(this.element).map(
      (e) => c`<mwc-list-item value="${e}"
          ><span>${e}</span></mwc-list-item
        >`
    );
  }
  render() {
    return c`<action-pane
      label="${this.header}"
      icon="functions"
      secondary
      highlighted
      ><abbr slot="action" title="${s("edit")}">
        <mwc-icon-button
          icon="edit"
          @click=${() => this.openEditWizard()}
        ></mwc-icon-button> </abbr
      ><abbr slot="action" title="${s("remove")}">
        <mwc-icon-button
          icon="delete"
          @click=${() => this.remove()}
        ></mwc-icon-button> </abbr
      ><abbr slot="action" style="position:relative;" title="${s("add")}">
        <mwc-icon-button
          icon="playlist_add"
          @click=${() => this.addMenu.open = !0}
        ></mwc-icon-button
        ><mwc-menu
          corner="BOTTOM_RIGHT"
          menuCorner="END"
          @action=${(e) => {
      const t = e.target.selected.value;
      this.openCreateWizard(t);
    }}
          >${this.renderAddButtons()}</mwc-menu
        ></abbr
      >
      ${At(this.doc, this.element, this.showfunctions)}
      ${this.renderLNodes()}${this.renderEqSubFunctions()}</action-pane
    >`;
  }
};
Ve.styles = G`
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
at([
  h({ attribute: !1 })
], Ve.prototype, "doc", 2);
at([
  h({ type: Number })
], Ve.prototype, "editCount", 2);
at([
  h({ attribute: !1 })
], Ve.prototype, "element", 2);
at([
  h({ type: Boolean })
], Ve.prototype, "showfunctions", 2);
at([
  _()
], Ve.prototype, "header", 1);
at([
  N("mwc-menu")
], Ve.prototype, "addMenu", 2);
at([
  N('mwc-icon-button[icon="playlist_add"]')
], Ve.prototype, "addButton", 2);
Ve = at([
  F("eq-function-editor")
], Ve);
var lm = Object.defineProperty, dm = Object.getOwnPropertyDescriptor, St = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? dm(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
  return i && r && lm(t, n, r), r;
};
function um(e) {
  return e ? V[e.tagName].children.filter(
    (t) => D[t].create !== m
  ) : [];
}
let Be = class extends Z {
  constructor() {
    super(...arguments), this.editCount = -1;
  }
  get label() {
    const e = `${this.element.hasAttribute("name") ? `${this.element.getAttribute("name")}` : ""}`, t = `${this.element.hasAttribute("desc") ? ` - ${this.element.getAttribute("desc")}` : ""}`, n = `${this.element.hasAttribute("phase") ? ` (${this.element.getAttribute("phase")})` : ""}`;
    return `${e}${t}${n}`;
  }
  remove() {
    this.element.parentElement && this.dispatchEvent(
      K({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      })
    );
  }
  openCreateWizard(e) {
    const t = D[e].create(this.element);
    t && this.dispatchEvent(E(t));
  }
  updated() {
    this.addMenu && this.addButton && (this.addMenu.anchor = this.addButton);
  }
  renderAddButtons() {
    return um(this.element).map(
      (e) => c`<mwc-list-item value="${e}"
          ><span>${e}</span></mwc-list-item
        >`
    );
  }
  renderLNodes() {
    const e = $(this.element, "LNode");
    return e.length ? c`<div class="container lnode">
          ${e.map(
      (t) => c`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
              ></l-node-editor>`
    )}
        </div>` : c``;
  }
  renderEqFunctions() {
    const e = $(this.element, "EqFunction");
    return e.length ? c` ${e.map(
      (t) => c`<eq-function-editor
              .editCount=${this.editCount}
              .doc=${this.doc}
              .element=${t}
            ></eq-function-editor>`
    )}` : c``;
  }
  openEditWizard() {
    const e = D.SubEquipment.edit(this.element);
    e && this.dispatchEvent(E(e));
  }
  render() {
    return c`<action-pane label="${this.label}">
      <abbr slot="action" title="${s("edit")}">
        <mwc-icon-button icon="edit" @click=${() => this.openEditWizard()}>
        </mwc-icon-button>
      </abbr>
      <abbr slot="action" title="${s("remove")}">
        <mwc-icon-button
          icon="delete"
          @click=${() => this.remove()}
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" style="position:relative;" title="${s("add")}">
        <mwc-icon-button
          icon="playlist_add"
          @click=${() => this.addMenu.open = !0}
        ></mwc-icon-button
        ><mwc-menu
          corner="BOTTOM_RIGHT"
          menuCorner="END"
          @action=${(e) => {
      const t = e.target.selected.value;
      this.openCreateWizard(t);
    }}
          >${this.renderAddButtons()}</mwc-menu
        >
      </abbr>

      ${this.renderLNodes()} ${this.renderEqFunctions()}
    </action-pane> `;
  }
};
Be.styles = G`
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
  h({ attribute: !1 })
], Be.prototype, "doc", 2);
St([
  h({ type: Number })
], Be.prototype, "editCount", 2);
St([
  h({ attribute: !1 })
], Be.prototype, "element", 2);
St([
  h({ type: String })
], Be.prototype, "label", 1);
St([
  N("mwc-menu")
], Be.prototype, "addMenu", 2);
St([
  N('mwc-icon-button[icon="playlist_add"]')
], Be.prototype, "addButton", 2);
Be = St([
  F("sub-equipment-editor")
], Be);
function mm(e) {
  const t = e.textContent ?? "", [n, i, r, o, a] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((v) => e.getAttribute(v)), l = e.ownerDocument.querySelector(`:root > IED[name=${t}]`);
  if (!l) return null;
  const d = n ? `AccessPoint[name="${n}"]` : "``", u = i ? `LDevice[inst="${i}"]` : "", p = o ? o === "LLN0" ? "LN0" : `LN[lnClass="${o}"]` : "", f = r ? `[prefix="${r}"]` : "", b = a ? `[inst="${a}"]` : "", y = ` ${d} ${u} ${p}${f}${b}`;
  return l.querySelector(y);
}
function pm(e) {
  const t = [];
  e.forEach((r) => {
    const [o, a, l, d, u, p, f] = [
      "intAddr",
      "desc",
      "serviceType",
      "pServT",
      "pLN",
      "pDO",
      "pDA"
    ].map((b) => r.getAttribute(b));
    if (o) {
      const b = z(r.ownerDocument, "ExtRef", {
        intAddr: o,
        desc: a,
        serviceType: l,
        pServT: d,
        pLN: u,
        pDO: p,
        pDA: f
      });
      t.push({
        new: {
          element: b
        },
        old: {
          element: r
        }
      });
    } else
      t.push({
        old: {
          parent: r.parentElement,
          element: r,
          reference: r.nextElementSibling
        }
      });
  });
  const n = /* @__PURE__ */ new Set();
  e.forEach((r) => {
    nr(r).forEach((o) => {
      const a = r.closest("IED")?.getAttribute("name"), l = r.closest("LDevice")?.getAttribute("inst"), d = r.closest("AccessPoint")?.getAttribute("name"), u = r.closest("LN0") || r.closest("LN"), [p, f, b] = ["prefix", "lnClass", "inst"].map(
        (v) => u?.getAttribute(v)
      );
      Array.from(o.getElementsByTagName("IEDName")).filter(
        (v) => v.textContent === a && (v.getAttribute("apRef") || d) === d && (v.getAttribute("ldInst") || l) === l && (v.getAttribute("prefix") || p) === p && (v.getAttribute("lnClass") || f) === f && (v.getAttribute("lnInst") || b) === b
      ).forEach((v) => {
        n.add(v);
      });
    });
  });
  const i = /* @__PURE__ */ new Set();
  return n.forEach((r) => {
    i.clear();
    const o = mm(r);
    o && oo(o).forEach(
      (a) => i.add(a)
    ), e.forEach((a) => i.delete(a)), i.size === 0 && t.push({
      old: {
        parent: r.parentElement,
        element: r,
        reference: r.nextElementSibling
      }
    });
  }), t;
}
function hm(e) {
  return (t, n, i) => {
    const r = i.index, o = Array.from(r).map((l) => e[l]), a = [];
    return pm(o).forEach((l) => a.push(l)), a;
  };
}
function fm(e, t, n) {
  if (!t) return;
  const i = e[0].closest("IED")?.getAttribute("name");
  return [
    {
      title: I(t) + " - " + i,
      primary: {
        icon: "delete",
        label: s("disconnect"),
        action: hm(e)
      },
      secondary: {
        icon: "",
        label: s("back"),
        action: ro(n)
      },
      content: [
        c`<filtered-list multi
          >${e.map((o) => {
          const a = (o.getAttribute("prefix") ?? "") + o.getAttribute("lnClass") + (o.getAttribute("lnInst") ?? "") + ">" + o.getAttribute("doName") + "." + (o.getAttribute("daName") ?? "");
          return c`<mwc-check-list-item graphic="icon" twoline>
              <span>${a}</span>
              <span slot="secondary"
                >${o.getAttribute("ldInst") ?? ""}</span
              >
              <mwc-icon slot="graphic">${Au}</mwc-icon>
            </mwc-check-list-item> `;
        })}</filtered-list
        >`
      ]
    }
  ];
}
function ro(e) {
  return () => [() => ao(e)];
}
function bm(e) {
  return e instanceof Element && e.tagName === "IED" ? Array.from(e.ownerDocument.getElementsByTagName("ClientLN")).filter(q).filter(
    (t) => t.getAttribute("iedName") === e.getAttribute("name") || t.closest("IED") === e
  ) : Array.from(e.getElementsByTagName("ClientLN")).filter(q);
}
function oo(e) {
  return e instanceof Element && e.tagName === "IED" ? Array.from(e.ownerDocument.getElementsByTagName("ExtRef")).filter(q).filter(
    (t) => t.getAttribute("iedName") === e.getAttribute("name") || t.closest("IED") === e && t.getAttribute("iedName")
  ) : Array.from(e.getElementsByTagName("ExtRef")).filter(q).filter((t) => t.getAttribute("iedName"));
}
function ao(e) {
  const t = e instanceof XMLDocument ? e : e.ownerDocument, n = /* @__PURE__ */ new Map(), i = oo(e);
  return bm(e).forEach((o) => {
    const a = o.parentElement.parentElement, l = o.getAttribute("iedName"), d = I(a) + " | " + a.tagName + " | " + l;
    n.has(d) || n.set(d, []), n.get(d)?.push(o);
  }), i.forEach((o) => {
    const a = o.closest("IED")?.getAttribute("name") ?? "";
    nr(o).forEach((d) => {
      const u = I(d) + " | " + d.tagName + " | " + a;
      n.has(u) || n.set(u, []), n.get(u)?.push(o);
    });
  }), [
    {
      title: s("commmap.title"),
      content: [
        c`<filtered-list
          >${Array.from(n.keys()).map((o) => {
          const a = n.get(o), [l, d, u] = o.split(" | "), p = Y(t, d, l), [f, b, y] = l.match(/^(.+)>>(.*)$/);
          return c`<mwc-list-item
              twoline
              graphic="icon"
              hasMeta
              @click="${(v) => {
            v.target.dispatchEvent(
              E(
                d === "ReportControl" ? Am(a, e) : fm(a, p, e)
              )
            ), v.target.dispatchEvent(E());
          }}"
            >
              <span
                >${b}
                <mwc-icon style="--mdc-icon-size: 1em;">trending_flat</mwc-icon>
                ${u}</span
              >
              <span slot="secondary">${y}</span>
              <span slot="meta" style="padding-left: 10px"
                >${n.get(o).length}</span
              >
              <mwc-icon slot="graphic">${wu[d]}</mwc-icon>
            </mwc-list-item>`;
        })}</filtered-list
        >`
      ]
    }
  ];
}
function pn(e) {
  return typeof e != "string" ? "" : ae(e)[0] ?? "";
}
function ft(e) {
  return typeof e != "string" ? "" : ae(e)[1] ?? "";
}
function so(e, t) {
  if (t.split(">").length === 4)
    return Y(e, "LN", t);
  if (t.split(">").length === 3) {
    if (ft(t).split(" ").length > 1)
      return Y(e, "LN", t);
    if (ft(t).split(" ").length === 1)
      return Y(e, "LN0", t);
  }
  return null;
}
function gm(e, t) {
  for (const n of Array.from(e.getElementsByTagName("ClientLN"))) {
    const [i, r, o, a, l, d] = [
      "iedName",
      "apRef",
      "ldInst",
      "prefix",
      "lnClass",
      "lnInst"
    ].map((y) => n.getAttribute(y)), u = so(e.ownerDocument, t);
    if (!u) break;
    const p = u.closest("IED"), f = u.closest("AccessPoint"), b = u.closest("LDevice");
    if (t.split(">").length === 4 && i === p?.getAttribute("name") && r === f?.getAttribute("name") && o === b?.getAttribute("inst") && (a ?? "") === (u.getAttribute("prefix") ?? "") && l === u.getAttribute("lnClass") && (d ?? "") === (u.getAttribute("inst") ?? ""))
      return !0;
    if (t.split(">").length === 3) {
      if (ft(t).split(" ").length > 1) {
        const y = p?.querySelectorAll("AccessPoint").length;
        if (i === p?.getAttribute("name") && y && (y <= 1 || r === f?.getAttribute("name")) && (a ?? "") === (u.getAttribute("prefix") ?? "") && l === u.getAttribute("lnClass") && (d ?? "") === (u.getAttribute("inst") ?? ""))
          return !0;
      }
      if (ft(t).split(" ").length === 1 && i === p?.getAttribute("name") && r === f?.getAttribute("name") && o === b?.getAttribute("inst") && l === u.getAttribute("lnClass"))
        return !0;
    }
  }
  return !1;
}
function ym(e) {
  return (t, n) => {
    const i = n.shadowRoot.querySelector("#sourcelist").selected, r = n.shadowRoot.querySelector("#sinklist").selected, o = [];
    return r.forEach((a) => {
      const l = a.value;
      i.map((u) => u.value).map((u) => Y(e, "ReportControl", u)).filter((u) => u !== null).forEach((u) => {
        if (u.querySelector("RptEnabled") === null) {
          const f = z(e, "RptEnabled", {
            max: "1"
          });
          u.appendChild(f);
        }
        const p = so(e, l);
        if (u.querySelector("RptEnabled") !== null && !gm(u, l) && p) {
          const f = z(e, "ClientLN", {
            iedName: p?.closest("IED")?.getAttribute("name") ?? null,
            apRef: p?.closest("AccessPoint")?.getAttribute("name") ?? null,
            ldInst: p?.closest("LDevice")?.getAttribute("inst") ?? "LD0",
            //ldInst is required and with Ed2 'LD0' for client ln's
            prefix: p?.getAttribute("prefix") ?? "",
            //OpenSCD empty string over null
            lnClass: p?.getAttribute("lnClass") ?? "",
            lnInst: p?.getAttribute("inst") ?? ""
            //OpenSCD empty string over null
          });
          o.push({
            new: {
              parent: u.querySelector("RptEnabled"),
              element: f
            }
          });
        }
      });
    }), o;
  };
}
function vm(e, t) {
  const n = e.flatMap((a) => Array.from(a.getElementsByTagName("ReportControl")).map(
    (l) => ({
      identity: I(l),
      numberClientLNs: Array.from(l.getElementsByTagName("ClientLN")).length,
      max: Number(l.querySelector("RptEnabled")?.getAttribute("max"))
    })
  )), i = Array.from(
    t.querySelectorAll(":root > IED > AccessPoint > LN")
  ), r = Array.from(
    t.querySelectorAll(
      ":root > IED > AccessPoint > Server > LDevice > LN"
    )
  ), o = Array.from(
    t.querySelectorAll(
      ":root > IED > AccessPoint > Server > LDevice > LN0"
    )
  );
  return [
    {
      title: s("commmap.connectToIED", {
        iedName: t.getAttribute("name") ?? ""
      }),
      primary: {
        label: s("connect"),
        icon: "",
        action: ym(t.ownerDocument)
      },
      content: [
        c`<div
          class="wrapper"
          style="display: grid; grid-template-columns: 1fr 1fr;"
        >
          <filtered-list
            id="sourcelist"
            multi
            searchFieldLabel="${s("scl.Report")}"
            >${n.sort((a, l) => l.numberClientLNs - a.numberClientLNs).map(
          (a) => c`<mwc-check-list-item
                    left
                    hasMeta
                    twoline
                    value="${a.identity}"
                    ?disabled=${a.numberClientLNs >= a.max}
                    ><span>${ft(a.identity)}</span
                    ><span slot="secondary">${pn(a.identity)}</span
                    ><span slot="meta"
                      >${a.max ? a.numberClientLNs + "/" + a.max : a.numberClientLNs}</span
                    ></mwc-check-list-item
                  >`
        )}</filtered-list
          ><filtered-list
            multi
            id="sinklist"
            activatable
            searchFieldLabel="${s("scl.LN")}"
            >${i.map(
          (a) => c`<mwc-check-list-item twoline value="${I(a)}">
                  <span>${ft(I(a))}</span>
                  <span slot="secondary">${pn(I(a))}</span>
                </mwc-check-list-item>`
        )}
            <li divider role="separator"></li>
            ${r.map(
          (a) => c`<mwc-check-list-item twoline value="${I(a)}">
                  <span>${ft(I(a))}</span>
                  <span slot="secondary">${pn(I(a))}</span>
                </mwc-check-list-item>`
        )}
            ${o.map(
          (a) => c`<mwc-check-list-item twoline value="${I(a)}">
                  <span>LLN0</span>
                  <span slot="secondary">${I(a)}</span>
                </mwc-check-list-item>`
        )}</filtered-list
          >
        </div>`
      ]
    }
  ];
}
function wm(e) {
  return (t, n, i) => {
    const r = i.index, o = Array.from(r).map((l) => e[l]), a = [];
    return o.forEach((l) => {
      a.push({
        old: {
          parent: l.parentElement,
          element: l,
          reference: l.nextElementSibling
        }
      });
    }), a;
  };
}
function Am(e, t) {
  const n = e[0].closest("ReportControl"), i = I(n), r = e[0].getAttribute("iedName");
  return [
    {
      title: i + " - " + r,
      primary: {
        icon: "delete",
        label: s("disconnect"),
        action: wm(e)
      },
      secondary: {
        icon: "",
        label: s("back"),
        action: ro(t)
      },
      content: [
        c`<filtered-list multi
          >${e.map((o) => {
          const a = (o.getAttribute("prefix") ?? "") + o.getAttribute("lnClass") + (o.getAttribute("lnInst") ?? "");
          return c`<mwc-check-list-item graphic="icon">
              <span>${a}</span>
              <mwc-icon slot="graphic">${Su}</mwc-icon>
            </mwc-check-list-item> `;
        })}</filtered-list
        >`
      ]
    }
  ];
}
function hn(e) {
  if (["LDevice", "Server"].includes(e.tagName))
    return Array.from(e.children).filter(
      (n) => n.tagName === "LDevice" || n.tagName === "LN0" || n.tagName === "LN"
    );
  const t = e.tagName === "LN" || e.tagName === "LN0" ? e.getAttribute("lnType") : e.getAttribute("type");
  return Array.from(
    e.ownerDocument.querySelectorAll(
      `LNodeType[id="${t}"] > DO, DOType[id="${t}"] > SDO, DOType[id="${t}"] > DA, DAType[id="${t}"] > BDA`
    )
  );
}
function co(e, t) {
  const [n, i, r, o, a, l, d] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc"
  ].map((B) => e.getAttribute(B));
  if (!t.querySelector(`LDevice[inst="${n}"]`)) return !1;
  const p = i ? [`[prefix="${i}"]`] : ['[prefix=""]', ":not([prefix])"], f = o ? [`[inst="${o}"]`] : ['[inst=""]', ":not([inst])"], b = re(
    ["LN0", "LN"],
    p,
    [`[lnClass="${r}"]`],
    f
  ).map((B) => B.join("")).join(","), y = t.querySelector(b);
  if (!y) return !1;
  const v = a?.split(".");
  if (!v) return !1;
  let k = y;
  for (const B of v)
    if (k = hn(k).find(
      (J) => J.getAttribute("name") === B
    ), !k) return !1;
  const L = l?.split("."), A = hn(k).some(
    (B) => B.getAttribute("fc") === d
  );
  if (!L && A) return !0;
  if (!L) return !1;
  let H = "";
  for (const B of L)
    if (k = hn(k).find(
      (J) => J.getAttribute("name") === B
    ), k?.getAttribute("fc") && (H = k.getAttribute("fc")), !k) return !1;
  return H === d;
}
function lo(e) {
  return [
    c`<wizard-textfield
      label="name"
      .maybeValue=${e.name}
      helper="${s("scl.name")}"
      required
      validationMessage="${s("textfield.required")}"
      pattern="${De.asciName}"
      maxLength="${nn.cbName}"
      dialogInitialFocus
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="desc"
      .maybeValue=${e.desc}
      nullable
      helper="${s("scl.desc")}"
    ></wizard-textfield>`,
    c`<wizard-checkbox
      label="buffered"
      .maybeValue=${e.buffered}
      helper="${s("scl.buffered")}"
    ></wizard-checkbox>`,
    c`<wizard-textfield
      label="rptID"
      .maybeValue=${e.rptID}
      nullable
      required
      helper="${s("report.rptID")}"
    ></wizard-textfield>`,
    c`<wizard-checkbox
      label="indexed"
      .maybeValue=${e.indexed}
      nullable
      helper="${s("scl.indexed")}"
    ></wizard-checkbox>`,
    c`<wizard-textfield
      label="max Clients"
      .maybeValue=${e.max}
      helper="${s("scl.maxReport")}"
      nullable
      type="number"
      suffix="#"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="bufTime"
      .maybeValue=${e.bufTime}
      helper="${s("scl.bufTime")}"
      nullable
      required
      type="number"
      min="0"
      suffix="ms"
    ></wizard-textfield>`,
    c`<wizard-textfield
      label="intgPd"
      .maybeValue=${e.intgPd}
      helper="${s("scl.intgPd")}"
      nullable
      required
      type="number"
      min="0"
      suffix="ms"
    ></wizard-textfield>`
  ];
}
function Sm(e) {
  return (t, n) => {
    const i = {};
    [
      "name",
      "desc",
      "buffered",
      "rptID",
      "indexed",
      "bufTime",
      "intgPd"
    ].forEach((W) => {
      i[W] = g(t.find((de) => de.label === W));
    }), i.confRev = "1";
    const o = i.name + "sDataSet";
    i.datSet = o;
    const a = z(
      e.ownerDocument,
      "ReportControl",
      i
    ), l = {};
    [
      "seqNum",
      "timeStamp",
      "dataSet",
      "reasonCode",
      "dataRef",
      "entryID",
      "configRef",
      "bufOvfl"
    ].forEach((W) => {
      l[W] = g(t.find((de) => de.label === W));
    });
    const u = z(
      e.ownerDocument,
      "OptFields",
      l
    ), p = {};
    ["dchg", "qchg", "dupd", "period", "gi"].forEach((W) => {
      p[W] = g(t.find((de) => de.label === W));
    });
    const b = z(e.ownerDocument, "TrgOps", p), y = g(t.find((W) => W.label === "max Clients")), v = y ? z(e.ownerDocument, "RptEnabled", {
      max: y
    }) : null;
    a.appendChild(b), a.appendChild(u), v && a.appendChild(v);
    const k = z(e.ownerDocument, "DataSet", {
      name: o
    }), A = n.shadowRoot.querySelector("finder-list")?.paths ?? [];
    for (const W of A) {
      const de = tn(e, W);
      de && k.appendChild(de);
    }
    const H = i.name, B = e.closest("IED").getAttribute("name");
    return [{
      title: s("controlblock.action.add", {
        type: "Report",
        name: H,
        iedName: B
      }),
      actions: [
        { new: { parent: e, element: a } },
        { new: { parent: e, element: k } }
      ]
    }];
  };
}
function uo(e) {
  const t = e.closest("Server"), n = Yt(e, "ReportControl");
  return [
    {
      title: s("wizard.title.add", { tagName: "ReportControl" }),
      content: lo({
        name: n,
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
      title: s("scl.TrgOps"),
      content: Lr({ dchg: "true", qchg: "true", dupd: "true", period: "true", gi: "false" })
    },
    {
      title: s("scl.OptFields"),
      content: wr({
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
      title: s("dataset.fcda.add"),
      primary: {
        icon: "save",
        label: s("save"),
        action: Sm(e)
      },
      content: [t ? Zt(t) : c``]
    }
  ];
}
function xm(e) {
  return (t, n) => {
    const r = n.shadowRoot?.querySelector("finder-list")?.path ?? [];
    if (r.length === 0) return [];
    const [o, a] = r.pop().split(": ");
    if (o !== "IED") return [];
    const l = Y(e, o, a);
    if (!l) return [];
    const d = l.querySelector("LN0");
    return d ? [() => uo(d)] : [];
  };
}
function $m(e) {
  return [
    {
      title: s("report.wizard.location"),
      primary: {
        icon: "",
        label: s("next"),
        action: xm(e)
      },
      content: [On(e)]
    }
  ];
}
function Cm(e) {
  return () => e.tagName === "IED" && e.querySelector("LN0") ? [() => uo(e.querySelector("LN0"))] : [() => $m(e.ownerDocument)];
}
function Em(e) {
  if (!e.parentElement) return null;
  const t = e.parentElement.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), n = Array.from(
    e.parentElement.querySelectorAll(
      "ReportControl, GSEControl, SampledValueControl"
    )
  ).filter(
    (a) => a.getAttribute("datSet") === t?.getAttribute("name")
  ).length <= 1, i = [];
  i.push({
    old: {
      parent: e.parentElement,
      element: e,
      reference: e.nextSibling
    }
  }), t && n && i.push({
    old: {
      parent: e.parentElement,
      element: t,
      reference: t.nextSibling
    }
  });
  const r = e.getAttribute("name"), o = e.closest("IED")?.getAttribute("name") ?? "";
  return {
    title: s("controlblock.action.remove", { type: "Report", name: r, iedName: o }),
    actions: i
  };
}
function Nm(e, t, n) {
  if (e === null) {
    const r = z(n.ownerDocument, "RptEnabled", {
      max: t
    });
    return {
      new: {
        parent: n,
        element: r,
        reference: vs(n, "RptEnabled")
      }
    };
  }
  const i = O(e, { max: t });
  return {
    old: { element: e },
    new: { element: i }
  };
}
function Im(e) {
  return (t, n) => {
    const i = e.ownerDocument, r = n.shadowRoot?.querySelector("filtered-list")?.selected, o = [];
    return r.forEach((a) => {
      const l = Y(i, "IED", a.value);
      if (!l) return;
      const d = l.querySelector("LN0");
      if (!d) return [];
      const u = e.parentElement?.querySelector(
        `DataSet[name="${e.getAttribute("datSet")}"]`
      );
      if (u && d.querySelector(
        `DataSet[name="${u.getAttribute("name")}"]`
      ))
        return [];
      if (d.querySelector(
        `ReportControl[name="${e.getAttribute("name")}"]`
      ))
        return [];
      const p = u?.cloneNode(!0);
      if (Array.from(p.querySelectorAll("FCDA")).forEach((v) => {
        co(v, l) || p.removeChild(v);
      }), p.children.length === 0) return [];
      const f = e.cloneNode(!0), b = e.closest("IED")?.getAttribute("name"), y = l.getAttribute("name");
      o.push({
        title: `ReportControl copied from ${b} to ${y}`,
        actions: [
          { new: { parent: d, element: p } },
          { new: { parent: d, element: f } }
        ]
      });
    }), o;
  };
}
function Dm(e, t) {
  const n = e.parentElement?.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), i = e.closest("IED")?.getAttribute("name") === t.getAttribute("name"), r = t.querySelector("AccessPoint > Server > LDevice > LN0"), o = !!r?.querySelector(
    `ReportControl[name="${e.getAttribute("name")}"]`
  ), a = !!r?.querySelector(
    `DataSet[name="${n?.getAttribute("name")}"]`
  ), l = n?.cloneNode(!0);
  Array.from(l.querySelectorAll("FCDA")).forEach((f) => {
    co(f, t) || l.removeChild(f);
  });
  const d = l.children.length > 0, u = t.getAttribute("name");
  let p = "";
  return i ? p = s("controlblock.hints.source") : r ? a && !i ? p = s("controlblock.hints.exist", {
    type: "RerportControl",
    name: e.getAttribute("name")
  }) : o && !i ? p = s("controlblock.hints.exist", {
    type: "DataSet",
    name: e.getAttribute("name")
  }) : d ? p = s("controlBlock.hints.valid") : p = s("controlblock.hints.noMatchingData") : p = s("controlblock.hints.missingServer"), c`<mwc-check-list-item
    twoline
    value="${I(t)}"
    ?disabled=${i || !r || o || a || !d}
    ><span>${u}</span
    ><span slot="secondary">${p}</span></mwc-check-list-item
  >`;
}
function km(e) {
  return [
    {
      title: s("report.wizard.location"),
      primary: {
        icon: "save",
        label: s("save"),
        action: Im(e)
      },
      content: [
        c`<filtered-list multi
          >${Array.from(e.ownerDocument.querySelectorAll("IED")).map(
          (t) => Dm(e, t)
        )}</filtered-list
        >`
      ]
    }
  ];
}
function zm(e) {
  return (t) => {
    t.dispatchEvent(
      ge(() => km(e))
    );
  };
}
function Lm(e) {
  return (t) => {
    const n = Em(e);
    n && t.dispatchEvent(K(n)), t.dispatchEvent(E());
  };
}
function Tm(e) {
  return (t) => {
    t.dispatchEvent(ge(() => Hn(e)));
  };
}
function _m(e) {
  return (t) => {
    t.dispatchEvent(ge(() => Tr(e)));
  };
}
function Vm(e) {
  return (t) => {
    t.dispatchEvent(ge(() => Ar(e)));
  };
}
function Pm(e) {
  return (t) => {
    const n = {}, i = [
      "name",
      "desc",
      "buffered",
      "rptID",
      "indexed",
      "bufTime",
      "intgPd"
    ];
    i.forEach((f) => {
      n[f] = g(t.find((b) => b.label === f));
    });
    let r = null;
    if (i.some((f) => n[f] !== e.getAttribute(f))) {
      const f = O(e, n);
      r = {
        old: { element: e },
        new: { element: f }
      };
    }
    const o = g(t.find((f) => f.label === "max Clients"));
    let a = null;
    o !== (e.querySelector("RptEnabled")?.getAttribute("max") ?? null) && (a = Nm(
      e.querySelector("RptEnabled"),
      o,
      e
    ));
    const l = [];
    r && l.push(r), a && l.push(a);
    const d = n.name, u = e.closest("IED").getAttribute("name"), p = {
      title: s("controlblock.action.edit", {
        type: "Report",
        name: d,
        iedName: u
      }),
      actions: l
    };
    return l.length ? [p] : [];
  };
}
function Rm(e) {
  const t = e.getAttribute("name"), n = e.getAttribute("desc"), i = e.getAttribute("buffered"), r = e.getAttribute("rptID"), o = e.getAttribute("indexed"), a = e.querySelector("RptEnabled")?.getAttribute("max") ?? null, l = e.getAttribute("bufTime"), d = e.getAttribute("intgPd"), u = e.querySelector("TrgOps"), p = e.querySelector("OptFields"), f = e.parentElement?.querySelector(
    `DataSet[name="${e.getAttribute("datSet")}"]`
  ), b = [];
  return b.push({
    icon: "delete",
    label: s("remove"),
    action: Lm(e)
  }), f && b.push({
    icon: "edit",
    label: s("scl.DataSet"),
    action: Tm(f)
  }), u && b.push({
    icon: "edit",
    label: s("scl.TrgOps"),
    action: _m(u)
  }), p && b.push({
    icon: "edit",
    label: s("scl.OptFields"),
    action: Vm(p)
  }), b.push({
    icon: "copy",
    label: s("controlblock.label.copy"),
    action: zm(e)
  }), [
    {
      title: s("wizard.title.edit", { tagName: e.tagName }),
      element: e,
      primary: {
        icon: "save",
        label: s("save"),
        action: Pm(e)
      },
      menuActions: b,
      content: [
        ...lo({
          name: t,
          desc: n,
          buffered: i,
          rptID: r,
          indexed: o,
          max: a,
          bufTime: l,
          intgPd: d
        })
      ]
    }
  ];
}
function mo(e) {
  const t = Array.from(
    e.querySelectorAll("ReportControl")
  ).filter(q), n = e.querySelector("LN0") ? {
    icon: "add",
    label: s("Report"),
    action: Cm(e)
  } : void 0;
  return [
    {
      title: s("wizard.title.select", { tagName: "ReportControl" }),
      primary: n,
      content: [
        c`<filtered-list
          @selected=${(i) => {
          const r = i.target.selected.value, o = Y(e, "ReportControl", r);
          o && i.target?.dispatchEvent(
            ge(() => Rm(o))
          );
        }}
          >${t.map(
          (i) => c`<mwc-list-item twoline value="${I(i)}"
                ><span>${i.getAttribute("name")}</span
                ><span slot="secondary"
                  >${I(i)}</span
                ></mwc-list-item
              >`
        )}</filtered-list
        >`
      ]
    }
  ];
}
var qm = Object.defineProperty, Mm = Object.getOwnPropertyDescriptor, Dt = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? Mm(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
  return i && r && qm(t, n, r), r;
};
let yt = class extends Z {
  constructor() {
    super(...arguments), this.editCount = -1;
  }
  get name() {
    return this.element.getAttribute("name") ?? "UNDEFINED";
  }
  openEditWizard() {
    const e = D.IED.edit(this.element);
    e && this.dispatchEvent(E(e));
  }
  openReportControlSelection() {
    this.dispatchEvent(
      E(() => mo(this.element))
    );
  }
  openGseControlSelection() {
    this.dispatchEvent(
      E(() => Hr(this.element))
    );
  }
  openSmvControlSelection() {
    this.dispatchEvent(
      E(() => jr(this.element))
    );
  }
  openCommunicationMapping() {
    const e = Array.from(
      this.element.closest("SCL")?.querySelectorAll("IED") ?? []
    ), t = vm(e, this.element);
    t && this.dispatchEvent(E(t));
  }
  removeIED() {
    const e = zr(this.element);
    e ? this.dispatchEvent(E(() => e)) : this.dispatchEvent(
      K({
        old: { parent: this.element.parentElement, element: this.element }
      })
    );
  }
  render() {
    return c`<action-icon label="${this.name}" icon="developer_board">
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
        ><mwc-icon slot="icon">${jn}</mwc-icon></mwc-fab
      ><mwc-fab
        slot="action"
        class="selectsmv"
        mini
        @click="${() => this.openSmvControlSelection()}"
        ><mwc-icon slot="icon">${Un}</mwc-icon></mwc-fab
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
        ><mwc-icon slot="icon">${Gn}</mwc-icon></mwc-fab
      ></action-icon
    > `;
  }
};
Dt([
  h({ attribute: !1 })
], yt.prototype, "doc", 2);
Dt([
  h({ type: Number })
], yt.prototype, "editCount", 2);
Dt([
  h({ attribute: !1 })
], yt.prototype, "element", 2);
Dt([
  h({ type: String })
], yt.prototype, "name", 1);
Dt([
  N(".connectreport")
], yt.prototype, "connectReport", 2);
yt = Dt([
  F("ied-editor")
], yt);
var Om = Object.defineProperty, Fm = Object.getOwnPropertyDescriptor, st = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? Fm(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
  return i && r && Om(t, n, r), r;
};
function Hm(e) {
  return e ? V[e.tagName].children.filter(
    (t) => D[t].create !== m
  ) : [];
}
let Pe = class extends Z {
  constructor() {
    super(...arguments), this.editCount = -1, this.showfunctions = !1;
  }
  get header() {
    const e = this.element.getAttribute("name") ?? "", t = this.element.getAttribute("desc");
    return `${e} ${t ? `—${t}` : ""}`;
  }
  openEditWizard() {
    const e = D.TapChanger.edit(this.element);
    e && this.dispatchEvent(E(e));
  }
  openCreateWizard(e) {
    const t = D[e].create(this.element);
    t && this.dispatchEvent(E(t));
  }
  updated() {
    this.addMenu && this.addButton && (this.addMenu.anchor = this.addButton);
  }
  remove() {
    this.element.parentElement && this.dispatchEvent(
      K({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      })
    );
  }
  renderLNodes() {
    const e = $(this.element, "LNode");
    return e.length ? c`<div class="container lnode">
          ${e.map(
      (t) => c`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
              ></l-node-editor>`
    )}
        </div>` : c``;
  }
  renderEqFunctions() {
    if (!this.showfunctions) return c``;
    const e = $(this.element, "EqFunction");
    return c` ${e.map(
      (t) => c`<eq-function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
          ?showfunctions=${this.showfunctions}
        ></eq-function-editor>`
    )}`;
  }
  renderSubEquipments() {
    if (!this.showfunctions) return c``;
    const e = $(
      this.element,
      "SubEquipment"
    );
    return c` ${e.map(
      (t) => c`<sub-equipment-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
        ></sub-equipment-editor>`
    )}`;
  }
  renderAddButtons() {
    return Hm(this.element).map(
      (e) => c`<mwc-list-item value="${e}"
          ><span>${e}</span></mwc-list-item
        >`
    );
  }
  render() {
    return c`<action-pane label=${this.header}>
      <abbr slot="action" title="${s("edit")}">
        <mwc-icon-button
          icon="edit"
          @click=${() => this.openEditWizard()}
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" title="${s("remove")}">
        <mwc-icon-button
          icon="delete"
          @click=${() => this.remove()}
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" style="position:relative;" title="${s("add")}">
        <mwc-icon-button
          icon="playlist_add"
          @click=${() => this.addMenu.open = !0}
        ></mwc-icon-button
        ><mwc-menu
          corner="BOTTOM_RIGHT"
          menuCorner="END"
          @action=${(e) => {
      const t = e.target.selected.value;
      this.openCreateWizard(t);
    }}
          >${this.renderAddButtons()}</mwc-menu
        ></abbr
      >
      ${this.renderLNodes()} ${this.renderEqFunctions()}
      ${this.renderSubEquipments()}
    </action-pane>`;
  }
};
Pe.styles = G`
    ${je}

    :host(.moving) {
      opacity: 0.3;
    }

    abbr {
      text-decoration: none;
      border-bottom: none;
    }
  `;
st([
  h({ attribute: !1 })
], Pe.prototype, "doc", 2);
st([
  h({ type: Number })
], Pe.prototype, "editCount", 2);
st([
  h({ attribute: !1 })
], Pe.prototype, "element", 2);
st([
  h({ type: Boolean })
], Pe.prototype, "showfunctions", 2);
st([
  _()
], Pe.prototype, "header", 1);
st([
  N("mwc-menu")
], Pe.prototype, "addMenu", 2);
st([
  N('mwc-icon-button[icon="playlist_add"]')
], Pe.prototype, "addButton", 2);
Pe = st([
  F("tapchanger-editor")
], Pe);
var Bm = Object.defineProperty, Wm = Object.getOwnPropertyDescriptor, ct = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? Wm(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
  return i && r && Bm(t, n, r), r;
};
function Gm(e) {
  return e ? V[e.tagName].children.filter(
    (t) => D[t].create !== m
  ) : [];
}
let Re = class extends Z {
  constructor() {
    super(...arguments), this.editCount = -1, this.showfunctions = !1;
  }
  get label() {
    const e = `${this.element.hasAttribute("name") ? `${this.element.getAttribute("name")}` : ""}`, t = `${this.element.hasAttribute("desc") ? ` - ${this.element.getAttribute("desc")}` : ""}`;
    return `${e}${t}`;
  }
  openEditWizard() {
    const e = D.TransformerWinding.edit(this.element);
    e && this.dispatchEvent(E(e));
  }
  remove() {
    this.element.parentElement && this.dispatchEvent(
      K({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      })
    );
  }
  openCreateWizard(e) {
    const t = D[e].create(this.element);
    t && this.dispatchEvent(E(t));
  }
  updated() {
    this.addMenu && this.addButton && (this.addMenu.anchor = this.addButton);
  }
  renderLNodes() {
    const e = $(this.element, "LNode");
    return e.length ? c`<div class="container lnode">
          ${e.map(
      (t) => c`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
              ></l-node-editor>`
    )}
        </div>` : c``;
  }
  renderEqFunctions() {
    if (!this.showfunctions) return c``;
    const e = $(this.element, "EqFunction");
    return e.length ? c` ${e.map(
      (t) => c`<eq-function-editor
              .editCount=${this.editCount}
              .doc=${this.doc}
              .element=${t}
              ?showfunctions=${this.showfunctions}
            ></eq-function-editor>`
    )}` : c``;
  }
  renderTapChanger() {
    if (!this.showfunctions) return c``;
    const e = $(this.element, "TapChanger");
    return e.length ? c` ${e.map(
      (t) => c`<tapchanger-editor
              .editCount=${this.editCount}
              .doc=${this.doc}
              .element=${t}
              ?showfunctions=${this.showfunctions}
            ></tapchanger-editor>`
    )}` : c``;
  }
  renderAddButtons() {
    return Gm(this.element).map(
      (e) => c`<mwc-list-item value="${e}"
          ><span>${e}</span></mwc-list-item
        >`
    );
  }
  render() {
    return c`<action-pane label="${this.label}">
      <mwc-icon class="substation-editor-icon" slot="icon"
        >${Tu}</mwc-icon
      >
      <abbr slot="action" title="${s("edit")}">
        <mwc-icon-button
          icon="edit"
          @click=${() => this.openEditWizard()}
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" title="${s("remove")}">
        <mwc-icon-button
          icon="delete"
          @click=${() => this.remove()}
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" style="position:relative;" title="${s("add")}">
        <mwc-icon-button
          icon="playlist_add"
          @click=${() => this.addMenu.open = !0}
        ></mwc-icon-button
        ><mwc-menu
          corner="BOTTOM_RIGHT"
          menuCorner="END"
          @action=${(e) => {
      const t = e.target.selected.value;
      this.openCreateWizard(t);
    }}
          >${this.renderAddButtons()}</mwc-menu
        ></abbr
      >
      ${this.renderLNodes()} ${this.renderEqFunctions()}
      ${this.renderTapChanger()}
    </action-pane> `;
  }
};
Re.styles = G`
    ${je}

    :host(.moving) {
      opacity: 0.3;
    }

    abbr {
      text-decoration: none;
      border-bottom: none;
    }
  `;
ct([
  h({ attribute: !1 })
], Re.prototype, "doc", 2);
ct([
  h({ type: Number })
], Re.prototype, "editCount", 2);
ct([
  h({ attribute: !1 })
], Re.prototype, "element", 2);
ct([
  h({ type: Boolean })
], Re.prototype, "showfunctions", 2);
ct([
  h({ type: String })
], Re.prototype, "label", 1);
ct([
  N("mwc-menu")
], Re.prototype, "addMenu", 2);
ct([
  N('mwc-icon-button[icon="playlist_add"]')
], Re.prototype, "addButton", 2);
Re = ct([
  F("transformer-winding-editor")
], Re);
var jm = Object.defineProperty, Um = Object.getOwnPropertyDescriptor, Se = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? Um(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
  return i && r && jm(t, n, r), r;
};
function Km(e) {
  return e ? V[e.tagName].children.filter(
    (t) => D[t].create !== m
  ) : [];
}
let ee = class extends Z {
  constructor() {
    super(...arguments), this.editCount = -1, this.readonly = !1, this.showfunctions = !1, this.getAttachedIeds = () => [], this.cloneUI = !1;
  }
  get voltage() {
    const e = this.element.querySelector(Vt.VoltageLevel + " > Voltage");
    if (e === null) return null;
    const t = e.textContent ?? "", n = e.getAttribute("multiplier"), i = n === null ? "V" : " " + n + "V";
    return t ? t + i : null;
  }
  get header() {
    const e = this.element.getAttribute("name") ?? "", t = this.element.getAttribute("desc");
    return `${e} ${t ? `- ${t}` : ""}
    ${this.voltage === null ? "" : `(${this.voltage})`}`;
  }
  openEditWizard() {
    const e = D.VoltageLevel.edit(this.element);
    e && this.dispatchEvent(E(e));
  }
  /** Opens a [[`WizardDialog`]] for editing `LNode` connections. */
  openLNodeWizard() {
    const e = D.LNode.create(this.element);
    e && this.dispatchEvent(E(e));
  }
  remove() {
    this.element && this.dispatchEvent(
      K({
        old: {
          parent: this.element.parentElement,
          element: this.element,
          reference: this.element.nextSibling
        }
      })
    );
  }
  openCreateWizard(e) {
    const t = D[e].create(this.element);
    t && this.dispatchEvent(E(t));
  }
  updated() {
    this.addMenu.anchor = this.addButton;
  }
  renderRedirectUI() {
    return this.cloneUI ? Kn(this.element) : c``;
  }
  renderLNodes() {
    if (!this.showfunctions) return c``;
    const e = $(this.element, "LNode");
    return e.length ? c`<div class="container lnode">
          ${e.map(
      (t) => c`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
              ></l-node-editor>`
    )}
        </div>` : c``;
  }
  renderFunctions() {
    if (!this.showfunctions) return c``;
    const e = $(this.element, "Function");
    return c` ${e.map(
      (t) => c`<function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
          ?showfunctions=${this.showfunctions}
        ></function-editor>`
    )}`;
  }
  renderIedContainer() {
    const e = this.getAttachedIeds?.(this.element) ?? [];
    return e?.length ? c`<div id="iedcontainer">
          ${e.map(
      (t) => c`<ied-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
              ></ied-editor>`
    )}
        </div>` : c``;
  }
  renderPowerTransformerContainer() {
    const e = Array.from(
      this.element?.querySelectorAll(
        Vt.VoltageLevel + " > PowerTransformer"
      ) ?? []
    );
    return e?.length ? c`<div
          class="${We({
      ptrContent: !0,
      actionicon: !this.showfunctions
    })}"
        >
          ${e.map(
      (t) => c`<powertransformer-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
                ?showfunctions=${this.showfunctions}
              ></powertransformer-editor>`
    )}
        </div>` : c``;
  }
  renderAddButtons() {
    return Km(this.element).map(
      (e) => c`<mwc-list-item value="${e}"
          ><span>${e}</span></mwc-list-item
        >`
    );
  }
  render() {
    return c`${this.renderRedirectUI()}<action-pane label="${this.header}">
        <mwc-icon class="substation-editor-icon" slot="icon"
          >${xu}</mwc-icon
        >
        <abbr slot="action" title="${s("lnode.tooltip")}">
          <mwc-icon-button
            icon="account_tree"
            @click=${() => this.openLNodeWizard()}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" title="${s("duplicate")}">
          <mwc-icon-button
            icon="content_copy"
            @click=${() => Zn(this)}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" title="${s("edit")}">
          <mwc-icon-button
            icon="edit"
            @click=${() => this.openEditWizard()}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" title="${s("move")}">
          <mwc-icon-button
            icon="forward"
            @click=${() => gt(this, ee, [te])}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" title="${s("remove")}">
          <mwc-icon-button
            icon="delete"
            @click=${() => this.remove()}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" style="position:relative;" title="${s("add")}">
          <mwc-icon-button
            icon="playlist_add"
            @click=${() => this.addMenu.open = !0}
          ></mwc-icon-button
          ><mwc-menu
            corner="BOTTOM_RIGHT"
            menuCorner="END"
            @action=${(e) => {
      const t = e.target.selected.value;
      this.openCreateWizard(t);
    }}
            >${this.renderAddButtons()}</mwc-menu
          >
        </abbr>
        ${At(this.doc, this.element, this.showfunctions)}
        ${this.renderIedContainer()}${this.renderLNodes()}${this.renderFunctions()}
        ${this.renderPowerTransformerContainer()}
        <div id="bayContainer">
          ${Array.from(this.element?.querySelectorAll(Vt.Bay) ?? []).map(
      (e) => c`<bay-editor
              .editCount=${this.editCount}
              .doc=${this.doc}
              .element=${e}
              .getAttachedIeds=${this.getAttachedIeds}
              ?readonly=${this.readonly}
              ?showfunctions=${this.showfunctions}
            ></bay-editor>`
    )}
        </div>
      </action-pane>`;
  }
};
ee.styles = G`
    ${je}

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
Se([
  h({ attribute: !1 })
], ee.prototype, "doc", 2);
Se([
  h({ type: Number })
], ee.prototype, "editCount", 2);
Se([
  h({ attribute: !1 })
], ee.prototype, "element", 2);
Se([
  h({ type: Boolean })
], ee.prototype, "readonly", 2);
Se([
  h({ type: Boolean })
], ee.prototype, "showfunctions", 2);
Se([
  h()
], ee.prototype, "voltage", 1);
Se([
  h({ type: String })
], ee.prototype, "header", 1);
Se([
  h({ attribute: !1 })
], ee.prototype, "getAttachedIeds", 2);
Se([
  _()
], ee.prototype, "cloneUI", 2);
Se([
  N("mwc-dialog")
], ee.prototype, "dialog", 2);
Se([
  N("mwc-menu")
], ee.prototype, "addMenu", 2);
Se([
  N('mwc-icon-button[icon="playlist_add"]')
], ee.prototype, "addButton", 2);
ee = Se([
  F("voltage-level-editor")
], ee);
var Zm = Object.defineProperty, Xm = Object.getOwnPropertyDescriptor, Ee = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? Xm(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
  return i && r && Zm(t, n, r), r;
};
function Qm(e) {
  return e ? V[e.tagName].children.filter(
    (t) => D[t].create !== m
  ) : [];
}
let te = class extends Z {
  constructor() {
    super(...arguments), this.editCount = -1, this.readonly = !1, this.showfunctions = !1, this.getAttachedIeds = () => [], this.cloneUI = !1;
  }
  get header() {
    const e = this.element.getAttribute("name") ?? "", t = this.element.getAttribute("desc");
    return `${e} ${t ? `- ${t}` : ""}`;
  }
  /** Opens a [[`WizardDialog`]] for editing [[`element`]]. */
  openEditWizard() {
    const e = D.Substation.edit(this.element);
    e && this.dispatchEvent(E(e));
  }
  /** Opens a [[`WizardDialog`]] for editing `LNode` connections. */
  openLNodeWizard() {
    const e = D.LNode.create(this.element);
    e && this.dispatchEvent(E(e));
  }
  /** Deletes [[`element`]]. */
  remove() {
    this.dispatchEvent(
      K({
        old: {
          parent: this.element.parentElement,
          element: this.element,
          reference: this.element.nextSibling
        }
      })
    );
  }
  openCreateWizard(e) {
    const t = D[e].create(this.element);
    t && this.dispatchEvent(E(t));
  }
  updated() {
    this.addMenu.anchor = this.addButton;
  }
  renderRedirectUI() {
    return this.cloneUI ? Kn(this.element) : c``;
  }
  renderLNodes() {
    if (!this.showfunctions) return c``;
    const e = $(this.element, "LNode");
    return e.length ? c`<div class="container lnode">
          ${e.map(
      (t) => c`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
              ></l-node-editor>`
    )}
        </div>` : c``;
  }
  renderFunctions() {
    if (!this.showfunctions) return c``;
    const e = $(this.element, "Function");
    return c` ${e.map(
      (t) => c`<function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
          ?showfunctions=${this.showfunctions}
        ></function-editor>`
    )}`;
  }
  renderIedContainer() {
    const e = this.getAttachedIeds?.(this.element) ?? [];
    return e?.length ? c`<div id="iedcontainer">
          ${e.map(
      (t) => c`<ied-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
              ></ied-editor>`
    )}
        </div>` : c``;
  }
  renderPowerTransformerContainer() {
    const e = Array.from(
      this.element?.querySelectorAll(
        Vt.Substation + " > PowerTransformer"
      ) ?? []
    );
    return e?.length ? c`<div
          class="${We({
      ptrContent: !0,
      actionicon: !this.showfunctions
    })}"
        >
          ${e.map(
      (t) => c`<powertransformer-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
                ?showfunctions=${this.showfunctions}
              ></powertransformer-editor>`
    )}
        </div>` : c``;
  }
  renderAddButtons() {
    return Qm(this.element).map(
      (e) => c`<mwc-list-item value="${e}"
          ><span>${e}</span></mwc-list-item
        >`
    );
  }
  render() {
    return c`${this.renderRedirectUI()}<action-pane label="${this.header}">
        <mwc-icon class="substation-editor-icon" slot="icon"
          >${ku}</mwc-icon
        >
        <abbr slot="action" title="${s("lnode.tooltip")}">
          <mwc-icon-button
            icon="account_tree"
            @click=${() => this.openLNodeWizard()}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" title="${s("duplicate")}">
          <mwc-icon-button
            icon="content_copy"
            @click=${() => Zn(this)}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" title="${s("edit")}">
          <mwc-icon-button
            icon="edit"
            @click=${() => this.openEditWizard()}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" title="${s("move")}">
          <mwc-icon-button
            icon="forward"
            @click=${() => gt(this, te, [te])}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" title="${s("remove")}">
          <mwc-icon-button
            icon="delete"
            @click=${() => this.remove()}
          ></mwc-icon-button
        ></abbr>
        <abbr slot="action" style="position:relative;" title="${s("add")}">
          <mwc-icon-button
            icon="playlist_add"
            @click=${() => this.addMenu.open = !0}
          ></mwc-icon-button
          ><mwc-menu
            corner="BOTTOM_RIGHT"
            menuCorner="END"
            @action=${(e) => {
      const t = e.target.selected.value;
      this.openCreateWizard(t);
    }}
            >${this.renderAddButtons()}</mwc-menu
          >
        </abbr>
        ${At(this.doc, this.element, this.showfunctions)}
        ${this.renderIedContainer()}${this.renderLNodes()}${this.renderFunctions()}
        ${this.renderPowerTransformerContainer()}
        ${Array.from(this.element.querySelectorAll(Vt.VoltageLevel)).map(
      (e) => c`<voltage-level-editor
              .editCount=${this.editCount}
              .doc=${this.doc}
              .element=${e}
              .getAttachedIeds=${this.getAttachedIeds}
              ?readonly=${this.readonly}
              ?showfunctions=${this.showfunctions}
            ></voltage-level-editor>`
    )}</action-pane
      >`;
  }
};
te.styles = G`
    ${je}
  `;
Ee([
  h({ attribute: !1 })
], te.prototype, "doc", 2);
Ee([
  h({ type: Number })
], te.prototype, "editCount", 2);
Ee([
  h({ attribute: !1 })
], te.prototype, "element", 2);
Ee([
  h({ type: Boolean })
], te.prototype, "readonly", 2);
Ee([
  h({ type: Boolean })
], te.prototype, "showfunctions", 2);
Ee([
  h({ type: String })
], te.prototype, "header", 1);
Ee([
  h({ attribute: !1 })
], te.prototype, "getAttachedIeds", 2);
Ee([
  _()
], te.prototype, "cloneUI", 2);
Ee([
  N("mwc-dialog")
], te.prototype, "dialog", 2);
Ee([
  N("mwc-menu")
], te.prototype, "addMenu", 2);
Ee([
  N('mwc-icon-button[icon="playlist_add"]')
], te.prototype, "addButton", 2);
te = Ee([
  F("substation-editor")
], te);
var Ym = Object.defineProperty, Jm = Object.getOwnPropertyDescriptor, lt = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? Jm(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
  return i && r && Ym(t, n, r), r;
};
function ep(e) {
  return e ? V[e.tagName].children.filter(
    (t) => D[t].create !== m
  ) : [];
}
let xe = class extends Z {
  constructor() {
    super(...arguments), this.editCount = -1, this.showfunctions = !1;
  }
  get name() {
    return this.element.getAttribute("name") ?? "UNDEFINED";
  }
  openEditWizard() {
    const e = D.PowerTransformer.edit(this.element);
    e && this.dispatchEvent(E(e));
  }
  openLNodeWizard() {
    const e = D.LNode.create(this.element);
    e && this.dispatchEvent(E(e));
  }
  removeElement() {
    this.element && this.dispatchEvent(
      K({
        old: {
          parent: this.element.parentElement,
          element: this.element,
          reference: this.element.nextSibling
        }
      })
    );
  }
  openCreateWizard(e) {
    const t = D[e].create(this.element);
    t && this.dispatchEvent(E(t));
  }
  updated() {
    this.addMenu && this.addButton && (this.addMenu.anchor = this.addButton);
  }
  renderLNodes() {
    const e = $(this.element, "LNode");
    return e.length ? c`<div class="container lnode">
          ${e.map(
      (t) => c`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
              ></l-node-editor>`
    )}
        </div>` : c``;
  }
  renderEqFunctions() {
    if (!this.showfunctions) return c``;
    const e = $(this.element, "EqFunction");
    return c` ${e.map(
      (t) => c`<eq-function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
          ?showfunctions=${this.showfunctions}
        ></eq-function-editor>`
    )}`;
  }
  renderSubEquipments() {
    if (!this.showfunctions) return c``;
    const e = $(
      this.element,
      "SubEquipment"
    );
    return c` ${e.map(
      (t) => c`<sub-equipment-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
        ></sub-equipment-editor>`
    )}`;
  }
  renderAddButtons() {
    return ep(this.element).map(
      (e) => c`<mwc-list-item value="${e}"
          ><span>${e}</span></mwc-list-item
        >`
    );
  }
  renderContentPane() {
    return c`<mwc-icon class="substation-editor-icon" slot="icon"
        >${Ci}</mwc-icon
      >
      <abbr slot="action" title="${s("lnode.tooltip")}">
        <mwc-icon-button
          slot="action"
          mini
          @click="${() => this.openLNodeWizard()}"
          icon="account_tree"
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" title="${s("edit")}">
        <mwc-icon-button
          slot="action"
          mini
          icon="edit"
          @click="${() => this.openEditWizard()}}"
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" title="${s("move")}">
        <mwc-icon-button
          slot="action"
          mini
          @click="${() => {
      gt(this, xe, [
        te,
        ee,
        ne
      ]);
    }}"
          icon="forward"
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" title="${s("remove")}">
        <mwc-icon-button
          slot="action"
          mini
          icon="delete"
          @click="${() => this.removeElement()}}"
        ></mwc-icon-button> </abbr
      ><abbr slot="action" style="position:relative;" title="${s("add")}">
        <mwc-icon-button
          icon="playlist_add"
          @click=${() => this.addMenu.open = !0}
        ></mwc-icon-button
        ><mwc-menu
          corner="BOTTOM_RIGHT"
          menuCorner="END"
          @action=${(e) => {
      const t = e.target.selected.value;
      this.openCreateWizard(t);
    }}
          >${this.renderAddButtons()}</mwc-menu
        >
      </abbr>`;
  }
  renderTransformerWinding() {
    if (!this.showfunctions) return c``;
    const e = $(
      this.element,
      "TransformerWinding"
    );
    return e.length ? c`<div class="container">
          ${e.map(
      (t) => c`<transformer-winding-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
                ?showfunctions=${this.showfunctions}
              ></transformer-winding-editor>`
    )}
        </div>` : c``;
  }
  renderContentIcon() {
    return c`<mwc-icon slot="icon"
        >${Ci}</mwc-icon
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
      gt(this, xe, [
        te,
        ee,
        ne
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
    return this.showfunctions ? c`<action-pane label="${this.name}">
        ${this.renderContentPane()} ${this.renderLNodes()}
        ${this.renderEqFunctions()} ${this.renderSubEquipments()}
        ${this.renderTransformerWinding()}
      </action-pane> ` : c`<action-icon label="${this.name}"
      >${this.renderContentIcon()}</action-icon
    > `;
  }
};
xe.styles = G`
    ${je}

    :host(.moving) {
      opacity: 0.3;
    }

    abbr {
      text-decoration: none;
      border-bottom: none;
    }
  `;
lt([
  h({ attribute: !1 })
], xe.prototype, "doc", 2);
lt([
  h({ type: Number })
], xe.prototype, "editCount", 2);
lt([
  h({ attribute: !1 })
], xe.prototype, "element", 2);
lt([
  h({ type: String })
], xe.prototype, "name", 1);
lt([
  h({ type: Boolean })
], xe.prototype, "showfunctions", 2);
lt([
  N("mwc-menu")
], xe.prototype, "addMenu", 2);
lt([
  N('mwc-icon-button[icon="playlist_add"]')
], xe.prototype, "addButton", 2);
xe = lt([
  F("powertransformer-editor")
], xe);
var tp = Object.defineProperty, np = Object.getOwnPropertyDescriptor, Ne = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? np(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
  return i && r && tp(t, n, r), r;
};
function ip(e) {
  return e ? V[e.tagName].children.filter(
    (t) => D[t].create !== m
  ) : [];
}
let ne = class extends Z {
  constructor() {
    super(...arguments), this.editCount = -1, this.readonly = !1, this.showfunctions = !1, this.getAttachedIeds = () => [], this.cloneUI = !1;
  }
  get header() {
    const e = this.element.getAttribute("name") ?? "", t = this.element.getAttribute("desc");
    return `${e} ${t ? `- ${t}` : ""}`;
  }
  openEditWizard() {
    const e = D.Bay.edit(this.element);
    e && this.dispatchEvent(E(e));
  }
  /** Opens a [[`WizardDialog`]] for editing `LNode` connections. */
  openLNodeWizard() {
    const e = D.LNode.create(this.element);
    e && this.dispatchEvent(E(e));
  }
  remove() {
    this.element && this.dispatchEvent(
      K({
        old: {
          parent: this.element.parentElement,
          element: this.element,
          reference: this.element.nextSibling
        }
      })
    );
  }
  openCreateWizard(e) {
    const t = D[e].create(this.element);
    t && this.dispatchEvent(E(t));
  }
  updated() {
    this.addMenu.anchor = this.addButton;
  }
  renderRedirectUI() {
    return this.cloneUI ? Kn(this.element) : c``;
  }
  renderLNodes() {
    if (!this.showfunctions) return c``;
    const e = $(this.element, "LNode");
    return e.length ? c`<div class="container lnode">
          ${e.map(
      (t) => c`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
              ></l-node-editor>`
    )}
        </div>` : c``;
  }
  renderFunctions() {
    if (!this.showfunctions) return c``;
    const e = $(this.element, "Function");
    return c` ${e.map(
      (t) => c`<function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
          ?showfunctions=${this.showfunctions}
        ></function-editor>`
    )}`;
  }
  renderIedContainer() {
    const e = this.getAttachedIeds?.(this.element) ?? [];
    return e?.length ? c`<div id="iedcontainer">
          ${e.map(
      (t) => c`<ied-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
              ></ied-editor>`
    )}
        </div>` : c``;
  }
  renderAddButtons() {
    return ip(this.element).map(
      (e) => c`<mwc-list-item value="${e}"
          ><span>${e}</span></mwc-list-item
        >`
    );
  }
  render() {
    return c`${this.renderRedirectUI()}<action-pane label="${this.header}">
        <mwc-icon class="substation-editor-icon" slot="icon"
          >${$u}</mwc-icon
        >
        <abbr slot="action" title="${s("lnode.tooltip")}">
          <mwc-icon-button
            icon="account_tree"
            @click="${() => this.openLNodeWizard()}"
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" title="${s("duplicate")}">
          <mwc-icon-button
            icon="content_copy"
            @click=${() => Zn(this)}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" title="${s("edit")}">
          <mwc-icon-button
            icon="edit"
            @click=${() => this.openEditWizard()}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" title="${s("move")}">
          <mwc-icon-button
            icon="forward"
            @click=${() => gt(this, ne, [ee])}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" title="${s("remove")}">
          <mwc-icon-button
            icon="delete"
            @click=${() => this.remove()}
          ></mwc-icon-button>
        </abbr>
        <abbr slot="action" style="position:relative;" title="${s("add")}">
          <mwc-icon-button
            icon="playlist_add"
            @click=${() => this.addMenu.open = !0}
          ></mwc-icon-button
          ><mwc-menu
            corner="BOTTOM_RIGHT"
            menuCorner="END"
            @action=${(e) => {
      const t = e.target.selected.value;
      this.openCreateWizard(t);
    }}
            >${this.renderAddButtons()}</mwc-menu
          >
        </abbr>
        ${At(this.doc, this.element, this.showfunctions)}
        ${this.renderIedContainer()}${this.renderLNodes()}${this.renderFunctions()}
        <div
          class="${We({
      content: !0,
      actionicon: !this.showfunctions
    })}"
        >
          ${Array.from(
      $(this.element, "PowerTransformer")
    ).map(
      (e) => c`<powertransformer-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${e}
                ?showfunctions=${this.showfunctions}
              ></powertransformer-editor>`
    )}
          ${Array.from(
      $(this.element, "ConductingEquipment")
    ).map(
      (e) => c`<conducting-equipment-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${e}
                ?readonly=${this.readonly}
                ?showfunctions=${this.showfunctions}
              ></conducting-equipment-editor>`
    )}
        </div>
      </action-pane> `;
  }
};
ne.styles = G`
    ${je}

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
Ne([
  h({ attribute: !1 })
], ne.prototype, "doc", 2);
Ne([
  h({ type: Number })
], ne.prototype, "editCount", 2);
Ne([
  h({ attribute: !1 })
], ne.prototype, "element", 2);
Ne([
  h({ type: Boolean })
], ne.prototype, "readonly", 2);
Ne([
  h({ type: Boolean })
], ne.prototype, "showfunctions", 2);
Ne([
  h({ type: String })
], ne.prototype, "header", 1);
Ne([
  h({ attribute: !1 })
], ne.prototype, "getAttachedIeds", 2);
Ne([
  _()
], ne.prototype, "cloneUI", 2);
Ne([
  N("mwc-dialog")
], ne.prototype, "dialog", 2);
Ne([
  N("mwc-menu")
], ne.prototype, "addMenu", 2);
Ne([
  N('mwc-icon-button[icon="playlist_add"]')
], ne.prototype, "addButton", 2);
ne = Ne([
  F("bay-editor")
], ne);
var rp = Object.defineProperty, op = Object.getOwnPropertyDescriptor, dt = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? op(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
  return i && r && rp(t, n, r), r;
};
function ap(e) {
  return e ? V[e.tagName].children.filter(
    (t) => D[t].create !== m
  ) : [];
}
let $e = class extends Z {
  constructor() {
    super(...arguments), this.editCount = -1, this.showfunctions = !1;
  }
  get name() {
    return this.element.getAttribute("name") ?? "";
  }
  openEditWizard() {
    const e = D.ConductingEquipment.edit(this.element);
    e && this.dispatchEvent(E(e));
  }
  openLNodeWizard() {
    const e = D.LNode.create(this.element);
    e && this.dispatchEvent(E(e));
  }
  openCreateWizard(e) {
    const t = D[e].create(this.element);
    t && this.dispatchEvent(E(t));
  }
  remove() {
    this.element && this.dispatchEvent(
      K({
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
    const e = $(this.element, "LNode");
    return e.length ? c`<div class="container lnode">
          ${e.map(
      (t) => c`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
              ></l-node-editor>`
    )}
        </div>` : c``;
  }
  renderEqFunctions() {
    if (!this.showfunctions) return c``;
    const e = $(this.element, "EqFunction");
    return c` ${e.map(
      (t) => c`<eq-function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
          ?showfunctions=${this.showfunctions}
        ></eq-function-editor>`
    )}`;
  }
  renderSubEquipments() {
    if (!this.showfunctions) return c``;
    const e = $(
      this.element,
      "SubEquipment"
    );
    return c` ${e.map(
      (t) => c`<sub-equipment-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
        ></sub-equipment-editor>`
    )}`;
  }
  renderAddButtons() {
    return ap(this.element).map(
      (e) => c`<mwc-list-item value="${e}"
          ><span>${e}</span></mwc-list-item
        >`
    );
  }
  renderContentPane() {
    return c`<mwc-icon class="substation-editor-icon" slot="icon"
        >${Ii(this.element)}</mwc-icon
      >
      <abbr slot="action" title="${s("lnode.tooltip")}">
        <mwc-icon-button
          slot="action"
          mini
          @click="${() => this.openLNodeWizard()}"
          icon="account_tree"
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" title="${s("edit")}">
        <mwc-icon-button
          slot="action"
          mini
          icon="edit"
          @click="${() => this.openEditWizard()}}"
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" title="${s("move")}">
        <mwc-icon-button
          slot="action"
          mini
          @click="${() => gt(this, $e, [ne])}"
          icon="forward"
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" title="${s("remove")}">
        <mwc-icon-button
          slot="action"
          mini
          icon="delete"
          @click="${() => this.remove()}}"
        ></mwc-icon-button> </abbr
      ><abbr slot="action" style="position:relative;" title="${s("add")}">
        <mwc-icon-button
          icon="playlist_add"
          @click=${() => this.addMenu.open = !0}
        ></mwc-icon-button
        ><mwc-menu
          corner="BOTTOM_RIGHT"
          menuCorner="END"
          @action=${(e) => {
      const t = e.target.selected.value;
      this.openCreateWizard(t);
    }}
          >${this.renderAddButtons()}</mwc-menu
        >
      </abbr>`;
  }
  renderContentIcon() {
    return c`<mwc-icon slot="icon">${Ii(this.element)}</mwc-icon>
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
        @click="${() => gt(this, $e, [ne])}"
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
    return this.showfunctions ? c`<action-pane label="${this.name}"
        >${this.renderContentPane()}${this.renderLNodes()}${this.renderEqFunctions()}${this.renderSubEquipments()}</action-pane
        ></action-pane
      >` : c`<action-icon label="${this.name}"
      >${this.renderContentIcon()}</action-icon
    >`;
  }
};
$e.styles = G`
    ${je}

    :host(.moving) {
      opacity: 0.3;
    }

    abbr {
      text-decoration: none;
      border-bottom: none;
    }
  `;
dt([
  h({ attribute: !1 })
], $e.prototype, "doc", 2);
dt([
  h({ type: Number })
], $e.prototype, "editCount", 2);
dt([
  h({ attribute: !1 })
], $e.prototype, "element", 2);
dt([
  h({ type: String })
], $e.prototype, "name", 1);
dt([
  h({ type: Boolean })
], $e.prototype, "showfunctions", 2);
dt([
  N("mwc-menu")
], $e.prototype, "addMenu", 2);
dt([
  N('mwc-icon-button[icon="playlist_add"]')
], $e.prototype, "addButton", 2);
$e = dt([
  F("conducting-equipment-editor")
], $e);
var sp = Object.defineProperty, cp = Object.getOwnPropertyDescriptor, ut = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? cp(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
  return i && r && sp(t, n, r), r;
};
function lp(e) {
  return e ? V[e.tagName].children.filter(
    (t) => D[t].create !== m
  ) : [];
}
let qe = class extends Z {
  constructor() {
    super(...arguments), this.editCount = -1, this.showfunctions = !1;
  }
  get header() {
    const e = this.element.getAttribute("name") ?? "", t = this.element.getAttribute("desc");
    return `${e} ${t ? `—${t}` : ""}`;
  }
  openEditWizard() {
    const e = D.Line.edit(this.element);
    e && this.dispatchEvent(E(e));
  }
  openCreateWizard(e) {
    const t = D[e].create(this.element);
    t && this.dispatchEvent(E(t));
  }
  renderConductingEquipments() {
    const e = $(
      this.element,
      "ConductingEquipment"
    );
    return c` ${e.map(
      (t) => c`<conducting-equipment-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
          ?showfunctions=${this.showfunctions}
        ></conducting-equipment-editor>`
    )}`;
  }
  renderGeneralEquipments() {
    const e = $(
      this.element,
      "GeneralEquipment"
    );
    return c` ${e.map(
      (t) => c`<general-equipment-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
          ?showfunctions=${this.showfunctions}
        ></general-equipment-editor>`
    )}`;
  }
  renderFunctions() {
    if (!this.showfunctions) return c``;
    const e = $(this.element, "Function");
    return c` ${e.map(
      (t) => c`<function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
          ?showfunctions=${this.showfunctions}
        ></function-editor>`
    )}`;
  }
  updated() {
    this.addMenu && this.addButton && (this.addMenu.anchor = this.addButton);
  }
  remove() {
    this.element.parentElement && this.dispatchEvent(
      K({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      })
    );
  }
  renderLNodes() {
    if (!this.showfunctions) return c``;
    const e = $(this.element, "LNode");
    return e.length ? c`<div class="container lnode">
          ${e.map(
      (t) => c`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
              ></l-node-editor>`
    )}
        </div>` : c``;
  }
  renderAddButtons() {
    return lp(this.element).map(
      (e) => c`<mwc-list-item value="${e}"
          ><span>${e}</span></mwc-list-item
        >`
    );
  }
  render() {
    return c`<action-pane label=${this.header}>
      <mwc-icon class="substation-editor-icon" slot="icon"
        >${zu}</mwc-icon
      >
      <abbr slot="action" title="${s("edit")}">
        <mwc-icon-button
          icon="edit"
          @click=${() => this.openEditWizard()}
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" title="${s("remove")}">
        <mwc-icon-button
          icon="delete"
          @click=${() => this.remove()}
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" style="position:relative;" title="${s("add")}">
        <mwc-icon-button
          icon="playlist_add"
          @click=${() => this.addMenu.open = !0}
        ></mwc-icon-button
        ><mwc-menu
          corner="BOTTOM_RIGHT"
          menuCorner="END"
          @action=${(e) => {
      const t = e.target.selected.value;
      this.openCreateWizard(t);
    }}
          >${this.renderAddButtons()}</mwc-menu
        ></abbr
      >${this.renderConductingEquipments()}${this.renderGeneralEquipments()}${this.renderFunctions()}${this.renderLNodes()}
    </action-pane>`;
  }
};
qe.styles = G`
    ${je}

    :host(.moving) {
      opacity: 0.3;
    }

    abbr {
      text-decoration: none;
      border-bottom: none;
    }
  `;
ut([
  h({ attribute: !1 })
], qe.prototype, "doc", 2);
ut([
  h({ type: Number })
], qe.prototype, "editCount", 2);
ut([
  h({ attribute: !1 })
], qe.prototype, "element", 2);
ut([
  h({ type: Boolean })
], qe.prototype, "showfunctions", 2);
ut([
  _()
], qe.prototype, "header", 1);
ut([
  N("mwc-menu")
], qe.prototype, "addMenu", 2);
ut([
  N('mwc-icon-button[icon="playlist_add"]')
], qe.prototype, "addButton", 2);
qe = ut([
  F("line-editor")
], qe);
var dp = Object.defineProperty, up = Object.getOwnPropertyDescriptor, mt = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? up(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
  return i && r && dp(t, n, r), r;
};
function mp(e) {
  return e ? V[e.tagName].children.filter(
    (t) => D[t].create !== m
  ) : [];
}
let Me = class extends Z {
  constructor() {
    super(...arguments), this.editCount = -1, this.showfunctions = !1;
  }
  get header() {
    const e = this.element.getAttribute("name") ?? "", t = this.element.getAttribute("desc");
    return `${e} ${t ? `—${t}` : ""}`;
  }
  openEditWizard() {
    const e = D.Process.edit(this.element);
    e && this.dispatchEvent(E(e));
  }
  openCreateWizard(e) {
    const t = D[e].create(this.element);
    t && this.dispatchEvent(E(t));
  }
  renderConductingEquipments() {
    const e = $(
      this.element,
      "ConductingEquipment"
    );
    return c` ${e.map(
      (t) => c`<conducting-equipment-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
          ?showfunctions=${this.showfunctions}
        ></conducting-equipment-editor>`
    )}`;
  }
  renderGeneralEquipments() {
    const e = $(
      this.element,
      "GeneralEquipment"
    );
    return c` ${e.map(
      (t) => c`<general-equipment-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
          ?showfunctions=${this.showfunctions}
        ></general-equipment-editor>`
    )}`;
  }
  renderLines() {
    const e = $(this.element, "Line");
    return c` ${e.map(
      (t) => c`<line-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
          ?showfunctions=${this.showfunctions}
        ></line-editor>`
    )}`;
  }
  renderSubstations() {
    const e = $(this.element, "Substation");
    return c` ${e.map(
      (t) => c`<substation-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
          ?showfunctions=${this.showfunctions}
        ></substation-editor>`
    )}`;
  }
  renderProcesses() {
    const e = $(this.element, "Process");
    return c` ${e.map(
      (t) => c`<process-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
          ?showfunctions=${this.showfunctions}
        ></process-editor>`
    )}`;
  }
  renderFunctions() {
    if (!this.showfunctions) return c``;
    const e = $(this.element, "Function");
    return c` ${e.map(
      (t) => c`<function-editor
          .editCount=${this.editCount}
          .doc=${this.doc}
          .element=${t}
          ?showfunctions=${this.showfunctions}
        ></function-editor>`
    )}`;
  }
  renderLNodes() {
    if (!this.showfunctions) return c``;
    const e = $(this.element, "LNode");
    return e.length ? c`<div class="container lnode">
          ${e.map(
      (t) => c`<l-node-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
              ></l-node-editor>`
    )}
        </div>` : c``;
  }
  renderAddButtons() {
    return mp(this.element).map(
      (e) => c`<mwc-list-item value="${e}"
          ><span>${e}</span></mwc-list-item
        >`
    );
  }
  updated() {
    this.addMenu && this.addButton && (this.addMenu.anchor = this.addButton);
  }
  remove() {
    this.element.parentElement && this.dispatchEvent(
      K({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      })
    );
  }
  render() {
    return c`<action-pane label=${this.header}>
      <mwc-icon class="substation-editor-icon" slot="icon"
        >${Lu}</mwc-icon
      >
      <abbr slot="action" title="${s("edit")}">
        <mwc-icon-button
          icon="edit"
          @click=${() => this.openEditWizard()}
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" title="${s("remove")}">
        <mwc-icon-button
          icon="delete"
          @click=${() => this.remove()}
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" style="position:relative;" title="${s("add")}">
        <mwc-icon-button
          icon="playlist_add"
          @click=${() => this.addMenu.open = !0}
        ></mwc-icon-button
        ><mwc-menu
          corner="BOTTOM_RIGHT"
          menuCorner="END"
          @action=${(e) => {
      const t = e.target.selected.value;
      this.openCreateWizard(t);
    }}
          >${this.renderAddButtons()}</mwc-menu
        ></abbr
      >
      ${this.renderConductingEquipments()}${this.renderGeneralEquipments()}${this.renderFunctions()}${this.renderLNodes()}
      ${this.renderLines()} ${this.renderSubstations()}${this.renderProcesses()}
    </action-pane>`;
  }
};
Me.styles = G`
    ${je}

    :host(.moving) {
      opacity: 0.3;
    }

    abbr {
      text-decoration: none;
      border-bottom: none;
    }
  `;
mt([
  h({ attribute: !1 })
], Me.prototype, "doc", 2);
mt([
  h({ type: Number })
], Me.prototype, "editCount", 2);
mt([
  h({ attribute: !1 })
], Me.prototype, "element", 2);
mt([
  h({ type: Boolean })
], Me.prototype, "showfunctions", 2);
mt([
  _()
], Me.prototype, "header", 1);
mt([
  N("mwc-menu")
], Me.prototype, "addMenu", 2);
mt([
  N('mwc-icon-button[icon="playlist_add"]')
], Me.prototype, "addButton", 2);
Me = mt([
  F("process-editor")
], Me);
var pp = Object.defineProperty, hp = Object.getOwnPropertyDescriptor, we = (e, t, n, i) => {
  for (var r = i > 1 ? void 0 : i ? hp(t, n) : t, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = (i ? a(t, n, r) : a(r)) || r);
  return i && r && pp(t, n, r), r;
};
function fn() {
  return localStorage.getItem("showieds") === "on";
}
function Di(e) {
  localStorage.setItem("showieds", e);
}
function Lt() {
  return localStorage.getItem("showfunctions") === "on";
}
function ki(e) {
  localStorage.setItem("showfunctions", e);
}
function fp(e) {
  return e ? V[e.tagName].children.filter(
    (t) => D[t].create !== m
  ) : [];
}
let le = class extends Z {
  constructor() {
    super(...arguments), this.editCount = -1, this.readonly = !1, this.getAttachedIeds = () => [];
  }
  openCommunicationMapping() {
    const e = ao(this.doc);
    e && this.dispatchEvent(E(e));
  }
  openReportControlSelection() {
    this.dispatchEvent(
      E(() => mo(this.doc.documentElement))
    );
  }
  openGseControlSelection() {
    this.dispatchEvent(
      E(() => Hr(this.doc.documentElement))
    );
  }
  openSampledValueControlSelection() {
    this.dispatchEvent(
      E(
        () => jr(this.doc.documentElement)
      )
    );
  }
  toggleShowIEDs() {
    fn() ? Di("off") : Di("on"), this.requestUpdate();
  }
  toggleShowFunctions() {
    Lt() ? ki("off") : ki("on"), this.requestUpdate();
  }
  renderIedContainer() {
    this.getAttachedIeds = fn() ? Zu(this.doc) : () => [];
    const e = this.getAttachedIeds?.(this.doc.documentElement) ?? [];
    return e.length ? c`<div id="iedcontainer">
          ${e.map(
      (t) => c`<ied-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${t}
              ></ied-editor>`
    )}
        </div>` : c``;
  }
  renderSubstation() {
    return this.doc?.querySelector(":root > Substation") ? c`<section>
          ${Array.from(this.doc.querySelectorAll("Substation") ?? []).filter(q).map(
      (e) => c`<substation-editor
                  .editCount=${this.editCount}
                  .doc=${this.doc}
                  .element=${e}
                  .getAttachedIeds=${this.getAttachedIeds}
                  ?readonly=${this.readonly}
                  ?showfunctions=${Lt()}
                ></substation-editor>`
    )}
        </section>` : this.doc?.querySelector(":root > Line, :root > Process") ? c`` : c`<h1>
          <span style="color: var(--base1)">${s("substation.missing")}</span>
        </h1>`;
  }
  renderLines() {
    return this.doc?.querySelector(":root > Line") ? c`<section>
          ${Array.from(this.doc.querySelectorAll("Line") ?? []).filter(q).map(
      (e) => c`<line-editor
                  .editCount=${this.editCount}
                  .doc=${this.doc}
                  .element=${e}
                  .getAttachedIeds=${this.getAttachedIeds}
                  ?readonly=${this.readonly}
                  ?showfunctions=${Lt()}
                ></line-editor>`
    )}
        </section>` : c``;
  }
  renderProcesses() {
    return this.doc?.querySelector(":root > Process") ? c`<section>
          ${Array.from(this.doc.querySelectorAll(":root > Process") ?? []).filter(q).map(
      (e) => c`<process-editor
                  .editCount=${this.editCount}
                  .doc=${this.doc}
                  .element=${e}
                  .getAttachedIeds=${this.getAttachedIeds}
                  ?readonly=${this.readonly}
                  ?showfunctions=${Lt()}
                ></process-editor>`
    )}
        </section>` : c``;
  }
  openCreateWizard(e) {
    const t = D[e].create(this.doc.documentElement);
    t && this.dispatchEvent(E(t));
  }
  renderAddButtons() {
    return fp(this.doc.documentElement).map(
      (e) => c`<mwc-list-item value="${e}"
          ><span>${e}</span></mwc-list-item
        >`
    );
  }
  updated() {
    this.addMenu && this.addButton && (this.addMenu.anchor = this.addButton);
  }
  render() {
    return c` <h1>
        <nav>
          <abbr slot="action" title="${s("add")}">
            <mwc-icon-button
              icon="playlist_add"
              @click=${() => this.addMenu.open = !0}
            ></mwc-icon-button
            ><mwc-menu
              corner="BOTTOM_RIGHT"
              @action=${(e) => {
      const t = e.target.selected.value;
      this.openCreateWizard(t);
    }}
              >${this.renderAddButtons()}</mwc-menu
            ></abbr
          >
        </nav>
        <nav>
          <abbr title="${s("zeroline.showieds")}">
            <mwc-icon-button-toggle
              ?on=${fn()}
              @click=${() => this.toggleShowIEDs()}
              id="showieds"
              onIcon="developer_board"
              offIcon="developer_board_off"
            ></mwc-icon-button-toggle>
          </abbr>
          <abbr title="${s("zeroline.showfunctions")}">
            <mwc-icon-button-toggle
              ?on=${Lt()}
              @click=${() => this.toggleShowFunctions()}
              id="showfunctions"
              onIcon="layers"
              offIcon="layers_clear"
            ></mwc-icon-button-toggle>
          </abbr>
          <abbr title="${s("zeroline.commmap")}">
            <mwc-icon-button
              id="commmap"
              icon="link"
              @click=${() => this.openCommunicationMapping()}
            ></mwc-icon-button>
          </abbr>
          <abbr title="${s("zeroline.reportcontrol")}"
            ><mwc-icon-button
              id="reportcontrol"
              @click="${() => this.openReportControlSelection()}"
              >${jn}</mwc-icon-button
            ></abbr
          >
          <abbr title="${s("zeroline.gsecontrol")}"
            ><mwc-icon-button
              id="gsecontrol"
              @click="${() => this.openGseControlSelection()}"
              >${Gn}</mwc-icon-button
            ></abbr
          >
          <abbr title="${s("zeroline.smvcontrol")}"
            ><mwc-icon-button
              id="smvcontrol"
              @click="${() => this.openSampledValueControlSelection()}"
              >${Un}</mwc-icon-button
            ></abbr
          >
        </nav>
      </h1>
      ${this.renderIedContainer()}
      ${this.renderSubstation()}${this.renderLines()}${this.renderProcesses()}`;
  }
};
le.styles = G`
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
we([
  h({ attribute: !1 })
], le.prototype, "doc", 2);
we([
  h({ type: Number })
], le.prototype, "editCount", 2);
we([
  h({ type: Boolean })
], le.prototype, "readonly", 2);
we([
  h({ attribute: !1 })
], le.prototype, "getAttachedIeds", 2);
we([
  N("#commmap")
], le.prototype, "commmap", 2);
we([
  N("#showieds")
], le.prototype, "showieds", 2);
we([
  N("#showfunctions")
], le.prototype, "showfunctions", 2);
we([
  N("#gsecontrol")
], le.prototype, "gsecontrol", 2);
we([
  N("#smvcontrol")
], le.prototype, "smvcontrol", 2);
we([
  N("#reportcontrol")
], le.prototype, "reportcontrol", 2);
we([
  N("#createsubstation")
], le.prototype, "createsubstation", 2);
we([
  N("mwc-menu")
], le.prototype, "addMenu", 2);
we([
  N('mwc-icon-button[icon="playlist_add"]')
], le.prototype, "addButton", 2);
le = we([
  F("zeroline-pane")
], le);
var bp = Object.defineProperty, po = (e, t, n, i) => {
  for (var r = void 0, o = e.length - 1, a; o >= 0; o--)
    (a = e[o]) && (r = a(t, n, r) || r);
  return r && bp(t, n, r), r;
};
class ho extends Z {
  constructor() {
    super(...arguments), this.editCount = -1;
  }
  /** Opens a [[`WizardDialog`]] for creating a new `Substation` element. */
  openCreateSubstationWizard() {
    const t = D.Substation.create(this.doc.documentElement);
    t && this.dispatchEvent(E(t));
  }
  render() {
    return c` <zeroline-pane
        .editCount=${this.editCount}
        .doc=${this.doc}
    ></zeroline-pane>
    ${this.doc?.querySelector(
      ":root > Substation, :root > Line, :root > Process"
    ) ? c`` : c`<h1>
          <mwc-fab
              extended
              icon="add"
              label="${s("substation.wizard.title.add")}"
              @click=${() => this.openCreateSubstationWizard()}
          ></mwc-fab>
        </h1>`}`;
  }
  static {
    this.styles = G`
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
po([
  h()
], ho.prototype, "doc");
po([
  h({ type: Number })
], ho.prototype, "editCount");
export {
  ho as default
};
