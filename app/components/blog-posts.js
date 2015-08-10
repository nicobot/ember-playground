import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'article',

  actions: {

    showMessage() {
      console.log("Dalee");
    }

  }
});
