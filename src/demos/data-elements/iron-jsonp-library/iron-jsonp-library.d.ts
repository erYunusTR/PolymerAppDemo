/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   iron-jsonp-library.js
 */

import {Polymer} from '@polymer/polymer/lib/legacy/polymer-fn.js';

export {IronJsonpLibraryBehavior};

/**
 * `IronJsonpLibraryBehavior` loads a jsonp library.
 * Multiple components can request same library, only one copy will load.
 *
 * Some libraries require a specific global function be defined.
 * If this is the case, specify the `callbackName` property.
 *
 * You should use an HTML Import to load library dependencies
 * when possible instead of using this element.
 */
interface IronJsonpLibraryBehavior {

  /**
   * True if library has been successfully loaded
   */
  readonly libraryLoaded: boolean|null|undefined;

  /**
   * Not null if library has failed to load
   */
  readonly libraryErrorMessage: string|null|undefined;
  _libraryUrlChanged(libraryUrl: any): void;
  _libraryLoadCallback(err: any, result: any): void;

  /**
   * loads the library, and fires this.notifyEvent upon completion
   */
  _loadLibrary(): void;
  ready(): void;
}

declare const IronJsonpLibraryBehavior: object;

declare class Loader {
}

import {LegacyElementMixin} from '@polymer/polymer/lib/legacy/legacy-element-mixin.js';

/**
 * Loads specified jsonp library.
 *
 *   Example:
 *
 *       <iron-jsonp-library
 *         library-url="https://apis.google.com/js/plusone.js?onload=%%callback%%"
 *         notify-event="api-load"
 *         library-loaded="{{loaded}}"></iron-jsonp-library>
 *
 *   Will emit 'api-load' event when loaded, and set 'loaded' to true
 *
 *   Implemented by  Polymer.IronJsonpLibraryBehavior. Use it
 *   to create specific library loader elements.
 */
interface IronJsonpLibraryElement extends IronJsonpLibraryBehavior, LegacyElementMixin, HTMLElement {

  /**
   * Library url. Must contain string `%%callback%%`.
   *
   * `%%callback%%` is a placeholder for jsonp wrapper function name
   *
   * Ex: https://maps.googleapis.com/maps/api/js?callback=%%callback%%
   */
  libraryUrl: string|null|undefined;

  /**
   * Set if library requires specific callback name.
   * Name will be automatically generated if not set.
   */
  callbackName: string|null|undefined;

  /**
   * event with name specified in 'notifyEvent' attribute
   * will fire upon successful load
   */
  notifyEvent: string|null|undefined;
}

export {IronJsonpLibraryElement};

declare global {

  interface HTMLElementTagNameMap {
    "iron-jsonp-library": IronJsonpLibraryElement;
  }
}