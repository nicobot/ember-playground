import DS from "ember-data";

export default DS.Model.extend({
  username: DS.attr('string'),

  email: DS.attr('string'),

  verified: DS.attr('boolean', {defaultValue: false}),

  createdAt: DS.attr('string', {
    defaultValue() { return new Date(); }
  })
});
