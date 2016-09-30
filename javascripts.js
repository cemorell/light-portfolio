$(function () { // wait for document ready

    console.clear();
    console.log("ScrollMagic v%s loaded", ScrollMagic.version);

    // init
    var controller = new ScrollMagic.Controller();

    // define movement of panels
    var wipeAnimation = new TimelineMax()
        .fromTo("section.panel.turqoise", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
        .fromTo("section.panel.green",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
        .fromTo("section.panel.bordeaux", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}); // in from top

    // create scene to pin and link animation
    var scene = new ScrollMagic.Scene({
            triggerElement: "#pinContainer",
            triggerHook: "onLeave",
            duration: "400%"
        })
        .setPin("#pinContainer")
        .setTween(wipeAnimation)
        .addIndicators() // required plugin
        .addTo(controller);

    $('nav a').on('click',function() {
        var targetSection = $(this).attr('href').substring(1);
        var targetPerc = (targetSection-1) / ($('nav a').length-1);
        var targetPos = scene.scrollOffset() + (scene.duration()*targetPerc);
        controller.scrollTo(targetPos);
    });



});
