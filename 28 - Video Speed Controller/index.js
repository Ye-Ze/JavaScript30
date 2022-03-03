const video = document.querySelector("video");
const container = document.querySelector(".speed");
const volume = document.querySelector(".speed-bar");

function handleChange(e) {
  const yCoord = e.offsetY;
  const totalHeight = this.getBoundingClientRect().height;
  const ratio = yCoord / totalHeight;
  const playRate = ratio * 4;
  volume.style.height = `${ratio * 100}%`;
  volume.innerHTML = `${playRate.toFixed(2)}x`;
  console.log(
    `yCoord: ${yCoord}, total: ${totalHeight}, ratio: ${ratio}, playrate: ${playRate}`
  );
  video.playbackRate = playRate;
}

container.addEventListener("mousemove", handleChange);
