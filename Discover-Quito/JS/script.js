

// Menu
function toggleMenu(){
  
    document.getElementById("primaryNav").classList.toggle("hide");
  }

//Slides Gallery  
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}


// WEATHER API



  const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=3652462&units=imperial&appid=322f9b768407057c9f7ae572f8cd7a97";
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

  const requestURl = "https://api.openweathermap.org/data/2.5/forecast?id=3652462&units=imperial&appid=322f9b768407057c9f7ae572f8cd7a97";
  
  fetch(requestURl)
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


  const businessURl = "business.json"
  fetch(businessURl)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  
    const business = jsonObject['business'];

    for(let i=0; i < business.length; i++){
      if(business[i].businessName == "Pim's" || business[i].businessName == "Quito Tour Bus"|| business[i].businessName == "Museo San Francisco de Quito"){
  
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


