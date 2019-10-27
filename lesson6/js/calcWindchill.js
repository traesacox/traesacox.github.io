var currtemp = document.getElementById('currtemp').innerHTML;
var currWindSpeed = document.getElementById('currtemp').innerHTML;
if (currtemp <= 50 && currWindSpeed > 3.0) {
    var windchill = 35.74 + (0.6215 * currtemp) - (35.75 * Math.pow(currWindSpeed, 0.16) + (0.4275 * currtemp * Math.pow(currWindSpeed, 0.16)));
    document.getElementById('currWindChill').textContent = (Math.abs(windchill)).toFixed(1);
} else {
    document.getElementById('noWindChill').textContent = "N/A";
    document.getElementById('currWindChill').textContent = "";
}