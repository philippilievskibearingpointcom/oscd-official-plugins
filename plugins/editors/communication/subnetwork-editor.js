import { __decorate } from "tslib";
import { LitElement, customElement, html, property, css, } from 'lit-element';
import { get } from 'lit-translate';
import '@material/mwc-icon-button';
import './connectedap-editor.js';
import './gse-editor.js';
import './smv-editor.js';
import { newWizardEvent, compareNames, } from '@openscd/open-scd/src/foundation.js';
import { newActionEvent } from '@openscd/core/foundation/deprecated/editor.js';
import { createConnectedApWizard } from '../../wizards/connectedap.js';
import { wizards } from '../../wizards/wizard-library.js';
/** [[`Communication`]] subeditor for a `SubNetwork` element. */
let SubNetworkEditor = class SubNetworkEditor extends LitElement {
    constructor() {
        super(...arguments);
        this.editCount = -1;
    }
    /** SubNetwork attribute name */
    get name() {
        return this.element.getAttribute('name') ?? 'UNDEFINED';
    }
    /** SubNetwork attribute desc */
    get desc() {
        return this.element.getAttribute('desc') ?? null;
    }
    /** SubNetwork attribute type */
    get type() {
        return this.element.getAttribute('type') ?? null;
    }
    /** SubNetwork child elements BitRate label */
    get bitrate() {
        const bitRate = this.element.querySelector('BitRate');
        if (bitRate === null)
            return null;
        const bitRateValue = bitRate.textContent ?? '';
        const m = bitRate.getAttribute('multiplier');
        const unit = ` ${m ?? ''}b/s`;
        return bitRateValue ? bitRateValue + unit : null;
    }
    openConnectedAPwizard() {
        this.dispatchEvent(newWizardEvent(createConnectedApWizard(this.element)));
    }
    openEditWizard() {
        const wizard = wizards['SubNetwork'].edit(this.element);
        if (wizard)
            this.dispatchEvent(newWizardEvent(wizard));
    }
    remove() {
        if (this.element)
            this.dispatchEvent(newActionEvent({
                old: {
                    parent: this.element.parentElement,
                    element: this.element,
                    reference: this.element.nextSibling,
                },
            }));
    }
    renderSmvEditors(iedName) {
        return Array.from(this.element
            .closest('Communication')
            ?.querySelectorAll(`ConnectedAP[iedName="${iedName}"] > SMV`) ?? []).map(smv => html `<smv-editor
        class="${smv.closest('SubNetwork') !== this.element ? 'disabled' : ''}"
        .editCount=${this.editCount}
        .doc=${this.doc}
        .element=${smv}
      ></smv-editor>`);
    }
    renderGseEditors(iedName) {
        return Array.from(this.element
            .closest('Communication')
            ?.querySelectorAll(`ConnectedAP[iedName="${iedName}"] > GSE`) ?? []).map(gse => html `<gse-editor
        class="${gse.closest('SubNetwork') !== this.element ? 'disabled' : ''}"
        .editCount=${this.editCount}
        .doc=${this.doc}
        .element=${gse}
      ></gse-editor>`);
    }
    renderConnectedApEditors(iedName) {
        return Array.from(this.element.parentElement?.querySelectorAll(`:scope > SubNetwork > ConnectedAP[iedName="${iedName}"]`) ?? []).map(connectedAP => html `<connectedap-editor
          class="${connectedAP.parentElement !== this.element
            ? 'disabled'
            : ''}"
          .element=${connectedAP}
        ></connectedap-editor>`);
    }
    renderIEDs() {
        return Array.from(this.element.querySelectorAll(':scope > ConnectedAP'))
            .map(connAP => connAP.getAttribute('iedName'))
            .filter((v, i, a) => a.indexOf(v) === i)
            .sort(compareNames)
            .map(iedName => html ` <action-pane id="iedSection" label="${iedName}">
          ${this.renderConnectedApEditors(iedName)}${this.renderGseEditors(iedName)}${this.renderSmvEditors(iedName)}
        </action-pane>`);
    }
    subNetworkSpecs() {
        if (!this.type && !this.bitrate)
            return '';
        return `(${[this.type, this.bitrate].filter(text => !!text).join(' — ')})`;
    }
    header() {
        return `${this.name} ${this.desc === null ? '' : `— ${this.desc}`}
    ${this.subNetworkSpecs()}`;
    }
    render() {
        return html `<action-pane label="${this.header()}">
      <abbr slot="action" title="${get('edit')}">
        <mwc-icon-button
          icon="edit"
          @click=${() => this.openEditWizard()}
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" title="${get('remove')}">
        <mwc-icon-button
          icon="delete"
          @click=${() => this.remove()}
        ></mwc-icon-button>
      </abbr>
      <abbr slot="action" title="${get('add')}">
        <mwc-icon-button
          icon="playlist_add"
          @click="${() => this.openConnectedAPwizard()}"
        ></mwc-icon-button>
      </abbr>
      <div id="iedContainer">${this.renderIEDs()}</div>
    </action-pane> `;
    }
};
SubNetworkEditor.styles = css `
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
__decorate([
    property({ attribute: false })
], SubNetworkEditor.prototype, "doc", void 0);
__decorate([
    property({ type: Number })
], SubNetworkEditor.prototype, "editCount", void 0);
__decorate([
    property({ attribute: false })
], SubNetworkEditor.prototype, "element", void 0);
__decorate([
    property({ type: String })
], SubNetworkEditor.prototype, "name", null);
__decorate([
    property({ type: String })
], SubNetworkEditor.prototype, "desc", null);
__decorate([
    property({ type: String })
], SubNetworkEditor.prototype, "type", null);
__decorate([
    property({ type: String })
], SubNetworkEditor.prototype, "bitrate", null);
SubNetworkEditor = __decorate([
    customElement('subnetwork-editor')
], SubNetworkEditor);
export { SubNetworkEditor };
//# sourceMappingURL=subnetwork-editor.js.map