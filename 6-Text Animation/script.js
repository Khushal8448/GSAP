function BreakTheText() {
  var h1 = document.querySelector("h1");
  var h1Text = h1.textContent;

  var splittedText = h1Text.split("");

  var halfValue = Math.floor(splittedText.length / 2);
  console.log(halfValue);
  var clutter = "";

  splittedText.forEach(function (el, index) {
    clutter += `<span class=${index < halfValue ? "a" : "b"}>${el}</span>`;
  });

  h1.innerHTML = clutter;

  console.log(h1);
}

BreakTheText();

gsap.from("h1 .a", {
  y: 50,
  duration: 0.8,
  opacity: 0,
  delay: 1,
  stagger: 0.4,
});

gsap.from("h1 .b", {
  y: 50,
  duration: 0.8,
  opacity: 0,
  delay: 1,
  stagger: -0.4,
});
