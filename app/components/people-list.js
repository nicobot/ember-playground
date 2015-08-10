import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'div',

  model: null,

  store: Ember.inject.service('store'),
  person: null,

  setup : function() {

    this.set('person', this.get('store').createRecord('person'));

  }.on('init'),

  actions: {

    editPerson(person) {
      this.set('person', person);
    },

    showMessage() {
      console.log('People Component');
    },

  }
});
