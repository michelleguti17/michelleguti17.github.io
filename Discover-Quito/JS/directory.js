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
    directoryBusiness.setAttribute("class","div-companies");
    website.setAttribute("class","link");   
    infoBusiness.setAttribute("class","description");
    h2.setAttribute("class","business-title");
    phone.setAttribute("class","phone");
    email.setAttribute("class","email");   
      
    

    //Call JSON information for Directory Page
    website.innerHTML = "<a href=" + `${business[i].websites}` + ">" + `${business[i].websites}`;
    image.setAttribute('src', business[i].logo);
    image.setAttribute('alt', business[i].businessName + " logo");
    h2.innerHTML = business[i].businessName;
    descriptionBusiness.innerHTML =  business[i].info;
    phone.innerHTML =  business[i].phone;
    email.innerHTML =  business[i].email;
    
    
    directoryBusiness.append(infoBusiness);
    directoryBusiness.append(image);
    infoBusiness.append(h2);
    infoBusiness.append(descriptionBusiness);
    infoBusiness.append(phone);
    infoBusiness.append(email);
    infoBusiness.append(website);
    document.querySelector(".directory").appendChild(directoryBusiness);
   
  }

});

const list = document.querySelector('.list-button');
const grid = document.querySelector('.grid-button');
const directoryView = document.querySelector('ol');

list.onclick = function () {
  directoryView.classList.remove('grid-view-filter');
  directoryView.classList.add('list-view-filter');
}

grid.onclick = function () {
  directoryView.classList.remove('list-view-filter');
  directoryView.classList.add('grid-view-filter');
}