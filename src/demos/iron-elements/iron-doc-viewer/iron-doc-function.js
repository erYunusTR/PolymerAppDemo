/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
import '@polymer/polymer/polymer-legacy.js';

import '@polymer/marked-element/marked-element.js';
import './iron-doc-viewer-styles.js';
import {Polymer} from '@polymer/polymer/lib/legacy/polymer-fn.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';
/**
 * Renders documentation describing a function or method.
 */
Polymer({
  _template: html`
    <style include="iron-doc-viewer-styles"></style>
    <style>
      :host {
        display: block;
      }

      .paramName {
        color: var(--iron-doc-accent-color-internal);
      }

      .paramType, .returnType {
        color: #666;
      }

      #paramList .paramName {
        color: #666;
        margin-right: 5px;
      }

      #paramList marked-element,
      #paramList .markdown-html,
      #paramList .markdown-html p {
        display: inline-block;
        margin: 0;
      }

      .static {
        color: #666;
      }

      .privacy {
        color: #666;
      }

      .import-path {
        padding-left: 25px;
      }
    </style>

    <code id="signature">
      <span class="privacy">[[_privacy]]</span>
      <span class="static" hidden\$="[[!static]]">static</span>

      <a href\$="#[[anchorId]]" id="funcName" class="name deeplink">
        [[descriptor.name]]<!--
   --></a><!--
   -->(<span class="funcParams"><!--
     --><template is="dom-repeat" items="[[descriptor.params]]" as="p"><!--
       --><span hidden\$="[[!index]]">, </span><!--
       --><span class="paramName">[[p.name]]</span><!--
       --><span hidden\$="[[!p.type]]">:
            <span class="paramType">[[p.type]]</span><!--
       --></span><!--
     --></template><!--
   --></span>)<!--
   --><span hidden\$="[[!descriptor.return]]">:
        <span class="returnType">[[descriptor.return.type]]</span>
      </span>
    </code>

    <p hidden\$="[[!descriptor.inheritedFrom]]" class="inheritedFrom">
      Inherited from <code>[[descriptor.inheritedFrom]]</code>
    </p>

    <div class="import-path" hidden\$="[[!addImportPath]]">Requires import: <code>[[descriptor.sourceRange.file]]</code></div>

    <marked-element sanitize markdown="[[descriptor.description]]" hidden\$="[[!descriptor.description]]">
      <div slot="markdown-html" class="markdown-html"></div>
    </marked-element>

    <ul id="paramList" hidden\$="[[!_showParamList]]">
      <template is="dom-repeat" items="[[descriptor.params]]">
        <li>
          <code class="paramName">[[item.name]]</code>
          <marked-element sanitize markdown="[[item.description]]" hidden\$="[[!item.description]]">
           <div slot="markdown-html" class="markdown-html"></div>
         </marked-element>
        </li>
      </template>
    </ul>
`,

  is: 'iron-doc-function',

  properties: {
    anchorId: {type: String, reflectToAttribute: true, value: ''},

    static: {type: Boolean, value: false},

    _privacy: {type: String, computed: '_computePrivacy(descriptor)'},

    _showParamList:
        {type: Boolean, computed: '_computeShowParamList(descriptor)'},

    addImportPath: {type: Boolean, value: false}
  },

  _computePrivacy: function(descriptor) {
    if (!descriptor || !descriptor.privacy || descriptor.privacy === 'public') {
      return '';
    }
    return descriptor.privacy;
  },

  _computeShowParamList: function(descriptor) {
    if (descriptor && descriptor.params) {
      for (var i = 0; i < descriptor.params.length; i++) {
        if (descriptor.params[i].description) {
          return true;
        }
      }
    }
    return false;
  }
});
