import Ember from 'ember';

export default Ember.Service.extend({

  myProfile() {

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
});
