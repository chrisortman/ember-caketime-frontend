import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    return this.get('session').fetch('facebook-connect').catch(function() {
      //failure is fine, means not authenticated
    });
  }
});
