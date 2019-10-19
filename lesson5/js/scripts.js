function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

//Weekday names array
let daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
//long month names array
let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const ModfiedDate = new Date(Document.lastModified);
let todayDate = new Date();
let dayName = daynames[todayDate.getDay()];
let monthName = months[todayDate.getMonth()];
const currentdate = dayName + ", " + todayDate.getDate() + " " + monthName + " " + todayDate.getFullYear();
let currentyear = todayDate.getFullYear();
document.getElementById('currentModDate').textContent = currentdate;

document.getElementById('currentyear').textContent = currentyear;

function showAnnouncement(){
document.getElementsByClassName('showAnnouncement').textContent = currentyear;
(todayDate.getDay()==5) ? document.getElementsByClassName('showAnnouncement').style.display ="block":announcement.style.display ="none";
  }

