Emberjsdemo.TodoRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  }
});
