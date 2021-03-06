/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
import {IronResizableBehavior} from '@polymer/iron-resizable-behavior/iron-resizable-behavior.js';
import {html} from '@polymer/polymer/lib/utils/html-tag.js';
import {Polymer} from '@polymer/polymer/polymer-legacy.js';

/**
`app-media-waveform` is an element that visualizes the data from an analyser
node, such as one produced by `app-media-audio`.

Custom property | Description | Default
----------------|-------------|----------
`--app-media-waveform-background-color` | Background color | `#EF2D5E`
`--app-media-waveform-foreground-color` | Foreground color | `rgba(255, 255, 255, 0.85)`
`--app-media-waveform-stroke-width` | Width of the foreground | `2px`

@group App Elements
@demo demo/index.html
*/
Polymer({
  _template: html`
    <style>
      :host {
        display: block;
        position: relative;
        min-height: 32px;
        background-color: var(--app-media-waveform-background-color, #EF2D5E);
      }

      svg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      path {
        stroke-width: var(--app-media-waveform-stroke-width, 2px);
        stroke: var(--app-media-waveform-foreground-color, rgba(255, 255, 255, 0.85));
        fill: transparent;
      }
    </style>
    <svg id="svg">
      <path id="path"></path>
    </svg>
`,

  is: 'app-media-waveform',
  behaviors: [IronResizableBehavior],

  properties: {
    /**
     * If true, the analyzer will draw for every animation frame. If
     * false, the analyzer will not draw.
     */
    active: {
      type: Boolean,
      value: false,
      observer: '_activeChanged',
    },

    /**
     * An analyser node that should be visualized.
     *
     * @type {AnalyserNode}
     */
    analyser: {
      type: Object,
    },

    /**
     * The computed buffer length of the typed array that will be used to
     * store waveform values.
     */
    bufferLength: {
      type: Number,
      computed: '_computeBufferLength(analyser)',
    },

    /**
     * The computed typed array that is used to temporarily store waveform
     * values for converting into a visualization.
     *
     * @type {!Uint8Array}
     */
    data: {
      type: Object,
      computed: '_computeData(bufferLength)',
    }
  },

  listeners: {'iron-resize': '_updateMetrics'},

  attached: function() {
    this._updateMetrics();
  },

  /**
   * Begin visualizing the waveform. This method will recursively call
   * itself (via requestAnimationFrame) until the element's active
   * property becomes false.
   */
  draw: function() {
    if (!this.active) {
      return;
    }

    if (this._selfRect != null && this.analyser != null) {
      var width = this._selfRect.width;
      var height = this._selfRect.height;
      var midHeight = height / 2;

      this.analyser.getByteTimeDomainData(this.data);

      var path = ['M0,' + midHeight];

      for (var i = 0; i < this.bufferLength; ++i) {
        var offset = this.data[i] / 128.0;
        var x = Math.round(i / this.bufferLength * width);
        var y = Math.round(offset * midHeight);

        path.push('L' + x + ',' + y);
      }

      this.$.path.setAttribute('d', path.join(' '));
    }

    var self = this;
    window.requestAnimationFrame(function() {
      self.draw();
    });
  },

  _activeChanged: function(active) {
    if (active) {
      this.draw();
    }
  },

  _computeBufferLength: function(analyser) {
    if (analyser == null) {
      return 0;
    }

    return analyser.frequencyBinCount;
  },

  _computeData: function(bufferLength) {
    return new Uint8Array(bufferLength);
  },

  _updateMetrics: function() {
    this.debounce('_updateMetrics', function() {
      this._selfRect = this.getBoundingClientRect();
    });
  }
})
