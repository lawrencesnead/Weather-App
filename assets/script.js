var id = "d1d26734a6a0ea8d7681d5c441436a63";
function geoFindMe() {

  
  
    function success(position) {
      const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
        
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&APPID="+id,
            method: "GET"
        }).then(function (response4) {
             var tempGeo = response5.main.temp.toFixed(2);
            var humGeo = response5.main.humidity;
            var windGeo = (response5.main.wind / 1.609).toFixed(2);
            var iconcodeGeo = response.weather[0].icon;
        });

    }
  
    function error() {
      alert('Unable to retrieve your location');
    }
  
    if (!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
  }
$(document).ready(function () {
    Navigator.geolocation;
    geoFindMe();
    console.log()
    $('#left-side').hide();
    $('#search1').hide();
    $('#search2').hide();
    $('#search3').hide();
    $('#search4').hide();
    $('#search5').hide();
    $('#search6').hide();
    $('#search7').hide();
    $('#search8').hide();
    $('#search-btn').click(citySearch);
    $('#day1-title').text(moment().add(1, 'days').calendar('l'))
    $('#day2-title').text(moment().add(2, 'days').calendar('l'))
    $('#day3-title').text(moment().add(3, 'days').calendar('l'))
    $('#day4-title').text(moment().add(4, 'days').calendar('l'))
    $('#day5-title').text(moment().add(5, 'days').calendar('l'))
    var savedSearches = [];
    function generateHistoryList() {
        savedSearches = JSON.parse(localStorage.getItem("searches"));
        if (savedSearches.length > 0) {
            $('#search1').text(savedSearches[0]);
            $('#search1').show();
        }
            if (savedSearches[1] != null) {
                $('#search2').text(savedSearches[1]);
                $('#search2').show();
            }
            if (savedSearches[2] != null) {
                $('#search3').text(savedSearches[2]);
                $('#search3').show();
            }
            if (savedSearches[3] != null) {
                $('#search4').text(savedSearches[3]);
                $('#search4').show();
            }
            if (savedSearches[4] != null) {
                $('#search5').text(savedSearches[4]);
                $('#search5').show();
            }
            if (savedSearches[5] != null) {
                $('#search6').text(savedSearches[5]);
                $('#search6').show();
            }
            if (savedSearches[6] != null) {
                $('#search7').text(savedSearches[6]);
                $('#search7').show();
            }
            if (savedSearches[7] != null) {
                $('#search8').text(savedSearches[7]);
                $('#search8').show();
            }
            
        return savedSearches;
    }
    
        
    // function tempToF(t) {
    //     return ((t - 273.15) * 9 / 5 + 32);
    // }

    function citySearch() {
        $('#left-side').show();
        if (savedSearches.length > 0) {
            savedSearches = generateHistoryList();
        }
        var UV;
        
        var city = $('#city-name').val();
        
        savedSearches.push(city);
        localStorage.setItem("searches", JSON.stringify(savedSearches.reverse()));
        savedSearches = generateHistoryList();
        console.log(savedSearches)
        var queryURL1 = "http://api.openweathermap.org/data/2.5/weather?q=" + city +"&units=imperial&APPID="+id;
        $.ajax({
            url: queryURL1,
            method: "GET"
        }).then(function (response) {
            var long = response.coord.lon;
            var lat = response.coord.lat;
            $.ajax({
                url: "http://api.openweathermap.org/data/2.5/uvi?lat="+lat+"&lon="+long+"&units=imperial&APPID="+id,
                method: "GET"
            }).then(function (response3) {
                UV = response3.value;
                console.log(UV)
            
            var temp = response.main.temp.toFixed(2);
            var humid = response.main.humidity;
            var wind = ((response.wind.speed) / 1.609).toFixed(2);
            var name = response.name;
            $('#search-result-title').text(name+" ("+moment().format('L')+")");
            var iconcode = response.weather[0].icon;
            var weatherIcon= $("<img>");
            var iconurl = "http://openweathermap.org/img/wn/" + iconcode + "@2x.png";
            weatherIcon.attr("src", iconurl);
            $("#search-result-inner").text("Temperature: " + temp + " °F\n\n Humidity: " + humid + " %\n\n Wind Speed: " + wind +" MPH \n\n UV Index: " + UV);
            weatherIcon.appendTo('#search-result-title');
            });
        });
        var queryURL2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + city +"&units=imperial&APPID=" + id;
        $.ajax({
            url: queryURL2,
            method: "GET"
        }).then(function(response2) {
            console.log(response2);
            var day1 = response2.list[2];
            var day2 = response2.list[10];
            var day3 = response2.list[18];
            var day4 = response2.list[26];
            var day5 = response2.list[34];
            var temp1 = day1.main.temp.toFixed(2);
            var temp2 = day2.main.temp.toFixed(2);
            var temp3 = day3.main.temp.toFixed(2);
            var temp4 = day4.main.temp.toFixed(2);
            var temp5 = day5.main.temp.toFixed(2);
            var hum1 = day1.main.humidity;
            var hum2 = day2.main.humidity;
            var hum3 = day3.main.humidity;
            var hum4 = day4.main.humidity;
            var hum5 = day5.main.humidity;
            var iconcode1 = day1.weather[0].icon;
            console.log(iconcode1)
            var iconcode2 = day2.weather[0].icon;
            var iconcode3 = day3.weather[0].icon;
            var iconcode4 = day4.weather[0].icon;
            var iconcode5 = day5.weather[0].icon;
            
            var iconurl1 = "http://openweathermap.org/img/w/" + iconcode1 + ".png";
            $('#weather-icon1').attr("src", iconurl1);
            
            var iconurl2 = "http://openweathermap.org/img/w/" + iconcode2 + ".png";
            $('#weather-icon2').attr("src", iconurl2);
            
            var iconurl3 = "http://openweathermap.org/img/w/" + iconcode3 + ".png";
            $('#weather-icon3').attr("src", iconurl3);
            
            var iconurl4 = "http://openweathermap.org/img/w/" + iconcode4 + ".png";
            $('#weather-icon4').attr("src", iconurl4);
            
            var iconurl5 = "http://openweathermap.org/img/w/" + iconcode5 + ".png";
            $('#weather-icon5').attr("src", iconurl5);
            
            $('#day1-data').text("Temp: "+temp1+" °F\nHumidity: "+hum1+" %")
            $('#day2-data').text("Temp: "+temp2+" °F\nHumidity: "+hum2+" %")
            $('#day3-data').text("Temp: "+temp3+" °F\nHumidity: "+hum3+" %")
            $('#day4-data').text("Temp: "+temp4+" °F\nHumidity: "+hum4+" %")
            $('#day5-data').text("Temp: "+temp5+" °F\nHumidity: "+hum5+" %")


        });
    }
})