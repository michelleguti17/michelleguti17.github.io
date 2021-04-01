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
    let image = document.createElement("img");
    let h2 = document.createElement("h2");
    let descriptionBusiness = document.createElement("p");
    let phone = document.createElement("p");
    let email = document.createElement("p");
    let website =document.createElement("p");
    
    

    //Call JSON information for Directory Page
    image.setAttribute('src', business[i].logo);
    image.setAttribute('alt', business[i].businessName + " logo");
    h2.innerHTML = business[i].businessName;
    descriptionBusiness.innerHTML =  business[i].info;
    phone.innerHTML =  business[i].phone;
    email.innerHTML =  business[i].email;
    website.innerHTML =  business[i].website;
    
    directoryBusiness.append(infoBusiness);
    directoryBusiness.append(image);
    infoBusiness.append(h2);
    infoBusiness.append(descriptionBusiness);
    infoBusiness.append(phone);
    infoBusiness.append(email);
    infoBusiness.append(website);
    document.getElementById("directory").appendChild(directoryBusiness);
  }

});