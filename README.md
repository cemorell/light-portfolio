

       // $(document).ready(function () {
       //   $(document.body).vide('video/ocean'); // Non declarative initialization

       //   var instance = $(document.body).data('vide'); // Get the instance
       //   var video = instance.getVideoObject(); // Get the video object
       //   instance.destroy(); // Destroy instance
       // });
        var scenes = {
        'intro': {
          'projects': 'anchorprojects'
        },
        'scene2': {
          'aboutme': 'anchoraboutme'
        },
        'scene3': {
          'blogs': 'anchorblog'
        },
        'scene4': {
          'bye': 'anchorbye'
        }
      }



<script>
$(function () { // wait for document ready
     // init
     var controller = new ScrollMagic.Controller();

      // Change behavior of controller
      // to animate scroll instead of jump
      controller.scrollTo(function(target) {

        TweenMax.to(window, 0.5, {
          scrollTo : {
            y : target, // scroll position of the target along y axis
            autoKill : true // allows user to kill scroll action smoothly
          },
          ease : Cubic.easeInOut
        });

      });




     // define movement of panels
     var wipeAnimation = new TimelineMax()
         // .fromTo("div.panel.first",    1, {x: "100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
         .fromTo("div.panel.second",    1, {x: "100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
         .fromTo("div.panel.third",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
         .fromTo("div.panel.fourth",   1, {x: "100%"}, {x: "0%", ease: Linear.easeNone}) // in from left
         // .fromTo("div.panel.fifth",   1, {x: "100%"}, {x: "0%", ease: Linear.easeNone}) // in from top

         // create scene to pin and link animation
         new ScrollMagic.Scene({
           triggerElement: "#pinContainer",
           triggerHook: "onLeave",
           duration: "300%"
         })
         .setPin("#pinContainer")
         .setTween(wipeAnimation)
         .addTo(controller);
       });

       // $(document).ready(function () {
       //   $(document.body).vide('video/ocean'); // Non declarative initialization

       //   var instance = $(document.body).data('vide'); // Get the instance
       //   var video = instance.getVideoObject(); // Get the video object
       //   instance.destroy(); // Destroy instance
       // });

</script>

  <!-- Initialize scroll magic div -->
 <!--  <div data-scrollmagic-pin-spacer="" class="scrollmagic-pin-spacer" style="top: auto; left: auto; bottom: 0px; right: auto; margin: 0px; display: block; position: relative; box-sizing: content-box; width: 100%; height: 100%; padding-top: 0px; padding-bottom: 0;"> -->


 <div id="pinContainer" style="position: relative; margin: auto; top: 0px; left: 0px; bottom: auto; right: auto; box-sizing: border-box; width: 100%; height: 100%;">



   <script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
  <!-- Scroll Magic Tween Max -->
  <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"></script>
  <!-- Scroll Magic min -->
  <script src="http://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js"></script>
    <!-- Scroll Magic plugin -->
  <script src="js/scrollmagic/uncompressed/plugins/debug.addIndicators.js"></script>
  <!-- Scroll magic src which I apparently def need -->
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js" type="text/javascript" charset="utf-8" async defer></script>
