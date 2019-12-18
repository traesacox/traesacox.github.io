const apiURL = "https://api.openweathermap.org/data/2.5/weather?zip=94602,us&units=imperial&APPID=216ae8f50dc7f7842c02d428622bbfc4";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const currentTemp = jsObject.main.temp.toFixed(0);

        document.getElementById('currtemp').textContent = currentTemp;
        document.getElementById('weatherDesc').textContent = jsObject.weather[0].description;

    });



