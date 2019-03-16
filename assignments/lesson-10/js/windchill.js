/*
let t = parseInt(document.getElementById('value2').innerHTML);
let s = parseInt(document.getElementById('value5').innerHTML);
let result = 35.74+0.6215*t-35.75*(Math.pow(s,0.16))+0.4275*t*(Math.pow(s,0.16));
document.getElementById('windchill').innerHTML = result.toFixed(1) + "F";
*/

let s = parseInt(document.getElementById("value5").innerHTML);
let t = parseInt(document.getElementById("value2").innerHTML);


// Processing - some random formula processing with the variable
let result = 35.74 + .6215*t - 35.75* Math.pow(s,.16)+.4275 * t * Math.pow(s,.16);

document.getElementById("windChill").innerHTML = "<strong>" + result.toFixed(1) + "</strong>";