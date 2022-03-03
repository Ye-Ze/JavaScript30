const slider = document.querySelector(".items");
let isDown = false; // mouse is clicked down or not
let startX; // start point from the slider
let scrollLeft; // store slider's scrollLeft when scroll occured

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  console.log(`x: ${x}`);
  const walk = (x - startX) * 3;
  console.log(`walk: ${walk}`);

  slider.scrollLeft = scrollLeft - walk;
});
