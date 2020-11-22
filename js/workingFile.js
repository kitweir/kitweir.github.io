if previous.contains(blackoutText[i]){
  blackoutPrevious.push(blackoutText[i])
}
if next.contains(blackoutText[i]){
  blackoutNext.push(blackoutText[i])
}


// var section = $('.js-section');
var section = document.querySelector('.js-section');

section.waypoint(function(direction) {
  if (direction === 'down') {
      var text = $(this[0, 'element']).attr('data-text');
      var el = $('.js-floating-text span');
      el.html(text)
    }
  }, {
    offset: '50%'
  });

section.waypoint(function(direction) {
    if (direction === 'up') {
      var text = $(this[0, 'element']).attr('data-text');
      var el = $('.js-floating-text span');
      el.html(text)
    }
  }, {
    offset: '-50%'
  });



        setTimeout(oneSecondFunction, 1000);

        function oneSecondFunction() {
          // execute this
          var buttonText = scramble.textContent;
          scramble.dataset.original = buttonText;
          interval = setInterval(function() {
            timer();
          }, 170);
          function timer() {
            scramble.textContent = createRandomText(buttonText);
          }

          // keep track of time and update as needed
          delayTest += intervalTest;

          if (delayTest < (5000)) { // 5 seconds (5000ms)
            setTimeout(oneSecondFunction, intervalTest);
            console.log(intervalTest);
          }


ROLLBACK:

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

      // number = how frequently the 'scramble'
      interval = setInterval(function() {
        timer();
      }, 170);

      function timer() {
        // scramble text based on the stored word
        scramble.textContent = createRandomText(storedWord);
        console.log('scrambling!');
      }

      if (direction === 'down'){
      var text = (this[0, 'element']).getAttribute('data-text');
      var el = document.querySelector('.js-floating-text .change-text');
      el.innerHTML = text;
      storedWord = text;

      console.log(scramble.textContent);
      console.log(storedWord);

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
      if (direction === 'up'){
      var text = (this[0, 'element']).getAttribute('data-text');
      var el = document.querySelector('.js-floating-text .change-text');
      el.innerHTML = text
    }},

    offset: function() {
    return -this.element.clientHeight
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
