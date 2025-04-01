import { __decorate } from "tslib";
import { LitElement, html, property, css } from 'lit-element';
import { get } from 'lit-translate';
import '@material/mwc-fab';
import '@material/mwc-icon-button';
import '@material/mwc-list';
import '@material/mwc-list/mwc-list-item';
import '@openscd/open-scd/src/filtered-list.js';
import { identity, newWizardEvent, } from '@openscd/open-scd/src/foundation.js';
import { createElement, } from '@openscd/xml';
import { newActionEvent } from '@openscd/core/foundation/deprecated/editor.js';
import { styles } from './templates/foundation.js';
import { createEnumTypeWizard, eNumTypeEditWizard, } from './templates/enumtype-wizard.js';
import { createDATypeWizard, editDaTypeWizard, } from './templates/datype-wizards.js';
import { createDOTypeWizard, dOTypeWizard, } from './templates/dotype-wizards.js';
import { createLNodeTypeWizard, lNodeTypeWizard, } from './templates/lnodetype-wizard.js';
const templates = fetch('public/xml/templates.scd')
    .then(response => response.text())
    .then(str => new DOMParser().parseFromString(str, 'application/xml'));
const nsd74 = fetch('public/xml/IEC_61850-7-4_2007B3.nsd')
    .then(response => response.text())
    .then(str => new DOMParser().parseFromString(str, 'application/xml'));
const nsd7420 = fetch('public/xml/IEC_61850-7-420_2019A4.nsd')
    .then(response => response.text())
    .then(str => new DOMParser().parseFromString(str, 'application/xml'));
