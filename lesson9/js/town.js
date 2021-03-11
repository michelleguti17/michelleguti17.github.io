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
      townName.setAttribute("class","town")
     
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

