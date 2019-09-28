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

const mondifiedDate = new Date(document.lastModified);
const monthName = months[mondifiedDate.getMonth()];
const currentdate = monthName + " " + mondifiedDate.getDate() + ", " + mondifiedDate.getFullYear();
const currentyear = mondifiedDate.getFullYear();
document.getElementById('currentModDate').textContent = currentdate;
document.getElementById('currentyear').textContent = currentyear;