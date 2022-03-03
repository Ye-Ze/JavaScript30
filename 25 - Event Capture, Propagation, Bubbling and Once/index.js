const button = document.querySelector("button");
function logText(e) {
  e.stopPropagation();
  console.log(this.classList.value);
}

const divs = document.querySelectorAll("div");
document.body.addEventListener("click", logText);
divs.forEach((div) => {
  div.addEventListener("click", logText, { capture: false });
});

button.addEventListener(
  "click",
  (e) => {
    console.log("Click");
    // e.stopPropagation();
  },
  { once: true }
);
