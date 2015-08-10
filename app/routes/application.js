import Ember from 'ember';

var posts = [{
  firstName: 'John',
  title: "Rails is omakase",
  body: "There are lots of à la carte software environments in this world."
}, {
  firstName: 'Doe',
  title: "Broken Promises",
  body: "James Coglan wrote a lengthy article about Promises in node.js."
}];

export default Ember.Route.extend({
  model() {
    console.log("Application model prepared");
    return posts;
  }
});
