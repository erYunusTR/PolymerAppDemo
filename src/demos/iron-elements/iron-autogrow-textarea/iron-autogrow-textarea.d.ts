/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   iron-autogrow-textarea.js
 */

import {IronControlState} from '@polymer/iron-behaviors/iron-control-state.js';

import {IronValidatableBehavior} from '@polymer/iron-validatable-behavior/iron-validatable-behavior.js';

import {Polymer} from '@polymer/polymer/lib/legacy/polymer-fn.js';

import {dom} from '@polymer/polymer/lib/legacy/polymer.dom.js';

import {html} from '@polymer/polymer/lib/utils/html-tag.js';

import {LegacyElementMixin} from '@polymer/polymer/lib/legacy/legacy-element-mixin.js';

/**
 * `iron-autogrow-textarea` is an element containing a textarea that grows in
 * height as more lines of input are entered. Unless an explicit height or the
 * `maxRows` property is set, it will never scroll.
 *
 * Example:
 *
 *     <iron-autogrow-textarea></iron-autogrow-textarea>
 *
 * ### Styling
 *
 * The following custom properties and mixins are available for styling:
 *
 * Custom property | Description | Default
 * ----------------|-------------|----------
 * `--iron-autogrow-textarea` | Mixin applied to the textarea | `{}`
 * `--iron-autogrow-textarea-placeholder` | Mixin applied to the textarea placeholder | `{}`
 */
interface IronAutogrowTextareaElement extends IronValidatableBehavior, IronControlState, LegacyElementMixin, HTMLElement {

  /**
   * Use this property instead of `bind-value` for two-way data binding.
   */
  value: string|number;

  /**
   * This property is deprecated, and just mirrors `value`. Use `value`
   * instead.
   */
  bindValue: string|number;

  /**
   * The initial number of rows.
   */
  rows: number|null|undefined;

  /**
   * The maximum number of rows this element can grow to until it
   * scrolls. 0 means no maximum.
   */
  maxRows: number|null|undefined;

  /**
   * Bound to the textarea's `autocomplete` attribute.
   */
  autocomplete: string|null|undefined;

  /**
   * Bound to the textarea's `autofocus` attribute.
   */
  autofocus: boolean|null|undefined;

  /**
   * Bound to the textarea's `inputmode` attribute.
   */
  inputmode: string|null|undefined;

  /**
   * Bound to the textarea's `placeholder` attribute.
   */
  placeholder: string|null|undefined;

  /**
   * Bound to the textarea's `readonly` attribute.
   */
  readonly: string|null|undefined;

  /**
   * Set to true to mark the textarea as required.
   */
  required: boolean|null|undefined;

  /**
   * The minimum length of the input value.
   */
  minlength: number|null|undefined;

  /**
   * The maximum length of the input value.
   */
  maxlength: number|null|undefined;

  /**
   * Bound to the textarea's `aria-label` attribute.
   */
  label: string|null|undefined;

  /**
   * Returns the underlying textarea.
   */
  readonly textarea: HTMLTextAreaElement;

  /**
   * Returns textarea's selection start.
   */
  selectionStart: number;

  /**
   * Returns textarea's selection end.
   */
  selectionEnd: number;

  /**
   * Returns true if `value` is valid. The validator provided in `validator`
   * will be used first, if it exists; otherwise, the `textarea`'s validity
   * is used.
   *
   * @returns True if the value is valid.
   */
  validate(): boolean;
  attached(): void;
  _bindValueChanged(bindValue: any): void;
  _valueChanged(value: any): void;
  _onInput(event: any): void;
  _constrain(tokens: any): any;
  _valueForMirror(): any;
  _updateCached(): void;
}

export {IronAutogrowTextareaElement};

declare global {

  interface HTMLElementTagNameMap {
    "iron-autogrow-textarea": IronAutogrowTextareaElement;
  }
}
