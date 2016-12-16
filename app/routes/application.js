import Ember from 'ember';

export default Ember.Route.extend({
  fb: Ember.inject.service(),

  actions: {

    facebookSignIn() {
      console.log("facebookSignIn");
      const scope = 'email, user_birthday, manage_pages, read_page_mailboxes';

      return this.get('fb')
                 .login(scope)
                 .then( () => this.transitionTo('facebook.index') )
                 .catch( (error) => {
                   console.log("Error logging into facebook", error);
                 });
    }
  }
});
