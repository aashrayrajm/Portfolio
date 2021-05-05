window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    var positiontop = $(document).scrollTop();
    if (positiontop > 0 && positiontop < (window.innerWidth) * 0.24) {

        
        positiontop = positiontop - ((window.innerHeight) * 0.1);
        var scrollWidth = (100 * positiontop / window.innerWidth) + 6;
        var scrollWidthY = (100 * positiontop / window.innerWidth) + 6;
        
        newvalue = - (300 - 97) /(scrollWidth - 160) - 0.55

        
        if(scrollWidthY > 18){
            scrollWidthY = 18;
        }
        
        $(".scroll-down").css({ "opacity": "0"})
        $(".first-name").css({ "transform": "Scale(" + newvalue + ") translate(" + (scrollWidth+3)+"vw,"+scrollWidthY+"vw)",});
        $(".last-name").css({ "transform": "Scale(" + newvalue + ") translate(-"+scrollWidth+"vw,"+(scrollWidth+5)+"vw)",});
    }
    else if (positiontop > (window.innerWidth) * 0.24){
        $(".first-name").css({ "transform": "Scale(1) translate(28vw,22vw)", "left": "0vw"});
        $(".last-name").css({ "transform": "Scale(1) translate(-22.5vw,33vw)"});
    }
    else {
        $(".scroll-down").css({ "opacity": "0.5"})
        $(".first-name").css({ "transform": "Scale(0.7)", "left": "-3vw"});
        $(".last-name").css({ "transform": "Scale(0.7)"});
    }
}
TweenLite.defaultEase = Linear.easeNone;
var controller = new ScrollMagic.Controller();
var tl = new TimelineMax();

var ww = window.innerWidth;

var noSlides = $(".section").length;
var slideWidth = $(".section").width();
var slideContainerWidth = slideWidth * noSlides - ww;

console.log(noSlides, slideContainerWidth);

TweenLite.set('#lineSVG', { width: slideContainerWidth + ww })


var actionHorizontal = new TimelineMax()
    .to("#slideContainer", 1, { x: -slideContainerWidth })

var horizontal = createHorizontal();

function createHorizontal() {
    return new ScrollMagic.Scene({
        triggerElement: "#js-wrapper",
        triggerHook: "onLeave",
        duration: slideContainerWidth
    })
        .setPin("#js-wrapper")
        .setTween(actionHorizontal)
        // .addIndicators({
        //     colorTrigger: "white",
        //     colorStart: "white",
        //     colorEnd: "white",
        // })
        .addTo(controller);

}


$(window).resize(function () {

    ww = window.innerWidth;
    slideContainerWidth = slideWidth * noSlides - ww;


    horizontal.destroy(true);
    horizontal = createHorizontal();

    TweenLite.set('#line', { width: slideContainerWidth + ww })

    console.log(ww, slideContainerWidth);

});
