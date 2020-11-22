// text scramble based off of this codepen by Billal (@Kreabz): https://codepen.io/Kreabz/pen/rJgoGe

// enabling Strict Mode
"use strict";

var interval;

var scramble = document.querySelector('.scrambleText');

scramble.addEventListener('mouseover', function() {
  var buttonText = scramble.textContent;
  scramble.dataset.original = buttonText;
  interval = setInterval(function() {
    timer();
  }, 170);
  function timer() {
    scramble.textContent = createRandomText(buttonText);
  }
})

scramble.addEventListener("mouseout", function() {
  clearInterval(interval);
  scramble.textContent = scramble.dataset.original;
});

function randomCharacter(){
  var random = '♥♥♥♡♡♡◦◦'.split('');
  return random[Math.floor(Math.random() * random.length)];
}

function createRandomText(buttonText) {
  var split = buttonText.split('');
  for (var i = 0; i < 2; i++) {
    split[Math.floor(Math.random() * split.length)] = randomCharacter();
   }
  return split.join('');
}
