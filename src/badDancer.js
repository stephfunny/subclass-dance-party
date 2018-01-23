var badDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<span class="dancer" id="bad"></span>');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function


};

badDancer.prototype = Object.create(makeDancer.prototype);
badDancer.prototype.constructor = badDancer;

badDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  //console.log('Blinky dancers step this: ', this);
  //oldStep();
  // call the old version of step at the beginning of any call to this new version of step
  //oldStep(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.fadeIn();
};
