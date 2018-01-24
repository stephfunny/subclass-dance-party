$(document).ready(function() {
  window.blinky = [];
  window.elton = [];
  window.prancerArray = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 5000
    );

    $('body').append(dancer.$node);

    if (dancerMakerFunctionName === 'makeBlinkyDancer') {
      window.blinky.push(dancer);

    } else if (dancerMakerFunctionName === 'tinyDancer') {
      window.elton.push(dancer);

    } else if (dancerMakerFunctionName === 'prancer') {
      window.prancerArray.push(dancer);
    }  
 

    $('.groupUp').on('click', function(event) {
      moveTogether(window.elton, window.prancerArray);
      console.log('on click')
    });

    var moveTogether = function(array1, array2) {
      var min = Math.min(array1.length, array2.length);
      for (var i = 0; i < min; i++) {
        var top = (array1[i].top + array2[i].top)/2;
        var left = (array1[i].left + array2[i].left)/2;
        array1[i].setPosition(top, left);
        array2[i].setPosition(top, left);
      }
    };


  });


  $('body').on('mouseover', '#elton', function(event) {
    $(this).css( {height: 100} );
  });

  $('body').on('mouseover', '#prancer', function(event) {
    $(this).css( {height: 220} );
  });

  $('body').on('mouseover', '.dancer', function(event) {
    $(this).css( {height: 50, width: 50, 'border-radius': 250} );
  });
  
  $('.lineUp').on('click', function(event) {
    lineUp(window.blinky);
    lineUp(window.elton);
    lineUp(window.prancerArray);

  });



});


var groupUp = function(arrayElton, arrayPrancer) {
  //for each element in the shorter array
  //get left and top of both dancers
  //get the average, then set position of both



};

var lineUp = function(dancers) {
  var height = $('body').height();
  var width = $('body').width();

  window.blinky.forEach(function(item) {
    item.setPosition( height * .3 );
  });
  window.elton.forEach(function(item) {
    item.setPosition( (height * .3) );
  });
  window.prancerArray.forEach(function(item) {
    item.setPosition( (height * .3) );
  });

};


//pick 2 consecutive elements from array
//find their midpoint
//use animate to change their pos to midpoint




