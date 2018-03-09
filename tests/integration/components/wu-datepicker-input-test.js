import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('wu-datepicker-input', 'Integration | Component | wu datepicker input', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{wu-datepicker-input}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#wu-datepicker-input}}
      template block text
    {{/wu-datepicker-input}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
