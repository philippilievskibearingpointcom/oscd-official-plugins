import { css as ce, property as l, customElement as Z, LitElement as ae, html as d, query as j, state as k, queryAsync as ni, eventOptions as Yi, queryAssignedNodes as ri, unsafeCSS as Qi, svg as E } from "lit-element";
import { NodePart as Ji, AttributePart as en, directive as ai, nothing as tt, html as it } from "lit-html";
import "@material/mwc-fab";
import "@material/mwc-icon-button";
import "@material/mwc-icon";
import { Select as tn } from "@material/mwc-select";
import "@material/mwc-menu";
import "@material/mwc-switch";
import { TextField as nn } from "@material/mwc-textfield";
import "@material/mwc-formfield";
import { List as rn } from "@material/mwc-list";
import "@material/mwc-button";
const an = 1e3 * 60, ct = "langChanged";
function on(t, e, i) {
  return Object.entries(dt(e || {})).reduce((n, [r, a]) => n.replace(new RegExp(`{{[  ]*${r}[  ]*}}`, "gm"), String(dt(a))), t);
}
function sn(t, e) {
  const i = t.split(".");
  let n = e.strings;
  for (; n != null && i.length > 0; )
    n = n[i.shift()];
  return n != null ? n.toString() : null;
}
function dt(t) {
  return typeof t == "function" ? t() : t;
}
const cn = () => ({
  loader: () => Promise.resolve({}),
  empty: (t) => `[${t}]`,
  lookup: sn,
  interpolate: on,
  translationCache: {}
});
let Ne = cn();
function dn(t) {
  return Ne = Object.assign(Object.assign({}, Ne), t);
}
function ln(t) {
  window.dispatchEvent(new CustomEvent(ct, { detail: t }));
}
function pn(t, e, i = Ne) {
  ln({
    previousStrings: i.strings,
    previousLang: i.lang,
    lang: i.lang = t,
    strings: i.strings = e
  });
}
function un(t, e) {
  const i = (n) => t(n.detail);
  return window.addEventListener(ct, i, e), () => window.removeEventListener(ct, i);
}
async function mn(t, e = Ne) {
  const i = await e.loader(t, e);
  e.translationCache = {}, pn(t, i, e);
}
function x(t, e, i = Ne) {
  let n = i.translationCache[t] || (i.translationCache[t] = i.lookup(t, i) || i.empty(t, i));
  return e = e != null ? dt(e) : null, e != null ? i.interpolate(n, e, i) : n;
}
function oi(t) {
  return t instanceof Ji ? t.startNode.isConnected : t instanceof en ? t.committer.element.isConnected : t.element.isConnected;
}
function hn(t) {
  for (const [e] of t)
    oi(e) || t.delete(e);
}
function fn(t) {
  "requestIdleCallback" in window ? window.requestIdleCallback(t) : setTimeout(t);
}
function bn(t, e) {
  setInterval(() => fn(() => hn(t)), e);
}
const vt = /* @__PURE__ */ new Map();
function gn() {
  un((t) => {
    for (const [e, i] of vt)
      oi(e) && si(e, i, t);
  });
}
gn();
bn(vt, an);
function si(t, e, i) {
  const n = e(i);
  t.value !== n && (t.setValue(n), t.commit());
}
ai((t) => (e) => {
  vt.set(e, t), si(e, t);
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
const ci = /* @__PURE__ */ new WeakMap(), je = (t) => (...e) => {
  const i = t(...e);
  return ci.set(i, !0), i;
}, It = (t) => typeof t == "function" && ci.has(t);
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
const nt = {};
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
window.trustedTypes && trustedTypes.createPolicy("lit-html", { createHTML: (t) => t });
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
const di = (t) => t === null || !(typeof t == "object" || typeof t == "function");
class Ue {
  constructor(e) {
    this.value = void 0, this.committer = e;
  }
  setValue(e) {
    e !== nt && (!di(e) || e !== this.value) && (this.value = e, It(e) || (this.committer.dirty = !0));
  }
  commit() {
    for (; It(this.value); ) {
      const e = this.value;
      this.value = nt, e(this);
    }
    this.value !== nt && this.committer.commit();
  }
}
class li extends Ue {
}
let yn = !1;
(() => {
  try {
    const t = {
      get capture() {
        return yn = !0, !1;
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
var vn = Object.defineProperty, Sn = Object.getOwnPropertyDescriptor, ke = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Sn(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (n ? o(e, i, r) : o(r)) || r);
  return n && r && vn(e, i, r), r;
};
let he = class extends ae {
  constructor() {
    super(...arguments), this.secondary = !1, this.highlighted = !1, this.hideActions = !1;
  }
  async firstUpdated() {
    this.tabIndex = 0;
  }
  renderIcon() {
    return d`<span>
      <slot name="icon"
        >${this.icon ? d`<mwc-icon>${this.icon}</mwc-icon>` : tt}</slot
      ></span
    > `;
  }
  render() {
    return d`<header>${this.label ?? tt}</header>
      <section>${this.renderIcon()}<slot name="action"></slot></section>
      <footer>${this.label ?? tt}</footer>`;
  }
};
he.styles = ce`
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
ke([
  l({ type: String })
], he.prototype, "label", 2);
ke([
  l({ type: String })
], he.prototype, "icon", 2);
ke([
  l({ type: Boolean })
], he.prototype, "secondary", 2);
ke([
  l({ type: Boolean })
], he.prototype, "highlighted", 2);
ke([
  l({ type: Boolean })
], he.prototype, "hideActions", 2);
he = ke([
  Z("action-icon")
], he);
function D(t, e, i) {
  const n = t.createElementNS(t.documentElement.namespaceURI, e);
  return Object.entries(i).filter(([r, a]) => a !== null).forEach(([r, a]) => n.setAttribute(r, a)), n;
}
function pi(t, e) {
  const i = t.cloneNode(!1);
  return Object.entries(e).forEach(([n, r]) => {
    r === null ? i.removeAttribute(n) : i.setAttribute(n, r);
  }), i;
}
var lt = function(t, e) {
  return lt = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, n) {
    i.__proto__ = n;
  } || function(i, n) {
    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (i[r] = n[r]);
  }, lt(t, e);
};
function xn(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  lt(t, e);
  function i() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (i.prototype = e.prototype, new i());
}
var _e = function() {
  return _e = Object.assign || function(e) {
    for (var i, n = 1, r = arguments.length; n < r; n++) {
      i = arguments[n];
      for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a]);
    }
    return e;
  }, _e.apply(this, arguments);
};
function u(t, e, i, n) {
  var r = arguments.length, a = r < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, i) : n, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(t, e, i, n);
  else for (var s = t.length - 1; s >= 0; s--) (o = t[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(e, i, a) : o(e, i)) || a);
  return r > 3 && a && Object.defineProperty(e, i, a), a;
}
function Me(t) {
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
function wn(t, e) {
  var i = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return i.call(t, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const An = (t) => t.nodeType === Node.ELEMENT_NODE, ui = () => {
}, kn = {
  get passive() {
    return !1;
  }
};
document.addEventListener("x", ui, kn);
document.removeEventListener("x", ui);
const mi = (t = window.document) => {
  let e = t.activeElement;
  const i = [];
  if (!e)
    return i;
  for (; e && (i.push(e), e.shadowRoot); )
    e = e.shadowRoot.activeElement;
  return i;
}, In = (t) => {
  const e = mi();
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
class St extends ae {
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
var hi = (
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
var Cn = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, En = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Ct = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
};
function _n(t, e, i) {
  if (!t)
    return { x: 0, y: 0 };
  var n = e.x, r = e.y, a = n + i.left, o = r + i.top, s, p;
  if (t.type === "touchstart") {
    var c = t;
    s = c.changedTouches[0].pageX - a, p = c.changedTouches[0].pageY - o;
  } else {
    var m = t;
    s = m.pageX - a, p = m.pageY - o;
  }
  return { x: s, y: p };
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
var Et = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], _t = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], $e = [], Dn = (
  /** @class */
  function(t) {
    xn(e, t);
    function e(i) {
      var n = t.call(this, _e(_e({}, e.defaultAdapter), i)) || this;
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
        return Cn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return En;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Ct;
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
          for (var a = Me(Et), o = a.next(); !o.done; o = a.next()) {
            var s = o.value;
            this.adapter.registerInteractionHandler(s, this.activateHandler);
          }
        } catch (p) {
          n = { error: p };
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
          for (var a = Me(_t), o = a.next(); !o.done; o = a.next()) {
            var s = o.value;
            this.adapter.registerDocumentInteractionHandler(s, this.deactivateHandler);
          }
        } catch (p) {
          n = { error: p };
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
        for (var r = Me(Et), a = r.next(); !a.done; a = r.next()) {
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
        for (var r = Me(_t), a = r.next(); !a.done; a = r.next()) {
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
            var s = i !== void 0 && $e.length > 0 && $e.some(function(p) {
              return n.adapter.containsEventTarget(p);
            });
            if (s) {
              this.resetActivationState();
              return;
            }
            i !== void 0 && ($e.push(i.target), this.registerDeactivationHandlers(i)), r.wasElementMadeActive = this.checkElementMadeActive(i), r.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              $e = [], !r.wasElementMadeActive && i !== void 0 && (i.key === " " || i.keyCode === 32) && (r.wasElementMadeActive = n.checkElementMadeActive(i), r.wasElementMadeActive && n.animateActivation()), r.wasElementMadeActive || (n.activationState = n.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(i) {
      return i !== void 0 && i.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var i = this, n = e.strings, r = n.VAR_FG_TRANSLATE_START, a = n.VAR_FG_TRANSLATE_END, o = e.cssClasses, s = o.FG_DEACTIVATION, p = o.FG_ACTIVATION, c = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var m = "", y = "";
      if (!this.adapter.isUnbounded()) {
        var b = this.getFgTranslationCoordinates(), v = b.startPoint, A = b.endPoint;
        m = v.x + "px, " + v.y + "px", y = A.x + "px, " + A.y + "px";
      }
      this.adapter.updateCssVariable(r, m), this.adapter.updateCssVariable(a, y), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(s), this.adapter.computeBoundingRect(), this.adapter.addClass(p), this.activationTimer = setTimeout(function() {
        i.activationTimerCallback();
      }, c);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var i = this.activationState, n = i.activationEvent, r = i.wasActivatedByPointer, a;
      r ? a = _n(n, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
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
      }, Ct.FG_DEACTIVATION_MS));
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
        var r = _e({}, n);
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
  }(hi)
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
class Nn {
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
const Dt = /* @__PURE__ */ new WeakMap(), We = je((t) => (e) => {
  if (!(e instanceof Ue) || e instanceof li || e.committer.name !== "class" || e.committer.parts.length > 1)
    throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");
  const { committer: i } = e, { element: n } = i;
  let r = Dt.get(e);
  r === void 0 && (n.setAttribute("class", i.strings.join(" ")), Dt.set(e, r = /* @__PURE__ */ new Set()));
  const a = n.classList || new Nn(n);
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
const Nt = /* @__PURE__ */ new WeakMap(), Ln = je((t) => (e) => {
  if (!(e instanceof Ue) || e instanceof li || e.committer.name !== "style" || e.committer.parts.length > 1)
    throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");
  const { committer: i } = e, { style: n } = i.element;
  let r = Nt.get(e);
  r === void 0 && (n.cssText = i.strings.join(" "), Nt.set(e, r = /* @__PURE__ */ new Set())), r.forEach((a) => {
    a in t || (r.delete(a), a.indexOf("-") === -1 ? n[a] = null : n.removeProperty(a));
  });
  for (const a in t)
    r.add(a), a.indexOf("-") === -1 ? n[a] = t[a] : n.setProperty(a, t[a]);
});
class M extends St {
  constructor() {
    super(...arguments), this.primary = !1, this.accent = !1, this.unbounded = !1, this.disabled = !1, this.activated = !1, this.selected = !1, this.internalUseStateLayerCustomProperties = !1, this.hovering = !1, this.bgFocused = !1, this.fgActivation = !1, this.fgDeactivation = !1, this.fgScale = "", this.fgSize = "", this.translateStart = "", this.translateEnd = "", this.leftPos = "", this.topPos = "", this.mdcFoundationClass = Dn;
  }
  get isActive() {
    return wn(this.parentElement || this, ":active");
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
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${We(n)}"
          style="${Ln({
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
  j(".mdc-ripple-surface")
], M.prototype, "mdcRoot", void 0);
u([
  l({ type: Boolean })
], M.prototype, "primary", void 0);
u([
  l({ type: Boolean })
], M.prototype, "accent", void 0);
u([
  l({ type: Boolean })
], M.prototype, "unbounded", void 0);
u([
  l({ type: Boolean })
], M.prototype, "disabled", void 0);
u([
  l({ type: Boolean })
], M.prototype, "activated", void 0);
u([
  l({ type: Boolean })
], M.prototype, "selected", void 0);
u([
  l({ type: Boolean })
], M.prototype, "internalUseStateLayerCustomProperties", void 0);
u([
  k()
], M.prototype, "hovering", void 0);
u([
  k()
], M.prototype, "bgFocused", void 0);
u([
  k()
], M.prototype, "fgActivation", void 0);
u([
  k()
], M.prototype, "fgDeactivation", void 0);
u([
  k()
], M.prototype, "fgScale", void 0);
u([
  k()
], M.prototype, "fgSize", void 0);
u([
  k()
], M.prototype, "translateStart", void 0);
u([
  k()
], M.prototype, "translateEnd", void 0);
u([
  k()
], M.prototype, "leftPos", void 0);
u([
  k()
], M.prototype, "topPos", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Tn = ce`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`;
let pt = class extends M {
};
pt.styles = [Tn];
pt = u([
  Z("mwc-ripple")
], pt);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const fe = (t) => (
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
          const p = this.constructor._observers.get(o);
          p !== void 0 && p.call(this, this[o], a);
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
class fi {
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
class V extends ae {
  constructor() {
    super(...arguments), this.value = "", this.group = null, this.tabindex = -1, this.disabled = !1, this.twoline = !1, this.activated = !1, this.graphic = null, this.multipleGraphics = !1, this.hasMeta = !1, this.noninteractive = !1, this.selected = !1, this.shouldRenderRipple = !1, this._managingList = null, this.boundOnClick = this.onClick.bind(this), this._firstChanged = !0, this._skipPropRequest = !1, this.rippleHandlers = new fi(() => (this.shouldRenderRipple = !0, this.ripple)), this.listeners = [
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
      <span class="mdc-deprecated-list-item__graphic material-icons ${We(e)}">
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
u([
  j("slot")
], V.prototype, "slotElement", void 0);
u([
  ni("mwc-ripple")
], V.prototype, "ripple", void 0);
u([
  l({ type: String })
], V.prototype, "value", void 0);
u([
  l({ type: String, reflect: !0 })
], V.prototype, "group", void 0);
u([
  l({ type: Number, reflect: !0 })
], V.prototype, "tabindex", void 0);
u([
  l({ type: Boolean, reflect: !0 }),
  fe(function(t) {
    t ? this.setAttribute("aria-disabled", "true") : this.setAttribute("aria-disabled", "false");
  })
], V.prototype, "disabled", void 0);
u([
  l({ type: Boolean, reflect: !0 })
], V.prototype, "twoline", void 0);
u([
  l({ type: Boolean, reflect: !0 })
], V.prototype, "activated", void 0);
u([
  l({ type: String, reflect: !0 })
], V.prototype, "graphic", void 0);
u([
  l({ type: Boolean })
], V.prototype, "multipleGraphics", void 0);
u([
  l({ type: Boolean })
], V.prototype, "hasMeta", void 0);
u([
  l({ type: Boolean, reflect: !0 }),
  fe(function(t) {
    t ? (this.removeAttribute("aria-checked"), this.removeAttribute("mwc-list-item"), this.selected = !1, this.activated = !1, this.tabIndex = -1) : this.setAttribute("mwc-list-item", "");
  })
], V.prototype, "noninteractive", void 0);
u([
  l({ type: Boolean, reflect: !0 }),
  fe(function(t) {
    const e = this.getAttribute("role"), i = e === "gridcell" || e === "option" || e === "row" || e === "tab";
    if (i && t ? this.setAttribute("aria-selected", "true") : i && this.setAttribute("aria-selected", "false"), this._firstChanged) {
      this._firstChanged = !1;
      return;
    }
    this._skipPropRequest || this.fireRequestSelected(t, "property");
  })
], V.prototype, "selected", void 0);
u([
  k()
], V.prototype, "shouldRenderRipple", void 0);
u([
  k()
], V.prototype, "_managingList", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const bi = ce`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let ut = class extends V {
};
ut.styles = [bi];
ut = u([
  Z("mwc-list-item")
], ut);
var Pn = Object.defineProperty, Rn = Object.getOwnPropertyDescriptor, ee = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Rn(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (n ? o(e, i, r) : o(r)) || r);
  return n && r && Pn(e, i, r), r;
};
let G = class extends nn {
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
    return this.reservedValues && this.reservedValues.some((t) => t === this.value) ? (this.setCustomValidity(x("textfield.unique")), !1) : (this.setCustomValidity(""), super.checkValidity());
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
          >${t === null ? x("textfield.noMultiplier") : t}</mwc-list-item
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
ee([
  l({ type: Boolean })
], G.prototype, "nullable", 2);
ee([
  l({ type: Array })
], G.prototype, "multipliers", 2);
ee([
  l({ type: String })
], G.prototype, "multiplier", 1);
ee([
  l({ type: String })
], G.prototype, "unit", 2);
ee([
  k()
], G.prototype, "null", 1);
ee([
  l({ type: String })
], G.prototype, "maybeValue", 1);
ee([
  l({ type: String })
], G.prototype, "defaultValue", 2);
ee([
  l({ type: Array })
], G.prototype, "reservedValues", 2);
ee([
  j("mwc-switch")
], G.prototype, "nullSwitch", 2);
ee([
  j("mwc-menu")
], G.prototype, "multiplierMenu", 2);
ee([
  j("mwc-icon-button")
], G.prototype, "multiplierButton", 2);
G = ee([
  Z("wizard-textfield")
], G);
var zn = Object.defineProperty, Mn = Object.getOwnPropertyDescriptor, ve = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Mn(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (n ? o(e, i, r) : o(r)) || r);
  return n && r && zn(e, i, r), r;
};
let se = class extends tn {
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
ve([
  l({ type: Boolean })
], se.prototype, "nullable", 2);
ve([
  k()
], se.prototype, "null", 1);
ve([
  l({ type: String })
], se.prototype, "maybeValue", 1);
ve([
  l({ type: String })
], se.prototype, "defaultValue", 2);
ve([
  l({ type: Array })
], se.prototype, "reservedValues", 2);
ve([
  j("mwc-switch")
], se.prototype, "nullSwitch", 2);
se = ve([
  Z("wizard-select")
], se);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function $n(t, e, i) {
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
function xt(t, e, i) {
  if (e !== void 0)
    return $n(t, e, i);
  throw new Error("@ariaProperty only supports TypeScript Decorators");
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class gi extends St {
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
gi.shadowRootOptions = { mode: "open", delegatesFocus: !0 };
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
const rt = /* @__PURE__ */ new WeakMap(), te = je((t) => (e) => {
  const i = rt.get(e);
  if (t === void 0 && e instanceof Ue) {
    if (i !== void 0 || !rt.has(e)) {
      const n = e.committer.name;
      e.committer.element.removeAttribute(n);
    }
  } else t !== i && e.setValue(t);
  rt.set(e, t);
});
class O extends gi {
  constructor() {
    super(...arguments), this.checked = !1, this.indeterminate = !1, this.disabled = !1, this.value = "", this.reducedTouchTarget = !1, this.animationClass = "", this.shouldRenderRipple = !1, this.focused = !1, this.useStateLayerCustomProperties = !1, this.mdcFoundationClass = void 0, this.mdcFoundation = void 0, this.rippleElement = null, this.rippleHandlers = new fi(() => (this.shouldRenderRipple = !0, this.ripple.then((e) => this.rippleElement = e), this.ripple));
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
      <div class="mdc-checkbox mdc-checkbox--upgraded ${We(i)}">
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
u([
  j(".mdc-checkbox")
], O.prototype, "mdcRoot", void 0);
u([
  j("input")
], O.prototype, "formElement", void 0);
u([
  l({ type: Boolean, reflect: !0 })
], O.prototype, "checked", void 0);
u([
  l({ type: Boolean })
], O.prototype, "indeterminate", void 0);
u([
  l({ type: Boolean, reflect: !0 })
], O.prototype, "disabled", void 0);
u([
  l({ type: String, reflect: !0 })
], O.prototype, "name", void 0);
u([
  l({ type: String })
], O.prototype, "value", void 0);
u([
  xt,
  l({ type: String, attribute: "aria-label" })
], O.prototype, "ariaLabel", void 0);
u([
  xt,
  l({ type: String, attribute: "aria-labelledby" })
], O.prototype, "ariaLabelledBy", void 0);
u([
  xt,
  l({ type: String, attribute: "aria-describedby" })
], O.prototype, "ariaDescribedBy", void 0);
u([
  l({ type: Boolean })
], O.prototype, "reducedTouchTarget", void 0);
u([
  k()
], O.prototype, "animationClass", void 0);
u([
  k()
], O.prototype, "shouldRenderRipple", void 0);
u([
  k()
], O.prototype, "focused", void 0);
u([
  k()
], O.prototype, "useStateLayerCustomProperties", void 0);
u([
  ni("mwc-ripple")
], O.prototype, "ripple", void 0);
u([
  Yi({ passive: !0 })
], O.prototype, "handleRippleTouchStart", null);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const On = ce`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;
let mt = class extends O {
};
mt.styles = [On];
mt = u([
  Z("mwc-checkbox")
], mt);
var Vn = Object.defineProperty, Hn = Object.getOwnPropertyDescriptor, Y = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Hn(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (n ? o(e, i, r) : o(r)) || r);
  return n && r && Vn(e, i, r), r;
};
let q = class extends ae {
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
Y([
  l({ type: String })
], q.prototype, "label", 2);
Y([
  l({ type: String })
], q.prototype, "helper", 2);
Y([
  l({ type: Boolean })
], q.prototype, "nullable", 2);
Y([
  l({ type: Boolean })
], q.prototype, "defaultChecked", 2);
Y([
  l({ type: String })
], q.prototype, "maybeValue", 1);
Y([
  l({ type: Boolean })
], q.prototype, "disabled", 2);
Y([
  k()
], q.prototype, "null", 1);
Y([
  k()
], q.prototype, "checked", 1);
Y([
  k()
], q.prototype, "deactivateCheckbox", 2);
Y([
  k()
], q.prototype, "formfieldLabel", 1);
Y([
  j("mwc-switch")
], q.prototype, "nullSwitch", 2);
Y([
  j("mwc-checkbox")
], q.prototype, "checkbox", 2);
q = Y([
  Z("wizard-checkbox")
], q);
function Fn(t) {
  return typeof t == "function";
}
function z(t) {
  return t instanceof G || t instanceof se || t instanceof q ? t.maybeValue : t.value ?? null;
}
function yi(t) {
  return t instanceof G ? t.multiplier : null;
}
function Ae(t, e) {
  if (!t)
    return new CustomEvent("wizard", {
      bubbles: !0,
      composed: !0,
      ...e,
      detail: { wizard: null, ...e?.detail }
    });
  const i = Fn(t) ? t : () => t;
  return new CustomEvent("wizard", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { wizard: i, ...e?.detail }
  });
}
function B(t) {
  const e = t.split(">"), i = e.pop() ?? "";
  return [e.join(">"), i];
}
const T = ":not(*)";
function Bn(t) {
  return `${t.getAttribute("version")}	${t.getAttribute("revision")}`;
}
function Gn(t, e) {
  const [i, n] = e.split("	");
  return !i || !n ? T : `${t}[version="${i}"][revision="${n}"]`;
}
function Lt(t) {
  return I(t.parentElement) + ">" + t.getAttribute("connectivityNode");
}
function Tt(t, e) {
  const [i, n] = B(e), r = $[t].parents.flatMap(
    (a) => H(a, i).split(",")
  );
  return F(
    r,
    [">"],
    [`${t}[connectivityNode="${n}"]`]
  ).map((a) => a.join("")).join(",");
}
function qn(t) {
  const [e, i, n, r, a, o] = [
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "lnType"
  ].map((s) => t.getAttribute(s));
  return e === "None" ? `${I(t.parentElement)}>(${r} ${o} ${a})` : `${e} ${i || "(Client)"}/${n ?? ""} ${r} ${a ?? ""}`;
}
function jn(t, e) {
  if (e.endsWith(")")) {
    const [b, v] = B(e), [A, P, N] = v.substring(1, v.length - 1).split(" ");
    if (!A || !P) return T;
    const R = $[t].parents.flatMap(
      (J) => H(J, b).split(",")
    );
    return F(
      R,
      [">"],
      [`${t}[iedName="None"][lnClass="${A}"][lnType="${P}"][lnInst="${N}"]`]
    ).map((J) => J.join("")).join(",");
  }
  const [i, n, r, a, o] = e.split(/[ /]/);
  if (!i || !n || !a) return T;
  const [
    s,
    p,
    c,
    m,
    y
  ] = [
    [`[iedName="${i}"]`],
    n === "(Client)" ? [":not([ldInst])", '[ldInst=""]'] : [`[ldInst="${n}"]`],
    r ? [`[prefix="${r}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${a}"]`],
    o ? [`[lnInst="${o}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return F(
    [t],
    s,
    p,
    c,
    m,
    y
  ).map((b) => b.join("")).join(",");
}
function Un(t) {
  return `${I(t.parentElement)}>${t.getAttribute(
    "iedName"
  )} ${t.getAttribute("apName")}`;
}
function Wn(t, e) {
  const [i, n] = B(e), [r, a] = n.split(" ");
  return `${H(
    "IED",
    i
  )}>${t}[iedName="${r}"][apName="${a}"]`;
}
function Kn(t) {
  return `${I(t.parentElement)}>${t.getAttribute("associationID") ?? ""}`;
}
function Zn(t, e) {
  const [i, n] = B(e);
  return n ? `${H(
    "Server",
    i
  )}>${t}[associationID="${n}"]` : T;
}
function Xn(t) {
  return `${I(t.closest("IED"))}>>${t.getAttribute("inst")}`;
}
function Yn(t, e) {
  const [i, n] = e.split(">>");
  return n ? `IED[name="${i}"] ${t}[inst="${n}"]` : T;
}
function Qn(t) {
  const e = t.textContent, [i, n, r, a, o] = [
    "apRef",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((s) => t.getAttribute(s));
  return `${I(t.parentElement)}>${e} ${i || ""} ${n || ""}/${r ?? ""} ${a ?? ""} ${o ?? ""}`;
}
function Jn(t, e) {
  const [i, n] = B(e), [r, a, o, s, p, c] = n.split(/[ /]/), [
    m,
    y,
    b,
    v,
    A,
    P
  ] = [
    $[t].parents.flatMap(
      (N) => H(N, i).split(",")
    ),
    [`${r}`],
    a ? [`[apRef="${a}"]`] : [":not([apRef])", '[apRef=""]'],
    o ? [`[ldInst="${o}"]`] : [":not([ldInst])", '[ldInst=""]'],
    s ? [`[prefix="${s}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${p}"]`],
    c ? [`[lnInst="${c}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return F(
    m,
    [">"],
    [t],
    y,
    b,
    v,
    A,
    P
  ).map((N) => N.join("")).join(",");
}
function er(t) {
  const [e, i, n, r, a, o, s, p] = [
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst",
    "doName",
    "daName",
    "fc",
    "ix"
  ].map((m) => t.getAttribute(m)), c = `${e}/${i ?? ""} ${n} ${r ?? ""}.${a} ${o || ""}`;
  return `${I(t.parentElement)}>${c} (${s}${p ? " [" + p + "]" : ""})`;
}
function tr(t, e) {
  const [i, n] = B(e), [r, a, o, s] = n.split(/[ /.]/), p = n.match(
    /.([A-Z][A-Za-z0-9.]*) ([A-Za-z0-9.]*) \(/
  ), c = p && p[1] ? p[1] : "", m = p && p[2] ? p[2] : "", y = n.match(/\(([A-Z]{2})/), b = n.match(/ \[([0-9]{1,2})\]/), v = y && y[1] ? y[1] : "", A = b && b[1] ? b[1] : "", [
    P,
    N,
    R,
    J,
    Ie,
    Ye,
    Qe,
    Je,
    et
  ] = [
    $[t].parents.flatMap(
      (Ce) => H(Ce, i).split(",")
    ),
    [`[ldInst="${r}"]`],
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${o}"]`],
    s ? [`[lnInst="${s}"]`] : [":not([lnInst])", '[lnInst=""]'],
    [`[doName="${c}"]`],
    m ? [`[daName="${m}"]`] : [":not([daName])", '[daName=""]'],
    [`[fc="${v}"]`],
    A ? [`[ix="${A}"]`] : [":not([ix])", '[ix=""]']
  ];
  return F(
    P,
    [">"],
    [t],
    N,
    R,
    J,
    Ie,
    Ye,
    Qe,
    Je,
    et
  ).map((Ce) => Ce.join("")).join(",");
}
function ir(t) {
  if (!t.parentElement) return NaN;
  const e = I(t.parentElement), i = t.getAttribute("iedName"), n = t.getAttribute("intAddr"), r = Array.from(
    t.parentElement.querySelectorAll(`ExtRef[intAddr="${n}"]`)
  ).indexOf(t);
  if (n) return `${e}>${n}[${r}]`;
  const [
    a,
    o,
    s,
    p,
    c,
    m,
    y,
    b,
    v,
    A,
    P,
    N
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
  ].map((Ie) => t.getAttribute(Ie)), R = N ? `${y}:${N} ${b ?? ""}/${v ?? ""} ${A ?? ""} ${P ?? ""}` : "", J = `${i} ${a}/${o ?? ""} ${s} ${p ?? ""} ${c} ${m || ""}`;
  return `${e}>${R ? R + " " : ""}${J}${n ? `@${n}` : ""}`;
}
function nr(t, e) {
  const [i, n] = B(e), r = $[t].parents.flatMap(
    (Ee) => H(Ee, i).split(",")
  );
  if (n.endsWith("]")) {
    const [Ee] = n.split("["), Zi = [`[intAddr="${Ee}"]`];
    return F(r, [">"], [t], Zi).map((Xi) => Xi.join("")).join(",");
  }
  let a, o, s, p, c, m, y, b, v, A, P, N, R, J;
  !n.includes(":") && !n.includes("@") ? [a, o, s, p, c, m, y] = n.split(/[ /]/) : n.includes(":") && !n.includes("@") ? [
    b,
    v,
    A,
    P,
    N,
    R,
    a,
    o,
    s,
    p,
    c,
    m,
    y
  ] = n.split(/[ /:]/) : !n.includes(":") && n.includes("@") ? [a, o, s, p, c, m, y, J] = n.split(/[ /@]/) : [
    b,
    v,
    A,
    P,
    N,
    R,
    a,
    o,
    s,
    p,
    c,
    m,
    y,
    J
  ] = n.split(/[ /:@]/);
  const [
    Ie,
    Ye,
    Qe,
    Je,
    et,
    Ce,
    Fi,
    Bi,
    Gi,
    qi,
    ji,
    Ui,
    Wi,
    Ki
  ] = [
    a ? [`[iedName="${a}"]`] : [":not([iedName])"],
    o ? [`[ldInst="${o}"]`] : [":not([ldInst])", '[ldInst=""]'],
    s ? [`[prefix="${s}"]`] : [":not([prefix])", '[prefix=""]'],
    p ? [`[lnClass="${p}"]`] : [":not([lnClass])"],
    c ? [`[lnInst="${c}"]`] : [":not([lnInst])", '[lnInst=""]'],
    m ? [`[doName="${m}"]`] : [":not([doName])"],
    y ? [`[daName="${y}"]`] : [":not([daName])", '[daName=""]'],
    b ? [`[serviceType="${b}"]`] : [":not([serviceType])", '[serviceType=""]'],
    v ? [`[srcCBName="${v}"]`] : [":not([srcCBName])", '[srcCBName=""]'],
    A ? [`[srcLDInst="${A}"]`] : [":not([srcLDInst])", '[srcLDInst=""]'],
    P ? [`[srcPrefix="${P}"]`] : [":not([srcPrefix])", '[srcPrefix=""]'],
    N ? [`[srcLNClass="${N}"]`] : [":not([srcLNClass])", '[srcLNClass=""]'],
    R ? [`[srcLNInst="${R}"]`] : [":not([srcLNInst])", '[srcLNInst=""]'],
    J ? [`[intAddr="${J}"]`] : [":not([intAddr])", '[intAddr=""]']
  ];
  return F(
    r,
    [">"],
    [t],
    Ie,
    Ye,
    Qe,
    Je,
    et,
    Ce,
    Fi,
    Bi,
    Gi,
    qi,
    ji,
    Ui,
    Wi,
    Ki
  ).map((Ee) => Ee.join("")).join(",");
}
function rr(t) {
  const [e, i, n] = ["prefix", "lnClass", "inst"].map(
    (r) => t.getAttribute(r)
  );
  return `${I(t.parentElement)}>${e ?? ""} ${i} ${n}`;
}
function ar(t, e) {
  const [i, n] = B(e), r = $[t].parents.flatMap(
    (y) => H(y, i).split(",")
  ), [a, o, s] = n.split(" ");
  if (!o) return T;
  const [p, c, m] = [
    a ? [`[prefix="${a}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${o}"]`],
    [`[inst="${s}"]`]
  ];
  return F(
    r,
    [">"],
    [t],
    p,
    c,
    m
  ).map((y) => y.join("")).join(",");
}
function or(t) {
  const [e, i, n, r, a, o] = [
    "apRef",
    "iedName",
    "ldInst",
    "prefix",
    "lnClass",
    "lnInst"
  ].map((s) => t.getAttribute(s));
  return `${I(t.parentElement)}>${i} ${e || ""} ${n}/${r ?? ""} ${a} ${o}`;
}
function sr(t, e) {
  const [i, n] = B(e), r = $[t].parents.flatMap(
    (R) => H(R, i).split(",")
  ), [a, o, s, p, c, m] = n.split(/[ /]/), [
    y,
    b,
    v,
    A,
    P,
    N
  ] = [
    a ? [`[iedName="${a}"]`] : [":not([iedName])", '[iedName=""]'],
    o ? [`[apRef="${o}"]`] : [":not([apRef])", '[apRef=""]'],
    s ? [`[ldInst="${s}"]`] : [":not([ldInst])", '[ldInst=""]'],
    p ? [`[prefix="${p}"]`] : [":not([prefix])", '[prefix=""]'],
    [`[lnClass="${c}"]`],
    m ? [`[lnInst="${m}"]`] : [":not([lnInst])", '[lnInst=""]']
  ];
  return F(
    r,
    [">"],
    [t],
    y,
    b,
    v,
    A,
    P,
    N
  ).map((R) => R.join("")).join(",");
}
function Pt(t) {
  const [e, i] = ["name", "ix"].map((n) => t.getAttribute(n));
  return `${I(t.parentElement)}>${e}${i ? "[" + i + "]" : ""}`;
}
function ht(t, e, i = -1) {
  i === -1 && (i = e.split(">").length);
  const [n, r] = B(e), [a, o, s, p] = r.match(/([^[]*)(\[([0-9]*)\])?/) ?? [];
  if (!o) return T;
  if (i === 0) return `${t}[name="${o}"]`;
  const c = $[t].parents.flatMap(
    (b) => b === "SDI" ? ht(b, n, i - 1).split(",") : H(b, n).split(",")
  ).filter((b) => !b.startsWith(T));
  if (c.length === 0) return T;
  const [m, y] = [
    [`[name="${o}"]`],
    p ? [`[ix="${p}"]`] : ['[ix=""]', ":not([ix])"]
  ];
  return F(
    c,
    [">"],
    [t],
    m,
    y
  ).map((b) => b.join("")).join(",");
}
function cr(t) {
  if (!t.parentElement) return NaN;
  const e = t.getAttribute("sGroup"), i = Array.from(t.parentElement.children).filter((n) => n.getAttribute("sGroup") === e).findIndex((n) => n.isSameNode(t));
  return `${I(t.parentElement)}>${e ? e + "." : ""} ${i}`;
}
function dr(t, e) {
  const [i, n] = B(e), [r, a] = n.split(" "), o = parseFloat(a), s = $[t].parents.flatMap(
    (m) => H(m, i).split(",")
  ), [p, c] = [
    r ? [`[sGroup="${r}"]`] : [""],
    o ? [`:nth-child(${o + 1})`] : [""]
  ];
  return F(
    s,
    [">"],
    [t],
    p,
    c
  ).map((m) => m.join("")).join(",");
}
function lr(t) {
  const [e, i] = ["iedName", "apName"].map(
    (n) => t.getAttribute(n)
  );
  return `${e} ${i}`;
}
function pr(t, e) {
  const [i, n] = e.split(" ");
  return !i || !n ? T : `${t}[iedName="${i}"][apName="${n}"]`;
}
function Rt(t) {
  const [e, i] = ["ldInst", "cbName"].map(
    (n) => t.getAttribute(n)
  );
  return `${e} ${i}`;
}
function zt(t, e) {
  const [i, n] = e.split(" ");
  return !i || !n ? T : `${t}[ldInst="${i}"][cbName="${n}"]`;
}
function ur(t) {
  if (!t.parentElement) return NaN;
  if (!t.parentElement.querySelector('PhysConn[type="RedConn"]')) return NaN;
  const e = t.getAttribute("type");
  return t.parentElement.children.length > 1 && e !== "Connection" && e !== "RedConn" ? NaN : `${I(t.parentElement)}>${e}`;
}
function mr(t, e) {
  const [i, n] = B(e), [r, a] = [
    $[t].parents.flatMap(
      (o) => H(o, i).split(",")
    ),
    n ? [`[type="${n}"]`] : [""]
  ];
  return F(r, [">"], [t], a).map((o) => o.join("")).join(",");
}
function hr(t) {
  if (!t.parentElement) return NaN;
  const e = t.parentElement, i = t.getAttribute("type");
  if (e.tagName === "PhysConn")
    return `${I(t.parentElement)}>${i}`;
  const n = Array.from(t.parentElement.children).filter((r) => r.getAttribute("type") === i).findIndex((r) => r.isSameNode(t));
  return `${I(t.parentElement)}>${i} [${n}]`;
}
function fr(t, e) {
  const [i, n] = B(e), [r] = n.split(" "), a = n && n.match(/\[([0-9]+)\]/) && n.match(/\[([0-9]+)\]/)[1] ? parseFloat(n.match(/\[([0-9]+)\]/)[1]) : NaN, [o, s, p] = [
    $[t].parents.flatMap(
      (c) => H(c, i).split(",")
    ),
    [`[type="${r}"]`],
    a ? [`:nth-child(${a + 1})`] : [""]
  ];
  return F(
    o,
    [">"],
    [t],
    s,
    p
  ).map((c) => c.join("")).join(",");
}
function br(t) {
  return `${I(t.parentElement)}>${t.getAttribute("ord")}`;
}
function gr(t, e) {
  const [i, n] = B(e);
  return `${H("EnumType", i)}>${t}[ord="${n}"]`;
}
function yr(t) {
  return `${I(t.parentElement)}>${t.getAttribute("type") || "8-MMS"}	${t.textContent}`;
}
function vr(t, e) {
  const [i, n] = B(e), [r, a] = n.split("	"), [o] = [
    $[t].parents.flatMap(
      (s) => H(s, i).split(",")
    )
  ];
  return F(
    o,
    [">"],
    [t],
    [`[type="${r}"]`],
    [">"],
    [a]
  ).map((s) => s.join("")).join(",");
}
function Sr() {
  return "";
}
function xr() {
  return ":root";
}
function w(t) {
  return t.parentElement.tagName === "SCL" ? t.getAttribute("name") : `${I(t.parentElement)}>${t.getAttribute("name")}`;
}
function S(t, e, i = -1) {
  i === -1 && (i = e.split(">").length);
  const [n, r] = B(e);
  if (!r) return T;
  if (i === 0) return `${t}[name="${r}"]`;
  const a = $[t].parents;
  if (!a) return T;
  const o = a.flatMap(
    (s) => $[s].selector === $.Substation.selector ? S(s, n, i - 1).split(",") : H(s, n).split(",")
  ).filter((s) => !s.startsWith(T));
  return o.length === 0 ? T : F(o, [">"], [t], [`[name="${r}"]`]).map((s) => s.join("")).join(",");
}
function h(t) {
  return I(t.parentElement).toString();
}
function f(t, e) {
  const i = $[t].parents;
  if (!i) return T;
  const n = i.flatMap((r) => H(r, e).split(",")).filter((r) => !r.startsWith(T));
  return n.length === 0 ? T : F(n, [">"], [t]).map((r) => r.join("")).join(",");
}
function Oe(t) {
  return `#${t.id}`;
}
function Ve(t, e) {
  const i = e.replace(/^#/, "");
  return i ? `${t}[id="${i}"]` : T;
}
const vi = [
  "TransformerWinding",
  "ConductingEquipment"
], Si = [
  "GeneralEquipment",
  "PowerTransformer",
  ...vi
], ft = ["Substation", "VoltageLevel", "Bay"], xi = ["Process", "Line"], wi = ["EqSubFunction", "EqFunction"], wr = [
  "SubFunction",
  "Function",
  "TapChanger",
  "SubEquipment",
  ...Si,
  ...ft,
  ...xi,
  ...wi
], Ai = ["ConnectivityNode", ...wr], Ar = ["GOOSESecurity", "SMVSecurity"], kr = ["SubNetwork", ...Ar, ...Ai], Ir = ["BDA", "DA"], Cr = ["SampledValueControl", "GSEControl"], Er = ["LogControl", "ReportControl"], _r = [...Cr, ...Er], Dr = ["GSE", "SMV"], Nr = [
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
  ..._r,
  ...Dr,
  ...Ir
], ye = ["LN0", "LN"], Lr = [
  "Text",
  "Private",
  "Hitem",
  "AccessControl"
], Tr = ["Subject", "IssuerName"], Pr = ["MinTime", "MaxTime"], Rr = ["LNodeType", "DOType", "DAType", "EnumType"], zr = [
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
], Mr = ["DynDataSet", "ConfDataSet"], $r = [
  "GSSE",
  "GOOSE",
  "ConfReportControl",
  "SMVsc",
  ...Mr
], Or = ["ConfLogControl", "ConfSigRef"], Vr = [
  "ReportSettings",
  "LogSettings",
  "GSESettings",
  "SMVSettings"
], Hr = ["SCL", ...kr, ...Nr, ...Rr], ki = [
  ...Hr,
  ...Lr,
  "Header",
  "LNode",
  "Val",
  "Voltage",
  "Services",
  ...Tr,
  ...Pr,
  "Association",
  "FCDA",
  "ClientLN",
  "IEDName",
  "ExtRef",
  "Protocol",
  ...ye,
  ...zr,
  "DynAssociation",
  "SettingGroups",
  ...$r,
  ...Or,
  ...Vr,
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
], Fr = new Set(ki);
function Ii(t) {
  return Fr.has(t);
}
const Ke = ["Text", "Private"], ue = [...Ke], L = [...Ke], He = [...Ke], Mt = [...L, "Val"], Ci = [...ue, "LNode"], me = [...Ci], bt = [...me], at = [
  ...me,
  "PowerTransformer",
  "GeneralEquipment"
], $t = [
  ...bt,
  "Terminal"
], Ot = [...L, "Address"], Ei = [...ue], Vt = [...Ei, "IEDName"], Ht = [
  ...L,
  "DataSet",
  "ReportControl",
  "LogControl",
  "DOI",
  "Inputs",
  "Log"
], Ft = [
  ...me,
  "GeneralEquipment",
  "Function"
], Bt = [...Ei, "TrgOps"], Gt = [
  ...me,
  "GeneralEquipment",
  "EqSubFunction"
], $ = {
  AccessControl: {
    identity: h,
    selector: f,
    parents: ["LDevice"],
    children: []
  },
  AccessPoint: {
    identity: w,
    selector: S,
    parents: ["IED"],
    children: [
      ...ue,
      "Server",
      "LN",
      "ServerAt",
      "Services",
      "GOOSESecurity",
      "SMVSecurity"
    ]
  },
  Address: {
    identity: h,
    selector: f,
    parents: ["ConnectedAP", "GSE", "SMV"],
    children: ["P"]
  },
  Association: {
    identity: Kn,
    selector: Zn,
    parents: ["Server"],
    children: []
  },
  Authentication: {
    identity: h,
    selector: f,
    parents: ["Server"],
    children: []
  },
  BDA: {
    identity: w,
    selector: S,
    parents: ["DAType"],
    children: [...Mt]
  },
  BitRate: {
    identity: h,
    selector: f,
    parents: ["SubNetwork"],
    children: []
  },
  Bay: {
    identity: w,
    selector: S,
    parents: ["VoltageLevel"],
    children: [
      ...at,
      "ConductingEquipment",
      "ConnectivityNode",
      "Function"
    ]
  },
  ClientLN: {
    identity: or,
    selector: sr,
    parents: ["RptEnabled"],
    children: []
  },
  ClientServices: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: ["TimeSyncProt", "McSecurity"]
  },
  CommProt: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  Communication: {
    identity: h,
    selector: f,
    parents: ["SCL"],
    children: [...L, "SubNetwork"]
  },
  ConductingEquipment: {
    identity: w,
    selector: S,
    parents: ["Process", "Line", "SubFunction", "Function", "Bay"],
    children: [
      ...$t,
      "EqFunction",
      "SubEquipment"
    ]
  },
  ConfDataSet: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  ConfLdName: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  ConfLNs: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  ConfLogControl: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  ConfReportControl: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  ConfSG: {
    identity: h,
    selector: f,
    parents: ["SettingGroups"],
    children: []
  },
  ConfSigRef: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  ConnectedAP: {
    identity: lr,
    selector: pr,
    parents: ["SubNetwork"],
    children: [...L, "Address", "GSE", "SMV", "PhysConn"]
  },
  ConnectivityNode: {
    identity: w,
    selector: S,
    parents: ["Bay", "Line"],
    children: [...Ci]
  },
  DA: {
    identity: w,
    selector: S,
    parents: ["DOType"],
    children: [...Mt]
  },
  DAI: {
    identity: Pt,
    selector: ht,
    parents: ["DOI", "SDI"],
    children: [...L, "Val"]
  },
  DAType: {
    identity: Oe,
    selector: Ve,
    parents: ["DataTypeTemplates"],
    children: [...He, "BDA", "ProtNs"]
  },
  DO: {
    identity: w,
    selector: S,
    parents: ["LNodeType"],
    children: [...L]
  },
  DOI: {
    identity: w,
    selector: S,
    parents: [...ye],
    children: [...L, "SDI", "DAI"]
  },
  DOType: {
    identity: Oe,
    selector: Ve,
    parents: ["DataTypeTemplates"],
    children: [...He, "SDO", "DA"]
  },
  DataObjectDirectory: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  DataSet: {
    identity: w,
    selector: S,
    parents: [...ye],
    children: [...ue, "FCDA"]
  },
  DataSetDirectory: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  DataTypeTemplates: {
    identity: h,
    selector: f,
    parents: ["SCL"],
    children: ["LNodeType", "DOType", "DAType", "EnumType"]
  },
  DynAssociation: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  DynDataSet: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  EnumType: {
    identity: Oe,
    selector: Ve,
    parents: ["DataTypeTemplates"],
    children: [...He, "EnumVal"]
  },
  EnumVal: {
    identity: br,
    selector: gr,
    parents: ["EnumType"],
    children: []
  },
  EqFunction: {
    identity: w,
    selector: S,
    parents: [
      "GeneralEquipment",
      "TapChanger",
      "TransformerWinding",
      "PowerTransformer",
      "SubEquipment",
      "ConductingEquipment"
    ],
    children: [...Gt]
  },
  EqSubFunction: {
    identity: w,
    selector: S,
    parents: ["EqSubFunction", "EqFunction"],
    children: [...Gt]
  },
  ExtRef: {
    identity: ir,
    selector: nr,
    parents: ["Inputs"],
    children: []
  },
  FCDA: {
    identity: er,
    selector: tr,
    parents: ["DataSet"],
    children: []
  },
  FileHandling: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  Function: {
    identity: w,
    selector: S,
    parents: ["Bay", "VoltageLevel", "Substation", "Process", "Line"],
    children: [
      ...me,
      "SubFunction",
      "GeneralEquipment",
      "ConductingEquipment"
    ]
  },
  GeneralEquipment: {
    identity: w,
    selector: S,
    parents: [
      "SubFunction",
      "Function",
      ...xi,
      ...wi,
      ...ft
    ],
    children: [...bt, "EqFunction"]
  },
  GetCBValues: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  GetDataObjectDefinition: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  GetDataSetValue: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  GetDirectory: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  GOOSE: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  GOOSESecurity: {
    identity: w,
    selector: S,
    parents: ["AccessPoint"],
    children: [...ue, "Subject", "IssuerName"]
  },
  GSE: {
    identity: Rt,
    selector: zt,
    parents: ["ConnectedAP"],
    children: [...Ot, "MinTime", "MaxTime"]
  },
  GSEDir: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  GSEControl: {
    identity: w,
    selector: S,
    parents: ["LN0"],
    children: [...Vt, "Protocol"]
  },
  GSESettings: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  GSSE: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  Header: {
    identity: h,
    selector: f,
    parents: ["SCL"],
    children: ["Text", "History"]
  },
  History: {
    identity: h,
    selector: f,
    parents: ["Header"],
    children: ["Hitem"]
  },
  Hitem: {
    identity: Bn,
    selector: Gn,
    parents: ["History"],
    children: []
  },
  IED: {
    identity: w,
    selector: S,
    parents: ["SCL"],
    children: [...L, "Services", "AccessPoint", "KDC"]
  },
  IEDName: {
    identity: Qn,
    selector: Jn,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  Inputs: {
    identity: h,
    selector: f,
    parents: [...ye],
    children: [...L, "ExtRef"]
  },
  IssuerName: {
    identity: h,
    selector: f,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  KDC: {
    identity: Un,
    selector: Wn,
    parents: ["IED"],
    children: []
  },
  LDevice: {
    identity: Xn,
    selector: Yn,
    parents: ["Server"],
    children: [...L, "LN0", "LN", "AccessControl"]
  },
  LN: {
    identity: rr,
    selector: ar,
    parents: ["AccessPoint", "LDevice"],
    children: [...Ht]
  },
  LN0: {
    identity: h,
    selector: f,
    parents: ["LDevice"],
    children: [
      ...Ht,
      "GSEControl",
      "SampledValueControl",
      "SettingControl"
    ]
  },
  LNode: {
    identity: qn,
    selector: jn,
    parents: [...Ai],
    children: [...L]
  },
  LNodeType: {
    identity: Oe,
    selector: Ve,
    parents: ["DataTypeTemplates"],
    children: [...He, "DO"]
  },
  Line: {
    identity: w,
    selector: S,
    parents: ["Process", "SCL"],
    children: [
      ...Ft,
      "Voltage",
      "ConductingEquipment"
    ]
  },
  Log: {
    identity: w,
    selector: S,
    parents: [...ye],
    children: [...L]
  },
  LogControl: {
    identity: w,
    selector: S,
    parents: [...ye],
    children: [...Bt]
  },
  LogSettings: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  MaxTime: {
    identity: h,
    selector: f,
    parents: ["GSE"],
    children: []
  },
  McSecurity: {
    identity: h,
    selector: f,
    parents: ["GSESettings", "SMVSettings", "ClientServices"],
    children: []
  },
  MinTime: {
    identity: h,
    selector: f,
    parents: ["GSE"],
    children: []
  },
  NeutralPoint: {
    identity: Lt,
    selector: Tt,
    parents: ["TransformerWinding"],
    children: [...L]
  },
  OptFields: {
    identity: h,
    selector: f,
    parents: ["ReportControl"],
    children: []
  },
  P: {
    identity: hr,
    selector: fr,
    parents: ["Address", "PhysConn"],
    children: []
  },
  PhysConn: {
    identity: ur,
    selector: mr,
    parents: ["ConnectedAP"],
    children: [...L, "P"]
  },
  PowerTransformer: {
    identity: w,
    selector: S,
    parents: [...ft],
    children: [
      ...bt,
      "TransformerWinding",
      "SubEquipment",
      "EqFunction"
    ]
  },
  Private: {
    identity: () => NaN,
    selector: () => T,
    parents: [],
    children: []
  },
  Process: {
    identity: w,
    selector: S,
    parents: ["Process", "SCL"],
    children: [
      ...Ft,
      "ConductingEquipment",
      "Substation",
      "Line",
      "Process"
    ]
  },
  ProtNs: {
    identity: yr,
    selector: vr,
    parents: ["DAType", "DA"],
    children: []
  },
  Protocol: {
    identity: h,
    selector: f,
    parents: ["GSEControl", "SampledValueControl"],
    children: []
  },
  ReadWrite: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  RedProt: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  ReportControl: {
    identity: w,
    selector: S,
    parents: [...ye],
    children: [...Bt, "OptFields", "RptEnabled"]
  },
  ReportSettings: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  RptEnabled: {
    identity: h,
    selector: f,
    parents: ["ReportControl"],
    children: [...L, "ClientLN"]
  },
  SamplesPerSec: {
    identity: h,
    selector: f,
    parents: ["SMVSettings"],
    children: []
  },
  SampledValueControl: {
    identity: w,
    selector: S,
    parents: ["LN0"],
    children: [...Vt, "SmvOpts"]
  },
  SecPerSamples: {
    identity: h,
    selector: f,
    parents: ["SMVSettings"],
    children: []
  },
  SCL: {
    identity: Sr,
    selector: xr,
    parents: [],
    children: [
      ...Ke,
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
    identity: Pt,
    selector: ht,
    parents: ["DOI", "SDI"],
    children: [...L, "SDI", "DAI"]
  },
  SDO: {
    identity: w,
    selector: S,
    parents: ["DOType"],
    children: [...ue]
  },
  Server: {
    identity: h,
    selector: f,
    parents: ["AccessPoint"],
    children: [
      ...L,
      "Authentication",
      "LDevice",
      "Association"
    ]
  },
  ServerAt: {
    identity: h,
    selector: f,
    parents: ["AccessPoint"],
    children: [...L]
  },
  Services: {
    identity: h,
    selector: f,
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
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  SettingControl: {
    identity: h,
    selector: f,
    parents: ["LN0"],
    children: [...L]
  },
  SettingGroups: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: ["SGEdit", "ConfSG"]
  },
  SGEdit: {
    identity: h,
    selector: f,
    parents: ["SettingGroups"],
    children: []
  },
  SmpRate: {
    identity: h,
    selector: f,
    parents: ["SMVSettings"],
    children: []
  },
  SMV: {
    identity: Rt,
    selector: zt,
    parents: ["ConnectedAP"],
    children: [...Ot]
  },
  SmvOpts: {
    identity: h,
    selector: f,
    parents: ["SampledValueControl"],
    children: []
  },
  SMVsc: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  SMVSecurity: {
    identity: w,
    selector: S,
    parents: ["AccessPoint"],
    children: [...ue, "Subject", "IssuerName"]
  },
  SMVSettings: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: ["SmpRate", "SamplesPerSec", "SecPerSamples", "McSecurity"]
  },
  SubEquipment: {
    identity: w,
    selector: S,
    parents: [
      "TapChanger",
      "PowerTransformer",
      "ConductingEquipment",
      "TransformerWinding",
      ...vi
    ],
    children: [...me, "EqFunction"]
  },
  SubFunction: {
    identity: w,
    selector: S,
    parents: ["SubFunction", "Function"],
    children: [
      ...me,
      "GeneralEquipment",
      "ConductingEquipment",
      "SubFunction"
    ]
  },
  SubNetwork: {
    identity: w,
    selector: S,
    parents: ["Communication"],
    children: [...ue, "BitRate", "ConnectedAP"]
  },
  Subject: {
    identity: h,
    selector: f,
    parents: ["GOOSESecurity", "SMVSecurity"],
    children: []
  },
  Substation: {
    identity: w,
    selector: S,
    parents: ["SCL"],
    children: [...at, "VoltageLevel", "Function"]
  },
  SupSubscription: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  TapChanger: {
    identity: w,
    selector: S,
    parents: ["TransformerWinding"],
    children: [...me, "SubEquipment", "EqFunction"]
  },
  Terminal: {
    identity: Lt,
    selector: Tt,
    parents: [...Si],
    children: [...L]
  },
  Text: {
    identity: h,
    selector: f,
    parents: ki.filter((t) => t !== "Text" && t !== "Private"),
    children: []
  },
  TimerActivatedControl: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  TimeSyncProt: {
    identity: h,
    selector: f,
    parents: ["Services", "ClientServices"],
    children: []
  },
  TransformerWinding: {
    identity: w,
    selector: S,
    parents: ["PowerTransformer"],
    children: [
      ...$t,
      "TapChanger",
      "NeutralPoint",
      "EqFunction",
      "SubEquipment"
    ]
  },
  TrgOps: {
    identity: h,
    selector: f,
    parents: ["ReportControl"],
    children: []
  },
  Val: {
    identity: cr,
    selector: dr,
    parents: ["DAI", "DA", "BDA"],
    children: []
  },
  ValueHandling: {
    identity: h,
    selector: f,
    parents: ["Services"],
    children: []
  },
  Voltage: {
    identity: h,
    selector: f,
    parents: ["VoltageLevel"],
    children: []
  },
  VoltageLevel: {
    identity: w,
    selector: S,
    parents: ["Substation"],
    children: [...at, "Voltage", "Bay", "Function"]
  }
};
function H(t, e) {
  return typeof e != "string" ? T : Ii(t) ? $[t].selector(t, e) : t;
}
function I(t) {
  if (t === null) return NaN;
  if (t.closest("Private")) return NaN;
  const e = t.tagName;
  return Ii(e) ? $[e].identity(t) : NaN;
}
ai((t) => (e) => {
  Object.keys(t).length ? e.setValue(t) : e.setValue("");
});
const qt = {
  normalizedString: "([ -~]|[]|[ -퟿]|[-�])*",
  decimal: "[+\\-]?[0-9]+(([.][0-9]*)?|([.][0-9]+))"
};
function _i(t, e) {
  return typeof t == "string" && typeof e == "string" ? t.localeCompare(e) : typeof t == "object" && typeof e == "string" ? (t.getAttribute("name") ?? "").localeCompare(e) : typeof t == "string" && typeof e == "object" ? t.localeCompare(e.getAttribute("name")) : typeof t == "object" && typeof e == "object" ? (t.getAttribute("name") ?? "").localeCompare(
    e.getAttribute("name") ?? ""
  ) : 0;
}
function F(...t) {
  return t.reduce(
    (e, i) => e.flatMap((n) => i.map((r) => [n, r].flat())),
    [[]]
  );
}
function Di(t, e = /* @__PURE__ */ new WeakSet()) {
  if (e.has(t)) return 1 / 0;
  switch (t?.constructor) {
    case Object:
    case Array:
      return e.add(t), 1 + Math.max(
        -1,
        ...Object.values(t).map((i) => Di(i, e))
      );
    default:
      return 0;
  }
}
function wt(t) {
  return !t.closest("Private");
}
const Br = 99;
Array(Br).fill(1).map((t, e) => `${e + 1}`);
function Pe(t, e = "user", i) {
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
class Re extends V {
  constructor() {
    super(...arguments), this.left = !1, this.graphic = "control";
  }
  render() {
    const e = {
      "mdc-deprecated-list-item__graphic": this.left,
      "mdc-deprecated-list-item__meta": !this.left
    }, i = this.renderText(), n = this.graphic && this.graphic !== "control" && !this.left ? this.renderGraphic() : d``, r = this.hasMeta && this.left ? this.renderMeta() : d``, a = this.renderRipple();
    return d`
      ${a}
      ${n}
      ${this.left ? "" : i}
      <span class=${We(e)}>
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
  j("slot")
], Re.prototype, "slotElement", void 0);
u([
  j("mwc-checkbox")
], Re.prototype, "checkboxElement", void 0);
u([
  l({ type: Boolean })
], Re.prototype, "left", void 0);
u([
  l({ type: String, reflect: !0 })
], Re.prototype, "graphic", void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const Gr = ce`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-deprecated-list-item__meta{height:40px;width:40px}`;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let we = class extends Re {
};
we.styles = [bi, Gr];
we = u([
  Z("mwc-check-list-item")
], we);
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
var g = {
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
}, U = /* @__PURE__ */ new Set();
U.add(g.BACKSPACE);
U.add(g.ENTER);
U.add(g.SPACEBAR);
U.add(g.PAGE_UP);
U.add(g.PAGE_DOWN);
U.add(g.END);
U.add(g.HOME);
U.add(g.ARROW_LEFT);
U.add(g.ARROW_UP);
U.add(g.ARROW_RIGHT);
U.add(g.ARROW_DOWN);
U.add(g.DELETE);
U.add(g.ESCAPE);
U.add(g.TAB);
var X = {
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
}, W = /* @__PURE__ */ new Map();
W.set(X.BACKSPACE, g.BACKSPACE);
W.set(X.ENTER, g.ENTER);
W.set(X.SPACEBAR, g.SPACEBAR);
W.set(X.PAGE_UP, g.PAGE_UP);
W.set(X.PAGE_DOWN, g.PAGE_DOWN);
W.set(X.END, g.END);
W.set(X.HOME, g.HOME);
W.set(X.ARROW_LEFT, g.ARROW_LEFT);
W.set(X.ARROW_UP, g.ARROW_UP);
W.set(X.ARROW_RIGHT, g.ARROW_RIGHT);
W.set(X.ARROW_DOWN, g.ARROW_DOWN);
W.set(X.DELETE, g.DELETE);
W.set(X.ESCAPE, g.ESCAPE);
W.set(X.TAB, g.TAB);
var be = /* @__PURE__ */ new Set();
be.add(g.PAGE_UP);
be.add(g.PAGE_DOWN);
be.add(g.END);
be.add(g.HOME);
be.add(g.ARROW_LEFT);
be.add(g.ARROW_UP);
be.add(g.ARROW_RIGHT);
be.add(g.ARROW_DOWN);
function le(t) {
  var e = t.key;
  if (U.has(e))
    return e;
  var i = W.get(t.keyCode);
  return i || g.UNKNOWN;
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
var pe, oe, _ = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
pe = {}, pe["" + _.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", pe["" + _.LIST_ITEM_CLASS] = "mdc-list-item", pe["" + _.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", pe["" + _.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", pe["" + _.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", pe["" + _.ROOT] = "mdc-list";
var xe = (oe = {}, oe["" + _.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", oe["" + _.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", oe["" + _.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", oe["" + _.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", oe["" + _.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", oe["" + _.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", oe["" + _.ROOT] = "mdc-deprecated-list", oe), Fe = {
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
    .` + _.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + _.LIST_ITEM_CLASS + ` a,
    .` + xe[_.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + xe[_.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + _.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + _.LIST_ITEM_CLASS + ` a,
    .` + _.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + _.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + xe[_.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + xe[_.LIST_ITEM_CLASS] + ` a,
    .` + xe[_.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + xe[_.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, K = {
  UNSET_INDEX: -1,
  TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const gt = (t, e) => t - e, qr = (t, e) => {
  const i = Array.from(t), n = Array.from(e), r = { added: [], removed: [] }, a = i.sort(gt), o = n.sort(gt);
  let s = 0, p = 0;
  for (; s < a.length || p < o.length; ) {
    const c = a[s], m = o[p];
    if (c === m) {
      s++, p++;
      continue;
    }
    if (c !== void 0 && (m === void 0 || c < m)) {
      r.removed.push(c), s++;
      continue;
    }
    if (m !== void 0 && (c === void 0 || m < c)) {
      r.added.push(m), p++;
      continue;
    }
  }
  return r;
}, jr = ["input", "button", "textarea", "select"];
function De(t) {
  return t instanceof Set;
}
const ot = (t) => {
  const e = t === K.UNSET_INDEX ? /* @__PURE__ */ new Set() : t;
  return De(e) ? new Set(e) : /* @__PURE__ */ new Set([e]);
};
class At extends hi {
  constructor(e) {
    super(Object.assign(Object.assign({}, At.defaultAdapter), e)), this.isMulti_ = !1, this.wrapFocus_ = !1, this.isVertical_ = !0, this.selectedIndex_ = K.UNSET_INDEX, this.focusedItemIndex_ = K.UNSET_INDEX, this.useActivatedClass_ = !1, this.ariaCurrentAttrValue_ = null;
  }
  static get strings() {
    return Fe;
  }
  static get numbers() {
    return K;
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
      if (!De(i)) {
        const n = i === K.UNSET_INDEX;
        this.selectedIndex_ = n ? /* @__PURE__ */ new Set() : /* @__PURE__ */ new Set([i]);
      }
    } else if (De(i))
      if (i.size) {
        const n = Array.from(i).sort(gt);
        this.selectedIndex_ = n[0];
      } else
        this.selectedIndex_ = K.UNSET_INDEX;
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
    this.isIndexValid_(e) && (this.isMulti_ ? this.setMultiSelectionAtIndex_(ot(e)) : this.setSingleSelectionAtIndex_(e));
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
    const r = le(e) === "ArrowLeft", a = le(e) === "ArrowUp", o = le(e) === "ArrowRight", s = le(e) === "ArrowDown", p = le(e) === "Home", c = le(e) === "End", m = le(e) === "Enter", y = le(e) === "Spacebar";
    if (this.adapter.isRootFocused()) {
      a || c ? (e.preventDefault(), this.focusLastElement()) : (s || p) && (e.preventDefault(), this.focusFirstElement());
      return;
    }
    let b = this.adapter.getFocusedElementIndex();
    if (b === -1 && (b = n, b < 0))
      return;
    let v;
    if (this.isVertical_ && s || !this.isVertical_ && o)
      this.preventDefaultEvent(e), v = this.focusNextElement(b);
    else if (this.isVertical_ && a || !this.isVertical_ && r)
      this.preventDefaultEvent(e), v = this.focusPrevElement(b);
    else if (p)
      this.preventDefaultEvent(e), v = this.focusFirstElement();
    else if (c)
      this.preventDefaultEvent(e), v = this.focusLastElement();
    else if ((m || y) && i) {
      const A = e.target;
      if (A && A.tagName === "A" && m)
        return;
      this.preventDefaultEvent(e), this.setSelectedIndexOnAction_(b, !0);
    }
    this.focusedItemIndex_ = b, v !== void 0 && (this.setTabindexAtIndex_(v), this.focusedItemIndex_ = v);
  }
  /**
   * Click handler for the list.
   */
  handleSingleSelection(e, i, n) {
    e !== K.UNSET_INDEX && (this.setSelectedIndexOnAction_(e, i, n), this.setTabindexAtIndex_(e), this.focusedItemIndex_ = e);
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
    jr.indexOf(n) === -1 && e.preventDefault();
  }
  setSingleSelectionAtIndex_(e, i = !0) {
    this.selectedIndex_ !== e && (this.selectedIndex_ !== K.UNSET_INDEX && (this.adapter.setSelectedStateForElementIndex(this.selectedIndex_, !1), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(this.selectedIndex_, !1)), i && this.adapter.setSelectedStateForElementIndex(e, !0), this.useActivatedClass_ && this.adapter.setActivatedStateForElementIndex(e, !0), this.setAriaForSingleSelectionAtIndex_(e), this.selectedIndex_ = e, this.adapter.notifySelected(e));
  }
  setMultiSelectionAtIndex_(e, i = !0) {
    const n = ot(this.selectedIndex_), r = qr(n, e);
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
    this.selectedIndex_ === K.UNSET_INDEX && (this.ariaCurrentAttrValue_ = this.adapter.getAttributeForElementIndex(e, Fe.ARIA_CURRENT));
    const i = this.ariaCurrentAttrValue_ !== null, n = i ? Fe.ARIA_CURRENT : Fe.ARIA_SELECTED;
    this.selectedIndex_ !== K.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex_, n, "false");
    const r = i ? this.ariaCurrentAttrValue_ : "true";
    this.adapter.setAttributeForElementIndex(e, n, r);
  }
  setTabindexAtIndex_(e) {
    this.focusedItemIndex_ === K.UNSET_INDEX && e !== 0 ? this.adapter.setTabIndexForElementIndex(0, -1) : this.focusedItemIndex_ >= 0 && this.focusedItemIndex_ !== e && this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_, -1), this.adapter.setTabIndexForElementIndex(e, 0);
  }
  setTabindexToFirstSelectedItem_() {
    let e = 0;
    typeof this.selectedIndex_ == "number" && this.selectedIndex_ !== K.UNSET_INDEX ? e = this.selectedIndex_ : De(this.selectedIndex_) && this.selectedIndex_.size > 0 && (e = Math.min(...this.selectedIndex_)), this.setTabindexAtIndex_(e);
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
      return e === K.UNSET_INDEX || this.isIndexInRange_(e);
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
    this.isMulti_ && (r = /* @__PURE__ */ new Set([e])), this.isIndexValid_(r) && (this.isMulti_ ? this.toggleMultiAtIndex(e, n, i) : i || n ? this.setSingleSelectionAtIndex_(e, i) : this.selectedIndex_ === e && this.setSingleSelectionAtIndex_(K.UNSET_INDEX), i && this.adapter.notifyAction(e));
  }
  toggleMultiAtIndex(e, i, n = !0) {
    let r = !1;
    i === void 0 ? r = !this.adapter.getSelectedStateForElementIndex(e) : r = i;
    const a = ot(this.selectedIndex_);
    r ? a.add(e) : a.delete(e), this.setMultiSelectionAtIndex_(a, n);
  }
}
function Ur(t, e = 50) {
  let i;
  return function(n = !0) {
    clearTimeout(i), i = setTimeout(() => {
      t(n);
    }, e);
  };
}
const Be = (t) => t.hasAttribute("mwc-list-item");
function Wr() {
  const t = this.itemsReadyResolver;
  this.itemsReady = new Promise((e) => this.itemsReadyResolver = e), t();
}
class Q extends St {
  constructor() {
    super(), this.mdcAdapter = null, this.mdcFoundationClass = At, this.activatable = !1, this.multi = !1, this.wrapFocus = !1, this.itemRoles = null, this.innerRole = null, this.innerAriaLabel = null, this.rootTabbable = !1, this.previousTabindex = null, this.noninteractive = !1, this.itemsReadyResolver = () => {
    }, this.itemsReady = Promise.resolve([]), this.items_ = [];
    const e = Ur(this.layout.bind(this));
    this.debouncedLayout = (i = !0) => {
      Wr.call(this), e(i);
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
      Be(o) && (n.push(o), o._managingList = this), o.hasAttribute("divider") && !o.hasAttribute("role") && o.setAttribute("role", "separator");
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
    if (!De(e))
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
      const i = this.getIndexOfTarget(e), n = e.target, r = Be(n);
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
      if (An(r) && Be(r) && (a = i.indexOf(r)), a !== -1)
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
      isFocusInsideList: () => In(this),
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
    const e = mi();
    if (!e.length)
      return -1;
    for (let i = e.length - 1; i >= 0; i--) {
      const n = e[i];
      if (Be(n))
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
  l({ type: String })
], Q.prototype, "emptyMessage", void 0);
u([
  j(".mdc-deprecated-list")
], Q.prototype, "mdcRoot", void 0);
u([
  ri("", !0, "*")
], Q.prototype, "assignedElements", void 0);
u([
  ri("", !0, '[tabindex="0"]')
], Q.prototype, "tabbableElements", void 0);
u([
  l({ type: Boolean }),
  fe(function(t) {
    this.mdcFoundation && this.mdcFoundation.setUseActivatedClass(t);
  })
], Q.prototype, "activatable", void 0);
u([
  l({ type: Boolean }),
  fe(function(t, e) {
    this.mdcFoundation && this.mdcFoundation.setMulti(t), e !== void 0 && this.layout();
  })
], Q.prototype, "multi", void 0);
u([
  l({ type: Boolean }),
  fe(function(t) {
    this.mdcFoundation && this.mdcFoundation.setWrapFocus(t);
  })
], Q.prototype, "wrapFocus", void 0);
u([
  l({ type: String }),
  fe(function(t, e) {
    e !== void 0 && this.updateItems();
  })
], Q.prototype, "itemRoles", void 0);
u([
  l({ type: String })
], Q.prototype, "innerRole", void 0);
u([
  l({ type: String })
], Q.prototype, "innerAriaLabel", void 0);
u([
  l({ type: Boolean })
], Q.prototype, "rootTabbable", void 0);
u([
  l({ type: Boolean, reflect: !0 }),
  fe(function(t) {
    var e, i;
    if (t) {
      const n = (i = (e = this.tabbableElements) === null || e === void 0 ? void 0 : e[0]) !== null && i !== void 0 ? i : null;
      this.previousTabindex = n, n && n.setAttribute("tabindex", "-1");
    } else !t && this.previousTabindex && (this.previousTabindex.setAttribute("tabindex", "0"), this.previousTabindex = null);
  })
], Q.prototype, "noninteractive", void 0);
var Kr = Object.defineProperty, Zr = Object.getOwnPropertyDescriptor, Se = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Zr(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (n ? o(e, i, r) : o(r)) || r);
  return n && r && Kr(e, i, r), r;
};
function yt(t) {
  return !t.closest("filtered-list") || !t.parentElement || t.parentElement instanceof ne ? t : yt(t.parentElement);
}
function Xr(t, e) {
  const i = t.innerText + `
`, n = Array.from(t.children).map((s) => s.innerText).join(`
`), r = t.value, a = (i + n + r).toUpperCase(), o = e.toUpperCase().replace(/[.+^${}()|[\]\\]/g, "\\$&").trim().split(/\s+/g);
  o.length === 1 && o[0] === "" || o.every((s) => new RegExp(
    `*${s}*`.replace(/\*/g, ".*").replace(/\?/g, ".{1}"),
    "i"
  ).test(a)) ? yt(t).classList.remove("hidden") : yt(t).classList.add("hidden");
}
let ne = class extends Q {
  constructor() {
    super(), this.disableCheckAll = !1, this.addEventListener("selected", () => {
      this.requestUpdate();
    });
  }
  get existCheckListItem() {
    return this.items.some((t) => t instanceof we);
  }
  get isAllSelected() {
    return this.items.filter((t) => !t.disabled).filter((t) => t instanceof we).every((t) => t.selected);
  }
  get isSomeSelected() {
    return this.items.filter((t) => !t.disabled).filter((t) => t instanceof we).some((t) => t.selected);
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
      (t) => Xr(t, this.searchField.value)
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
        <abbr title="${this.searchFieldLabel ?? x("filter")}"
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
ne.styles = ce`
    ${Qi(rn.styles)}

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
Se([
  l({ type: String })
], ne.prototype, "searchFieldLabel", 2);
Se([
  l({ type: Boolean })
], ne.prototype, "disableCheckAll", 2);
Se([
  k()
], ne.prototype, "existCheckListItem", 1);
Se([
  k()
], ne.prototype, "isAllSelected", 1);
Se([
  k()
], ne.prototype, "isSomeSelected", 1);
Se([
  j("mwc-textfield")
], ne.prototype, "searchField", 2);
ne = Se([
  Z("filtered-list")
], ne);
function Yr(t) {
  if (!t.ownerDocument.documentElement) return [];
  const e = t.ownerDocument.documentElement, i = (e.getAttribute("version") ?? "2003") + (e.getAttribute("revision") ?? "") + (e.getAttribute("release") ?? "");
  return i === "2003" ? Ni : i === "2007B" ? Li : Qr;
}
const Ni = [
  "IP",
  "IP-SUBNET",
  "IP-GATEWAY",
  "OSI-TSEL",
  "OSI-SSEL",
  "OSI-PSEL",
  "OSI-AP-Title",
  "OSI-AP-Invoke",
  "OSI-AE-Qualifier",
  "OSI-AE-Invoke",
  "OSI-NSAP",
  "VLAN-ID",
  "VLAN-PRIORITY"
], Li = [
  ...Ni,
  "SNTP-Port",
  "MMS-Port",
  "DNSName",
  "UDP-Port",
  "TCP-Port",
  "C37-118-IP-Port"
], Qr = [
  ...Li,
  "IPv6",
  "IPv6-SUBNET",
  "IPv6-GATEWAY",
  "IPv6FlowLabel",
  "IPv6ClassOfTraffic",
  "IPv6-IGMPv3Src",
  "IP-IGMPv3Sr",
  "IP-ClassOfTraffic"
], C = {
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
}, Ti = {
  IP: C.IP,
  "IP-SUBNET": C.IP,
  "IP-GATEWAY": C.IP,
  "OSI-TSEL": C.OSI,
  "OSI-SSEL": C.OSI,
  "OSI-PSEL": C.OSI,
  "OSI-AP-Title": C.OSIAPi,
  "OSI-AP-Invoke": C.OSId,
  "OSI-AE-Qualifier": C.OSId,
  "OSI-AE-Invoke": C.OSId,
  "MAC-Address": C.MAC,
  APPID: C.APPID,
  "VLAN-ID": C.VLANid,
  "VLAN-PRIORITY": C.VLANp,
  "OSI-NSAP": C.OSI,
  "SNTP-Port": C.port,
  "MMS-Port": C.port,
  DNSName: "[^ ]*",
  "UDP-Port": C.port,
  "TCP-Port": C.port,
  "C37-118-IP-Port": "102[5-9]|10[3-9][0-9]|1[1-9][0-9][0-9]|[2-9][0-9]{3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]",
  IPv6: C.IPv6,
  "IPv6-SUBNET": C.IPv6sub,
  "IPv6-GATEWAY": C.IPv6,
  IPv6FlowLabel: "[0-9a-fA-F]{1,5}",
  IPv6ClassOfTraffic: "[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]",
  "IPv6-IGMPv3Src": C.IPv6,
  "IP-IGMPv3Sr": C.IP,
  "IP-ClassOfTraffic": C.OSI
}, Pi = {
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
}, Jr = {
  "OSI-TSEL": 8,
  "OSI-SSEL": 16,
  "OSI-PSEL": 16,
  "OSI-AP-Invoke": 5,
  "OSI-AE-Qualifier": 5,
  "OSI-AE-Invoke": 5,
  "OSI-NSAP": 40,
  "IP-ClassOfTraffic": 2
}, ea = 1154490630655, jt = 1154490630144, ta = 1154490827263, Ut = 1154490826752;
function Ri(t) {
  return (0 + t.toString(16).toUpperCase()).match(/.{1,2}/g)?.join("-");
}
const ia = Array(ea - jt).fill(1).map((t, e) => Ri(jt + e)), na = Array(ta - Ut).fill(1).map((t, e) => Ri(Ut + e));
function Wt(t, e) {
  const i = new Set(
    Array.from(
      t.querySelectorAll(`${e} > Address > P[type="MAC-Address"]`)
    ).map((r) => r.textContent)
  ), n = e === "SMV" ? na : ia;
  return () => {
    const r = n.find((a) => !i.has(a));
    return r && i.add(r), r ?? "";
  };
}
const ra = 16383, Kt = 0, aa = 49151, Zt = 32768, oa = 32767, Xt = 16384, sa = Array(ra - Kt).fill(1).map((t, e) => (Kt + e).toString(16).toUpperCase().padStart(4, "0")), ca = Array(aa - Zt).fill(1).map(
  (t, e) => (Zt + e).toString(16).toUpperCase().padStart(4, "0")
), da = Array(oa - Xt).fill(1).map((t, e) => (Xt + e).toString(16).toUpperCase().padStart(4, "0"));
function Yt(t, e, i = !1) {
  const n = new Set(
    Array.from(
      t.querySelectorAll(`${e} > Address > P[type="APPID"]`)
    ).map((a) => a.textContent)
  ), r = e === "SMV" ? da : i ? ca : sa;
  return () => {
    const a = r.find((o) => !n.has(o));
    return a && n.add(a), a ?? "";
  };
}
function la(t, e) {
  return t.connected !== e.connected ? e.connected ? -1 : 1 : 0;
}
function pa(t, e, i) {
  const n = [], r = t.querySelector(
    `IED[name="${e.getAttribute("iedName")}"]`
  );
  return Array.from(r?.querySelectorAll("SampledValueControl") ?? []).filter((a) => {
    const o = I(a);
    return i.unconnectedSampledValueControl.has(o) ? (i.unconnectedSampledValueControl.delete(o), !0) : !1;
  }).forEach((a) => {
    const o = a.getAttribute("name"), s = a.closest("LDevice")?.getAttribute("inst") ?? null, p = D(e.ownerDocument, "SMV", {
      cbName: o,
      ldInst: s
    });
    n.push({ new: { parent: e, element: p } });
    const c = D(e.ownerDocument, "Address", {});
    n.push({ new: { parent: p, element: c } });
    const m = D(e.ownerDocument, "P", {
      type: "MAC-Address"
    });
    m.textContent = i.macGeneratorSmv(), n.push({ new: { parent: c, element: m } });
    const y = D(e.ownerDocument, "P", {
      type: "APPID"
    });
    y.textContent = i.appidGeneratorSmv(), n.push({ new: { parent: c, element: y } });
    const b = D(e.ownerDocument, "P", {
      type: "VLAN-ID"
    });
    b.textContent = "000", n.push({ new: { parent: c, element: b } });
    const v = D(e.ownerDocument, "P", {
      type: "VLAN-PRIORITY"
    });
    v.textContent = "4", n.push({ new: { parent: c, element: v } });
  }), n;
}
function ua(t, e, i) {
  const n = [], r = t.querySelector(
    `IED[name="${e.getAttribute("iedName")}"]`
  );
  return Array.from(r?.querySelectorAll("GSEControl") ?? []).filter((a) => {
    const o = I(a);
    return i.unconnectedGseControl.has(o) ? (i.unconnectedGseControl.delete(o), !0) : !1;
  }).forEach((a) => {
    const o = a.getAttribute("name"), s = a.closest("LDevice")?.getAttribute("inst") ?? null, p = D(e.ownerDocument, "GSE", {
      cbName: o,
      ldInst: s
    });
    n.push({ new: { parent: e, element: p } });
    const c = D(e.ownerDocument, "Address", {});
    n.push({ new: { parent: p, element: c } });
    const m = D(e.ownerDocument, "P", {
      type: "MAC-Address"
    });
    m.textContent = i.macGeneratorGse(), n.push({ new: { parent: c, element: m } });
    const y = D(e.ownerDocument, "P", {
      type: "APPID"
    });
    y.textContent = i.appidGeneratorGse(), n.push({ new: { parent: c, element: y } });
    const b = D(e.ownerDocument, "P", {
      type: "VLAN-ID"
    });
    b.textContent = "000", n.push({ new: { parent: c, element: b } });
    const v = D(e.ownerDocument, "P", {
      type: "VLAN-PRIORITY"
    });
    v.textContent = "4", n.push({ new: { parent: c, element: v } });
    const A = D(e.ownerDocument, "MinTime", {
      unit: "s",
      multiplier: "m"
    });
    A.textContent = "10", n.push({ new: { parent: p, element: A } });
    const P = D(e.ownerDocument, "MaxTime", {
      unit: "s",
      multiplier: "m"
    });
    P.textContent = "10000", n.push({ new: { parent: p, element: P } });
  }), n;
}
function ma(t) {
  const i = Array.from(t.querySelectorAll("GSEControl")).filter((r) => {
    const a = r.closest("IED")?.getAttribute("name"), o = r.closest("LDevice")?.getAttribute("inst"), s = r.getAttribute("name");
    return !t.querySelector(
      `ConnectedAP[iedName="${a}"] > GSE[ldInst="${o}"][cbName="${s}"]`
    );
  }).map((r) => I(r));
  return new Set(i);
}
function ha(t) {
  const i = Array.from(t.querySelectorAll("SampledValueControl")).filter((r) => {
    const a = r.closest("IED")?.getAttribute("name"), o = r.closest("LDevice")?.getAttribute("inst"), s = r.getAttribute("name");
    return !t.querySelector(
      `ConnectedAP[iedName="${a}"] > SMV[ldInst="${o}"][cbName="${s}"]`
    );
  }).map((r) => I(r));
  return new Set(i);
}
function fa(t) {
  return (e, i, n) => {
    const r = t.ownerDocument, a = Wt(r, "SMV"), o = Yt(r, "SMV"), s = Wt(r, "GSE"), p = Yt(r, "GSE"), c = ma(r), m = ha(r);
    return n ? n.selected.map((v) => v.value).map((v) => {
      const [A, P] = v.split(">"), N = [], R = D(t.ownerDocument, "ConnectedAP", {
        iedName: A,
        apName: P
      });
      return N.push({ new: { parent: t, element: R } }), N.push(
        ...pa(r, R, {
          macGeneratorSmv: a,
          appidGeneratorSmv: o,
          unconnectedSampledValueControl: m
        })
      ), N.push(
        ...ua(r, R, {
          macGeneratorGse: s,
          appidGeneratorGse: p,
          unconnectedGseControl: c
        })
      ), { title: "Added ConnectedAP", actions: N };
    }) : [];
  };
}
function ba(t) {
  const e = t.closest("IED")?.getAttribute("name"), i = t.getAttribute("name"), n = t.ownerDocument.querySelector(
    `ConnectedAP[iedName="${e}"][apName="${i}"]`
  );
  return (n && wt(n)) ?? !1;
}
function ga(t) {
  return d`<mwc-formfield
    label="${x("connectedap.wizard.addschemainsttype")}"
    ><mwc-checkbox
      id="typeRestriction"
      ?checked=${Aa(t)}
    ></mwc-checkbox>
  </mwc-formfield>`;
}
function ya(t, e) {
  return d`<wizard-textfield
    required
    label="${e}"
    pattern="${te(Ti[e])}"
    ?nullable=${Pi[e]}
    .maybeValue=${t.querySelector(`:scope > Address > P[type="${e}"]`)?.innerHTML ?? null}
    maxLength="${te(Jr[e])}"
  ></wizard-textfield>`;
}
function va(t) {
  const e = t.ownerDocument, i = Array.from(e.querySelectorAll(":root > IED")).sort(_i).flatMap(
    (n) => Array.from(n.querySelectorAll(":root > IED > AccessPoint"))
  ).map((n) => ({
    element: n,
    connected: ba(n)
  })).sort(la);
  return [
    {
      title: x("wizard.title.add", { tagName: "ConnectedAP" }),
      primary: {
        icon: "save",
        label: x("save"),
        action: fa(t)
      },
      content: [
        d` <filtered-list id="apList" multi
          >${i.map((n) => {
          const r = I(n.element);
          return d`<mwc-check-list-item
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
function Sa(t, e) {
  return Array.from(t.querySelectorAll("Address > P")).every(
    (i) => e.querySelector(`Address > P[type="${i.getAttribute("type")}"]`)?.isEqualNode(i)
  );
}
function xa(t, e, i) {
  const n = D(e.ownerDocument, "Address", {});
  return t.filter((r) => z(r) !== null).forEach((r) => {
    const a = r.label, o = D(e.ownerDocument, "P", { type: a });
    i && o.setAttributeNS(
      "http://www.w3.org/2001/XMLSchema-instance",
      "xsi:type",
      "tP_" + a
    ), o.textContent = z(r), n.appendChild(o);
  }), n;
}
function wa(t) {
  return (e, i) => {
    const n = i.shadowRoot?.querySelector("#typeRestriction")?.checked ?? !1, r = xa(e, t, n), a = t.querySelector("Address"), o = {
      actions: [],
      title: x("connectedap.action.addaddress", {
        iedName: t.getAttribute("iedName") ?? "",
        apName: t.getAttribute("apName") ?? ""
      })
    };
    return a !== null && !Sa(a, r) ? (o.actions.push({
      old: {
        parent: t,
        element: a
      }
    }), o.actions.push({
      new: {
        parent: t,
        element: r
      }
    })) : a === null && o.actions.push({
      new: {
        parent: t,
        element: r
      }
    }), o.actions.length ? [o] : [];
  };
}
function Aa(t) {
  return Array.from(t.querySelectorAll("Address > P")).filter((e) => wt(e)).some((e) => e.getAttribute("xsi:type"));
}
function ka(t) {
  return [
    {
      title: x("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        icon: "save",
        label: x("save"),
        action: wa(t)
      },
      content: [
        d`${ga(t)}
        ${Yr(t).map(
          (e) => d`${ya(t, e)}`
        )}`
      ]
    }
  ];
}
var Ia = Object.defineProperty, Ca = Object.getOwnPropertyDescriptor, kt = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Ca(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (n ? o(e, i, r) : o(r)) || r);
  return n && r && Ia(e, i, r), r;
};
let qe = class extends ae {
  get apName() {
    return this.element.getAttribute("apName") ?? "UNDEFINED";
  }
  openEditWizard() {
    this.dispatchEvent(Ae(ka(this.element)));
  }
  remove() {
    this.element && this.dispatchEvent(
      Pe({
        old: {
          parent: this.element.parentElement,
          element: this.element,
          reference: this.element.nextSibling
        }
      })
    );
  }
  render() {
    return d`
      <action-icon label="${this.apName}" icon="settings_input_hdmi"
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
kt([
  l({ attribute: !1 })
], qe.prototype, "element", 2);
kt([
  l({ type: String })
], qe.prototype, "apName", 1);
qe = kt([
  Z("connectedap-editor")
], qe);
d`<svg
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
const ze = {
  action: E`<path d="M0 0h24v24H0z" fill="none"></path><path d="M13 3c-4.97 0-9
  4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7
  7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0
  9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" fill="currentColor"></path>`,
  dAIcon: E`<path fill="currentColor" d="m4.2 0c-2.31 0-4.2 1.89-4.2 4.2v11.6c0 2.31 1.89 4.2 4.2 4.2h18.1c2.31 0 4.2-1.89 4.2-4.2v-11.6c0-2.31-1.89-4.2-4.2-4.2zm0 1.89h18.1c1.29 0 2.3 1.01 2.3 2.3v11.6c0 1.29-1.01 2.31-2.3 2.31h-18.1c-1.29 0-2.3-1.01-2.3-2.31v-11.6c0-1.29 1.01-2.3 2.3-2.3z"/><path fill="currentColor" d="m12.5 9.94q0 1.55-0.509 2.71-0.503 1.15-1.43 1.76-0.923 0.611-2.12 0.611h-3.37v-10h3.02q2.11 0 3.26 1.28 1.15 1.27 1.15 3.65zm-1.76 0q0-1.61-0.698-2.46-0.698-0.852-1.99-0.852h-1.24v6.77h1.48q1.12 0 1.79-0.931 0.663-0.931 0.663-2.53z"/><path fill="currentColor" d="m19.7 15-0.74-2.56h-3.18l-0.74 2.56h-1.75l3.04-10h2.06l3.03 10zm-1.13-4.13-0.823-2.88-0.379-1.46q-0.0947 0.412-0.178 0.739-0.0829 0.327-1.02 3.59z"/>`,
  dOIcon: E`<path fill="none" stroke="currentColor" stroke-width="1.89" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path d="m12.1 9.94q0 1.55-0.509 2.71-0.503 1.15-1.43 1.76-0.923 0.611-2.12 0.611h-3.37v-10h3.02q2.11 0 3.26 1.28 1.15 1.27 1.15 3.65zm-1.76 0q0-1.61-0.698-2.46-0.698-0.852-1.99-0.852h-1.24v6.77h1.48q1.12 0 1.79-0.931 0.663-0.931 0.663-2.53z"/><path d="m21.6 9.97q0 1.56-0.515 2.75-0.515 1.19-1.47 1.82-0.959 0.625-2.24 0.625-1.97 0-3.08-1.39-1.11-1.39-1.11-3.81 0-2.41 1.11-3.76t3.1-1.35 3.1 1.36q1.12 1.36 1.12 3.74zm-1.78 0q0-1.62-0.639-2.54-0.639-0.923-1.79-0.923-1.17 0-1.81 0.916-0.639 0.909-0.639 2.54 0 1.65 0.651 2.6 0.657 0.945 1.79 0.945 1.17 0 1.81-0.923 0.639-0.923 0.639-2.62z"/>`,
  enumIcon: E`<path fill="none" stroke="currentColor" stroke-width="1.89" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path d="m5.37 15v-10h6.56v1.62h-4.81v2.51h4.45v1.62h-4.45v2.64h5.06v1.62z"/><path d="m18.5 15-3.63-7.71q0.107 1.12 0.107 1.8v5.9h-1.55v-10h1.99l3.69 7.77q-0.107-1.07-0.107-1.95v-5.82h1.55v10z"/>`,
  info: E`<path d="M0 0h24v24H0z" fill="none"></path><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"></path>`,
  warning: E`<path d="M0 0h24v24H0z" fill="none"></path><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" fill="currentColor"></path>`,
  error: E`<path d="M0 0h24v24H0V0z" fill="none"></path><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1v5.8z" fill="currentColor"></path><path d="M11 7h2v7h-2z" fill="currentColor"></path><circle cx="12" cy="16" r="1" fill="currentColor"></circle>`,
  gooseIcon: E`<path fill="currentColor" d="M11,7H15V9H11V15H13V11H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
  lNIcon: E`<path stroke="currentColor" stroke-width="1.89" fill="none" d="m4.2 0.945h18.1c1.8 0 3.25 1.45 3.25 3.25v11.6c0 1.8-1.45 3.25-3.25 3.25h-18.1c-1.8 0-3.25-1.45-3.25-3.25v-11.6c0-1.8 1.45-3.25 3.25-3.25z"/><path fill="currentColor" d="m5.71 15v-10h1.75v8.39h4.47v1.62z"/><path fill="currentColor" d="m18.2 15-3.63-7.71q0.107 1.12 0.107 1.8v5.9h-1.55v-10h1.99l3.69 7.77q-0.107-1.07-0.107-1.95v-5.82h1.55v10z"/>`,
  logIcon: E`<path fill="currentColor" d="M9,7H11V15H15V17H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
  reportIcon: E`<path fill="currentColor" d="M9,7H13A2,2 0 0,1 15,9V11C15,11.84 14.5,12.55 13.76,12.85L15,17H13L11.8,13H11V17H9V7M11,9V11H13V9H11M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,16.41 7.58,20 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`,
  smvIcon: E`<path fill="currentColor" d="M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />`
};
E`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${ze.gooseIcon}</svg>`;
E`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${ze.reportIcon}</svg>`;
E`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${ze.smvIcon}</svg>`;
E`<svg style="width:24px;height:24px" viewBox="0 0 24 24">${ze.logIcon}</svg>`;
E`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6A2,2 0 0,0 4,6V9H6V6H18V18H6V15H4V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18Z" />
</svg>`;
E`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M21,14V4H3V14H21M21,2A2,2 0 0,1 23,4V16A2,2 0 0,1 21,18H14L16,21V22H8V21L10,18H3C1.89,18 1,17.1 1,16V4C1,2.89 1.89,2 3,2H21M4,5H15V10H4V5M16,5H20V7H16V5M20,8V13H16V8H20M4,11H9V13H4V11M10,11H15V13H10V11Z" />
</svg>`;
E`<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M4,1C2.89,1 2,1.89 2,3V7C2,8.11 2.89,9 4,9H1V11H13V9H10C11.11,9 12,8.11 12,7V3C12,1.89 11.11,1 10,1H4M4,3H10V7H4V3M14,13C12.89,13 12,13.89 12,15V19C12,20.11 12.89,21 14,21H11V23H23V21H20C21.11,21 22,20.11 22,19V15C22,13.89 21.11,13 20,13H14M3.88,13.46L2.46,14.88L4.59,17L2.46,19.12L3.88,20.54L6,18.41L8.12,20.54L9.54,19.12L7.41,17L9.54,14.88L8.12,13.46L6,15.59L3.88,13.46M14,15H20V19H14V15Z" />
</svg>`;
const Qt = {
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
Ge("dAIcon"), Ge("dOIcon"), Ge("enumIcon"), Ge("lNIcon");
function Ge(t) {
  if (t === "reset") return d``;
  const e = Qt[t]?.height ?? 24, i = Qt[t]?.width ?? 24;
  return d`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${e}"
    viewBox="0 0 ${i} ${e}"
    width="${i}"
  >
    ${ze[t]}
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
    d="M20.41,3.59c-.78-.78-2.05-.78-2.83,0-.59.59-.73,1.47-.43,2.19l-1.49,1.49c-1.02-.79-2.29-1.27-3.67-1.27-3.31,0-6,2.69-6,6,0,1.38.48,2.66,1.27,3.67l-1.49,1.49c-.73-.31-1.6-.17-2.19.43-.78.78-.78,2.05,0,2.83.78.78,2.05.78,2.83,0,.59-.59.73-1.47.43-2.19l1.49-1.49c1.02.79,2.29,1.27,3.67,1.27,3.31,0,6-2.69,6-6,0-1.38-.48-2.66-1.27-3.67l1.49-1.49c.73.31,1.6.17,2.19-.43.78-.78.78-2.05,0-2.83ZM12,16c-2.21,0-4-1.79-4-4s1.79-4,4-4,4,1.79,4,4-1.79,4-4,4Z"
  />
</svg>`;
d`<svg
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
d`<svg
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
const Ea = E`
  <svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
  </svg>`, _a = E`<svg viewBox="0 0 24 24">
<path fill="currentColor" d="M11,7H15V9H11V15H13V11H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`;
E`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
E`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
E`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
E`<svg id="Laag_1" data-name="Laag 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
function zi(t) {
  return [
    it`<mwc-formfield label="${x("connectedap.wizard.addschemainsttype")}">
      <mwc-checkbox
        id="instType"
        ?checked="${t.hasInstType}"
      ></mwc-checkbox>
    </mwc-formfield>`,
    it`${Object.entries(t.attributes).map(
      ([e, i]) => it`<wizard-textfield
          label="${e}"
          ?nullable=${Pi[e]}
          .maybeValue=${i}
          pattern="${te(Ti[e])}"
          required
        ></wizard-textfield>`
    )}`
  ];
}
function Da(t, e) {
  return t.querySelectorAll("P").length !== e.querySelectorAll("P").length ? !1 : Array.from(t.querySelectorAll("P")).filter(
    (i) => !e.querySelector(`Address > P[type="${i.getAttribute("type")}"]`)?.isEqualNode(i)
  ).length === 0;
}
function Na(t, e, i) {
  const n = D(e.ownerDocument, "Address", {});
  return Object.entries(t).filter(([r, a]) => a !== null).forEach(([r, a]) => {
    const o = r, s = D(e.ownerDocument, "P", { type: o });
    i && s.setAttributeNS(
      "http://www.w3.org/2001/XMLSchema-instance",
      "xsi:type",
      "tP_" + r
    ), s.textContent = a, n.appendChild(s);
  }), n;
}
function Mi(t, e, i) {
  const n = [], r = Na(e, t, i), a = t.querySelector("Address");
  return a !== null && !Da(a, r) ? (n.push({
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
function Jt(t, e, i, n) {
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
function La(t) {
  return (e, i) => {
    const n = {
      actions: [],
      title: x("gse.action.addaddress", {
        identity: I(t)
      })
    }, r = i.shadowRoot?.querySelector("#instType")?.checked ?? !1, a = {};
    a["MAC-Address"] = z(
      e.find((c) => c.label === "MAC-Address")
    ), a.APPID = z(e.find((c) => c.label === "APPID")), a["VLAN-ID"] = z(
      e.find((c) => c.label === "VLAN-ID")
    ), a["VLAN-PRIORITY"] = z(
      e.find((c) => c.label === "VLAN-PRIORITY")
    ), Mi(t, a, r).forEach((c) => {
      n.actions.push(c);
    });
    const s = z(e.find((c) => c.label === "MinTime")), p = z(e.find((c) => c.label === "MaxTime"));
    return s !== (t.querySelector("MinTime")?.textContent?.trim() ?? null) && n.actions.push(
      Jt(
        "MinTime",
        t.querySelector("MinTime"),
        s,
        t
      )
    ), p !== (t.querySelector("MaxTime")?.textContent?.trim() ?? null) && n.actions.push(
      Jt(
        "MaxTime",
        t.querySelector("MaxTime"),
        p,
        t
      )
    ), [n];
  };
}
function Ta(t) {
  const e = t.querySelector("MinTime")?.innerHTML.trim() ?? null, i = t.querySelector("MaxTime")?.innerHTML.trim() ?? null, n = Array.from(t.querySelectorAll("Address > P")).some(
    (a) => a.getAttribute("xsi:type")
  ), r = {};
  return ["MAC-Address", "APPID", "VLAN-ID", "VLAN-PRIORITY"].forEach((a) => {
    r[a] || (r[a] = t.querySelector(`Address > P[type="${a}"]`)?.innerHTML.trim() ?? null);
  }), [
    {
      title: x("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        label: x("save"),
        icon: "save",
        action: La(t)
      },
      content: [
        ...zi({ hasInstType: n, attributes: r }),
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
var Pa = Object.defineProperty, Ra = Object.getOwnPropertyDescriptor, Ze = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Ra(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (n ? o(e, i, r) : o(r)) || r);
  return n && r && Pa(e, i, r), r;
};
let Le = class extends ae {
  get label() {
    return this.element.getAttribute("ldInst") + "/" + this.element.getAttribute("cbName");
  }
  openEditWizard() {
    this.dispatchEvent(Ae(Ta(this.element)));
  }
  remove() {
    this.element && this.dispatchEvent(
      Pe({
        old: {
          parent: this.element.parentElement,
          element: this.element,
          reference: this.element.nextSibling
        }
      })
    );
  }
  render() {
    return d`<action-icon label="${this.label}" .icon="${_a}"
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
    ></action-icon>`;
  }
};
Ze([
  l({ attribute: !1 })
], Le.prototype, "doc", 2);
Ze([
  l({ attribute: !1 })
], Le.prototype, "element", 2);
Ze([
  k()
], Le.prototype, "label", 1);
Le = Ze([
  Z("gse-editor")
], Le);
function za(t) {
  return (e, i) => {
    const n = {
      actions: [],
      title: x("smv.action.addaddress", {
        identity: I(t)
      })
    }, r = i.shadowRoot?.querySelector("#instType")?.checked, a = {};
    a["MAC-Address"] = z(
      e.find((s) => s.label === "MAC-Address")
    ), a.APPID = z(e.find((s) => s.label === "APPID")), a["VLAN-ID"] = z(
      e.find((s) => s.label === "VLAN-ID")
    ), a["VLAN-PRIORITY"] = z(
      e.find((s) => s.label === "VLAN-PRIORITY")
    );
    const o = Mi(t, a, r);
    return o.length ? (o.forEach((s) => {
      n.actions.push(s);
    }), [n]) : [];
  };
}
function Ma(t) {
  const e = Array.from(t.querySelectorAll("Address > P")).some(
    (n) => n.getAttribute("xsi:type")
  ), i = {};
  return ["MAC-Address", "APPID", "VLAN-ID", "VLAN-PRIORITY"].forEach((n) => {
    i[n] || (i[n] = t.querySelector(`Address > P[type="${n}"]`)?.innerHTML.trim() ?? null);
  }), [
    {
      title: x("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        label: x("save"),
        icon: "edit",
        action: za(t)
      },
      content: [...zi({ hasInstType: e, attributes: i })]
    }
  ];
}
var $a = Object.defineProperty, Oa = Object.getOwnPropertyDescriptor, Xe = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Oa(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (n ? o(e, i, r) : o(r)) || r);
  return n && r && $a(e, i, r), r;
};
let Te = class extends ae {
  get label() {
    return this.element.getAttribute("ldInst") + "/" + this.element.getAttribute("cbName");
  }
  openEditWizard() {
    this.dispatchEvent(Ae(Ma(this.element)));
  }
  remove() {
    this.element && this.dispatchEvent(
      Pe({
        old: {
          parent: this.element.parentElement,
          element: this.element,
          reference: this.element.nextSibling
        }
      })
    );
  }
  render() {
    return d`<action-icon label="${this.label}" .icon="${Ea}"
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
    ></action-icon>`;
  }
};
Xe([
  l({ attribute: !1 })
], Te.prototype, "doc", 2);
Xe([
  l({ attribute: !1 })
], Te.prototype, "element", 2);
Xe([
  k()
], Te.prototype, "label", 1);
Te = Xe([
  Z("smv-editor")
], Te);
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
const ei = /* @__PURE__ */ new WeakMap(), ti = 2147483647, Va = je((...t) => (e) => {
  let i = ei.get(e);
  i === void 0 && (i = {
    lastRenderedIndex: ti,
    values: []
  }, ei.set(e, i));
  const n = i.values;
  let r = n.length;
  i.values = t;
  for (let a = 0; a < t.length && !(a > i.lastRenderedIndex); a++) {
    const o = t[a];
    if (di(o) || typeof o.then != "function") {
      e.setValue(o), i.lastRenderedIndex = a;
      break;
    }
    a < r && o === n[a] || (i.lastRenderedIndex = ti, r = 0, Promise.resolve(o).then((s) => {
      const p = i.values.indexOf(o);
      p > -1 && p < i.lastRenderedIndex && (i.lastRenderedIndex = p, e.setValue(s), e.commit());
    }));
  }
});
var Ha = Object.defineProperty, Fa = Object.getOwnPropertyDescriptor, de = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? Fa(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (n ? o(e, i, r) : o(r)) || r);
  return n && r && Ha(e, i, r), r;
};
const Ba = d`<div class="column">
  <mwc-list
    ><mwc-list-item noninteractive hasMeta
      >${x("loading")}<mwc-icon slot="meta">pending</mwc-icon></mwc-list-item
    ></mwc-list
  >
</div>`;
let ie = class extends ae {
  constructor() {
    super(...arguments), this.selection = {}, this.multi = !1, this.read = async (t) => ({
      path: t,
      header: d`<h2>${"/" + t.join("/")}</h2>`,
      entries: []
    }), this.loaded = Promise.resolve();
  }
  get depth() {
    return Di(this.selection);
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
    for await (const { header: r, entries: a, path: o } of i)
      (r || a.length > 0) && n.push(
        d`${te(r)} ${this.renderDirectory(o, a)}`
      );
    return n.length === 0 ? d`` : d`<div class="column">${n}</div>`;
  }
  render() {
    const t = new Array(this.depth).fill(0).map((e, i) => this.renderColumn(i));
    return this.loaded = Promise.allSettled(t).then(), d`<div class="pane">
      ${t.map((e) => Va(e, Ba))}
    </div>`;
  }
};
ie.styles = ce`
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
de([
  l({ type: Object })
], ie.prototype, "selection", 2);
de([
  l({ type: Boolean })
], ie.prototype, "multi", 2);
de([
  l({ type: Number })
], ie.prototype, "depth", 1);
de([
  l({ type: Array })
], ie.prototype, "paths", 1);
de([
  l({ type: Array })
], ie.prototype, "path", 1);
de([
  l({ attribute: !1 })
], ie.prototype, "read", 2);
de([
  l({ attribute: !1 })
], ie.prototype, "loaded", 2);
de([
  j("div")
], ie.prototype, "container", 2);
ie = de([
  Z("finder-list")
], ie);
const Ga = {
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
}, qa = {
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
}, ii = { en: qa, de: Ga };
async function ja(t) {
  return Object.keys(ii).includes(t) ? ii[t] : {};
}
dn({ loader: ja, empty: (t) => t });
const $i = localStorage.getItem("language") || "en";
console.log("SETTING LANGUAGE TO", $i);
mn($i);
const st = {
  type: "8-MMS",
  bitrate: "100",
  multiplier: "M"
};
function Oi(t) {
  return [
    d`<wizard-textfield
      label="name"
      .maybeValue=${t.name}
      helper="${x("subnetwork.wizard.nameHelper")}"
      required
      validationMessage="${x("textfield.required")}"
      dialogInitialFocus
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="desc"
      .maybeValue=${t.desc}
      nullable
      helper="${x("subnetwork.wizard.descHelper")}"
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="type"
      .maybeValue=${t.type}
      nullable
      helper="${x("subnetwork.wizard.typeHelper")}"
      pattern="${qt.normalizedString}"
    ></wizard-textfield>`,
    d`<wizard-textfield
      label="BitRate"
      .maybeValue=${t.BitRate}
      nullable
      unit="b/s"
      .multipliers=${[null, "M"]}
      .multiplier=${t.multiplier}
      helper="${x("subnetwork.wizard.bitrateHelper")}"
      required
      validationMessage="${x("textfield.nonempty")}"
      pattern="${qt.decimal}"
    ></wizard-textfield>`
  ];
}
function Ua(t) {
  return (e) => {
    const i = z(e.find((c) => c.label === "name")), n = z(e.find((c) => c.label === "desc")), r = z(e.find((c) => c.label === "type")), a = z(e.find((c) => c.label === "BitRate")), o = yi(e.find((c) => c.label === "BitRate")), s = D(t.ownerDocument, "SubNetwork", {
      name: i,
      desc: n,
      type: r
    });
    if (a !== null) {
      const c = D(t.ownerDocument, "BitRate", {
        unit: "b/s",
        multiplier: o
      });
      c.textContent = a, s.appendChild(c);
    }
    return [{
      new: {
        parent: t,
        element: s
      }
    }];
  };
}
function Wa(t) {
  return [
    {
      title: x("wizard.title.add", { tagName: "SubNetwork" }),
      primary: {
        icon: "add",
        label: x("add"),
        action: Ua(t)
      },
      content: Oi({
        name: "",
        desc: "",
        type: st.type,
        BitRate: st.bitrate,
        multiplier: st.multiplier
      })
    }
  ];
}
function Ka(t, e, i, n) {
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
  const r = pi(t, { multiplier: i });
  return r.textContent = e, {
    old: { element: t },
    new: { element: r }
  };
}
function Za(t) {
  return (e) => {
    const i = e.find((m) => m.label === "name").value, n = z(e.find((m) => m.label === "desc")), r = z(e.find((m) => m.label === "type")), a = z(e.find((m) => m.label === "BitRate")), o = yi(e.find((m) => m.label === "BitRate"));
    let s, p;
    if (i === t.getAttribute("name") && n === t.getAttribute("desc") && r === t.getAttribute("type"))
      s = null;
    else {
      const m = pi(t, { name: i, desc: n, type: r });
      s = { old: { element: t }, new: { element: m } };
    }
    a === (t.querySelector("SubNetwork > BitRate")?.textContent?.trim() ?? null) && o === (t.querySelector("SubNetwork > BitRate")?.getAttribute("multiplier") ?? null) ? p = null : p = Ka(
      t.querySelector("SubNetwork > BitRate"),
      a,
      o,
      s?.new.element ?? t
    );
    const c = [];
    return s && c.push(s), p && c.push(p), c;
  };
}
function Xa(t) {
  const e = t.getAttribute("name"), i = t.getAttribute("desc"), n = t.getAttribute("type"), r = t.querySelector("SubNetwork > BitRate")?.textContent?.trim() ?? null, a = t.querySelector("SubNetwork > BitRate")?.getAttribute("multiplier") ?? null;
  return [
    {
      title: x("wizard.title.edit", { tagName: t.tagName }),
      element: t,
      primary: {
        icon: "save",
        label: x("save"),
        action: Za(t)
      },
      content: Oi({ name: e, desc: i, type: n, BitRate: r, multiplier: a })
    }
  ];
}
function Ya() {
}
const Qa = {
  SubNetwork: {
    edit: Xa,
    create: Ya
  }
};
var Ja = Object.defineProperty, eo = Object.getOwnPropertyDescriptor, ge = (t, e, i, n) => {
  for (var r = n > 1 ? void 0 : n ? eo(e, i) : e, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = (n ? o(e, i, r) : o(r)) || r);
  return n && r && Ja(e, i, r), r;
};
let re = class extends ae {
  constructor() {
    super(...arguments), this.editCount = -1;
  }
  get name() {
    return this.element.getAttribute("name") ?? "UNDEFINED";
  }
  get desc() {
    return this.element.getAttribute("desc") ?? null;
  }
  get type() {
    return this.element.getAttribute("type") ?? null;
  }
  get bitrate() {
    const t = this.element.querySelector("BitRate");
    if (t === null) return null;
    const e = t.textContent ?? "", n = ` ${t.getAttribute("multiplier") ?? ""}b/s`;
    return e ? e + n : null;
  }
  openConnectedAPwizard() {
    this.dispatchEvent(Ae(va(this.element)));
  }
  openEditWizard() {
    const t = Qa.SubNetwork.edit(this.element);
    t && this.dispatchEvent(Ae(t));
  }
  remove() {
    this.element && this.dispatchEvent(
      Pe({
        old: {
          parent: this.element.parentElement,
          element: this.element,
          reference: this.element.nextSibling
        }
      })
    );
  }
  renderSmvEditors(t) {
    return Array.from(
      this.element.closest("Communication")?.querySelectorAll(`ConnectedAP[iedName="${t}"] > SMV`) ?? []
    ).map(
      (e) => d`<smv-editor
        class="${e.closest("SubNetwork") !== this.element ? "disabled" : ""}"
        .editCount=${this.editCount}
        .doc=${this.doc}
        .element=${e}
      ></smv-editor>`
    );
  }
  renderGseEditors(t) {
    return Array.from(
      this.element.closest("Communication")?.querySelectorAll(`ConnectedAP[iedName="${t}"] > GSE`) ?? []
    ).map(
      (e) => d`<gse-editor
        class="${e.closest("SubNetwork") !== this.element ? "disabled" : ""}"
        .editCount=${this.editCount}
        .doc=${this.doc}
        .element=${e}
      ></gse-editor>`
    );
  }
  renderConnectedApEditors(t) {
    return Array.from(
      this.element.parentElement?.querySelectorAll(
        `:scope > SubNetwork > ConnectedAP[iedName="${t}"]`
      ) ?? []
    ).map(
      (e) => d`<connectedap-editor
          class="${e.parentElement !== this.element ? "disabled" : ""}"
          .element=${e}
        ></connectedap-editor>`
    );
  }
  renderIEDs() {
    return Array.from(this.element.querySelectorAll(":scope > ConnectedAP")).map((t) => t.getAttribute("iedName")).filter((t, e, i) => i.indexOf(t) === e).sort(_i).map(
      (t) => d` <action-pane id="iedSection" label="${t}">
          ${this.renderConnectedApEditors(t)}${this.renderGseEditors(
        t
      )}${this.renderSmvEditors(t)}
        </action-pane>`
    );
  }
  subNetworkSpecs() {
    return !this.type && !this.bitrate ? "" : `(${[this.type, this.bitrate].filter((t) => !!t).join(" — ")})`;
  }
  header() {
    return `${this.name} ${this.desc === null ? "" : `— ${this.desc}`}
    ${this.subNetworkSpecs()}`;
  }
  render() {
    return d`<action-pane label="${this.header()}">
      <abbr slot="action" title="${x("edit")}">
        <mwc-icon-button
          icon="edit"
          @click=${() => this.openEditWizard()}
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" title="${x("remove")}">
        <mwc-icon-button
          icon="delete"
          @click=${() => this.remove()}
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" title="${x("add")}">
        <mwc-icon-button
          icon="playlist_add"
          @click="${() => this.openConnectedAPwizard()}"
        ></mwc-icon-button>
      </abbr>
      <div id="iedContainer">${this.renderIEDs()}</div>
    </action-pane> `;
  }
};
re.styles = ce`
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

    #iedSection:not(:focus):not(:focus-within) gse-editor {
      display: none;
    }

    #iedSection:not(:focus):not(:focus-within) smv-editor {
      display: none;
    }

    #iedSection .disabled {
      pointer-events: none;
      opacity: 0.5;
    }

    abbr {
      text-decoration: none;
      border-bottom: none;
    }
  `;
ge([
  l({ attribute: !1 })
], re.prototype, "doc", 2);
ge([
  l({ type: Number })
], re.prototype, "editCount", 2);
ge([
  l({ attribute: !1 })
], re.prototype, "element", 2);
ge([
  l({ type: String })
], re.prototype, "name", 1);
ge([
  l({ type: String })
], re.prototype, "desc", 1);
ge([
  l({ type: String })
], re.prototype, "type", 1);
ge([
  l({ type: String })
], re.prototype, "bitrate", 1);
re = ge([
  Z("subnetwork-editor")
], re);
var to = Object.defineProperty, Vi = (t, e, i, n) => {
  for (var r = void 0, a = t.length - 1, o; a >= 0; a--)
    (o = t[a]) && (r = o(e, i, r) || r);
  return r && to(e, i, r), r;
};
class Hi extends ae {
  constructor() {
    super(...arguments), this.editCount = -1;
  }
  /**
   * Creates the Communication Element and returns the created Element
   * @returns {Element} Communication `Element`
   */
  createCommunication() {
    const e = D(this.doc, "Communication", {});
    return this.dispatchEvent(
      Pe({
        new: {
          parent: this.doc.documentElement,
          element: e
        }
      })
    ), e;
  }
  /** Opens a [[`WizardDialog`]] for creating a new `SubNetwork` element. */
  openCreateSubNetworkWizard() {
    const e = this.doc.querySelector(":root > Communication") || this.createCommunication();
    this.dispatchEvent(Ae(Wa(e)));
  }
  render() {
    return this.doc?.querySelector(":root > Communication >SubNetwork") ? d`<mwc-fab
        extended
        icon="add"
        label="${x("subnetwork.wizard.title.add")}"
        @click=${() => this.openCreateSubNetworkWizard()}
      ></mwc-fab>
      <section>
        ${Array.from(this.doc.querySelectorAll("SubNetwork") ?? []).filter(wt).map(
      (e) => d`<subnetwork-editor
                .editCount=${this.editCount}
                .doc=${this.doc}
                .element=${e}
              ></subnetwork-editor>`
    )}
      </section> ` : d`<h1>
        <span style="color: var(--base1)">${x("communication.missing")}</span
        ><mwc-fab
          extended
          icon="add"
          label="${x("subnetwork.wizard.title.add")}"
          @click=${() => this.openCreateSubNetworkWizard()}
        ></mwc-fab>
      </h1>`;
  }
  static {
    this.styles = ce`
    :host {
      width: 100vw;
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
      transition: background-color 150ms linear;
    }

    section {
      outline: none;
      padding: 8px 12px 16px;
    }

    subnetwork-editor {
      margin: 8px 12px 16px;
    }

    mwc-fab {
      position: fixed;
      bottom: 32px;
      right: 32px;
    }
  `;
  }
}
Vi([
  l()
], Hi.prototype, "doc");
Vi([
  l({ type: Number })
], Hi.prototype, "editCount");
export {
  Hi as default
};
