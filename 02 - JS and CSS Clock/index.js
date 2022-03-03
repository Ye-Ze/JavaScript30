const secondHand = document.querySelector(".hand.second-hand");
const minuteHand = document.querySelector(".hand.min-hand");
const hourHand = document.querySelector(".hand.hour-hand");

function setDate() {
  var date = new Date();

  const seconds = date.getSeconds();
  const secondDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  const minutes = date.getMinutes();
  const minutesDegrees = (minutes / 60 + seconds / 60 / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = date.getHours();
  const hoursDegrees = (hours / 12 + minutes / 60 / 60) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  if (secondDegrees === 90) secondHand.style.transition = "all 0s";
  else secondHand.style.transition = "all 0.05s";
  if (minutesDegrees === 90) minuteHand.style.transition = "all 0s";
  else minuteHand.style.transition = "all 0.1s";

  console.log(`it's: ${hours}:${minutes}:${seconds}`);
}
setInterval(() => {
  setDate();
}, 1000);
