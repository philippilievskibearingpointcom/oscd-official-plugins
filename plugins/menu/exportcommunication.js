import { property as a, LitElement as d } from "lit-element";
import { get as p } from "lit-translate";
function f(n, o) {
  let t = "", i = "";
  return o || (o = "	"), n.split(/>\s*</).forEach(function(e) {
    e.match(/^\/\w/) && (i = i.substring(o.length)), t += i + "<" + e + `>\r
`, e.match(/^<?\w[^>]*[^/]$/) && (i += o);
  }), t.substring(1, t.length - 3);
}
function h(n, o) {
  return new CustomEvent("log", {
    bubbles: !0,
    composed: !0,
    ...o,
    detail: { ...n, ...o?.detail }
  });
}
var b = Object.defineProperty, l = (n, o, t, i) => {
  for (var e = void 0, c = n.length - 1, r; c >= 0; c--)
    (r = n[c]) && (e = r(o, t, e) || e);
  return e && b(o, t, e), e;
};
function C(n, o) {
  let t;
  const i = Array.prototype.slice.call(o.attributes);
  for (; t = i.pop(); )
    n.setAttribute(t.nodeName, t.nodeValue);
}
function y(n, o, t) {
  const i = new Blob(
    [f(new XMLSerializer().serializeToString(n))],
    {
      type: "application/xml"
    }
  ), e = o.createElement("a");
  e.download = t, e.href = URL.createObjectURL(i), e.dataset.downloadurl = ["application/xml", e.download, e.href].join(":"), e.style.display = "none", o.body.appendChild(e), e.click(), o.body.removeChild(e), setTimeout(function() {
    URL.revokeObjectURL(e.href);
  }, 5e3);
}
class s extends d {
  constructor() {
    super(...arguments), this.editCount = -1;
  }
  /** Entry point for this plug-in */
  async run() {
    const t = document.implementation.createDocument(
      "http://www.iec.ch/61850/2003/SCL",
      "SCL",
      null
    ), i = t.createProcessingInstruction(
      "xml",
      'version="1.0" encoding="UTF-8"'
    );
    if (t.insertBefore(i, t.firstChild), C(t.documentElement, this.doc.documentElement), this.doc.querySelector(
      ":root > Communication"
    )) {
      const c = this.doc.querySelector(":root > Header")?.cloneNode(!0), r = this.doc.querySelector(":root > Communication")?.cloneNode(!0);
      c && t.documentElement.appendChild(c), t.documentElement.appendChild(r);
      const m = this.docName.slice(0, -4);
      let u = `${this.docName}-Communication.scd`;
      m.slice(0, 1) === "." && (u = `${this.docName.slice(0, -4)}-Communication${m}`), y(t, document, u);
    } else
      this.dispatchEvent(
        h({
          kind: "warning",
          title: p("exportCommunication.noCommunicationSection")
        })
      );
  }
}
l([
  a({ attribute: !1 })
], s.prototype, "doc");
l([
  a({ type: Number })
], s.prototype, "editCount");
l([
  a({ attribute: !1 })
], s.prototype, "docName");
export {
  s as default,
  y as saveXmlBlob
};
