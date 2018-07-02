import Component from '@ember/component';
import layout from '../templates/components/wu-radio-button';

export default Component.extend({
  layout,
  tagName: 'label',
  attributeBindings: [
    'disabled'
  ],
  classNames: ['radio'],
  classNameBindings: [
    'isBlock:radio--block',
    'disabled:radio--disabled',
    'error:radio--error'
  ],
  disabled: false,
  isBlock: false,
  error: null,
  label: null,
  value: null,
  onChange: null,

  actions: {
    changeValue(event) {
      if (this.onChange)
        this.onChange(event.target.value);
    }
  }
});
