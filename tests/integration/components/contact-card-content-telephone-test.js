import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | contact-card-content-telephone', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{contact-card-content-telephone}}`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      {{#contact-card-content-telephone}}
        template block text
      {{/contact-card-content-telephone}}
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
