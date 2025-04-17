import { property as s, LitElement as C } from "lit-element";
import { NodePart as g, AttributePart as y, directive as b } from "lit-html";
const E = 1e3 * 60, f = "langChanged";
function v(e, t, n) {
  return Object.entries(l(t || {})).reduce((o, [i, r]) => o.replace(new RegExp(`{{[  ]*${i}[  ]*}}`, "gm"), String(l(r))), e);
}
function L(e, t) {
  const n = e.split(".");
  let o = t.strings;
  for (; o != null && n.length > 0; )
    o = o[n.shift()];
  return o != null ? o.toString() : null;
}
function l(e) {
  return typeof e == "function" ? e() : e;
}
const N = () => ({
  loader: () => Promise.resolve({}),
  empty: (e) => `[${e}]`,
  lookup: L,
  interpolate: v,
  translationCache: {}
});
let S = N();
function P(e, t) {
  const n = (o) => e(o.detail);
  return window.addEventListener(f, n, t), () => window.removeEventListener(f, n);
}
function T(e, t, n = S) {
  let o = n.translationCache[e] || (n.translationCache[e] = n.lookup(e, n) || n.empty(e, n));
  return t = t != null ? l(t) : null, t != null ? n.interpolate(o, t, n) : o;
}
function h(e) {
  return e instanceof g ? e.startNode.isConnected : e instanceof y ? e.committer.element.isConnected : e.element.isConnected;
}
function x(e) {
  for (const [t] of e)
    h(t) || e.delete(t);
}
function _(e) {
  "requestIdleCallback" in window ? window.requestIdleCallback(e) : setTimeout(e);
}
function A(e, t) {
  setInterval(() => _(() => x(e)), t);
}
const a = /* @__PURE__ */ new Map();
function $() {
  P((e) => {
    for (const [t, n] of a)
      h(t) && w(t, n, e);
  });
}
$();
A(a, E);
function w(e, t, n) {
  const o = t(n);
  e.value !== o && (e.setValue(o), e.commit());
}
b((e) => (t) => {
  a.set(t, e), w(t, e);
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
let R = !1;
(() => {
  try {
    const e = {
      get capture() {
        return R = !0, !1;
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
function U(e, t) {
  let n = "", o = "";
  return t || (t = "	"), e.split(/>\s*</).forEach(function(i) {
    i.match(/^\/\w/) && (o = o.substring(t.length)), n += o + "<" + i + `>\r
`, i.match(/^<?\w[^>]*[^/]$/) && (o += t);
  }), n.substring(1, n.length - 3);
}
function V(e, t) {
  return new CustomEvent("log", {
    bubbles: !0,
    composed: !0,
    ...t,
    detail: { ...e, ...t?.detail }
  });
}
var k = Object.defineProperty, u = (e, t, n, o) => {
  for (var i = void 0, r = e.length - 1, c; r >= 0; r--)
    (c = e[r]) && (i = c(t, n, i) || i);
  return i && k(t, n, i), i;
};
function q(e, t) {
  let n;
  const o = Array.prototype.slice.call(t.attributes);
  for (; n = o.pop(); )
    e.setAttribute(n.nodeName, n.nodeValue);
}
function H(e, t, n) {
  const o = new Blob(
    [U(new XMLSerializer().serializeToString(e))],
    {
      type: "application/xml"
    }
  ), i = t.createElement("a");
  i.download = n, i.href = URL.createObjectURL(o), i.dataset.downloadurl = ["application/xml", i.download, i.href].join(":"), i.style.display = "none", t.body.appendChild(i), i.click(), t.body.removeChild(i), setTimeout(function() {
    URL.revokeObjectURL(i.href);
  }, 5e3);
}
class d extends C {
  constructor() {
    super(...arguments), this.editCount = -1;
  }
  /** Entry point for this plug-in */
  async run() {
    const n = document.implementation.createDocument(
      "http://www.iec.ch/61850/2003/SCL",
      "SCL",
      null
    ), o = n.createProcessingInstruction(
      "xml",
      'version="1.0" encoding="UTF-8"'
    );
    if (n.insertBefore(o, n.firstChild), q(n.documentElement, this.doc.documentElement), this.doc.querySelector(
      ":root > Communication"
    )) {
      const r = this.doc.querySelector(":root > Header")?.cloneNode(!0), c = this.doc.querySelector(":root > Communication")?.cloneNode(!0);
      r && n.documentElement.appendChild(r), n.documentElement.appendChild(c);
      const m = this.docName.slice(0, -4);
      let p = `${this.docName}-Communication.scd`;
      m.slice(0, 1) === "." && (p = `${this.docName.slice(0, -4)}-Communication${m}`), H(n, document, p);
    } else
      this.dispatchEvent(
        V({
          kind: "warning",
          title: T("exportCommunication.noCommunicationSection")
        })
      );
  }
}
u([
  s({ attribute: !1 })
], d.prototype, "doc");
u([
  s({ type: Number })
], d.prototype, "editCount");
u([
  s({ attribute: !1 })
], d.prototype, "docName");
export {
  d as default,
  H as saveXmlBlob
};
