import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('schedule');

  this.route('orders', function() {
    this.route('new');
  });
  this.route('facebook', function() {
    this.route('not-connected');
  });
});

export default Router;
