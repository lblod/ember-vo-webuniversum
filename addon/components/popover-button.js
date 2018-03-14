import Component from '@ember/component';
import layout from '../templates/components/popover-button';

export default Component.extend({
  layout,
  classNames:['popover','popover--right', 'js-popover'],
  classNameBindings:['open:js-popover--open'],
  title: '',
  open: false,
  actions: {
    toggle() {
      this.toggleProperty('open');
    }
  }
});
