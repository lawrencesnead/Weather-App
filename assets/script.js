$(document).ready(function () {
    $('#search-btn').click(citySearch);
    
    function tempToF(t) {
        return ((t - 273.15) * 9 / 5 + 32);
    }
    
    function citySearch(e) {
        
        var id = "d1d26734a6a0ea8d7681d5c441436a63";
        var city = $('#city-name').val();
        var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city +"&APPID="+id;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            var temp = Math.round(tempToF(response.main.temp));
            var humid = Math.round(response.main.humidity);
            var wind = Math.round((response.wind.speed) / 1.609);
            var name = response.name;
            $('.name').text(name);
            var iconcode = response.weather[0].icon;
            console.log(iconcode);
            var weatherIcon= $("<img>");
            var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
            weatherIcon.attr("src", iconurl);
            console.log(weatherIcon)
            $("#search-result").text("\nTemperature: " + temp + " °F\n Humidity: " + humid + " %\n Wind Speed: " + wind +" MPH");
            weatherIcon.appendTo('#search-result');
        });
    }
})