const timeNodes = Array.from(document.querySelectorAll("[data-time]"));

const seconds = timeNodes
  .map((timeNode) => {
    return timeNode.dataset.time;
  })
  .map((timeCode) => {
    const [mins, secs] = timeCode.split(":").map(parseFloat);
    return mins * 60 + secs;
  })
  .reduce((total, vidSeconds) => {
    return total + vidSeconds;
  });
console.log(seconds);

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;
const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

const totalTime = document.querySelector(".total");
totalTime.innerHTML = `
<span>Total time <b>${hours}</b>:<b>${mins}</b>:<b>${secondsLeft}</b></span>
`;
