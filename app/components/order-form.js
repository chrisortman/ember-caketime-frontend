import Ember from 'ember';
import OrderItem from 'caketime-frontend/models/order-item';

export default Ember.Component.extend({
  fulfillmentMethods: ['unknown','delivery','pickup'],

  showDeliveryAddress: Ember.computed.equal('order.fulfillmentMethod','delivery'),

  previewImageSrc: 'http://www.newton.ac.uk/files/covers/968361.jpg',

  actions: {
    changeImage(url) {
      this.set('previewImageSrc', URL.createObjectURL(url) );
    },

    addNewOrderItem() {
      const item = OrderItem.create();
      this.get('order').items.pushObject(item);
    }
  }
});
