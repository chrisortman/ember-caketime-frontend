import Ember from 'ember';

export default Ember.Route.extend({
  actions: {

    facebookSignIn() {
      var controller = this.controller;
      // The provider name is passed to `open`
      return this.get('torii').open('facebook-connect').then(
      
      function(authorization){
        // FB.api is now available. authorization contains the UID and
        // accessToken.
        console.log("Authorization", authorization);
        controller.set('hasFacebook', true);

      }, function(error) {
        controller.set('error', error);
      });
    }
  }
});
