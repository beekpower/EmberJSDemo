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

    Ember.run.scheduleOnce('afterRender', this, function(){
      if (this.get('currentPath') == "charts") {
        $.ajax('http://api.wunderground.com/api/2481c3620df0d91d/hourly/q/MA/North_Dartmouth.json', {
          dataType : "jsonp", // HTTP method
          "success": function (data, textStatus, jqXHR) {
            var jsonArr = [['North Dartmouth, MA']];
            for (i=0; i<data.hourly_forecast.length; i++) {
              jsonArr.push({ date: data.hourly_forecast[i].FCTTIME.hour, temprature: data.hourly_forecast[i].feelslike.english });
              jsonArr[0][i+1] = data.hourly_forecast[i].feelslike.english;
            }

            var chart = c3.generate({
              bindto: '#chart',
              x: 'x',
              data: {
                columns: jsonArr
              },
              axis: {
                y: {
                  label: {
                    text: 'Temperature (F)',
                    position: 'outer-middle'
                  },
                  tick: {
                    format: d3.format("") // ADD
                  }
                }
              }
            });
            return data;
          },
          "error": function (jqXHR, textStatus, errorThrown) {
            window.console.log(jqXHR);
          }});
        }

        if (this.get('currentPath') == "index") {
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
        }
      });


    }.observes('currentPath')
  });
