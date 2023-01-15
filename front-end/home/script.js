// Get the tabs
let homeTab = document.getElementById("home-tab");
let catalogueTab = document.getElementById("catalogue-tab");
let contactsTab = document.getElementById("contacts-tab");
let winepalTab = document.getElementById("winepal-tab");
let exitTab = document.getElementById("exit-tab");

// Get the tab contents
let homeContent = document.getElementById("home");
let catalogueContent = document.getElementById("catalogue");
let contactsContent = document.getElementById("contacts");
let winepalContent = document.getElementById("winepal");

homeContent.style.display = "block";
catalogueContent.style.display = "none";
contactsContent.style.display = "none";
winepalContent.style.display = "none";

// Add event listeners to the tabs
homeTab.addEventListener("click", function(){
  homeContent.style.display = "block";
  catalogueContent.style.display = "none";
  contactsContent.style.display = "none";
  winepalContent.style.display = "none";
});
catalogueTab.addEventListener("click", function(){
  homeContent.style.display = "none";
  catalogueContent.style.display = "block";
  contactsContent.style.display = "none";
  winepalContent.style.display = "none";
});
contactsTab.addEventListener("click", function(){
  homeContent.style.display = "none";
  catalogueContent.style.display = "none";
  contactsContent.style.display = "block";
  winepalContent.style.display = "none";
});
winepalTab.addEventListener("click", function(){
  homeContent.style.display = "none";
  catalogueContent.style.display = "none";
  contactsContent.style.display = "none";
  winepalContent.style.display = "block";
});

exitTab.addEventListener("click", function(){
  window.location.href = "login.html"
});

function customAlert(title, message) {
    document.getElementById("alert-box-title").innerHTML = title;
    document.getElementById("alert-box-message").innerHTML = message;
    document.getElementById("alert-box").style.display = "block";
    document.getElementById("alert-box-ok-button").onclick = function() {
    document.getElementById("alert-box").style.display = "none";
    }
  }

const form = document.querySelector('form');
const table = document.getElementById("subscriptions-table");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get the form input values
    const name = form.elements.name.value;
    const age = form.elements.age.value;
    const location = form.elements.location.value;
    const email = form.elements.email.value;

    // Create the data object to send with the request
    const data = { name, age, location, email };
    if (!name || !email || !location || !age) {
        // If any of the fields are empty, prevent the form from being submitted
        customAlert("Error","Please fill in all the fields");
    } else {
        // Make the POST request to the API
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "../../back-end/api/subscription/subscription.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                        
        xhr.onload = function() {
            if (xhr.status === 200) {
            if(xhr.getResponseHeader('content-type') === 'application/json') {
                try {
                    var response = JSON.parse(xhr.responseText);
                    if (response.status === "success") {
                    // Form submitted successfully
                        customAlert("Form submitted successfully!","Please refresh!");                              
                    } else if (response.status === "error") {
                        alert("Error: " + response.error);
                    }
                } catch (e) {
                    console.log("Error parsing JSON: " + e);
                }
            }
            } else {
                    // There was an error
                    customAlert("Error",xhr.status);                              
                    
                }
            };
            xhr.send("name=" + name + "&age=" + age + "&location=" + location + "&email=" + email);

                 // Make the POST request to the API
        

    }
});
fetch('http://localhost:80/PISS-main/back-end/api/subscription/subscription.php/subscriptions.json')
.then(response => response.json())
.then(subscriptions => {
    // Loop through the subscriptions data
    subscriptions.forEach(subscription => {
        // Create a new row
        const row = table.insertRow();
        // Insert the data into the cells
        const nameCell = row.insertCell(0);
        const ageCell = row.insertCell(1);
        const locationCell = row.insertCell(2);
        const emailCell=row.insertCell(3);
        nameCell.innerHTML =subscription.name;
        ageCell.innerHTML = subscription.age;
        locationCell.innerHTML = subscription.location;
        emailCell.innerHTML = subscription.email;
        });
        })
        .catch(error => {
        console.error('Error:', error);
        });

const button=document.getElementById("btn-table");

button.addEventListener('click', (e) => {
        
        if(table.style.display==="inline-block"){
            table.style.display="none";
            button.innerHTML="Show Wine Pals";
        }
        else {
            table.style.display="inline-block";
            button.innerHTML="Hide Wine Pals";
        }
           
});












