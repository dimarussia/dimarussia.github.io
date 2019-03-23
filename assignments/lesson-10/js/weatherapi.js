let weatherRequest = new XMLHttpRequest();
let apiURLstring="https://api.openweathermap.org/data/2.5/weather?&id=5604473&units=imperial&APPID=55faf4ce7a5c4e30a1c4db448a6727ec";
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

   document.getElementById('cc-temp').innerHTML = weatherData.main.temp;

    let icon="http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";
    let desc= weatherData.weather[0].description;

    document.getElementById('cc-img').setAttribute('src', icon);
    document.getElementById('cc-img').setAttribute('alt', desc);
}