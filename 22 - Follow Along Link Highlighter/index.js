const triggers = document.querySelectorAll("a");
const highlight = document.createElement("span");

highlight.classList.add("highlight");
document.body.append(highlight);

function highlightLink() {
  const linkCoords = this.getBoundingClientRect();
  console.log(linkCoords);

  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX,
  };

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

triggers.forEach((a) => {
  a.addEventListener("mouseover", highlightLink);
});

const initCoord = document
  .querySelector("li")
  .firstChild.getBoundingClientRect();
const initStart = {
  left: initCoord.left + window.scrollX,
  top: initCoord.top + window.scrollY,
};

highlight.style.transform = `translate(${initStart.left}px, ${initStart.top}px)`;
