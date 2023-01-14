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
