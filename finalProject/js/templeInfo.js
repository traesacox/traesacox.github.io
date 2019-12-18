const apiURL0 = "https://api.openweathermap.org/data/2.5/weather?zip=94602,us&units=imperial&APPID=216ae8f50dc7f7842c02d428622bbfc4";
fetch(apiURL0)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const currentTemp = jsObject.main.temp.toFixed(0);

        document.getElementById('currtemp0').textContent = currentTemp;
        document.getElementById('weatherDesc0').textContent = jsObject.weather[0].description;

    });

    const apiURL1 = "https://api.openweathermap.org/data/2.5/weather?zip=92122,us&units=imperial&APPID=216ae8f50dc7f7842c02d428622bbfc4";
fetch(apiURL1)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const currentTemp = jsObject.main.temp.toFixed(0);

        document.getElementById('currtemp1').textContent = currentTemp;
        document.getElementById('weatherDesc1').textContent = jsObject.weather[0].description;

    });

    const apiURL2 = "https://api.openweathermap.org/data/2.5/weather?zip=98007,us&units=imperial&APPID=216ae8f50dc7f7842c02d428622bbfc4";
fetch(apiURL2)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const currentTemp = jsObject.main.temp.toFixed(0);

        document.getElementById('currtemp2').textContent = currentTemp;
        document.getElementById('weatherDesc2').textContent = jsObject.weather[0].description;

    });

    const apiURL3 = "https://api.openweathermap.org/data/2.5/weather?zip=84601,us&units=imperial&APPID=216ae8f50dc7f7842c02d428622bbfc4";
    fetch(apiURL3)
        .then((response) => response.json())
        .then((jsObject) => {
            console.log(jsObject);
    
            const currentTemp = jsObject.main.temp.toFixed(0);
    
            document.getElementById('currtemp3').textContent = currentTemp;
            document.getElementById('weatherDesc3').textContent = jsObject.weather[0].description;
    
        });



