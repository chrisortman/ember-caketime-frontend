import Ember from 'ember';

export default Ember.Route.extend({

  fb: Ember.inject.service(),

  model() {
    console.log("FB Index Route model hook");
    const fbModel = Ember.Object.create();

    return this.get('fb')
               .api('/me', {
                 fields:'first_name,last_name,link,accounts{name,access_token,id}'
               })
               .then( (response) => {
                  console.log(response);
                  fbModel.set('first_name', response.first_name);
                  fbModel.set('last_name', response.last_name);
                  fbModel.set('link', response.link);
                  fbModel.set('pages',[]);
                  response.accounts.data.forEach( (a) => {
                    fbModel.get('pages').pushObject(a.name);
                  });
                  return fbModel;
              });
  },

  authenticationChanged: Ember.observer('session.isAuthenticated', function() {
    console.log("session.isAuthenticated changed");
    //this.refresh();
  }),

});
