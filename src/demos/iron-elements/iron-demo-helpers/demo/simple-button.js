/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
import '@polymer/polymer/polymer-legacy.js';

import {Polymer} from '@polymer/polymer/lib/legacy/polymer-fn.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';

Polymer({
  _template: html`
    <style>
      :host {
        display: inline-block;
        padding: 5px 10px;
        background: var(--button-background, white);
        line-height: 1.2;
        border: 2px solid var(--button-border, #ccc);
        border-radius: 3px;
      }
    </style>
    <div>[[value]]</div>
`,

  is: 'simple-button',

  properties: {
    value: {
      type: String,
    },
  }
});
