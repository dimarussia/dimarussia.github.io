let weatherRequest = new XMLHttpRequest();
let apiURLstring="https://api.openweathermap.org/data/2.5/weather?&id=5604473&units=imperial&APPID=55faf4ce7a5c4e30a1c4db448a6727ec";
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    //console.log(weatherData);

    document.getElementById('value2').innerHTML = (weatherData.main.temp).toFixed(1);
    document.getElementById('value4').innerHTML = (weatherData.main.humidity);
    document.getElementById('value5').innerHTML = (weatherData.wind.speed).toFixed(1);

    let icon="http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";
    let desc= weatherData.weather[0].description;

    document.getElementById('value1').setAttribute('src', icon);
    document.getElementById('value1').setAttribute('alt', desc);
}