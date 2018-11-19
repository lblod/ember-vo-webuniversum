import Component from '@ember/component';
import layout from '../templates/components/wu-wizard-progressbar';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  tagName: '',
  actions: {
    setStep(step) {
      this.setStep(step);
    }
  }
});
