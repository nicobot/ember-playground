import DS from "ember-data";

export default DS.Model.extend({
  firstName: DS.attr(),
  lastName: DS.attr(),
  birthday: DS.attr('date'),

  fullName: Ember.computed('firstName', 'lastName', function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  }),

  gender: DS.attr('string', {
    defaultValue: 'male'
  }),

  createdAt: DS.attr('string', {
    defaultValue() { return new Date(); }
  }),

  user: DS.belongsTo('user', {inverse: null})
});
