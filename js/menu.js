//Enabling Strict Mode!!!
"use strict";

var hamburger = document.querySelector(".hamburger");
var menuItems = document.querySelector(".fullscreen-menu");
var mainContent = document.querySelector(".content");

hideMenu();

hamburger.addEventListener("click", function(obj){
  hamburger.classList.toggle("is-active");

  if(menuItems.classList.contains("hide")){
    showMenu();
  }else{
    hideMenu();
  }

});

console.log(hamburger);

function hideMenu(){
  console.log("Hiding the fullscree menu");
  menuItems.classList.add("hide");
  console.log("Fullscreen menu is hidden!");
  menuItems.setAttribute("aria-hidden", "true");
}

function showMenu(){
  console.log("Revealing the fullscreen menu");
  menuItems.classList.remove("hide");
  console.log("Fullscreen menu is revealed!");
  menuItems.setAttribute("aria-hidden", "false");
}
