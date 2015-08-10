import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',

  model: Ember.Object.create(),
  store: Ember.inject.service('store'),

  actions: {

    save() {
      this.get('model').save();
      this.get('store').pushPayload('person', this.store.normalize('person', this.get('model')));
    },

    showMessage() {
      console.log('People Form Component');
    }

  }
});
