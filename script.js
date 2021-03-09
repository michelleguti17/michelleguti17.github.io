let date = new Date();
let currentYear = date.getFullYear();
document.getElementById("currentYear").textContent = currentYear;


let lastUpdated = document.lastModified;
document.getElementById('lastUpdated').textContent = lastUpdated;
  

const months = ["January", "February", "March","April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let currentDate = new Date()
let actualDate = weekdays[currentDate.getDay()] + ", " + currentDate.getDate() + " " + months[currentDate.getMonth()] + " " + currentDate.getFullYear()
document.getElementById('current-date').textContent = formattedDate;

//WindChill 
