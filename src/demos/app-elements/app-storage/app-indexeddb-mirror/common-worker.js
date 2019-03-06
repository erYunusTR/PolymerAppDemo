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
import {resolveUrl} from '@polymer/polymer/lib/utils/resolve-url.js';

var WEB_WORKERS = {};
var HAS_SHARED_WORKER = typeof SharedWorker !== 'undefined';
var HAS_WEB_WORKER = typeof Worker !== 'undefined';
// Use case only for Polymer 1
var currentScript = document._currentScript || document.currentScript;
var baseUriCurrentScript;
var workerScopeUrl;

// Polymer 1 and no HTML Imports
if (currentScript) {
  baseUriCurrentScript = currentScript.ownerDocument.baseURI;
}

/**
 * A proxy class for creating `SharedWorker` if available. If not available,
 * doubles as a `SharedWorker`-like wrapper for commonly held instances of
 * `WebWorker`.
 *
 * When creating `WebWorker` instances, only one `WebWorker` will be created
 * per value of `workerUrl`. The `WebWorker` instance will be shared amongst
 * all intances of `CommonWorker`, but a unique `MessageChannel` will be
 * created for each instance of `CommonWorker` in order to emulate the
 * unique `port` available to every reference to a `SharedWorker`.
 *
 * `WebWorker` instances can listen for a global `connect` event that is
 * semantically similar to the spec'd `connect` event in a `SharedWorker`.
 */
export class CommonWorker {
  /**
   * @param {string} workerUrl The URL of the worker script to create a worker
   * instance with.
   * @param {string=} baseUri The base uri of app-storage/app-indexeddb-mirror
   */
  constructor(workerUrl, baseUri) {
    if (HAS_SHARED_WORKER) {
      return new SharedWorker(workerUrl);

    } else if (HAS_WEB_WORKER) {
      if (!WEB_WORKERS.hasOwnProperty(workerUrl)) {
        if (!workerScopeUrl) {
          if (typeof baseUri !== 'string') {
            baseUri = baseUriCurrentScript;
          }

          workerScopeUrl = resolveUrl('common-worker-scope.js', baseUri);
        }

        WEB_WORKERS[workerUrl] = new Worker(workerScopeUrl + '?' + workerUrl);
      }

    } else {
      console.error(
          'This browser does not support SharedWorker or' +
          'WebWorker, but at least one of those two features is required for' +
          'CommonWorker to do its thing.');
    }

    this.channel = new MessageChannel();
    this.webWorker = WEB_WORKERS[workerUrl];

    if (this.webWorker) {
      this.webWorker.postMessage(
          {'type': 'common-worker-connect'}, [this.channel.port2]);
    }
  }

  /**
   * @type {MessagePort} A port that is unique to each instance of
   * CommonWorker. Messages posted to this port can be received inside of
   * the worker instance.
   */
  get port() {
    return this.channel.port1;
  }

  /**
   * A proxy method that forwards all calls to the backing `WebWorker`
   * instance.
   *
   * @param {String|string|undefined} eventType The event to listen for
   * @param {Function} listenerFunction The function to be attached to the event
   * @param {Object=} options addEventListener Options object
   */
  addEventListener(eventType, listenerFunction, options) {
    if (this.webWorker) {
      return this.webWorker.addEventListener.apply(this.webWorker, arguments);
    }
  }

  /**
   * A proxy method that forwards all calls to the backing `WebWorker`
   * instance.
   *
   * @param {...*} removeEventListenerArgs The arguments to call the same
   * method on the `WebWorker` with.
   */
  removeEventListener(removeEventListenerArgs) {
    if (this.webWorker) {
      return this.webWorker.removeEventListener.apply(
          this.webWorker, arguments);
    }
  }
};
