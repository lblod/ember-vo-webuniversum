import Component from '@ember/component';
import layout from '../templates/components/wu-datepicker';

/**
 * Webuniversum datepicker
 *
 * @module vo-webuniversum
 * @class WuDatepicker
 * @extends Ember.Component
*/
export default Component.extend({
  layout,
  tagName: 'form',
  classNames: ['form'],

  /**
   * Placeholder of the datepicker input field
   *
   * @property placeholder
   * @type string
   * @public
  */
  placeholder: null,

  /**
   * Minimal date of the datepicker input field
   * Format: DD.MM.YYYY
   *
   * @property minDate
   * @type string
   * @public
  */
  minDate: null, // DD.MM.YYYY

  /**
   * Maximal date of the datepicker input field
   * Format: DD.MM.YYYY
   *
   * @property maxDate
   * @type string
   * @public
  */
  maxDate: null, // DD.MM.YYYY

  /**
   * Current selected value in the datepicker
   * Format: DD.MM.YYYY
   *
   * @property value
   * @type string
   * @public
  */
  value: null
});
