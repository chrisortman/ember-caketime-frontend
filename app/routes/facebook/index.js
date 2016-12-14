import Ember from 'ember';

export default Ember.Route.extend({

  graphApi: Ember.inject.service(),

  model() {
    console.log("FB Index Route model hook");
    if ( this.get('session.isAuthenticated') ) {
      console.log("Call FB /me API");

      return this.graphApi.myProfile();

    }
  },

  authenticationChanged: Ember.observer('session.isAuthenticated', function() {
    this.refresh();
  }),

});
