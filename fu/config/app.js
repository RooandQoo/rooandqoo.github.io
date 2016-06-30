(function() {
  'use strict';
  define(['backbone', 'backbone.marionette', 'jquery', 'bootstrap'], function(Backbone) {
    var App;
    App = new Backbone.Marionette.Application();
    App.addInitializer(function() {
      return ($(document)).on('click', 'a', function(event) {
        var $dst, $src, href;
        if (/^#/.test(href = ($src = $(event.currentTarget)).attr('href'))) {
          if (!($dst = $(href)).length) {
            return;
          }
          event.stopPropagation();
          event.preventDefault();
          return ($('html,body')).stop().animate({
            scrollTop: $dst.offset().top
          }, 600, function() {
            return window.location.hash = href;
          });
        }
      });
    });
    return App;
  });

}).call(this);

//# sourceMappingURL=app.js.map
