import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('blogPost', { path: '/post'});
  this.route('people');
});

export default Router;
