const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=216ae8f50dc7f7842c02d428622bbfc4";
fetch(apiURL)
.then((response)=> response.json())
.then((jsObject)=>{
    console.log(jsObject);

document.getElementById('currtemp').textContent = jsObject.main.temp.toFixed(1);
document.getElementById('weatherDesc').textContent = jsObject.weather[0].description;
document.getElementById('currHumidity').textContent = jsObject.main.humidity;
document.getElementById('currWindSpeed').textContent = jsObject.wind.speed;


const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
const desc = jsObject.weather[0].description;
document.getElementById('imagesrc').textContent=imagesrc;
document.getElementById('icon').setAttribute('src', imagesrc);
document.getElementById('icon').setAttribute('alt', desc);

});

//----------Five Day Forecast--------------
const forecastAPIURL ="https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=216ae8f50dc7f7842c02d428622bbfc4"; 
fetch(forecastAPIURL)
.then((response)=> response.json())
.then((jsObject)=>{
    console.log(jsObject);
    const forecastArray = jsObject['list'];
    var countDay = 1;

for (i=0; i<forecastArray.length;i++){
    if(forecastArray[i].dt_txt.includes('18:00:00')){
    const imagesrc2 = 'https://openweathermap.org/img/w/' + forecastArray[i].weather[0].icon +'.png';
    const desc2 = 'https://openweathermap.org/img/w/' + forecastArray[i].weather[0].description;
    document.getElementById("Pic"+countDay).setAttribute('src', imagesrc2);
    document.getElementById("Pic"+countDay).setAttribute('alt'. desc2);
    document.getElementById("temp"+countDay).textContent = forecastArray[i].main.temp.toFixed(0);
    countDay++;
    }
    else{
        continue;
    }
}

});

/*Weekday names array
switch (dayIndex){
    case 1:
    "Sun",
    "Mon",
    "Tues",
    "Wed",
    "Thur",
    "Fri",
    "Sat"
let todayDate = new Date();
let dayIndex = daynames[todayDate.getDay()];*/