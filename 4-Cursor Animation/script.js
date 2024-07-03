var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var imageDiv = document.querySelector("#image");

main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 0.7,
    // ease: "back.out",
  });
});

imageDiv.addEventListener("mouseenter", function () {
  cursor.innerHTML = "View More";
  gsap.to(cursor, {
    scale: 4,
    backgroundColor: "#ffffff7e",
  });
});

imageDiv.addEventListener("mouseleave", function () {
  gsap.to(cursor, {
    scale: 1,
    backgroundColor: "",
  });
});
