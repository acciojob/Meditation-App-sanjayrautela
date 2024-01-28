const meditationVideo = document.getElementById('meditationVideo');
const timeDisplay = document.getElementById('time-display');
const playButton = document.querySelector('.play');
let timer;

function selectMeditation(soundFileName) {
  document.getElementById('meditationVideo').src = `video/${soundFileName.replace('.mp3', '.mp4')}`;
  // Logic to change audio source here
}

function setTime(minutes) {
  const seconds = minutes * 60;
  displayTime(seconds);
}

function displayTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  timeDisplay.textContent = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function togglePlayPause() {
  if (meditationVideo.paused) {
    playMeditation();
  } else {
    pauseMeditation();
  }
}

function playMeditation() {
  meditationVideo.play();
  timer = setInterval(updateTime, 1000);
  playButton.textContent = 'Pause';
}

function pauseMeditation() {
  meditationVideo.pause();
  clearInterval(timer);
  playButton.textContent = 'Play';
}

function updateTime() {
  const currentTime = meditationVideo.currentTime;
  const totalTime = meditationVideo.duration;
  const remainingTime = totalTime - currentTime;

  if (remainingTime <= 0) {
    pauseMeditation();
  } else {
    displayTime(Math.round(remainingTime));
  }
}
