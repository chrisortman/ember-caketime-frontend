import Ember from 'ember';

export default Ember.Component.extend({
  fulfillmentMethods: ['unknown','delivery','pickup'],

  showDeliveryAddress: Ember.computed.equal('order.fulfillmentMethod','delivery'),

  previewImageSrc: 'http://www.newton.ac.uk/files/covers/968361.jpg',

  actions: {
    changeImage(url) {
      this.set('previewImageSrc', URL.createObjectURL(url) );
    }
  }
});
