var Emberjsdemo = window.Emberjsdemo = Ember.Application.create({
  currentPath: '',
  isIndex: '',
  isTodo: '',
  isCharts: ''
});

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/components/*');
require('scripts/views/*');
require('scripts/router');
