const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");
msg.text = document.querySelector("[name=text").value;

function populateVoices() {
  voices = this.getVoices(); // get all the voices
  console.log(voices);

  // select dropdown
  voicesDropdown.innerHTML = voices
    .sort((voice) => {
      return voice.lang;
    })
    .filter((voice) => {
      if (voice.lang.includes("zh-TW") || voice.lang.includes("en")) {
        return voice;
      }
    })

    .map((voice) => {
      return `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`;
    })
    .join("");
}

function toggle(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    speechSynthesis.speak(msg);
  }
}

function setVoice() {
  msg.voice = voices.find((voice) => voice.name === this.value);
  toggle();
}

function setOption() {
  console.log(this.name, this.value);
  msg[this.name] = this.value;
  toggle();
}

speechSynthesis.addEventListener("voiceschanged", populateVoices);
voicesDropdown.addEventListener("change", setVoice);
options.forEach((option) => {
  option.addEventListener("change", setOption);
});
speakButton.addEventListener("click", toggle);
stopButton.addEventListener("click", () => {
  toggle(false);
});
