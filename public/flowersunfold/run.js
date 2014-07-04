$(document).ready(function) {
  jQuery.event.add(window, "load", backgroundResize);
  jQuery.event.add(window, "resize", backgroundResize);

  function backgroundResize() {
    var window_height = $(window).height();
    var window_width = $(window).width();

    var top_height = $(window).height();
    var intro_height = $("#introduction").height();
    var songs_height = $("#songs").height();
    var pv_height = $("#pv").height();
    var staff_height = $("#staff").height();
    var link_height = $("#link").height();

    $("#top").css("height", top_height);
    $("#bg01").css("height", top_height);
    $("#bg02").css("height", intro_height);
    $("#bg03").css("height", songs_height);
    $("#bg04").css("height", pv_height);
    $("#bg05").css("height", staff_height);
    $("#bg06").css("height", link_height);

  }
}
