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

class MyView2 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <div class="circle">2</div>
        <h3>Iron Elements</h3>
<ul id="menu2">
    <li><a href="/src/demos/iron-elements/iron-a11y-announcer/demo" target="_blank">iron-a11y-announcer</a></li>
    <li><a href="/src/demos/iron-elements/iron-a11y-keys/demo" target="_blank">iron-a11y-keys</a></li>
    <li><a href="/src/demos/iron-elements/iron-a11y-keys-behavior/demo" target="_blank">iron-a11y-keys-behavior</a></li>
    <li><a href="/src/demos/iron-elements/iron-ajax/demo" target="_blank">iron-ajax</a></li>
    <li><a href="/src/demos/iron-elements/iron-autogrow-textarea/demo" target="_blank">iron-autogrow-textarea</a></li>
    <li><a href="/src/demos/iron-elements/iron-behaviors/demo" target="_blank">iron-behaviors</a></li>
    <li><a href="/src/demos/iron-elements/iron-checked-element-behavior/demo" target="_blank">iron-checked-element-behavior</a></li>
    <li><a href="/src/demos/iron-elements/iron-collapse/demo" target="_blank">iron-collapse</a></li>
    <li><a href="/src/demos/iron-elements/iron-component-page/demo" target="_blank">iron-component-page</a></li>
    <li><a href="/src/demos/iron-elements/iron-demo-helpers/demo" target="_blank">iron-demo-helpers</a></li>
    <li><a href="/src/demos/iron-elements/iron-doc-viewer/demo" target="_blank">iron-doc-viewer</a></li>
    <li><a href="/src/demos/iron-elements/iron-dropdown/demo" target="_blank">iron-dropdown</a></li>
    <li><a href="/src/demos/iron-elements/iron-fit-behavior/demo" target="_blank">iron-fit-behavior</a></li>
    <li><a href="/src/demos/iron-elements/iron-flex-layout/demo" target="_blank">iron-flex-layout</a></li>
    <li><a href="/src/demos/iron-elements/iron-form/demo" target="_blank">iron-form</a></li>
    <li><a href="/src/demos/iron-elements/iron-form-element-behavior/demo" target="_blank">iron-form-element-behavior#no-demo</a></li>
    <li><a href="/src/demos/iron-elements/iron-icon/demo" target="_blank">iron-icon</a></li>
    <li><a href="/src/demos/iron-elements/iron-icons/demo" target="_blank">iron-icons</a></li>
    <li><a href="/src/demos/iron-elements/iron-iconset/demo" target="_blank">iron-iconset</a></li>
    <li><a href="/src/demos/iron-elements/iron-iconset-svg/demo" target="_blank">iron-iconset-svg</a></li>
    <li><a href="/src/demos/iron-elements/iron-image/demo" target="_blank">iron-image</a></li>
    <li><a href="/src/demos/iron-elements/iron-input/demo" target="_blank">iron-input</a></li>
    <li><a href="/src/demos/iron-elements/iron-jsonp-library/demo" target="_blank">iron-jsonp-library</a></li>
    <li><a href="/src/demos/iron-elements/iron-label/demo" target="_blank">iron-label</a></li>
    <li><a href="/src/demos/iron-elements/iron-list/demo" target="_blank">iron-list</a></li>
    <li><a href="/src/demos/iron-elements/iron-location/demo" target="_blank">iron-location</a></li>
    <li><a href="/src/demos/iron-elements/iron-media-query/demo" target="_blank">iron-media-query</a></li>
    <li><a href="/src/demos/iron-elements/iron-menu-behavior/demo" target="_blank">iron-menu-behavior</a></li>
    <li><a href="/src/demos/iron-elements/iron-meta/demo" target="_blank">iron-meta</a></li>
    <li><a href="/src/demos/iron-elements/iron-overlay-behavior/demo" target="_blank">iron-overlay-behavior</a></li>
    <li><a href="/src/demos/iron-elements/iron-pages/demo" target="_blank">iron-pages</a></li>
    <li><a href="/src/demos/iron-elements/iron-range-behavior/demo" target="_blank">iron-range-behavior</a></li>
    <li><a href="/src/demos/iron-elements/iron-resizable-behavior/demo" target="_blank">iron-resizable-behavior</a></li>
    <li><a href="/src/demos/iron-elements/iron-scroll-target-behavior/demo" target="_blank">iron-scroll-target-behavior</a></li>
    <li><a href="/src/demos/iron-elements/iron-scroll-threshold/demo" target="_blank">iron-scroll-threshold</a></li>
    <li><a href="/src/demos/iron-elements/iron-selector/demo" target="_blank">iron-selector</a></li>
    <li><a href="/src/demos/iron-elements/iron-swipeable-container/demo" target="_blank">iron-swipeable-container</a></li>
    <li><a href="/src/demos/iron-elements/iron-test-helpers/demo" target="_blank">iron-test-helpers#no-demo</a></li>
    <li><a href="/src/demos/iron-elements/iron-validatable-behavior/demo" target="_blank">iron-validatable-behavior</a></li>
    <li><a href="/src/demos/iron-elements/iron-validator-behavior/demo" target="_blank">iron-validator-behavior</a></li>
    <li><a href="/src/demos/iron-elements/PACKAGENAME/demo" target="_blank">###</a></li>
</ul>
      </div>
    `;
  }
}

window.customElements.define('my-view2', MyView2);
