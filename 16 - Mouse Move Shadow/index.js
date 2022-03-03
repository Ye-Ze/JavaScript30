const hero = document.querySelector(".hero");
const text = document.querySelector("h1");

function shadow(e) {
  const walk = 500; // 500px
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;
  console.log(this, e.target);
  if (this != e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);
  console.log(xWalk, yWalk);

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.6),
    ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.5),
    ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.4)
`;
}

hero.addEventListener("mousemove", shadow);
