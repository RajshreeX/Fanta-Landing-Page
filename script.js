/*GSAP (GreenSock Animation Platform) timeline with a scroll trigger in JavaScript.*/
var tl = gsap.timeline({scrollTrigger:{   //defines an object that configures the scroll trigger behavior for the timeline.
    trigger: ".two",
    start: "0% 95%", //"0%" indicates the animation should begin when the top of the trigger element reaches the top of the viewport. the animation will start when 95% of the trigger element has scrolled out of the viewport
    end: "70% 50%", //"70%" indicates the animation should complete when 70% of the viewport height has scrolled past the top of the trigger element. the animation will end when the middle of the trigger element reaches the middle of the viewport.
    scrub: true, //Scrubbing allows the animation to be controlled directly by scrolling. As you scroll, the animation progresses or regresses accordingly.
    //markers: true,
}})

tl.to("#fanta",{
    top: "120%",
    left: "0%"
}, 'orange')
tl.to("#orange-cut",{
    top:"160%",
    left: "23%"
}, 'orange')
tl.to("#orange",{
    width: "15%",
    top:"160%",
    right: "10%"
}, 'orange')
tl.to("#leaf",{
    top:"105%",
    rotate: "130deg",
    left: "70%"
}, 'orange')
tl.to("#leaf2",{
    top:"110%",
    rotate: "130deg",
    left: "0%"
}, 'orange')

var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
}})

tl2.from(".lemon1",{
    rotate: "-90deg",
    left: "-100%",
    top: "110%"
}, 'ca')
tl2.from("#cocacola",{
    rotate: "-90deg",
    top: "110%",
    left: "-100%",
}, 'ca')

tl2.from(".lemon2",{
    rotate: "90deg",
    left: "100%",
    top: "110%"
}, 'ca')
tl2.from("#pepsi",{
    rotate: "90deg",
    top: "110%",
    left: "100%",
}, 'ca')

tl2.to("#orange-cut",{
    width:"18%",
    left: "42%",
    top: "204%"
}, 'ca')
tl2.to("#fanta",{
    width:"35%",
    top: "210%",
    left: "33%",
}, 'ca')
