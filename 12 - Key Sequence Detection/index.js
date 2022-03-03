let pressed = [];
const secretCode = "strange";

window.addEventListener("keyup", (e) => {
  pressed.push(e.key);
  pressed.splice(-secretCode.length, pressed.length - secretCode.length);
  console.log(pressed);
  if (pressed.join("").includes(secretCode)) {
    console.log("RING! DING-DONG!");
  }
});
