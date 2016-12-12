import Ember from 'ember';
import OrderItem from 'caketime-frontend/models/order-item';

export default Ember.Component.extend({
  fulfillmentMethods: ['unknown','delivery','pickup'],

  showDeliveryAddress: Ember.computed.equal('order.fulfillmentMethod','delivery'),

  previewImageSrc: 'http://www.newton.ac.uk/files/covers/968361.jpg',

  customerChoices: [],

  actions: {
    changeImage(url) {
      this.set('previewImageSrc', URL.createObjectURL(url) );
    },

    addNewOrderItem() {
      const item = OrderItem.create();
      this.get('order').items.pushObject(item);
    },

    customerSelected(arg) {
      if ( arg === "facebook-connect" ) {
        return this.attrs.facebookSignIn().then(() => {
          console.log("After Action", FB.api);
          FB.api('/me', {fields: 'last_name, birthday, friends'} ,(response) => {
            console.log(response);
            this.set('customerChoices',['Lincoln','Preston','Haleigh']);
          });

        });
      } 
      console.log(arg);
    },
  }
});
