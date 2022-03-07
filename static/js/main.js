
TweenMax.to(".wrapper", 2, {
    top: "-100%",
    ease: Expo.easeInOut,
    delay: 3.6
});

var tl = new TimelineMax();

tl.from(".loader", 1.6, {
    scaleY: "0%",
    y: 80,
    ease: Expo.easeInOut,
    delay: 1,
    transformOrigin:"50% 100%"
});

tl.to(".loader", 1.6, {
    height: "20vh",
    scaleY: "0%",
    ease: Expo.easeInOut,
    transformOrigin:"0% -100%"
});

TweenMax.to(".social-icon", 2.4, {
x: "2%",
ease: Expo.easeInOut,
delay: 1.0,
});
TweenMax.to(".logo", 2.4, {
    y: "5%",
    ease: Expo.easeInOut,
    delay: 1.0,
    });
/*
TweenMax.to(".home-1", 2.4, {
    x: "30%",
    ease: Expo.easeInOut,
    delay: 3.8,
});
*/