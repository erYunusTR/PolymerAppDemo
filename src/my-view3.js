/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyView3 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <div class="circle">3</div>
        <h3>Paper Elements</h3>
<ul id="menu3">
    <li><a href="/src/demos/paper-elements/paper-badge/demo" target="_blank">paper-badge</a></li>
    <li><a href="/src/demos/paper-elements/paper-behaviors/demo" target="_blank">paper-behaviors</a></li>
    <li><a href="/src/demos/paper-elements/paper-button/demo" target="_blank">paper-button</a></li>
    <li><a href="/src/demos/paper-elements/paper-card/demo" target="_blank">paper-card</a></li>
    <li><a href="/src/demos/paper-elements/paper-checkbox/demo" target="_blank">paper-checkbox</a></li>
    <li><a href="/src/demos/paper-elements/paper-dialog/demo" target="_blank">paper-dialog</a></li>
    <li><a href="/src/demos/paper-elements/paper-dialog-behavior/demo" target="_blank">paper-dialog-behavior</a></li>
    <li><a href="/src/demos/paper-elements/paper-dialog-scrollable/demo" target="_blank">paper-dialog-scrollable</a></li>
    <li><a href="/src/demos/paper-elements/paper-dropdown-menu/demo" target="_blank">paper-dropdown-menu</a></li>
    <li><a href="/src/demos/paper-elements/paper-fab/demo" target="_blank">paper-fab</a></li>
    <li><a href="/src/demos/paper-elements/paper-header-panel/demo" target="_blank">paper-header-panel</a></li>
    <li><a href="/src/demos/paper-elements/paper-icon-button/demo" target="_blank">paper-icon-button</a></li>
    <li><a href="/src/demos/paper-elements/paper-input/demo" target="_blank">paper-input</a></li>
    <li><a href="/src/demos/paper-elements/paper-item/demo" target="_blank">paper-item</a></li>
    <li><a href="/src/demos/paper-elements/paper-listbox/demo" target="_blank">paper-listbox</a></li>
    <li><a href="/src/demos/paper-elements/paper-menu-button/demo" target="_blank">paper-menu-button</a></li>
    <li><a href="/src/demos/paper-elements/paper-progress/demo" target="_blank">paper-progress</a></li>
    <li><a href="/src/demos/paper-elements/paper-radio-button/demo" target="_blank">paper-radio-button</a></li>
    <li><a href="/src/demos/paper-elements/paper-radio-group/demo" target="_blank">paper-radio-group</a></li>
    <li><a href="/src/demos/paper-elements/paper-ripple/demo" target="_blank">paper-ripple</a></li>
    <li><a href="/src/demos/paper-elements/paper-scroll-header-panel/demo" target="_blank">paper-scroll-header-panel</a></li>
    <li><a href="/src/demos/paper-elements/paper-slider/demo" target="_blank">paper-slider</a></li>
    <li><a href="/src/demos/paper-elements/paper-spinner/demo" target="_blank">paper-spinner</a></li>
    <li><a href="/src/demos/paper-elements/paper-styles/demo" target="_blank">paper-styles</a></li>
    <li><a href="/src/demos/paper-elements/paper-swatch-picker/demo" target="_blank">paper-swatch-picker</a></li>
    <li><a href="/src/demos/paper-elements/paper-tabs/demo" target="_blank">paper-tabs</a></li>
    <li><a href="/src/demos/paper-elements/paper-toast/demo" target="_blank">paper-toast</a></li>
    <li><a href="/src/demos/paper-elements/paper-toggle-button/demo" target="_blank">paper-toggle-button</a></li>
    <li><a href="/src/demos/paper-elements/paper-toolbar/demo" target="_blank">paper-toolbar</a></li>
    <li><a href="/src/demos/paper-elements/paper-tooltip/demo" target="_blank">paper-tooltip</a></li>
    <li><a href="/src/demos/paper-elements/PACKAGENAME/demo" target="_blank">###</a></li>
</ul>
      </div>
    `;
  }
}

window.customElements.define('my-view3', MyView3);
