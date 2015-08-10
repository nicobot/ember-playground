import Ember from 'ember';

export function initialize(container, application) {
  var logger = {
    log(message) {
      console.log(message);
    }
  };

  application.register('logger:main', logger, { instantiate: false });
  application.inject('route', 'logger', 'logger:main');


  // .. This is not working as I expected ..
  // It seems already being used in Ember core: https://gist.github.com/jaketrent/9621891
  //var inflector = Ember.Inflector.inflector;
  //inflector.irregular('person', 'people');

  // Add the service Store to the property "store" from all components
  application.inject('component', 'store', 'service:store');

}

export default {
  name: 'my-app-init',
  initialize: initialize
};
