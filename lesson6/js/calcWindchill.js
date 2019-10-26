var currtemp = 49;
var currWindSpeed = 3.5;

var windchill = 35.74 + (0.6215 * currtemp) - (35.75 * Math.pow(currWindSpeed, 0.16) + (0.4275 * currtemp * math.pow(currWindSpeed, 0.16)));
document.getElementById('currWindChill').textContent = "Test this";