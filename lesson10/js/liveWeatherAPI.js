const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=216ae8f50dc7f7842c02d428622bbfc4";
fetch(apiURL)
.then((response)=> response.json())
.then((jsObject)=>{
    console.log(jsObject);
let tempnow= jsObject.main.temp;
console.log(tempnow);

/*document.getElementById('currtemp').textContent = jsObject.main.temp;
console.log(jsObject.main.temp);
document.getElementById('weatherDesc').textContent = jsObject.weather[0].description;
console.log(jsObject.weather[0].description);
document.getElementById('currHumidity').textContent = jsObject.main.humidity;
console.log(jsObject.main.humidity);
document.getElementById('currWindSpeed').textContent = jsObject.wind.speed;
console.log(jsObject.wind.speed);

/*const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
const desc = jsObject.weather[0].description;
document.getElementById('imagesrc').textContent=imagesrc;
document.getElementById('icon').setAttribute('src', imagesrc);
document.getElementById('icon').setAttribute('alt', desc);*/

});