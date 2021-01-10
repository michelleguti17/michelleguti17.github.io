let d = new Date();
let currentYear = d.getFullYear();
document.getElementById("current_year").innerHTML = currentYear;


//show to the user the last modified date
let lastModified = new Date();
document.getElementById("last_updated").innerHTML = lastModified.toUTCString();
