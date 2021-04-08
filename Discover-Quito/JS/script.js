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

// Menu
function toggleMenu(){
  
    document.getElementById("primaryNav").classList.toggle("hide");
  }


// WEATHER API



  const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=-0.2299&lon=-78.5249&exclude=hourly,minutely&units=imperial&appid=322f9b768407057c9f7ae572f8cd7a97"
  fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {

    let current = jsObject.current.temp;
    document.getElementById("current-temp").innerHTML =  Math.round(current);
    document.getElementById("humidity").innerHTML = jsObject.current.humidity;
    document.getElementById("description").innerHTML =  jsObject.current.weather[0].description;
    document.getElementById("current-2").innerHTML =  jsObject.current.weather[0].main;
  });

  const requestURl =  "https://api.openweathermap.org/data/2.5/onecall?lat=-0.2299&lon=-78.5249&exclude=hourly,minutely&units=imperial&appid=322f9b768407057c9f7ae572f8cd7a97"
  fetch(requestURl)
  .then((response) => response.json())
   .then((jsObject) =>{
   
    let day =  0; 
    const dayofWeek = ["Sunday" , "Monday" , "Tuesday" , "Wednesday", "Thursday", "Friday" , "Saturday"];
    const threeDayForecast = jsObject["daily"];

    threeDayForecast.forEach (daily => {
   
     let newDay =  new Date(jsObject.daily[day + 1].dt * 1000).getDay()
     const imagesrc = "https://openweathermap.org/img/wn/" + threeDayForecast[day].weather[0].icon + ".png";
     document.getElementById(`dayofWeek${day + 1 }`).innerHTML = dayofWeek[newDay];
     document.getElementById(`fiveDayForecast${day + 1}`).innerHTML =  threeDayForecast[day].temp.day;
     document.getElementById(`icon${day + 1}`).setAttribute("src", imagesrc);  
     document.getElementById(`icon${day + 1}`).setAttribute("alt", threeDayForecast[day].weather[0].description);
     day++;
      });
      
   
  });

 //HOME JSON
  const businessURl = "business.json"
  fetch(businessURl)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  
    const business = jsonObject['business'];

    for(let i=0; i < business.length; i++){
      if(business[i].businessName == "Cámara de Comercio De Quito" || business[i].businessName == "Quito Tour Bus"|| business[i].businessName == "Inmobilaria La Coruna"){
  
    // Create Elements in HTML for HOME PAGE
    let companies = document.createElement("div");
    let description = document.createElement("div");
    let h3 = document.createElement("h3");
    let information = document.createElement("p");
    let images = document.createElement("img");
   
    //Call JSON information for HOME PAGE
    h3.innerHTML = business[i].businessName;
    information.innerHTML =  business[i].info;
    images.setAttribute('src', business[i].logo);
    images.setAttribute('alt', business[i].businessName + " logo");
    
    companies.append(description);
    companies.append(images);
    description.append(h3);
    description.append(information);
    
    document.getElementById("company-section").appendChild(companies);

  }
}

});



