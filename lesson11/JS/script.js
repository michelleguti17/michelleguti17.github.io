// Lazy Loading
const imagesToLoad = document.querySelectorAll('img[data-src]');

const imgOptions ={
    threshold: 0,
    rootMargin: "0px 0px 150px 0px"
};

const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};
if ("IntersectionObserver" in window) {
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
let actualDate = ` ${weekdays[currentDate.getDay()]}, ${currentDate.getDate()}, ${months[currentDate.getMonth()]}, ${currentDate.getFullYear()}`;
document.getElementById("date").innerHTML = actualDate;



let weekDay =  currentDate.getDay();
let element = document.getElementById('friday-banner');
if (weekDay == 5) {
    element.style.display = "block";
}

//Rating Form selection

function adjustRating(rating) {
  document.getElementById("ratingvalue").innerHTML = rating;
}

//Town JS
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  
    const towns = jsonObject['towns'];
  
    for(let i=0; i < towns.length; i++){
       if(towns[i].name == "Preston" || towns[i].name == "Fish Haven"|| towns[i].name == "Soda Springs"){
    
      //Create elements in HTML
      let townName = document.createElement("div");
      let info = document.createElement("div");
      let h2 = document.createElement("h2");
      let motto = document.createElement("h3");
      let year = document.createElement("p");
      let population = document.createElement("p");
      let rainFall = document.createElement("p");
      let images = document.createElement("img");
      info.setAttribute("class","info");
      h2.setAttribute("class","info");
      townName.setAttribute("class","town");
      motto.setAttribute ("class", "motto-towns");
     
      // Call JSON information
      h2.innerHTML = towns[i].name;
      motto.innerHTML = `${towns[i].motto}`;
      year.innerHTML = `Founded: ${towns[i].yearFounded}`; 
      population.innerHTML = `Population: ${towns[i].currentPopulation}`;
      rainFall.innerHTML = `Average Rain fall: ${towns[i].averageRainfall}`; 
      images.setAttribute( "src", "images/" + towns[i].photo);
      images.setAttribute( "alt", `${towns[i].photo}`);
        
      townName.append(info);
      info.append(h2);
      info.append(motto);
      info.append(year);
      info.append(population);
      info.append(rainFall);
      townName.append(images);
      //output
      document.querySelector("div.places").append(townName);
      }
      }
      
     
  });
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
 function currentW(city) {
  const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=" + city + "&units=imperial&appid=322f9b768407057c9f7ae572f8cd7a97";
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

}
// Towns 5 day forecast


function forecast(townsID) {
const requestURl = "https://api.openweathermap.org/data/2.5/forecast?id=" + townsID + "&units=imperial&appid=322f9b768407057c9f7ae572f8cd7a97";

fetch(requestURl)
.then((response) => response.json())
 .then((jsObject) =>{
 
  let day =  0; 
  const dayofWeek = ["Sun" , "Mon" , "Tue" , "Wed", "Thu", "Fri" , "Sat"];
  const fiveDayForecast = jsObject.list.filter((day) =>
  day.dt_txt.includes("18:00:00"));
  console.log(fiveDayForecast);

   fiveDayForecast.forEach (list => {
   const listF = list.dt_txt;
   
   let newDay = new Date(listF).getDay()
   const imagesrc = "https://openweathermap.org/img/w/" +list.weather[0].icon + ".png";
   document.getElementById(`dayofWeek${day+1}`).innerHTML = dayofWeek[newDay];
   document.getElementById(`fiveDayForecast${day+1}`).innerHTML = Math.round(list.main.temp);
   document.getElementById(`icon${day+1}`).setAttribute("src", imagesrc);  
   document.getElementById(`icon${day+1}`).setAttribute("alt", list.weather[0].description);
   day++;
    });
    
 
});
}
//Towns events
function getEvents(townsEvents) {
  const eventsURL = "https://byui-cit230.github.io/weather/data/towndata.json";
  
  fetch(eventsURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
    const towns = jsonObject["towns"];
      for (let i = 0; i < towns.length; i++ ) {
      if (towns[i].name == townsEvents) {
      let events = towns[i].events;
      let eventInfo = document.createElement ("div");
       
      for (let i=0; i < events.length; i++) {
      let eachEvent = document.createElement("p");
      eachEvent.innerHTML = events[i];
      eventInfo.appendChild(eachEvent);
      document.getElementById("events").appendChild(eventInfo);
        }
        }
        }
    });
    }
