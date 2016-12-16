/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'caketime-frontend',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
     ENV.APP.LOCAL_DATABASE_NAME = "local_pouch"
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.LOCAL_DATABASE_NAME = "db_test";
  }

  if (environment === 'production') {
     ENV.APP.LOCAL_DATABASE_NAME = "local_pouch"

  }

  ENV.FB = {
    appId: '151793311687878',
    version: 'v2.7',
    xfbml: true
  }

  return ENV;
};
