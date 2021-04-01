const directoryURl = "business.json"
fetch(directoryURl)
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
  console.table(jsonObject);  
  const business = jsonObject['business'];


 
  for(let i=0; i < business.length; i++){


     //Create Elements in HTML for Directory Page
    let directoryBusiness = document.createElement("div");
    let infoBusiness = document.createElement("div");
    let h2 = document.createElement("h2");
    let descriptionBusiness = document.createElement("p");
    let image = document.createElement("img");
    

    //Call JSON information for Directory Page
    image.setAttribute('src', business[i].logo);
    image.setAttribute('alt', business[i].businessName + " logo");
    h2.innerHTML = business[i].businessName;
    descriptionBusiness.innerHTML =  business[i].info;
    
    
    directoryBusiness.append(infoBusiness);
    directoryBusiness.append(image);
    infoBusiness.append(h2);
    infoBusiness.append(descriptionBusiness);
    document.getElementById("directory").appendChild(directoryBusiness);
  }

});