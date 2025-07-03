//AOS Library init
  AOS.init();

//On Scroll Functions Calling
window.onscroll = function () {
  navbarClassChange(), 
  verticalBarfn() };


// Navbar
// add new class for nav on scroll
//show/hide scroll top button

function navbarClassChange() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    let nav = document.querySelector("nav");
    nav.classList.add("navbar-scrolled");
     topButton.style.display = "block";
  } else {
    let nav = document.querySelector("nav");
    nav.classList.remove("navbar-scrolled");
     topButton.style.display = "none";
    //  menu.style.display="none";
  }
}

//Vertical Skills Bar

let section = document.querySelector(".skills-section");
let progressspans = document.querySelectorAll(".progress span");
function verticalBarfn() {
  if (window.scrollY >= section.offsetTop - 75) {
    progressspans.forEach((span) => {
      span.style.width = span.dataset.width;
    })
  }
}

// Return Top Button

let topButton = document.getElementById("topButton");

function topButtonFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



//nav-menu
let menu=document.getElementById('menu');
let menuNav=document.getElementById('menu-nav');
menu.addEventListener("click",function(){

menuNav.style.transform="translateX(0px)";
})

let closeMenu=document.getElementById('close-menu');
closeMenu.addEventListener("click",function(){

menuNav.style.transform="translateX(2000px)";
})