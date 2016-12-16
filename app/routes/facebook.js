import Ember from 'ember';

export default Ember.Route.extend({
  fb: Ember.inject.service(),

  beforeModel() {
    return this.get('fb')
               .getLoginStatus()
               .then( (response) => {
                  if ( response.status === 'connected' ) {
                    this.transitionTo('facebook.index');
                  } else {
                    this.transitionTo('facebook.not-connected');
                  }
               })
               .catch( () => {
                  this.transitionTo('facebook.not-connected');
               });
  }
});
