import Ember from 'ember';

// Converts a user model to the
// format expected by the Torii
// session service
function userToSession(user) {
  return {
    currentUser: user
  };
}

export default Ember.Object.extend({

  store: Ember.inject.service(),

  open: function(authentication){
    console.log("APplication adapter", authentication);
    const store = this.get('store');

    const facebookAuth = {
      facebookUserId: authentication.userId,
      facebookAccessToken: authentication.accessToken
    };

    const userRecord = store.createRecord('user', {
      id: 'current-user',
      facebookAuth: facebookAuth,
    });

    return userRecord.save().then( userToSession );

  },

  fetch: function() {
    console.log("Application Adapter Fetch", arguments);
    const store = this.get('store');
    return store.findRecord('user', 'current-user').then( userToSession );

  },

});
