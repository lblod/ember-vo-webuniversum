import TextField from '@ember/component/text-field';
import layout from '../templates/components/wu-datepicker-input';
/* global vl */

// Known bug:
// highlighted date is not correctly update when value is changed
// by an external component
// See https://github.com/dbushell/Pikaday/issues/634

export default TextField.extend({
  layout,
  attributeBindings: [
    'data-datepicker',
    'minDate:data-datepicker-min',
    'maxDate:data-datepicker-max'
  ],
  'data-datepicker': true,
  minDate: null,
  maxDate: null,
  value: null,
  didInsertElement() {
    this._super(...arguments);
    vl.datepicker.dress(this.element);
  }
});
