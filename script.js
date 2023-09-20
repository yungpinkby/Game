(function() {
  let loginBtn = document.getElementById("loginBtn");
  let loginForm = document.getElementById("loginForm");
  let closeButton = document.getElementById("closeButton");
  let registrationWindow = document.getElementById("registrationWindow");

  function init() {
    loginBtn = document.getElementById("loginBtn");
    loginForm = document.getElementById("loginForm");
    closeButton = document.getElementById("closeButton");
  }

  function addEvents() {
    loginBtn.addEventListener("click", function() {
      const isHidden = loginForm.style.display === "none";
      
      if (isHidden) {
        loginForm.style.display = "block";
      } else {
        loginForm.style.display = "none";
      }
    });

    closeButton.addEventListener("click", function() {
      loginForm.style.display = "none";
    });
  }

  

  function showRegistration() {
    registrationWindow = document.getElementById("registrationWindow");
    registrationWindow.style.display = "block";
  }

  document.addEventListener("DOMContentLoaded", function() {
    init();
    addEvents();
  });
})();

