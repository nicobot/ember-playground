import Ember from 'ember';

export default Ember.Controller.extend({

  people: Ember.Array,

  init() {

    this.set('people', this.store.findAll('person'));

    console.log("PEOPLE CONTROLLER initiated");
  }
});

