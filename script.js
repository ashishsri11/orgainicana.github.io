// var btnLogin = document.getElementById('do-login');
// var idLogin = document.getElementById('login');
// var username = document.getElementById('username');
// btnLogin.onclick = function(){
//   idLogin.innerHTML = '<p>We\'re happy to see you again, </p><h1>' +username.value+ '</h1>';
// }


// const hamburger = document.getElementById("hamburger");
// const navMenu = document.querySelector(".menu-bar");

// hamburger.onclick = function(){
//   document.getElementById(menu-bar).style = 'display : block;'
// }

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }