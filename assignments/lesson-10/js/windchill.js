/*
let t = parseInt(document.getElementById('value2').innerHTML);
let s = parseInt(document.getElementById('value5').innerHTML);
let result = 35.74+0.6215*t-35.75*(Math.pow(s,0.16))+0.4275*t*(Math.pow(s,0.16));
document.getElementById('windchill').innerHTML = result.toFixed(1) + "F";
*/
/*
let weatherWindCh = new XMLHttpRequest();
let apiURLstringW="https://api.openweathermap.org/data/2.5/weather?&id=5604473&units=imperial&APPID=55faf4ce7a5c4e30a1c4db448a6727ec";
weatherWindCh.open('Get', apiURLstringW, true);
weatherWindCh.send();

weatherWindCh.onload =  function () {
    let windchillData = JSON.parse(weatherWindCh.responseText);
    console.log(windchillData);
}
//let s = parseInt(document.getElementById("value5").innerHTML);
//let t = parseInt(document.getElementById("value2").innerHTML);

let wi = windchillData.wind.speed;
let te = windchillData.main.temp;


// Processing - some random formula processing with the variable
let wch = 35.74 + .6215*te - 35.75* Math.pow(wi,.16)+.4275 * te * Math.pow(wi,.16);

document.getElementById("windChill").innerHTML = "<strong>" + wch.toFixed(1) + "</strong>";
*/
let weatherWindchill = new XMLHttpRequest();
let apiURLstring1 = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=03c8d968ad0c2de9c8994d20265c8465";
weatherWindchill.open('Get', apiURLstring1, true);
weatherWindchill.send();

weatherWindchill.onload = function() {
    let windchillData = JSON.parse(weatherWindchill.responseText);
    console.log(windchillData);

    let temp = windchillData.list[0].main.temp;
    let wind = windchillData.list[0].wind.speed;

    // Processing - windChill formula
    windChill = 35.74 + 0.6215*temp + (0.4275*temp - 35.75) * Math.pow(wind, 0.16);

    document.getElementById('windChill').innerHTML = "Windchill: " + windChill.toFixed(0) + "&#8457";
}