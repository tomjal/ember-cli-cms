import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return  this.modelFor('blogs.show').get('comments');
  },

  deactivate: function () {
    //this.get('controller').destroy();
  }
});
