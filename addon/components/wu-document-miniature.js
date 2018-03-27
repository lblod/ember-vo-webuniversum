import Component from '@ember/component';
import { assert } from '@ember/debug';
import layout from '../templates/components/wu-document-miniature';

export default Component.extend({
  layout,
  classNames: ['document-miniature'],
  type: null,
  label: null,
  metadata: null,
  didReceiveAttrs() {
    this._super(...arguments);
    assert('{{wu-document-miniature}} requires an `onClick` action or null for no action.', this.get('onClick') !== undefined);
  }
});
