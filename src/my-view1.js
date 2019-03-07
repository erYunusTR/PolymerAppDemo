/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
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
    <li><a href="/src/demos/app-elements/app-layout/demo" target="_blank">app-layout</a></li>
    <ul>
    <li><a href="/src/demos/app-elements/app-layout/app-box/demo" target="_blank">app-box</a></li>
    <li><a href="/src/demos/app-elements/app-layout/app-drawer/demo" target="_blank">app-drawer</a></li>
    <li><a href="/src/demos/app-elements/app-layout/app-drawer-layout/demo" target="_blank">app-drawer-layout</a></li>
    <li><a href="/src/demos/app-elements/app-layout/app-grid/demo" target="_blank">app-grid</a></li>
    <li><a href="/src/demos/app-elements/app-layout/app-header/demo" target="_blank">app-header</a></li>
    <li><a href="/src/demos/app-elements/app-layout/app-header-layout/demo" target="_blank">app-header-layout</a></li>
    <li><a href="/src/demos/app-elements/app-layout/app-layout-behavior/demo" target="_blank">app-layout-behavior#no-demo</a></li>
    <li><a href="/src/demos/app-elements/app-layout/app-scroll-effects/demo" target="_blank">app-scroll-effects#no-demo</a></li>
    <li><a href="/src/demos/app-elements/app-layout/app-toolbar/demo" target="_blank">app-toolbar</a></li>
    <li><a href="/src/demos/app-elements/app-layout/PACKAGENAME/demo" target="_blank">###</a></li>
    </ul>
    <li><a href="/src/demos/app-elements/app-localize-behavior/demo" target="_blank">app-localize-behavior</a></li>
    <li><a href="/src/demos/app-elements/app-media/demo" target="_blank">app-media</a></li>
    <li><a href="/src/demos/app-elements/app-route/demo" target="_blank">app-route</a></li>
    <li><a href="/src/demos/app-elements/app-storage/demo" target="_blank">app-storage#no-demo</a></li>
    <li><a href="/src/demos/app-elements/PACKAGENAME/demo" target="_blank">###</a></li>
</ul>
      </div>
    `;
    }


    static get properties() {
        return {
            title: {
                type: String,
                value: 'App Elements',
            }
        };
    }

    constructor() {
        super();
    }

}

window.customElements.define('my-view1', MyView1);
