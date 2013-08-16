# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

i = 0
@display = ->
  if i % 2 == 0
    document.getElementById("history").style.display = "block"
  else
    document.getElementById("history").style.display = "none"
  i++

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

