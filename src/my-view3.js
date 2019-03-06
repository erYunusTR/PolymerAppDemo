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
    <li><a href="/src/demos/paper-elements/paper-badge/demo">paper-badge</a></li>
    <li><a href="/src/demos/paper-elements/paper-behaviors/demo">paper-behaviors</a></li>
    <li><a href="/src/demos/paper-elements/paper-button/demo">paper-button</a></li>
    <li><a href="/src/demos/paper-elements/paper-card/demo">paper-card</a></li>
    <li><a href="/src/demos/paper-elements/paper-checkbox/demo">paper-checkbox</a></li>
    <li><a href="/src/demos/paper-elements/paper-dialog/demo">paper-dialog</a></li>
    <li><a href="/src/demos/paper-elements/paper-dialog-behavior/demo">paper-dialog-behavior</a></li>
    <li><a href="/src/demos/paper-elements/paper-dialog-scrollable/demo">paper-dialog-scrollable</a></li>
    <li><a href="/src/demos/paper-elements/paper-dropdown-menu/demo">paper-dropdown-menu</a></li>
    <li><a href="/src/demos/paper-elements/paper-fab/demo">paper-fab</a></li>
    <li><a href="/src/demos/paper-elements/paper-header-panel/demo">paper-header-panel</a></li>
    <li><a href="/src/demos/paper-elements/paper-icon-button/demo">paper-icon-button</a></li>
    <li><a href="/src/demos/paper-elements/paper-input/demo">paper-input</a></li>
    <li><a href="/src/demos/paper-elements/paper-item/demo">paper-item</a></li>
    <li><a href="/src/demos/paper-elements/paper-listbox/demo">paper-listbox</a></li>
    <li><a href="/src/demos/paper-elements/paper-menu-button/demo">paper-menu-button</a></li>
    <li><a href="/src/demos/paper-elements/paper-progress/demo">paper-progress</a></li>
    <li><a href="/src/demos/paper-elements/paper-radio-button/demo">paper-radio-button</a></li>
    <li><a href="/src/demos/paper-elements/paper-radio-group/demo">paper-radio-group</a></li>
    <li><a href="/src/demos/paper-elements/paper-ripple/demo">paper-ripple</a></li>
    <li><a href="/src/demos/paper-elements/paper-scroll-header-panel/demo">paper-scroll-header-panel</a></li>
    <li><a href="/src/demos/paper-elements/paper-slider/demo">paper-slider</a></li>
    <li><a href="/src/demos/paper-elements/paper-spinner/demo">paper-spinner</a></li>
    <li><a href="/src/demos/paper-elements/paper-styles/demo">paper-styles</a></li>
    <li><a href="/src/demos/paper-elements/paper-swatch-picker/demo">paper-swatch-picker</a></li>
    <li><a href="/src/demos/paper-elements/paper-tabs/demo">paper-tabs</a></li>
    <li><a href="/src/demos/paper-elements/paper-toast/demo">paper-toast</a></li>
    <li><a href="/src/demos/paper-elements/paper-toggle-button/demo">paper-toggle-button</a></li>
    <li><a href="/src/demos/paper-elements/paper-toolbar/demo">paper-toolbar</a></li>
    <li><a href="/src/demos/paper-elements/paper-tooltip/demo">paper-tooltip</a></li>
    <li><a href="/src/demos/paper-elements/PACKAGENAME/demo">###</a></li>
</ul>
      </div>
    `;
  }
}

window.customElements.define('my-view3', MyView3);