/** An editor [[`plugin`]] for editing the `DataTypeTemplates` section. */
export default class TemplatesPlugin extends LitElement {
    constructor() {
        super(...arguments);
        this.editCount = -1;
    }
    async openCreateLNodeTypeWizard() {
        this.createDataTypeTemplates();
        this.dispatchEvent(newWizardEvent(createLNodeTypeWizard(this.doc.querySelector(':root > DataTypeTemplates'), await templates, await nsd74, await nsd7420)));
    }
    openLNodeTypeWizard(identity) {
        const wizard = lNodeTypeWizard(identity, this.doc);
        if (wizard)
            this.dispatchEvent(newWizardEvent(() => lNodeTypeWizard(identity, this.doc)));
    }
    async openCreateDOTypeWizard() {
        this.createDataTypeTemplates();
        this.dispatchEvent(newWizardEvent(createDOTypeWizard(this.doc.querySelector(':root > DataTypeTemplates'), await templates)));
    }
    openDOTypeWizard(identity) {
        const wizard = dOTypeWizard(identity, this.doc);
        if (wizard)
            this.dispatchEvent(newWizardEvent(() => dOTypeWizard(identity, this.doc)));
    }
    openDATypeWizard(identity) {
        const wizard = editDaTypeWizard(identity, this.doc);
        if (wizard)
            this.dispatchEvent(newWizardEvent(() => editDaTypeWizard(identity, this.doc)));
    }
    async openCreateDATypeWizard() {
        this.createDataTypeTemplates();
        this.dispatchEvent(newWizardEvent(createDATypeWizard(this.doc.querySelector(':root > DataTypeTemplates'), await templates)));
    }
    openEnumTypeWizard(identity) {
        const wizard = eNumTypeEditWizard(identity, this.doc);
        if (wizard)
            this.dispatchEvent(newWizardEvent(() => eNumTypeEditWizard(identity, this.doc)));
    }
    async openCreateEnumWizard() {
        this.createDataTypeTemplates();
        this.dispatchEvent(newWizardEvent(createEnumTypeWizard(this.doc.querySelector(':root > DataTypeTemplates'), await templates)));
    }
    createDataTypeTemplates() {
        if (!this.doc.querySelector(':root > DataTypeTemplates'))
            this.dispatchEvent(newActionEvent({
                new: {
                    parent: this.doc.documentElement,
                    element: createElement(this.doc, 'DataTypeTemplates', {}),
                },
            }));
    }
    render() {
        if (!this.doc?.querySelector(':root > DataTypeTemplates'))
            return html `<h1>
        <span style="color: var(--base1)">${get('templates.missing')}</span>
        <mwc-fab
          extended
          icon="add"
          label="${get('templates.add')}"
          @click=${() => this.createDataTypeTemplates()}
        ></mwc-fab>
      </h1>`;
        return html `
      <div id="containerTemplates">
        <section tabindex="0">
          <h1>
            ${get('scl.LNodeType')}
            <nav>
              <abbr title="${get('add')}">
                <mwc-icon-button
                  icon="playlist_add"
                  @click=${() => this.openCreateLNodeTypeWizard()}
                ></mwc-icon-button>
              </abbr>
            </nav>
          </h1>
          <filtered-list
            id="lnodetypelist"
            @action=${(e) => this.openLNodeTypeWizard(e.target.selected.value)}
          >
            ${Array.from(this.doc.querySelectorAll(':root > DataTypeTemplates > LNodeType') ?? []).map(lnodetype => html `<mwc-list-item
              twoline
              value="${identity(lnodetype)}"
              tabindex="0"
              hasMeta
              ><span>${lnodetype.getAttribute('id')}</span
              ><span slot="secondary">${lnodetype.getAttribute('lnClass')}</span></span><span slot="meta"
                >${lnodetype.querySelectorAll('DO').length}</span
              ></mwc-list-item
            >`)}
          </filtered-list>
        </section>
        <section tabindex="0">
          <h1>
            ${get('scl.DOType')}
            <nav>
              <abbr title="${get('add')}">
                <mwc-icon-button
                  icon="playlist_add"
                  @click=${() => this.openCreateDOTypeWizard()}
                ></mwc-icon-button>
              </abbr>
            </nav>
          </h1>
          <filtered-list
            id="dotypelist"
            @action=${(e) => this.openDOTypeWizard(e.target.selected.value)}
          >
            ${Array.from(this.doc.querySelectorAll(':root > DataTypeTemplates > DOType') ??
            []).map(dotype => html `<mwc-list-item
                  twoline
                  value="${identity(dotype)}"
                  tabindex="0"
                  hasMeta
                  ><span>${dotype.getAttribute('id')}</span
                  ><span slot="secondary">${dotype.getAttribute('cdc')}</span></span><span slot="meta"
                    >${dotype.querySelectorAll('SDO, DA').length}</span
                  ></mwc-list-item
                >`)}
          </filtered-list>
        </section>
        <section tabindex="0">
          <h1>
            ${get('scl.DAType')}
            <nav>
              <abbr title="${get('add')}">
                <mwc-icon-button
                  icon="playlist_add"
                  @click=${() => this.openCreateDATypeWizard()}
                ></mwc-icon-button>
              </abbr>
            </nav>
          </h1>
          <filtered-list
            id="datypelist"
            @action=${(e) => this.openDATypeWizard(e.target.selected.value)}
          >
            ${Array.from(this.doc.querySelectorAll(':root > DataTypeTemplates > DAType') ??
            []).map(datype => html `<mwc-list-item
                  value="${identity(datype)}"
                  tabindex="0"
                  hasMeta
                  ><span>${datype.getAttribute('id')}</span
                  ><span slot="meta"
                    >${datype.querySelectorAll('BDA').length}</span
                  ></mwc-list-item
                >`)}
          </filtered-list>
        </section>
        <section tabindex="0">
          <h1>
            ${get('scl.EnumType')}
            <nav>
              <abbr title="${get('add')}">
                <mwc-icon-button
                  icon="playlist_add"
                  @click=${() => this.openCreateEnumWizard()}
                ></mwc-icon-button>
              </abbr>
            </nav>
          </h1>
          <filtered-list
            id="enumtypelist"
            @action=${(e) => this.openEnumTypeWizard(e.target.selected.value)}
          >
            ${Array.from(this.doc.querySelectorAll(':root > DataTypeTemplates > EnumType') ?? []).map(enumtype => html `<mwc-list-item
                  value="${identity(enumtype)}"
                  tabindex="0"
                  hasMeta
                  ><span>${enumtype.getAttribute('id')}</span
                  ><span slot="meta"
                    >${enumtype.querySelectorAll('EnumVal').length}</span
                  ></mwc-list-item
                >`)}
          </filtered-list>
        </section>
      </div>
    `;
    }
}
TemplatesPlugin.styles = css `
    ${styles}

    mwc-fab {
      position: fixed;
      bottom: 32px;
      right: 32px;
    }

    :host {
      width: 100vw;
    }

    #containerTemplates {
      display: grid;
      grid-gap: 12px;
      padding: 8px 12px 16px;
      box-sizing: border-box;
      grid-template-columns: repeat(auto-fit, minmax(316px, auto));
    }

    @media (max-width: 387px) {
      #containerTemplates {
        grid-template-columns: repeat(auto-fit, minmax(196px, auto));
      }
    }
  `;
__decorate([
    property({ attribute: false })
], TemplatesPlugin.prototype, "doc", void 0);
__decorate([
    property({ type: Number })
], TemplatesPlugin.prototype, "editCount", void 0);
//# sourceMappingURL=Templates.js.map