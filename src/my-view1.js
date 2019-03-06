/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyView1 extends PolymerElement {
    static get template() {
        return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <div class="circle">1</div>
        <h3>App Elements</h3>
<ul id="menu1">
    <li><a href="/src/demos/app-elements/app-layout/demo">app-layout</a></li>
    <ul>
    <li><a href="/src/demos/app-elements/app-layout/app-box/demo">app-box</a></li>
    <li><a href="/src/demos/app-elements/app-layout/app-drawer/demo">app-drawer</a></li>
    <li><a href="/src/demos/app-elements/app-layout/app-drawer-layout/demo">app-drawer-layout</a></li>
    <li><a href="/src/demos/app-elements/app-layout/app-grid/demo">app-grid</a></li>
    <li><a href="/src/demos/app-elements/app-layout/app-header/demo">app-header</a></li>
    <li><a href="/src/demos/app-elements/app-layout/app-header-layout/demo">app-header-layout</a></li>
    <li><a href="/src/demos/app-elements/app-layout/app-layout-behavior/demo">app-layout-behavior#no-demo</a></li>
    <li><a href="/src/demos/app-elements/app-layout/app-scroll-effects/demo">app-scroll-effects#no-demo</a></li>
    <li><a href="/src/demos/app-elements/app-layout/app-toolbar/demo">app-toolbar</a></li>
    <li><a href="/src/demos/app-elements/app-layout/PACKAGENAME/demo">###</a></li>
    </ul>
    <li><a href="/src/demos/app-elements/app-localize-behavior/demo">app-localize-behavior</a></li>
    <li><a href="/src/demos/app-elements/app-media/demo">app-media</a></li>
    <li><a href="/src/demos/app-elements/app-route/demo">app-route</a></li>
    <li><a href="/src/demos/app-elements/app-storage/demo">app-storage#no-demo</a></li>
    <li><a href="/src/demos/app-elements/PACKAGENAME/demo">###</a></li>
</ul>
      </div>
    `;
    }
}

window.customElements.define('my-view1', MyView1);
