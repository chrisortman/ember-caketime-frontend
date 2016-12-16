import Ember from 'ember';

export default Ember.Route.extend({

  graphApi: Ember.inject.service('graph-api'),

  model() {
    console.log("FB Index Route model hook");
    if ( this.get('session.isAuthenticated') ) {
      console.log("Call FB /me API", this.graphApi);

      return this.get('graphApi').myProfile();

    }
  },

  authenticationChanged: Ember.observer('session.isAuthenticated', function() {
    console.log("session.isAuthenticated changed");
    //this.refresh();
  }),

});
