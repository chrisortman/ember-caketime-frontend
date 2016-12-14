import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';
import wait from 'ember-test-helpers/wait';

moduleForComponent('order-form', 'Integration | Component | order form', {
  integration: true
});

function makeOrder(overrides) {
  var defaults = {
    name: 'Billy Bob',
    notes: 'Wiggly woggly',
    fulfillmentMethod: 'delivery',
    deliveryAddress: 'My house',
  };

  Ember.assign(defaults, overrides);

  return Ember.Object.create(defaults);
}

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });


  this.set('order', makeOrder());

  this.render(hbs`{{order-form order=order}}`);

  assert.equal(this.$('div.customer-name .text').text().trim(), 'Billy Bob');
  assert.equal(this.$('textarea.order-notes').val().trim(), 'Wiggly woggly');
  assert.equal(this.$('select.fulfillment-method').val().trim(), 'delivery');
  assert.equal(this.$('input.delivery-address').val().trim(), 'My house');

});

test('dynamically shows delivery address', function(assert) {
  this.set('order', makeOrder({fulfillmentMethod: 'unknown'}));
  this.render(hbs`{{order-form order=order}}`);
  assert.equal(this.$('select.fulfillment-method').val().trim(), 'unknown');
  assert.notOk( this.$('input.delivery-address').is(':visible') );

  this.$('select.fulfillment-method').val('delivery').trigger('change');
  return wait().then(() => {
    assert.ok( this.$('input.delivery-address').is(':visible') );
  });
});
