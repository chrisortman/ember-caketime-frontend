import Ember from 'ember';

export default Ember.Object.extend({
  open: function(authentication){
    var userId = authentication.userId;
    return new Ember.RSVP.Promise(function(resolve){
      console.log("APplication adapter", authentication);
      resolve({facebookUserId: userId, facebookAccessToken: authentication.accessToken});
      // Ember.$.ajax({
      //   url: 'api/session',
      //   data: { 'facebook-auth-code': authorizationCode },
      //   dataType: 'json',
      //   success: Ember.run.bind(null, resolve),
      //   error: Ember.run.bind(null, reject)
      // });
    }).then(function(user){
      // The returned object is merged onto the session (basically). Here
      // you may also want to persist the new session with cookies or via
      // localStorage.
      return {
        currentUser: user
      };
    });
  },

  fetch: function() {
    console.log("Application Adapter Fetch", arguments);
    return new Ember.RSVP.Promise(function(resolve) {
      resolve( true );
    });
  },

});
