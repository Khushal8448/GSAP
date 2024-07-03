var menu = document.querySelector("#nav i");
var close = document.querySelector("#full i");

var tl = gsap.timeline({ paused: true });

tl.to("#full", {
  right: 0,
  duration: 0.4,
});

tl.from("#full h4", {
  x: 150,
  duration: 0.4,
  opacity: 0,
  stagger: 0.28,
});

tl.from("#full i", {
  opacity: 0,
});

menu.addEventListener("click", function () {
  tl.play();
});

close.addEventListener("click", function () {
  tl.reverse();
});
