// Get the tabs
let homeTab = document.getElementById("home-tab");
let catalogueTab = document.getElementById("catalogue-tab");
let contactsTab = document.getElementById("contacts-tab");
let exitTab = document.getElementById("exit-tab");

// Get the tab contents
let homeContent = document.getElementById("home");
let catalogueContent = document.getElementById("catalogue");
let contactsContent = document.getElementById("contacts");

homeContent.style.display = "block";
catalogueContent.style.display = "none";
contactsContent.style.display = "none";

// Add event listeners to the tabs
homeTab.addEventListener("click", function(){
  homeContent.style.display = "block";
  catalogueContent.style.display = "none";
  contactsContent.style.display = "none";
});
catalogueTab.addEventListener("click", function(){
  homeContent.style.display = "none";
  catalogueContent.style.display = "block";
  contactsContent.style.display = "none";
});
contactsTab.addEventListener("click", function(){
  homeContent.style.display = "none";
  catalogueContent.style.display = "none";
  contactsContent.style.display = "block";
});

exitTab.addEventListener("click", function(){
  window.location.href = "login.html"
});
