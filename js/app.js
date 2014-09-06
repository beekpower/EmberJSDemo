App = Ember.Application.create();

App.Router.map(function() {
  this.resource = ('todo');
});

App.PostsRoute = Ember.Route.extend({
  model: function () {
    return weather;
  }
});
