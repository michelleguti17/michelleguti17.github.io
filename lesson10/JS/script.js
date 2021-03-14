// Lazy Loading
const imagesToLoad = document.querySelectorAll('img[data-src]');

const imgOptions ={
    threshold: 0,
    rootMargin: "0px 0px 150px 0px"
};

const loadImages = (image ) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}

// Menu
function toggleMenu(){
  
  document.getElementById("primaryNav").classList.toggle("hide");
}

// Last Update
const months = ["January", "February", "March","April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDate = new Date()
let actualDate = weekdays[currentDate.getDay()] + ", " + currentDate.getDate() + " " + months[currentDate.getMonth()] + " " + currentDate.getFullYear()
document.getElementById("date").innerHTML = actualDate;



let weekDay =  currentDate.getDay();
let element = document.getElementById('friday-banner');
if (weekDay == 5) {
    element.style.display = "block";
}

//Wind Chill

let tempF = parseFloat(document.getElementById ("high-temp").innerHTML);
let speed = parseFloat(document.getElementById ("windSpeed").innerHTML);
let windchill= windChill(tempF, speed);

function windChill(tempF, speed){
  let calculation= 35.74 +( 0.6215 * tempF) - (35.75 * Math.pow ( speed, 0.16)) + (0.4275 * tempF *  Math.pow (speed,0.16));
  return calculation.toFixed(2);
}
let finalResult="";
if ((tempF <=50) && (speed >3)){
finalResult= windchill +"°F";
}

else {
  finalResult= "N/A";
}

document.getElementById ("windChillOutput").innerHTML= finalResult ;
console.log (finalResult);
console.log (windchill);

// Weather Summary
const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=322f9b768407057c9f7ae572f8cd7a97";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {

    let current = jsObject.main.temp;
    document.getElementById("current-temp").innerHTML =  Math.round(current);
    document.getElementById("high-temp").innerHTML = Math.round(jsObject.main.temp_max);
    document.getElementById("windSpeed").innerHTML = jsObject.wind.speed;
    document.getElementById("humidity").innerHTML = jsObject.main.humidity;
    document.getElementById("current-2").innerHTML =  jsObject.weather[0].main;
  
  });