import ENV from 'cms/config/environment';
import PouchDB from 'pouchdb';

// PouchDB.debug.enable('*');

var db, remote;

export function initialize( application ) {

  if ( ENV.environment === 'test' ) {
    db = new PouchDB( ENV.APP.LOCAL_DATABASE_NAME, {adapter: 'memory' });
  } else {
    db = new PouchDB( ENV.APP.LOCAL_DATABASE_NAME );
    // remote = new PouchDB('http://localhost:5984/caketime_backend');
    //
    // db.sync(remote, {
    //   live: true,
    //   retry: true
    // });
  }
  application.register('service:local-pouch', db, { instantiate: false });
  application.inject('service:document-store','db','service:local-pouch');
  application.inject('adapter:application', 'db', 'service:local-pouch');
  // appInstance.inject('route', 'foo', 'service:foo');
}

export default {
  name: 'pouch',
  initialize
};
