Emberjsdemo.ApplicationController = Ember.Controller.extend({
  currentPathDidChange: function() {
    Emberjsdemo.set('currentPath', this.get('currentPath'));
    Emberjsdemo.set('isIndex', '');
    Emberjsdemo.set('isTodo', '');

    if (this.get('currentPath') == "index") {
      Emberjsdemo.set('isIndex', 1);
    } else if (this.get('currentPath') == "todo") {
      Emberjsdemo.set('isTodo', 1);
    }

  }.observes('currentPath')
});
