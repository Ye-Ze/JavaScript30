const buttons = document.querySelectorAll(".timer__button");
const timeLeft = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const input = document.querySelector("form");
let count;
function setTime(e) {
  clearInterval(count);
  let remainTime = parseInt(this.dataset.time);
  let currentTime = new Date();
  showRemainTime(remainTime);
  countDown(remainTime);
  showEndTime(currentTime, remainTime);
}

function showRemainTime(time) {
  let remainSec = time;
  // let hour = parseInt(remainSec / 3600);
  // remainSec -= hour * 3600;
  // if (hour < 10) {
  //   hour = `0${hour}`;
  // }

  let mins = parseInt(remainSec / 60);
  remainSec -= mins * 60;
  if (mins < 10) {
    mins = `0${mins}`;
  }
  let sec = remainSec;
  if (remainSec < 10) {
    sec = `0${remainSec}`;
  }

  // const text = `${hour}:${mins}:${sec}`;
  const text = `${mins}:${sec}`;
  timeLeft.innerHTML = text;
  document.title = text;
}

function countDown(time) {
  count = setInterval(() => {
    if (time > 0) {
      time--;
      showRemainTime(time);
    } else {
      clearInterval(count);
    }
  }, 1000);
}

function showEndTime(current, remain) {
  current.setSeconds(current.getSeconds() + parseInt(remain));
  let currentHour = current.getHours();
  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }
  let currentMin = current.getMinutes();
  if (currentMin < 10) {
    currentMin = `0${currentMin}`;
  }
  let currentSec = current.getSeconds();
  if (currentSec < 10) {
    currentSec = `0${currentSec}`;
  }
  endTime.innerHTML = `
    It will end at
    <strong class="time">
    ${currentHour}:${currentMin}:${currentSec}
    </strong>
    `;
}

buttons.forEach((button) => {
  button.addEventListener("click", setTime);
});
