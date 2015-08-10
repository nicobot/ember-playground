import Ember from 'ember';


export default Ember.Route.extend({
  model() {
    console.log('Model prepared');

    return {
      title: 'My blog post',
      body: 'Content of my post'
    };
  }
});
