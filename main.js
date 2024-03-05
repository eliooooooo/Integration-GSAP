document.addEventListener('DOMContentLoaded', function() {
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

});