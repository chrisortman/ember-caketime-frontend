import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    console.log("FB Index Route model hook");
    if ( this.get('session.isAuthenticated') ) {
      console.log("Call FB /me API");

      return new Ember.RSVP.Promise(function(resolve,reject) {

        FB.api('/me',{}, function(fbResponse) {
          console.log( fbResponse );
          if ( !fbResponse || fbResponse.error ) {
            reject(fbResponse);
          } else {
            resolve(fbResponse);
          }
        });
      });

    }
  },

  authenticationChanged: Ember.observer('session.isAuthenticated', function() {
    this.refresh();
  }),

});
