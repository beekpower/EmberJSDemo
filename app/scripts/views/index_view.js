Emberjsdemo.IndexView = Ember.View.extend({
  didInsertElement : function(){
    var that = this;
    Ember.run.next(function(){
      var subtractSpace = 240;
      $('#weather').height($( window ).height() - subtractSpace);

      $( window ).resize(function() {
        $('#weather').height($( window ).height() - subtractSpace);
      });

      $.simpleWeather({
        location: 'North Dartmouth, MA',
        woeid: '',
        unit: 'f',
        success: function(weather) {
          html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
          html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
          html += '<li class="currently">'+weather.currently+'</li>';
          html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';

          $("#weather").html(html);
        },
        error: function(error) {
          $("#weather").html('<p>'+error+'</p>');
        }
      });
    });
  }
});
