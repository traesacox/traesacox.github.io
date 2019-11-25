const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=216ae8f50dc7f7842c02d428622bbfc4";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const currentTemp = jsObject.main.temp.toFixed(0);
        const currentWindSpeed = jsObject.wind.speed.toFixed(0);

        document.getElementById('currtemp').textContent = currentTemp;
        document.getElementById('weatherDesc').textContent = jsObject.weather[0].description;
        document.getElementById('currHumidity').textContent = jsObject.main.humidity;
        document.getElementById('currWindSpeed').textContent = currentWindSpeed;

        if (currentTemp <= 50 && currentWindSpeed > 3.0) {
            var windchill = 35.74 + (0.6215 * currentTemp) - (35.75 * Math.pow(currentWindSpeed, 0.16) + (0.4275 * currentTemp * Math.pow(currentWindSpeed, 0.16)));
            document.getElementById('currWindChill').textContent = (Math.abs(windchill)).toFixed(1);
        } else {
            document.getElementById('noWindChill').textContent = "N/A";
            document.getElementById('currWindChill').textContent = "";
        }


    });

//----------Five Day Forecast--------------
const forecastAPIURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=216ae8f50dc7f7842c02d428622bbfc4";
fetch(forecastAPIURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const forecastArray = jsObject['list'];
        var countDay = 1;

        for (i = 0; i < forecastArray.length; i++) {
            if (forecastArray[i].dt_txt.includes('18:00:00')) {
                var unixTime = parseFloat(forecastArray[i].dt);
                var forecastDate = new Date(unixTime * 1000);
                var forecastDayNum = forecastDate.getDay();
                var dayName = ""
                switch (forecastDayNum) {
                    case 0:
                        dayName = "Sun";
                        break;
                    case 1:
                        dayName = "Mon";
                        break;
                    case 2:
                        dayName = "Tue"
                        break;

                    case 3:
                        dayName = "Wed";
                        break;
                    case 4:
                        dayName = "Thu";
                        break;
                    case 5:
                        dayName = "Fri";
                        break;
                    case 6:
                        dayName = "Sat";
                        break;
                    default:
                        break;
                }

                document.getElementById("day" + countDay).textContent = dayName;
                const imagesrc2 = 'https://openweathermap.org/img/w/' + forecastArray[i].weather[0].icon + '.png';
                const desc2 = 'https://openweathermap.org/img/w/' + forecastArray[i].weather[0].description;
                document.getElementById("Pic" + countDay).setAttribute('src', imagesrc2);
                document.getElementById("Pic" + countDay).setAttribute('alt', desc2);
                document.getElementById("temp" + countDay).textContent = forecastArray[i].main.temp.toFixed(0);
                countDay++;
            } else {
                continue;
            }
        }

    });
