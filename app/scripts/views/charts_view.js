Emberjsdemo.ChartsView = Ember.View.extend({
  didInsertElement : function(){
    var that = this;
    Ember.run.next(function(){
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
      });
    }
  });
