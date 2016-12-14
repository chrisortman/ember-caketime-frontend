import DS from 'ember-data';
import Model from 'ember-pouch/model';

export default Model.extend({
  name: DS.attr('string'),
  due: DS.attr('date'),
  notes: DS.attr('string'),
  fulfillmentMethod: DS.attr('string'),
  deliveryAddress: DS.attr('string'),
  requiredDeposit: DS.attr('number'),
  items : [],
});
