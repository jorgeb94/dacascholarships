// mobile nav
var navBtn = document.getElementById('menu-icon');

var displayMobileMenu = function(){
  var toggleMenu = document.getElementById("mobile-nav");
  var icon = document.getElementById('menu-icon');
  var overlay = document.getElementById('overlay');
  if (toggleMenu.style.position == "relative"){
    icon.removeChild(icon.childNodes[0]);
    icon.innerHTML = "<span id='menu-icon'><i class='fa fa-bars' aria-hidden='true'></i></span>"
    toggleMenu.style.position = "fixed";
    toggleMenu.style.left = "-2000px";
    overlay.style.top = "65px";
  }else{
    icon.removeChild(icon.childNodes[0]);
    icon.innerHTML = "<span id='menu-icon'><i class='fa fa-times' aria-hidden='true'></i></span>"
    toggleMenu.style.position = "relative";
    toggleMenu.style.left = "0px";
    overlay.style.top = "225px";
  }
}

navBtn.addEventListener("click", displayMobileMenu);


// change filter names for mobile

var screenWidth = window.innerWidth;

var clearTpe = function(){
  var star = document.getElementById('star');
  star.innerHTML = "";
}

var checkScreenSize = function(size){
  if(size >= 680){
    var star = document.getElementById('star');
    star.innerHTML = "STAR SCHOLARSHIPS";
    var full = document.getElementById('full');
    full.innerHTML = "FULL SCHOLARSHIPS";
    var stem = document.getElementById('stem');
    stem.innerHTML = "STEM SCHOLARSHIPS";
    var general = document.getElementById('general');
    general.innerHTML = "GENERAL SCHOLARSHIPS";
    var open = document.getElementById('open');
    open.innerHTML = "OPEN SCHOLARSHIPS";
  }
}

checkScreenSize(screenWidth);
