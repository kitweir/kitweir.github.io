// Enabling Strict Mode
"use strict";

// variable for toggle button/link
var textToggle = document.querySelector(".text-toggle");

// variable for the text that's being blacked out
var blackoutText = document.getElementsByClassName("blackout");

hideText();

textToggle.addEventListener("click", function(obj){
  console.log(blackoutText[0]);
    if(blackoutText[0].classList.contains("reveal")){
      hideText();
    }else{
      showText();
    }
});

console.log(textToggle);

function hideText(){
  console.log("hiding the text");

  for(var i=0; i< blackoutText.length; i++){
    blackoutText[i].classList.remove("reveal");
  }
  console.log("text is hidden!");
  //blackoutText.setAttribute("aria-hidden", "true");
}

function showText(){
  console.log("revealing the text");

  for(var i=0; i< blackoutText.length; i++){
    blackoutText[i].classList.add("reveal");
  }
  console.log("text is revealed!");
  //blackoutText.setAttribute("aria-hidden", "false");
}
