import Ember from 'ember';

export default Ember.Component.extend({
  fulfillmentMethods: ['unknown','delivery','pickup'],

  showDeliveryAddress: Ember.computed.equal('order.fulfillmentMethod','delivery'),

});
