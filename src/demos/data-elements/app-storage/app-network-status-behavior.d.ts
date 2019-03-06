/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   app-network-status-behavior.js
 */

export {AppNetworkStatusBehavior};

/**
 * `Polymer.AppNetworkStatusBehavior` tracks the status of whether the browser
 * is online or offline. True if the browser is online, and false if the browser
 * is offline matching the HTML browser state spec.
 */
interface AppNetworkStatusBehavior {

  /**
   * True if the browser is online, and false if the browser is offline
   * matching the HTML browser state spec.
   */
  readonly online: Boolean|null;
  attached(): void;
  detached(): void;

  /**
   * Updates the `online` property to reflect the browser connection status.
   */
  refreshNetworkStatus(): void;
}

declare const AppNetworkStatusBehavior: object;