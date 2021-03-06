/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   iron-menu-behavior.js
 */

import {IronA11yKeysBehavior} from '@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js';

import {IronMultiSelectableBehavior} from '@polymer/iron-selector/iron-multi-selectable.js';

import {IronSelectableBehavior} from '@polymer/iron-selector/iron-selectable.js';

import {dom} from '@polymer/polymer/lib/legacy/polymer.dom.js';

/**
 * `IronMenuBehavior` implements accessible menu behavior.
 */
interface IronMenuBehavior extends IronMultiSelectableBehavior, IronA11yKeysBehavior {
  keyBindings: object;

  /**
   * Returns the currently focused item.
   */
  readonly focusedItem: object|null;

  /**
   * The attribute to use on menu items to look up the item title. Typing the
   * first letter of an item when the menu is open focuses that item. If
   * unset, `textContent` will be used.
   */
  attrForItemTitle: string|null|undefined;
  disabled: boolean;
  hostAttributes: object|null;
  attached(): void;

  /**
   * Selects the given value. If the `multi` property is true, then the selected
   * state of the `value` will be toggled; otherwise the `value` will be
   * selected.
   *
   * @param value the value to select.
   */
  select(value: string|number): void;

  /**
   * Mutates items in the menu based on provided selection details, so that
   * all items correctly reflect selection state.
   *
   * @param item An item in the menu.
   * @param isSelected True if the item should be shown in a
   * selected state, otherwise false.
   */
  _applySelection(item: Element|null, isSelected: boolean): void;

  /**
   * override _activateHandler
   */
  _activateHandler(event: any): void;

  /**
   * Resets all tabindex attributes to the appropriate value based on the
   * current selection state. The appropriate value is `0` (focusable) for
   * the default selected item, and `-1` (not keyboard focusable) for all
   * other items. Also sets the correct initial values for aria-selected
   * attribute, true for default selected item and false for others.
   */
  _resetTabindices(): void;

  /**
   * Sets appropriate ARIA based on whether or not the menu is meant to be
   * multi-selectable.
   *
   * @param multi True if the menu should be multi-selectable.
   */
  _updateMultiselectable(multi: boolean): void;

  /**
   * Given a KeyboardEvent, this method will focus the appropriate item in the
   * menu (if there is a relevant item, and it is possible to focus it).
   *
   * @param event A KeyboardEvent.
   */
  _focusWithKeyboardEvent(event: KeyboardEvent|null): void;
  _clearSearchText(): void;

  /**
   * Focuses the previous item (relative to the currently focused item) in the
   * menu, disabled items will be skipped.
   * Loop until length + 1 to handle case of single item in menu.
   */
  _focusPrevious(): void;

  /**
   * Focuses the next item (relative to the currently focused item) in the
   * menu, disabled items will be skipped.
   * Loop until length + 1 to handle case of single item in menu.
   */
  _focusNext(): void;

  /**
   * Discretely updates tabindex values among menu items as the focused item
   * changes.
   *
   * @param focusedItem The element that is currently focused.
   * @param old The last element that was considered focused, if
   * applicable.
   */
  _focusedItemChanged(focusedItem: Element|null, old: Element|null): void;

  /**
   * A handler that responds to mutation changes related to the list of items
   * in the menu.
   *
   * @param event An event containing mutation records as its
   * detail.
   */
  _onIronItemsChanged(event: CustomEvent|null): void;

  /**
   * Handler that is called when a shift+tab keypress is detected by the menu.
   *
   * @param event A key combination event.
   */
  _onShiftTabDown(event: CustomEvent|null): void;

  /**
   * Handler that is called when the menu receives focus.
   *
   * @param event A focus event.
   */
  _onFocus(event: FocusEvent|null): void;

  /**
   * Handler that is called when the up key is pressed.
   *
   * @param event A key combination event.
   */
  _onUpKey(event: CustomEvent|null): void;

  /**
   * Handler that is called when the down key is pressed.
   *
   * @param event A key combination event.
   */
  _onDownKey(event: CustomEvent|null): void;

  /**
   * Handler that is called when the esc key is pressed.
   *
   * @param event A key combination event.
   */
  _onEscKey(event: CustomEvent|null): void;

  /**
   * Handler that is called when a keydown event is detected.
   *
   * @param event A keyboard event.
   */
  _onKeydown(event: KeyboardEvent|null): void;

  /**
   * Updates this element's tab index when it's enabled/disabled.
   */
  _disabledChanged(disabled: boolean): void;
}

declare const IronMenuBehavior: object;

export {IronMenuBehavior};
