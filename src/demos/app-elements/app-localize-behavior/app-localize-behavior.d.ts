/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   app-localize-behavior.js
 */

export {AppLocalizeBehavior};

/**
 *  `AppLocalizeBehavior` wraps the [format.js](http://formatjs.io/)
 *  library to help you internationalize your application. Note that if you're on
 *  a browser that does not natively support the
 *  [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
 *  object, you must load the polyfill yourself. An example polyfill can
 *  be found [here](https://github.com/andyearnshaw/Intl.js/).
 *
 *  `AppLocalizeBehavior` supports the same
 *  [message-syntax](http://formatjs.io/guides/message-syntax/) of format.js, in
 *  its entirety; use the library docs as reference for the available message
 *  formats and options.
 *
 *  Sample application loading resources from an external file:
 *
 *      import {PolymerElement, html} from '@polymer/polymer';
 *      import {mixinBehaviors} from '@polymer/polymer/lib/legacy/class.js';
 *      import {AppLocalizeBehavior} from
 *          '@polymer/app-localize-behavior/app-localize-behavior.js';
 *
 *      class SampleElement extends  extends mixinBehaviors(
 *          [AppLocalizeBehavior], PolymerElement) {
 *        static get template() {
 *          return html`
 *            <div>{{localize('hello', 'name', 'Batman')}}</div>
 *          `;
 *        }
 *        static get properties() {
 *          return {
 *            language: { value: 'en' },
 *          }
 *        }
 *
 *        function attached() {
 *          this.loadResources(this.resolveUrl('locales.json'));
 *        }
 *      }
 *      customElements.define('sample-element', SampleElement);
 *
 *  If the resources stored in your external file are for a single language and
 *  so are not nested inside any language keys, you can pass an optional
 *  `language` parameter to store the fetched resources inside that key.
 *
 *  This complements the optional third parameter, `merge`, nicely: If you pass
 *  `merge = true`, the fetched resources will be merged into any existing
 *  resources rather than clobbering them.
 *
 *  This is also useful for storing resources for different parts of a page that
 *  the user might or might not see at the same time in different files, so that
 *  the user can fetch only the needed resources on-demand, and doesn't have to
 *  load any resources they'll never see anyway. For example, you could store
 *  your resources for your global nav, homepage, and FAQ page in 3 different
 *  files. When a user requests the homepage, both the global nav and the
 *  homepage resources are fetched and merged together, since they both appear
 *  on the page at the same time, but you spare the user from fetching the
 *  unneeded FAQ resources.
 *
 *
 *  Example:
 *
 *      attached: function() {
 *        this.loadResources(
 *          // Only contains the flattened "es" translations:
 *          'locales/es.json',  // {"hi": "hola"}
 *          'es',               // unflatten -> {"es": {"hi": "hola"}}
 *          true                // merge so existing resources won't be clobbered
 *        );
 *      }
 *
 *  Alternatively, you can also inline your resources inside the app itself:
 *
 *      import {PolymerElement, html} from '@polymer/polymer';
 *      import {mixinBehaviors} from '@polymer/polymer/lib/legacy/class.js';
 *      import {AppLocalizeBehavior} from
 *          '@polymer/app-localize-behavior/app-localize-behavior.js';
 *
 *      class SampleElement extends  extends mixinBehaviors(
 *          [AppLocalizeBehavior], PolymerElement) {
 *        static get template() {
 *          return html`
 *            <div>{{localize('hello', 'name', 'Batman')}}</div>
 *          `;
 *        }
 *
 *        static get properties() {
 *          return {
 *            language: { value: 'en' },
 *            resources: {
 *              value: function() {
 *                return {
 *                  'en': { 'hello': 'My name is {name}.' },
 *                  'fr': { 'hello': 'Je m\'appelle {name}.' }
 *                }
 *            },
 *          }
 *        }
 *
 *        function attached() {
 *          this.loadResources(this.resolveUrl('locales.json'));
 *        }
 *      }
 *      customElements.define('sample-element', SampleElement);
 *
 *  
 */
interface AppLocalizeBehavior {

  /**
   * The language used for translation.
   */
  language: string|null|undefined;

  /**
   * The dictionary of localized messages, for each of the languages that
   *      are going to be used. See http://formatjs.io/guides/message-syntax/ for
   *      more information on the message syntax.
   *
   *      For example, a valid dictionary would be:
   *      this.resources = {
   *       'en': { 'greeting': 'Hello!' }, 'fr' : { 'greeting': 'Bonjour!' }
   *      }
   */
  resources: object|null|undefined;

  /**
   * Optional dictionary of user defined formats, as explained here:
   *      http://formatjs.io/guides/message-syntax/#custom-formats
   *
   *      For example, a valid dictionary of formats would be:
   *      this.formats = {
   *         number: { USD: { style: 'currency', currency: 'USD' } }
   *      }
   */
  formats: object|null|undefined;

  /**
   * If true, will use the provided key when
   *      the translation does not exist for that key.
   */
  useKeyIfMissing: boolean|null|undefined;

  /**
   * Translates a string to the current `language`. Any parameters to the
   *      string should be passed in order, as follows:
   *      `localize(stringKey, param1Name, param1Value, param2Name, param2Value)`
   */
  readonly localize: Function|null|undefined;

  /**
   * If true, will bubble up the event to the parents
   */
  bubbleEvent: boolean|null|undefined;
  loadResources(path: any, language: any, merge: any): void;
}

declare const AppLocalizeBehavior: object;
