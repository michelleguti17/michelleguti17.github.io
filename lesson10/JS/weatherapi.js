const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=322f9b768407057c9f7ae572f8cd7a97";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    
    document.getElementById("current-temp").innerHTML =  Math.round(jsObject.main.temp);
    
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
const desc = jsObject.weather[0].description;  // note how we reference the weather array
document.getElementById('imagesrc').innerHTML = imagesrc;  // informational specification only
document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc);


});



   

  