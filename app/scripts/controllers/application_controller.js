Emberjsdemo.ApplicationController = Ember.Controller.extend({
  currentPathDidChange: function() {
    Emberjsdemo.set('currentPath', this.get('currentPath'));
    Emberjsdemo.set('isIndex', '');
    Emberjsdemo.set('isTodo', '');
    Emberjsdemo.set('isCharts', '');

    if (this.get('currentPath') == "index") {
      Emberjsdemo.set('isIndex', 1);
    } else if (this.get('currentPath') == "todo") {
      Emberjsdemo.set('isTodo', 1);
    } else if (this.get('currentPath') == "charts") {
      Emberjsdemo.set('isCharts', 1);
    }
    
  }.observes('currentPath')
});
