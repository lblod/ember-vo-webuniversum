import TextField from '@ember/component/text-field';
import layout from '../templates/components/wu-datepicker-input';
import { computed } from '@ember/object';
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
  didInsertElement() {
    this._super(...arguments);
    vl.datepicker.dress(this.element);
  },
  value: computed('rawValue', {
    set(key, value){
      let date = moment(value, this.get('dateFormat')).toDate();
      this.set('rawValue', date);
      return moment(date).format(this.get('dateFormat'));
    },
    get(){
      if(this.get('rawValue')){
        return moment(this.get('rawValue')).format(this.get('dateFormat'));
      }
    }
  })
});
