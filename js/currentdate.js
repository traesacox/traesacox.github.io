//day names array
/*const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Friday",
    "Saturday"
];*/
//long month names array
const months = [
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

const todaysdate = new Date();
//const dayName = dayNames[todaysdate.getDay()];
const monthName = months[todaysdate.getMonth()];
const currentdate = monthName +" "+todaysdate.getDate() + ", " + todaysdate.getFullYear();
const currentyear = todaysdate.getFullYear();
document.getElementById('currentdate').textContent = currentdate;
document.getElementById('currentyear').textContent= currentyear;