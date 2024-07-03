// gsap.from("h1", {
//   color: "red",
//   duration: 2,
//   delay: 1,
//   y: 30,
//   opacity: 0,
//   stagger: 0.3,
// });

// gsap.to("#box", {
//   x: 400,
//   duration: 2,
//   delay: 1,
//   rotate: 360,
//   repeat: -1,
//   yoyo: true,
// });

// gsap.to("#box1", {
//   x: 400,
//   duration: 2,
//   delay: 1,
//   backgroundColor: "green",
//   rotate: 360,
//   repeat: -1,
//   yoyo: true,
// });

// gsap.to("#box2", {
//   x: 400,
//   duration: 2,
//   delay: 1,
//   backgroundColor: "yellow",
//   rotate: 360,
//   repeat: -1,
//   yoyo: true,
// });

// gsap.to("#box3", {
//   x: 400,
//   duration: 2,
//   delay: 1,
//   rotate: 360,
//   repeat: -1,
//   yoyo: true,
// });

// gsap.to("#box1", {
//   x: 300,
//   duration: 2,
//   delay: 1,
//   rotate: 180,
//   backgroundColor: "#7D3C98",
// });

// gsap.from("#box2", {
//   x: 300,
//   y: 400,
//   duration: 2,
//   delay: 1,
//   rotate: 180,
//   backgroundColor: "#239B56",
// });

// var tl = gsap.timeline();

// tl.to("#box1", {
//   x: 400,
//   duration: 2,
//   delay: 1,
//   backgroundColor: "green",
//   rotate: 360,
// });

// tl.to("#box2", {
//   x: 400,
//   duration: 2,
//   backgroundColor: "yellow",
//   rotate: 360,
// });

// tl.to("#box3", {
//   x: 400,
//   duration: 2,
//   rotate: 360,
// });

var tl = gsap.timeline();

tl.from("h2", {
  y: -20,
  opacity: 0,
  duration: 1,
  delay: 0.3,
});

tl.from("h4", {
  y: -20,
  opacity: 0,
  duration: 0.3,
  stagger: 0.2,
});
