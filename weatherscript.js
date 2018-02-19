
var getLocation = function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(logPosition);
    } else {
        alert("Geolocation is not supported");
    }
};


var logPosition = function (position) {
    var myLatitude = position.coords.latitude;
    var myLongitude = position.coords.longitude;
    //log co-ordinates to console
    //console.log(myLatitude, myLongitude, "log");
    return {
        //myLatitude: myLatitude,
    }
}


var getWeather = function () {
    //var myLatitude = position.coords.latitude;
    var url = "https://fcc-weather-api.glitch.me/api/current?lat=" + myLatitude + "&lon=" + myLongitude;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function () {
        if (this.status == 200) {
            var currentWeather = JSON.parse(this.responseText);
            console.log(currentWeather, "wea");
        }
    }
    xhr.send();
};

