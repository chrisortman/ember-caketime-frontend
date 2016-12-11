import Ember from 'ember';

import EmberUploader from 'ember-uploader';

export default Ember.Component.extend({

  didInsertElement() {
    this._super(...arguments);
    
    const el = this.$('input:file');
    const id = Ember.guidFor(el);
    el.attr('id',id);
    this.$('label').attr('for',id);
  },

  actions: {
    filesDidChange(event) {
      const input = event.target;
      if (!Ember.isEmpty(input.files)) {
        this.sendAction('onpreview', input.files[0]);
      }
    },
  }
});
