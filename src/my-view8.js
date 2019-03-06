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

class MyView8 extends PolymerElement {
    static get template() {
        return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <div class="circle">8</div>
        <h3>Neon Elements</h3>
<ul id="menu8">
    <li><a href="/src/demos/neon-elements/neon-animation/demo" target="_blank">neon-animation</a></li>
    <ul>
    <li><a href="/src/demos/neon-elements/neon-animation/demo/card" target="_blank">card</a></li>
    <li><a href="/src/demos/neon-elements/neon-animation/demo/declarative" target="_blank">declarative</a></li>
    <li><a href="/src/demos/neon-elements/neon-animation/demo/doc" target="_blank">doc</a></li>
    <li><a href="/src/demos/neon-elements/neon-animation/demo/dropdown" target="_blank">dropdown</a></li>
    <li><a href="/src/demos/neon-elements/neon-animation/demo/grid" target="_blank">grid</a></li>
    <li><a href="/src/demos/neon-elements/neon-animation/demo/list" target="_blank">list</a></li>
    <li><a href="/src/demos/neon-elements/neon-animation/demo/load" target="_blank">load</a></li>
    <li><a href="/src/demos/neon-elements/neon-animation/demo/tiles" target="_blank">tiles</a></li>
    <li><a href="/src/demos/neon-elements/neon-animation/demo/PACKAGENAME" target="_blank">###</a></li>
    </ul>
    <li><a href="/src/demos/neon-elements/PACKAGENAME/demo" target="_blank">###</a></li>
</ul>
      </div>
    `;
    }
}

window.customElements.define('my-view8', MyView8);
