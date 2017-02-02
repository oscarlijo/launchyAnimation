(function() {
  (function($) {
    return $.fn.launchyAnimation = function(options) {
      var launchyAnimation, settings;
      settings = $.extend({
        delay: null,
        effect: "bounce",
        loop: false,
        loopIterations: null,
        offset: 50,
        speed: 1,
        onBegin: function() {},
        onSuccess: function() {}
      }, options);
      launchyAnimation = function(element) {
        var checkInView, controlLoop, doAnimation, inAnimations;
        element = $(element);
        inAnimations = /In/g.test(settings.effect);
        if (inAnimations) {
          element.css("visibility", "hidden");
        }
        controlLoop = true;
        settings.onBegin();
        doAnimation = function() {
          var checkInView;
          if ((settings.delay != null) && typeof settings.delay === 'number') {
            element.css({
              "animation-delay": settings.delay + "s"
            });
          }
          if (settings.loop && (settings.loopIterations != null) && typeof settings.loopIterations === 'number') {
            element.css({
              "animation-iteration-count": "" + (Math.floor(settings.loopIterations))
            });
          }
          element.addClass("animated " + settings.effect);
          element.css({
            "animation-duration": settings.speed + "s",
            "visibility": inAnimations ? "visible" : void 0
          });
          checkInView = false;
          if (settings.loop) {
            return element.addClass("infinite");
          } else {
            return setTimeout(function() {
              return settings.onSuccess();
            }, settings.speed * 1000);
          }
        };
        checkInView = function() {
          var bounds, elementInView, viewport, win;
          win = $(window);
          viewport = {
            top: win.scrollTop(),
            left: win.scrollLeft()
          };
          viewport.right = viewport.left + win.width();
          viewport.bottom = viewport.top + win.height() - settings.offset;
          bounds = element.offset();
          bounds.right = bounds.left + element.width();
          bounds.bottom = bounds.top + element.height();
          elementInView = !(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom);
          if (elementInView && controlLoop) {
            controlLoop = false;
            return doAnimation();
          }
        };
        $(window).on("resize scroll", function() {
          if (controlLoop) {
            return checkInView();
          }
        });
        return $(document).ready(function() {
          if (controlLoop) {
            return checkInView();
          }
        });
      };
      if (this.length > 0) {
        return $(this).each(function(i, item) {
          return launchyAnimation($(item));
        });
      }
    };
  })(window.jQuery || window.Zepto || window.$);

}).call(this);
