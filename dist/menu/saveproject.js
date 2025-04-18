import { property as a, LitElement as s } from "lit-element";
var m = Object.defineProperty, c = (i, t, o, e) => {
  for (var n = void 0, r = i.length - 1, l; r >= 0; r--)
    (l = i[r]) && (n = l(t, o, n) || n);
  return n && m(t, o, n), n;
};
function f(i, t) {
  let o = "", e = "";
  return t || (t = "	"), i.split(/>\s*</).forEach(function(n) {
    n.match(/^\/\w/) && (e = e.substring(t.length)), o += e + "<" + n + `>\r
`, n.match(/^<?\w[^>]*[^/]$/) && (e += t);
  }), o.substring(1, o.length - 3);
}
class d extends s {
  async run() {
    if (this.doc) {
      let t = f(
        new XMLSerializer().serializeToString(this.doc)
      );
      t = t.startsWith("<?xml") ? t : `<?xml version="1.0" encoding="UTF-8"?>
` + t;
      const o = new Blob([t], {
        type: "application/xml"
      }), e = document.createElement("a");
      e.download = this.docName, e.href = URL.createObjectURL(o), e.dataset.downloadurl = ["application/xml", e.download, e.href].join(":"), e.style.display = "none", document.body.appendChild(e), e.click(), document.body.removeChild(e), setTimeout(function() {
        URL.revokeObjectURL(e.href);
      }, 5e3);
    }
  }
}
c([
  a()
], d.prototype, "doc");
c([
  a()
], d.prototype, "docName");
export {
  d as default
};
