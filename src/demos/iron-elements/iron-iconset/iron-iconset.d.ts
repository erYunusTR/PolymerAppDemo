/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   iron-iconset.js
 */

import {IronMeta} from '@polymer/iron-meta/iron-meta.js';

import {Polymer} from '@polymer/polymer/lib/legacy/polymer-fn.js';

import {dom} from '@polymer/polymer/lib/legacy/polymer.dom.js';

import {LegacyElementMixin} from '@polymer/polymer/lib/legacy/legacy-element-mixin.js';

/**
 * The `iron-iconset` element allows users to define their own icon set using
 * an image file. (To create an iconset using SVG icons, see
 * [`iron-iconset-svg`](iron-iconset-svg).)
 *
 * The `src` property specifies the url of the icon image. Multiple icons may
 * be included in this image and they may be organized into rows. The `icons`
 * property is a space separated list of names corresponding to the icons. The
 * names must be ordered as the icons are ordered in the icon image. Icons are
 * expected to be square and are the size specified by the `size` property. The
 * `width` property corresponds to the width of the icon image and must be
 * specified if icons are arranged into multiple rows in the image.
 *
 * All `iron-iconset` elements are available for use by other `iron-iconset`
 * elements via a database keyed by id. Typically, an element author that wants
 * to support a set of custom icons uses a `iron-iconset` to retrieve and use
 * another, user-defined icon set, or simply uses the [`iron-icon`](iron-icon)
 * element to display an icon by specifying its icon set name and id.
 *
 * Example:
 *
 *     <iron-iconset id="my-icons" src="my-icons.png" width="96" size="24"
 *         icons="location place starta stopb bus car train walk">
 *     </iron-iconset>
 *
 * This will automatically register the icon set "my-icons" to the iconset
 * database. To use these icons from within another element, make a
 * `iron-iconset` element and call the `byId` method to retrieve a given
 * iconset. To apply a particular icon to an element, use the `applyIcon`
 * method. For example:
 *
 *     iconset.applyIcon(iconNode, 'car');
 *
 * Themed icon sets are also supported. The `iron-iconset` can contain child
 * `property` elements that specify a theme with an offsetX and offsetY of the
 * theme within the icon resource. For example.
 *
 *     <iron-iconset id="my-icons" src="my-icons.png" width="96" size="24"
 *         icons="location place starta stopb bus car train walk">
 *       <property theme="special" offsetX="256" offsetY="24"></property>
 *     </iron-iconset>
 *
 * Then a themed icon can be applied like this:
 *
 *     iconset.applyIcon(iconNode, 'car', 'special');
 *
 * See also:
 *
 * - [`iron-iconset-svg`](iron-iconset-svg). Build icon sets with SVG elements.
 * - [`iron-icons`](iron-icons). Predefined icon sets.
 * - [`iron-icon`](iron-icon). Simple element to display an icon.
 */
interface IronIconsetElement extends LegacyElementMixin, HTMLElement {

  /**
   * The URL of the iconset image.
   */
  src: string|null|undefined;

  /**
   * The name of the iconset.
   */
  name: string|null|undefined;

  /**
   * The width of the iconset image. This must only be specified if the
   * icons are arranged into separate rows inside the image.
   */
  width: number|null|undefined;

  /**
   * A space separated list of names corresponding to icons in the iconset
   * image file. This list must be ordered the same as the icon images
   * in the image file.
   */
  icons: string|null|undefined;

  /**
   * The size of an individual icon. Note that icons must be square.
   */
  size: number|null|undefined;

  /**
   * The horizontal offset of the icon images in the inconset src image.
   * This is typically used if the image resource contains additional images
   * beside those intended for the iconset.
   */
  _offsetX: number|null|undefined;

  /**
   * The vertical offset of the icon images in the inconset src image.
   * This is typically used if the image resource contains additional images
   * beside those intended for the iconset.
   */
  _offsetY: number|null|undefined;

  /**
   * Array of fully-qualified names of icons in this set.
   */
  iconNames: any[]|null|undefined;
  hostAttributes: object|null;
  created(): void;
  ready(): void;

  /**
   * Applies an icon to the given element as a css background image. This
   * method does not size the element, and it's usually necessary to set
   * the element's height and width so that the background image is visible.
   *
   * @param element The element to which the icon is applied.
   * @param icon The name or index of the icon to apply.
   * @param theme (optional) The name or index of the icon to apply.
   * @param scale (optional, defaults to 1) Icon scaling factor.
   */
  applyIcon(element: Element|null, icon: string|number, theme?: string, scale?: number): void;

  /**
   * Remove an icon from the given element by undoing the changes effected
   * by `applyIcon`.
   *
   * @param element The element from which the icon is removed.
   */
  removeIcon(element: Element|null): void;
  _mapThemes(): any;
  _srcChanged(src: any): void;
  _nameChanged(name: any): void;
  _prepareIconset(): void;
  _invalidateIconMap(): void;
  _validateIconMap(): void;
  _recomputeIconMap(): void;
  _computeIconNames(icons: any): any;
  _computeIconMap(offsetX: any, offsetY: any, size: any, width: any, iconNames: any): any;

  /**
   * Returns an object containing `offsetX` and `offsetY` properties which
   * specify the pixel location in the iconset's src file for the given
   * `icon` and `theme`. It's uncommon to call this method. It is useful,
   * for example, to manually position a css backgroundImage to the proper
   * offset. It's more common to use the `applyIcon` method.
   *
   * @param identifier The name of the icon or the index of
   * the icon within in the icon image.
   * @param theme The name of the theme.
   * @returns An object specifying the
   *     offset of the given icon within the icon resource file; `offsetX` is
   *     the horizontal offset and `offsetY` is the vertical offset. Both
   *     values are in pixel units.
   */
  _getThemedOffset(identifier: string|number, theme?: string): {offsetX: number, offsetY: number}|null;
  _getIconOffset(identifier: any): any;
  _addIconStyles(element: any, url: any, offset: any, scale: any, size: any, width: any): void;
  _removeIconStyles(style: any): void;
}

export {IronIconsetElement};

declare global {

  interface HTMLElementTagNameMap {
    "iron-iconset": IronIconsetElement;
  }
}
