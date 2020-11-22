// enabling Strict Mode
"use strict";

var allWaypoints = document.getElementsByClassName('js-section');

var interval;
var scramble = document.querySelector('.change-text');

// waypoint trigger when scrolling down
for (var i = 0; i < allWaypoints.length; i++) {
  new Waypoint({
    element: allWaypoints[i],
    handler: function(direction) {

      // store initial word in variable
      var storedWord = scramble.textContent;


      interval = setInterval(function() {
        timer();
      }, 170);

      function timer() {
        // scramble text based on the stored word
        scramble.textContent = createRandomText(storedWord);
      }

      if (direction === 'down'){
        var text = (this[0, 'element']).getAttribute('data-text');
        var el = document.querySelector('.js-floating-text .change-text');
        el.innerHTML = text;
        storedWord = text;

        setTimeout(oneSecondFunction, 1500);
        function oneSecondFunction() {
          clearInterval(interval);
          scramble.textContent = text;
        }
    }},

    offset: function() {
    return this.element.clientHeight/2
  }
  })
}

// waypoint trigger when scrolling up
for (var i = 0; i < allWaypoints.length; i++) {
  new Waypoint({
    element: allWaypoints[i],
    handler: function(direction) {

      clearInterval(interval);
      
      // store initial word in variable
      var storedWord = scramble.textContent;

      if (direction === 'up'){

        var text = (this[0, 'element']).getAttribute('data-text');
        var el = document.querySelector('.js-floating-text .change-text');
        el.innerHTML = text;
        storedWord = text;

        setTimeout(oneSecondFunction, 1500);
        function oneSecondFunction() {
          clearInterval(interval);
          scramble.textContent = text;
        }
    }},

    offset: function() {
    return -this.element.clientHeight/2
  }
  })
}


// function to spit out a random character from a predetermined set
function randomCharacter(){
  var random = '♥♥♥♡♡♡◦◦'.split('');
  return random[Math.floor(Math.random() * random.length)];
}

// function to actually change the word
function createRandomText(buttonText) {
  var split = buttonText.split('');
  for (var i = 0; i < 2; i++) {
    split[Math.floor(Math.random() * split.length)] = randomCharacter();
   }
  return split.join('');
}
