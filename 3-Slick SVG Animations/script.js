var initialPath = "M 20 100 Q 680 100 1380 100";

var finalPath = "M 20 100 Q 500 100 980 100";

var string = document.querySelector("#string");

string.addEventListener("mousemove", function (dets) {
  path = `M 20 100 Q ${dets.x} ${dets.y} 980 100`;

  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.3,
    ease: "power3.out",
  });
});

string.addEventListener("mouseleave", function (dets) {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 1.5,
    ease: "elastic.out(1,0.2)",
    // y: -250,
  });
});
