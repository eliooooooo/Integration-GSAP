document.addEventListener('DOMContentLoaded', function() {
  
  let circle = document.querySelectorAll('.circle');

  let animation = gsap.from(circle, {duration: 1, y: 100, opacity: 0, stagger: 0.5, ease: 'elastic'});

  let reverseButton = document.querySelector('.reverse');
  reverseButton.addEventListener('click', function() {
    animation.reverse();
  });

});