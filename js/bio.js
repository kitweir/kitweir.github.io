// Enabling Strict Mode
"use strict";

var bioToggle = document.querySelector(".bio-toggle");
var bioToggleClose = document.querySelector(".bio-toggle-close");
var bioItems = document.querySelector(".bio-items");
var mainContent = document.querySelector(".content");

hideBio();

bioToggle.addEventListener("click", function(obj){

  if(bioItems.classList.contains("hide-left")){
    showBio();
  }else{
    hideBio();
  }

});

bioToggleClose.addEventListener("click", function(obj){

  if(bioItems.classList.contains("hide-left")){
    showBio();
  }else{
    hideBio();
  }

});

console.log(bioToggle);
console.log(bioToggleClose);

function hideBio(){
  console.log("hiding the bio");
  bioItems.classList.add("hide-left");
  console.log("bio is hidden!");
  bioItems.setAttribute("aria-hidden", "true");

}

function showBio(){
  console.log("revealing the bio");
  bioItems.classList.remove("hide-left");
  console.log("bio is revealed!");
  bioItems.setAttribute("aria-hidden", "false");
}
