// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  if (!this.$node) {
    this.$node = $('<span class="dancer"></span>');
  }
  this.timeBetweenSteps = timeBetweenSteps;
  //timeBetweenSteps;
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  //this.top = top;
  //this.left = left;

  // use jQuery to create an HTML <span> tag
  this.left = left;
  this.top = top;
  this.step();
  this.setPosition(top, left);
};


makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};


makeDancer.prototype.setPosition = function(top, left) {

  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.animate(styleSettings);
};

//dancer.setPosition(top, left);

//
// var testFunction = function() {
//   alert('this is a test');
// };
