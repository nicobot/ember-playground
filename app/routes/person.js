import Ember from 'ember';


export default Ember.Route.extend({
  afterModel() {
    console.log('PERSON ROUTE SAYS: People model prepared');
  }
});
