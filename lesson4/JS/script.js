let date = new Date();
let currentYear = date.getFullYear();
document.getElementById("currentYear").textContent = currentYear;


let lastUpdated = document.lastModified;
document.getElementById('lastUpdated').textContent = lastUpdated;

function toggleMenu(){
  
    document.getElementById("primaryNav").classList.toggle("hide");
  }
