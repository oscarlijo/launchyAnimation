(($) ->
    $.fn.launchyAnimation = (options) ->
        # Default options
        settings = $.extend(
            delay: null
            effect: "bounce"
            loop: false
            loopIterations: null
            offset: 50
            speed: 1
            onBegin: () ->
            onSuccess: () ->
        , options )

        # Main function
        launchyAnimation = (element) ->
          element = $(element)
          inAnimations = /In/g.test(settings.effect)
          if inAnimations then element.css "visibility", "hidden"
          controlLoop = true
          settings.onBegin()


          # Do the animation
          doAnimation = ()->
            if settings.delay? && typeof settings.delay is 'number' then element.css "animation-delay": "#{settings.delay}s"
            if settings.loop && settings.loopIterations? && typeof settings.loopIterations is 'number' then element.css "animation-iteration-count": "#{Math.floor(settings.loopIterations)}"
            element.addClass "animated #{settings.effect}"
            element.css
              "animation-duration": "#{settings.speed}s"
              "visibility": "visible" if inAnimations
            checkInView = false
            if settings.loop then element.addClass "infinite" else
              setTimeout(()->
                settings.onSuccess()
              , settings.speed * 1000)


          # Make sure the element is in the viewport
          checkInView = () ->
            win = $(window)
            viewport = {
                top : win.scrollTop()
                left : win.scrollLeft()
            }
            viewport.right = viewport.left + win.width()
            viewport.bottom = viewport.top + win.height() - settings.offset
            bounds = element.offset()
            bounds.right = bounds.left + element.width()
            bounds.bottom = bounds.top + element.height()

            elementInView = (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom))
            if elementInView && controlLoop
              controlLoop = false
              doAnimation()


          $(window).on "resize scroll", () -> if controlLoop then checkInView()
          $(document).ready -> if controlLoop then checkInView()


        # Create Instances ----------------
        if @.length > 0
          $(@).each (i, item) ->
            launchyAnimation($(item))

)(window.jQuery || window.Zepto || window.$)
