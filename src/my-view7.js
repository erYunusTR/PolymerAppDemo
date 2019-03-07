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

class MyView7 extends PolymerElement {
    static get template() {
        return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <div class="circle">7</div>
        <h3>Layout Elements</h3>
<ul id="menu7">
    <li><a href="/src/demos/layout-elements/app-layout/demo" target="_blank">app-layout</a></li>
    <ul>
    <li><a href="/src/demos/layout-elements/app-layout/app-box/demo" target="_blank">app-box</a></li>
    <li><a href="/src/demos/layout-elements/app-layout/app-drawer/demo" target="_blank">app-drawer</a></li>
    <li><a href="/src/demos/layout-elements/app-layout/app-drawer-layout/demo" target="_blank">app-drawer-layout</a></li>
    <li><a href="/src/demos/layout-elements/app-layout/app-grid/demo" target="_blank">app-grid</a></li>
    <li><a href="/src/demos/layout-elements/app-layout/app-header/demo" target="_blank">app-header</a></li>
    <li><a href="/src/demos/layout-elements/app-layout/app-header-layout/demo" target="_blank">app-header-layout</a></li>
    <li><a href="/src/demos/layout-elements/app-layout/app-layout-behavior/demo" target="_blank">app-layout-behavior#no-demo</a></li>
    <li><a href="/src/demos/layout-elements/app-layout/app-scroll-effects/demo" target="_blank">app-scroll-effects#no-demo</a></li>
    <li><a href="/src/demos/layout-elements/app-layout/app-toolbar/demo" target="_blank">app-toolbar</a></li>
    <li><a href="/src/demos/layout-elements/app-layout/PACKAGENAME/demo" target="_blank">###</a></li>
    </ul>
    <li><a href="/src/demos/layout-elements/iron-collapse/demo" target="_blank">iron-collapse</a></li>
    <li><a href="/src/demos/layout-elements/iron-fit-behavior/demo" target="_blank">iron-fit-behavior</a></li>
    <li><a href="/src/demos/layout-elements/iron-flex-layout/demo" target="_blank">iron-flex-layout</a></li>
    <li><a href="/src/demos/layout-elements/iron-list/demo" target="_blank">iron-list</a></li>
    <li><a href="/src/demos/layout-elements/iron-media-query/demo" target="_blank">iron-media-query</a></li>
    <li><a href="/src/demos/layout-elements/iron-overlay-behavior/demo" target="_blank">iron-overlay-behavior</a></li>
    <li><a href="/src/demos/layout-elements/iron-swipeable-container/demo" target="_blank">iron-swipeable-container</a></li>
    <li><a href="/src/demos/layout-elements/font-roboto-local/demo" target="_blank">font-roboto-local</a></li>
    <li><a href="/src/demos/layout-elements/prism-element/demo" target="_blank">prism-element</a></li>
    <li><a href="/src/demos/layout-elements/PACKAGENAME/demo" target="_blank">###</a></li>
</ul>
      </div>
    `;
    }
}

window.customElements.define('my-view7', MyView7);
