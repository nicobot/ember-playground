import Ember from 'ember';

export default Ember.Controller.extend({
  firstName: "Trek",
  lastName: "Glowacki",
  peopleCtrl: Ember.inject.controller('person'),
  people: null, /*Ember.computed.alias('peopleCtrl.people'),*/

  init() {
    console.log('Initialized Controller Application!');
    this.set("firstName", "init!!");
    this.set('people', this.store.findAll('person'));
  },

  actions: {
    navigateToBlogPost() {
      console.log("transitioning");
      this.transitionToRoute('blogPost');
    },

  }
});
