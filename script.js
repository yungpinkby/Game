let loginBtn = document.getElementById("loginBtn");
let loginForm = document.getElementById("loginForm");

loginBtn.addEventListener("click", function() {

  let isHidden = loginForm.style.display === "none";
  
  if (isHidden) {
    loginForm.style.display = "block";
  } else {
    loginForm.style.display = "none";
  }
});

let closeButton = document.getElementById("closeButton");

closeButton.addEventListener("click", function() {
  loginForm.style.display = "none";
});

function showRegistration() {
  let registrationWindow = document.getElementById("registrationWindow");
  registrationWindow.style.display = "block";
}
