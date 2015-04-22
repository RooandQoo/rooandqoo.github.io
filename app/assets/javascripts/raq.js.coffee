# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

@ttip = ->
  $(".ttip").tooltip({ effect: 'slide'});
  $("#dyna img[title]").tooltip({
    tip: '#dynatip',
    offset: [10, 2],
    effect: 'slide'
  }).dynamic( {
    bottom: {
    direction: 'down',
    bounce: true
    }
  });

