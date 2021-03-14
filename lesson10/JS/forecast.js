
const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=322f9b768407057c9f7ae572f8cd7a97";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {

    
    document.getElementById("current-temp").innerHTML =  Math.round(jsObject.main.temp);
    document.getElementById("high-temp").innerHTML = Math.round(jsObject.main.temp_max);
    document.getElementById("windSpeed").innerHTML = jsObject.wind.speed;
    document.getElementById("humidity").innerHTML = jsObject.main.humidity;
    document.getElementById("current-2").innerHTML =  jsObject.weather[0].main;
  
  });
  



//Forecast 


 
const apiURLForecast = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=322f9b768407057c9f7ae572f8cd7a97";

fetch( apiURLForecast)
.then((response) => response.json())
 .then((jsObject) =>{
 
  let day =  0; 
  const dayofWeek = ["Sun" , "Mon" , "Tue" , "Wed", "Thu", "Fri" , "Sat"];
  const fiveDayForecast = jsObject.list.filter((day) =>
  day.dt_txt.includes("18:00:00"));
 

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

