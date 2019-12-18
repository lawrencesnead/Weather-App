
var id = "d1d26734a6a0ea8d7681d5c441436a63";

var city = $(this).attr("data-name");
        var queryURL = "api.openweathermap.org/data/2.5/weather?q=" + city;
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
          $("#movies-view").text(JSON.stringify(response));
        });