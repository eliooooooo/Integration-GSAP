document.addEventListener('DOMContentLoaded', function() {
  gsap.registerPlugin(ScrollTrigger);

  let tl = gsap.timeline({repeat: -1, yoyo: true});
  
  let background = document.querySelector('.background');
  tl.addLabel("start", "+=3");
  tl.to(background, {duration: 2, rotation: 360, ease: 'elastic'}, "start");
  
  let circle = document.querySelectorAll('.circle');
  let animation = tl.from(circle, {duration: 1, y: 100, opacity: 0, stagger: 0.5, ease: 'elastic'}, "-=1");

  let reverseButton = document.querySelector('.reverse');
  reverseButton.addEventListener('click', function() {
    animation.reverse();
  });
  
  // gsap.to(".a", {
  //   // scrollTrigger: ".a",
  //   scrollTrigger: {
  //     trigger: ".a",
  //     toggleActions: "restart pause resume pause",  // reverse
  //     start: "top center",
  //     markers: true,
  //   },
  //   duration: 3,
  //   x: 600,
  //   rotation: 360
  // });

  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".a",
      toggleActions: "restart pause resume pause",  // reverse
      start: "top 100px",
      scrub: 5,
      markers: true,
    },
  });

  tl2.to(".a", {
    duration: 3,
    x: 600,
    rotation: 360
  });
  tl2.to(".b", {
    duration: 3,
    x: 600,
    rotation: 360
  });
  tl2.to(".c", {
    duration: 3,
    x: 600,
    rotation: 360
  });

});