import TextField from '@ember/component/text-field';
import layout from '../templates/components/wu-datepicker-input';
import moment from 'moment';

/* global vl */

// Known bug:
// highlighted date is not correctly update when value is changed
// by an external component
//
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
  rawValue: null,
  dateFormat: 'DD.MM.YYYY',
  didReceiveAttrs(){
    if(this.get('rawValue')){
      let date = moment(this.get('rawValue'));
      if(date.isValid()){
        this.set('value', date.format(this.get('dateFormat')));
        return;
      }
    }
    this.set('value', undefined);
  },
  didInsertElement() {
    this._super(...arguments);
    vl.datepicker.dress(this.element);
  },
  focusOut(){
    let date = moment.utc(this.get('value'), this.get('dateFormat'));
    if(date.isValid()){
      this.set('rawValue', date.toDate());
      this.set('value', date.format(this.get('dateFormat')));
      return;
    }
    this.set('rawValue', undefined);
  }
});
