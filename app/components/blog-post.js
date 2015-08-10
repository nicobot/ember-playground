import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'nav',
  classNames: ['primary', 'isUrgent'],
  isUrgent: true,
  attributeBindings: ['data-test'],
  "data-test": 'lala',

  actions: {
    log() {
      console.log('Blog post log');
      this.set('title', this.get('title') + '*');
    }
  }
});
