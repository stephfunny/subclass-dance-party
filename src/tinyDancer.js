var tinyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="elton dancer animated infinite bounce jackInTheBox"> <img class="elton" src="elton-john-no-bg.png"></img></span>');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function


  this.setPosition(top, left);
};

tinyDancer.prototype = Object.create(makeDancer.prototype);
tinyDancer.prototype.constructor = tinyDancer;

tinyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  //console.log('Blinky dancers step this: ', this);
  //oldStep();
  // call the old version of step at the beginning of any call to this new version of step
  //oldStep(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.$node;

//   var zoomOutDown = {
//   {
//       opacity: 0;
//       transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
//       transform-origin: center bottom;
//       animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
//     }
//   }
//
//   // .zoomOutDown {
//   //   animation-name: zoomOutDown;
//   // }
};
