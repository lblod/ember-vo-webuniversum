import Component from '@ember/component';
import { alias } from '@ember/object/computed';
import layout from '../templates/components/wu-icon';

let WuIconComponent = Component.extend({
  layout,
  tagName: 'i',
  classNames: ['vi'],
  classNameBindings: ['iconClass'],
  iconClass: alias('icon')
});

WuIconComponent.reopenClass({
  positionalParams: ['icon']
});

export default WuIconComponent;
