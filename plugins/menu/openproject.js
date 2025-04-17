import { LitElement as c, html as l, css as u, query as p } from "lit-element";
function a(i, e, t) {
  return new CustomEvent("open-doc", {
    bubbles: !0,
    composed: !0,
    ...t,
    detail: { doc: i, docName: e, ...t?.detail }
  });
}
function d(i, e) {
  return new CustomEvent("log", {
    bubbles: !0,
    composed: !0,
    ...e,
    detail: { ...i, ...e?.detail }
  });
}
var h = Object.defineProperty, m = (i, e, t, o) => {
  for (var n = void 0, s = i.length - 1, r; s >= 0; s--)
    (r = i[s]) && (n = r(e, t, n) || n);
  return n && h(e, t, n), n;
};
class f extends c {
  async openDoc(e) {
    const t = e.target?.files?.item(0) ?? !1;
    if (!t) return;
    const o = await t.text(), n = t.name, s = new DOMParser().parseFromString(o, "application/xml");
    this.dispatchEvent(d({ kind: "reset" })), this.dispatchEvent(a(s, n)), this.pluginFileUI.onchange = null, this.closeMenu();
  }
  async closeMenu() {
    this.dispatchEvent(
      new CustomEvent("close-drawer", {
        bubbles: !0,
        composed: !0
        // to traverse shadow DOM boundaries src: https://pm.dartus.fr/blog/a-complete-guide-on-shadow-dom-and-event-propagation/
      })
    );
  }
  async run() {
    this.pluginFileUI.click();
  }
  render() {
    return l`<input @click=${(e) => e.target.value = ""} @change=${this.openDoc} id="open-plugin-input" accept=".sed,.scd,.ssd,.isd,.iid,.cid,.icd" type="file"></input>`;
  }
  static {
    this.styles = u`
    input {
      width: 0;
      height: 0;
      opacity: 0;
    }
  `;
  }
}
m([
  p("#open-plugin-input")
], f.prototype, "pluginFileUI");
export {
  f as default
};
