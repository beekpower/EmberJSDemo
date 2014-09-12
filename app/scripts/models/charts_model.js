Emberjsdemo.ChartsRoute = Ember.Route.extend({
  model: function() {

    $.ajax('http://api.openweathermap.org/data/2.5/history/city?id=2655138&type=hour&APPID=664c682f5ebf1953732584489d041838', {
        "type": 'GET', // HTTP method
        "dataType": 'JSON', // type of data expected from the API response
        "success": function (data, textStatus, jqXHR) {
            /*alert(((data.list[0].main.temp - 273.15) * 1.8) + 32);*/
          return data.list[0];
        },
        "error": function (jqXHR, textStatus, errorThrown) {
            window.console.log(jqXHR);
        }
    });

  }
});
