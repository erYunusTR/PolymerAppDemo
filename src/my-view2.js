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
    <li><a href="/src/demos/iron-elements/iron-a11y-announcer/demo">iron-a11y-announcer</a></li>
    <li><a href="/src/demos/iron-elements/iron-a11y-keys/demo">iron-a11y-keys</a></li>
    <li><a href="/src/demos/iron-elements/iron-a11y-keys-behavior/demo">iron-a11y-keys-behavior</a></li>
    <li><a href="/src/demos/iron-elements/iron-ajax/demo">iron-ajax</a></li>
    <li><a href="/src/demos/iron-elements/iron-autogrow-textarea/demo">iron-autogrow-textarea</a></li>
    <li><a href="/src/demos/iron-elements/iron-behaviors/demo">iron-behaviors</a></li>
    <li><a href="/src/demos/iron-elements/iron-checked-element-behavior/demo">iron-checked-element-behavior</a></li>
    <li><a href="/src/demos/iron-elements/iron-collapse/demo">iron-collapse</a></li>
    <li><a href="/src/demos/iron-elements/iron-component-page/demo">iron-component-page</a></li>
    <li><a href="/src/demos/iron-elements/iron-demo-helpers/demo">iron-demo-helpers</a></li>
    <li><a href="/src/demos/iron-elements/iron-doc-viewer/demo">iron-doc-viewer</a></li>
    <li><a href="/src/demos/iron-elements/iron-dropdown/demo">iron-dropdown</a></li>
    <li><a href="/src/demos/iron-elements/iron-fit-behavior/demo">iron-fit-behavior</a></li>
    <li><a href="/src/demos/iron-elements/iron-flex-layout/demo">iron-flex-layout</a></li>
    <li><a href="/src/demos/iron-elements/iron-form/demo">iron-form</a></li>
    <li><a href="/src/demos/iron-elements/iron-form-element-behavior/demo">iron-form-element-behavior#no-demo</a></li>
    <li><a href="/src/demos/iron-elements/iron-icon/demo">iron-icon</a></li>
    <li><a href="/src/demos/iron-elements/iron-icons/demo">iron-icons</a></li>
    <li><a href="/src/demos/iron-elements/iron-iconset/demo">iron-iconset</a></li>
    <li><a href="/src/demos/iron-elements/iron-iconset-svg/demo">iron-iconset-svg</a></li>
    <li><a href="/src/demos/iron-elements/iron-image/demo">iron-image</a></li>
    <li><a href="/src/demos/iron-elements/iron-input/demo">iron-input</a></li>
    <li><a href="/src/demos/iron-elements/iron-jsonp-library/demo">iron-jsonp-library</a></li>
    <li><a href="/src/demos/iron-elements/iron-label/demo">iron-label</a></li>
    <li><a href="/src/demos/iron-elements/iron-list/demo">iron-list</a></li>
    <li><a href="/src/demos/iron-elements/iron-location/demo">iron-location</a></li>
    <li><a href="/src/demos/iron-elements/iron-media-query/demo">iron-media-query</a></li>
    <li><a href="/src/demos/iron-elements/iron-menu-behavior/demo">iron-menu-behavior</a></li>
    <li><a href="/src/demos/iron-elements/iron-meta/demo">iron-meta</a></li>
    <li><a href="/src/demos/iron-elements/iron-overlay-behavior/demo">iron-overlay-behavior</a></li>
    <li><a href="/src/demos/iron-elements/iron-pages/demo">iron-pages</a></li>
    <li><a href="/src/demos/iron-elements/iron-range-behavior/demo">iron-range-behavior</a></li>
    <li><a href="/src/demos/iron-elements/iron-resizable-behavior/demo">iron-resizable-behavior</a></li>
    <li><a href="/src/demos/iron-elements/iron-scroll-target-behavior/demo">iron-scroll-target-behavior</a></li>
    <li><a href="/src/demos/iron-elements/iron-scroll-threshold/demo">iron-scroll-threshold</a></li>
    <li><a href="/src/demos/iron-elements/iron-selector/demo">iron-selector</a></li>
    <li><a href="/src/demos/iron-elements/iron-swipeable-container/demo">iron-swipeable-container</a></li>
    <li><a href="/src/demos/iron-elements/iron-test-helpers/demo">iron-test-helpers#no-demo</a></li>
    <li><a href="/src/demos/iron-elements/iron-validatable-behavior/demo">iron-validatable-behavior</a></li>
    <li><a href="/src/demos/iron-elements/iron-validator-behavior/demo">iron-validator-behavior</a></li>
    <li><a href="/src/demos/iron-elements/PACKAGENAME/demo">###</a></li>
</ul>
      </div>
    `;
  }
}

window.customElements.define('my-view2', MyView2);
