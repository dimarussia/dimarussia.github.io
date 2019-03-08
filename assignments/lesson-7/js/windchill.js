
let t = parseInt(document.getElementById('value2').innerHTML);
let s = parseInt(document.getElementById('value5').innerHTML);
let result = 35.74+0.6215*t-35.75*(Math.pow(s,0.16))+0.4275*t*(Math.pow(s,0.16));
document.getElementById('output').innerHTML = result.toFixed(1) + "F";
