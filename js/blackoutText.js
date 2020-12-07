// Enabling Strict Mode
"use strict";

// variable for toggle button/link
var textToggle = document.querySelector(".text-toggle");

// variable for prev/next sections
var previous = document.querySelector(".previous");
var next = document.querySelector(".next");

// variable for the text that's being blacked out
var blackoutText = document.getElementsByClassName("blackout");

// variable to hold text that gets automatically revealed / hovered
var blackoutTextAuto = [];

// variable to hold text that reveals on hover
var blackoutPrevious = document.querySelectorAll(".previous .hover");
var blackoutNext = document.querySelectorAll(".next .hover");

// make sure the text is hidden on page load, just to be safe
hideText();

// method for reveals that happen automatically
for(var i=0; i< blackoutText.length; i++){
  if(blackoutText[i].classList.contains("auto")){

    blackoutTextAuto.push(blackoutText[i]);

    setTimeout(revealAll, 500);

    function revealAll(){
      for(let a=0; a< blackoutTextAuto.length; a++){
        revealLine(a);
      }
    }

    function revealLine(a) {
      setTimeout(function() {
        blackoutTextAuto[a].classList.add("reveal");
      }, 1000 * a);
    }
  }
}


// method for reveals on hover
if(previous && next != null){
  previous.addEventListener('mouseover', showPrevious);
  next.addEventListener('mouseover', showNext);

  previous.addEventListener('mouseout', hidePrevious);
  next.addEventListener('mouseout', hideNext);

  function showPrevious(e) {
    for(var i=0; i< blackoutPrevious.length; i++){
      blackoutPrevious[i].classList.add("reveal");
    }
  };
  function showNext(e) {
    for(var i=0; i< blackoutNext.length; i++){
      blackoutNext[i].classList.add("reveal");
    }
  };

  function hidePrevious(e) {
    for(var i=0; i< blackoutPrevious.length; i++){
      blackoutPrevious[i].classList.remove("reveal");
    }
  };
  function hideNext(e) {
    for(var i=0; i< blackoutNext.length; i++){
      blackoutNext[i].classList.remove("reveal");
    }
  };
}

// method for reveals triggered by a click/toggle/button
if(textToggle != null){
textToggle.addEventListener("click", function(obj){
  console.log(blackoutText[0]);
  if(blackoutText[0].classList.contains("reveal")){
    hideText();
  }else{
    showText();
  }
});
}

function hideText(){
  for(var i=0; i< blackoutText.length; i++){
    blackoutText[i].classList.remove("reveal");
  }
  //blackoutText.setAttribute("aria-hidden", "true");
}

function showText(){
  for(var i=0; i< blackoutText.length; i++){
    blackoutText[i].classList.add("reveal");
  }
  //blackoutText.setAttribute("aria-hidden", "false");
}
