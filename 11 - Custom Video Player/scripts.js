const player = document.querySelector(".player");
const video = document.querySelector(".viewer");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");
const toggle = document.querySelector(".toggle");
const skips = document.querySelectorAll("[data-skip]");
const ranges = document.querySelectorAll(".player__slider");

function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton() {
  const icon = this.paused ? "►" : "❚❚";
  toggle.textContent = icon;
  //   console.log({ toggle });
}

function skip() {
  //   console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  //   console.log(`${this.name}: ${this.value}`);
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
  //   console.log(percent);
}

function scrub(e) {
  console.log(e);
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  console.log(`scrub time is ${scrubTime}`);
  video.currentTime = parseFloat(scrubTime);
}

function toggleFullScreen() {
  if (video.webkitDisplayingFullscreen) {
    video.webkitExitFullscreen();
  } else {
    video.webkitEnterFullscreen();
  }
}

function arrow(time) {
  video.currentTime += time;
}

video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);

toggle.addEventListener("click", togglePlay);

skips.forEach((btn) => {
  btn.addEventListener("click", skip);
});

ranges.forEach((range) => {
  range.addEventListener("change", handleRangeUpdate);
  range.addEventListener("mousemove", handleRangeUpdate);
});

progress.addEventListener("click", scrub);

window.addEventListener("keyup", (e) => {
  if (e.key == "f") {
    toggleFullScreen();
  } else if (e.key == " ") {
    togglePlay();
  } else if (e.key == "ArrowRight") {
    arrow(10);
  } else if (e.key == "ArrowLeft") {
    arrow(-10);
  } else {
    console.log(`press key ${e.key}`);
  }
});
