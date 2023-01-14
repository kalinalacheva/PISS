// Get the login and register tabs
let loginTab = document.getElementById("login-tab");
let registerTab = document.getElementById("register-tab");

// Get the login and register forms
let loginForm = document.getElementById("login");
let registerForm = document.getElementById("register");

// Add event listeners to the tabs
loginTab.addEventListener("click", function(){
  loginTab.classList.add("active");
  registerTab.classList.remove("active");
  loginForm.classList.add("active");
  registerForm.classList.remove("active");
});
registerTab.addEventListener("click", function(){
  loginTab.classList.remove("active");
  registerTab.classList.add("active");
  loginForm.classList.remove("active");
  registerForm.classList.add("active");
});
function customAlert(title, message) {
  document.getElementById("alert-box-title").innerHTML = title;
  document.getElementById("alert-box-message").innerHTML = message;
  document.getElementById("alert-box").style.display = "block";
  document.getElementById("alert-box-ok-button").onclick = function() {
      document.getElementById("alert-box").style.display = "none";
  }
}
 // get the login form
 var login_form = document.getElementById("login-form");
      
 // listen for the submit event
 login_form.addEventListener("submit", function(event) {
   event.preventDefault();

   // get the form data
   var username = document.getElementById("username").value;
   var password = document.getElementById("password").value;

   // make an AJAX request to the login.php script
   var xhr = new XMLHttpRequest();
   xhr.open("POST", "back-end/api/login/login.php", true);
   xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
   xhr.onreadystatechange = function() {
       if (xhr.readyState === 4 && xhr.status === 200) {
           // parse the JSON response
           var data = JSON.parse(xhr.responseText);
           if(data.status === "success") {
               // redirect the user to the homepage
               window.location.href = "front-end/home/home.html";
           } else {
               // display an error message
               customAlert("Error",data.message);

           }
       }
   };
   xhr.send("username=" + username + "&password=" + password);
 });

  // get the register form
  var reg_form = document.getElementById("register-form");
      
  // listen for the submit event
  reg_form.addEventListener("submit", function(event) {
    event.preventDefault();

    // get the form data
    var username = document.getElementById("reg-username").value;
    var password = document.getElementById("reg-password").value;
    var email = document.getElementById("reg-email").value;
    if (!username || !email || !password) {
    // If any of the fields are empty, prevent the form from being submitted
    event.preventDefault();
    customAlert("Error","Please fill in all the fields");
   } else {
      // make an AJAX request to the register.php script
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "back-end/api/registration/registration.php", true);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      
      xhr.onload = function() {
        if (xhr.status === 200) {
            if(xhr.getResponseHeader('content-type') === 'application/json') {
                try {
                    var response = JSON.parse(xhr.responseText);
                    if (response.status === "success") {
                        // Form submitted successfully
                        loginTab.classList.add("active");
                        registerTab.classList.remove("active");
                        loginForm.classList.add("active");
                        registerForm.classList.remove("active");
                        customAlert("Form submitted successfully!","Please log in!");                              
                    } else if (response.status === "error") {
                            alert("Error: " + response.error);
                    }
                } catch (e) {
                    console.log("Error parsing JSON: " + e);
                }
          } else {
              if(xhr.responseText.includes("Duplicate entry")){
                if(xhr.responseText.includes("for key 'email'")){
                  customAlert("Error","This email has already been used.");                              
                }else if(xhr.responseText.includes("for key 'username'")){
                  customAlert("Error","This username has already been used.");                              
                }
              } else {
                customAlert("Error",xhr.responseText);                              
              }
            }
        } else {
            // There was an error
            customAlert("Error",xhr.status);                              

        }
    };
    xhr.send("username=" + username + "&password=" + password + "&email=" + email);
  }
  });
