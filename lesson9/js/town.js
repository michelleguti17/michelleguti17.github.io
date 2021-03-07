const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  
    const towns = jsonObject['towns'];
    
    let preston, sodaSprings, fishHaven;
    for(let i=0; i < towns.length; i++){
       if(towns[i].name == "Preston"){
         preston = i;
       }
       else if(towns[i].name == "Fish Haven"){
         fishHaven = i;
       }
       else if(towns[i].name == "Soda Springs"){
         sodaSprings = i;
       }
    }
    let eachTown = [preston, sodaSprings, fishHaven];
    for (let i = 0; i < eachTown.length; i++ ) {
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
       

h2.innerHTML = towns[eachTown[i]].name;
motto.innerHTML = `${towns[eachTown[i]].motto}`;
year.innerHTML = `Founded: ${towns[eachTown[i]].yearFounded}`; 
population.innerHTML = `Population: ${towns[eachTown[i]].currentPopulation}`;
rainFall.innerHTML = `Average Rain fall: ${towns[eachTown[i]].averageRainfall}`; 
images.setAttribute( "src", "images/" + towns[eachTown[i]].photo);
images.setAttribute( "alt", `${towns[eachTown[i]].photo}`);

townName.append(info);
info.append(h2);
info.append(motto);
info.append(year);
info.append(population);
info.append(rainFall);
townName.append(images);
document.querySelector("div.places").append(townName);
    }
});

