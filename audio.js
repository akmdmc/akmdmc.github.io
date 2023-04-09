const bgm = document.getElementById('bgm');
const audioIcon = document.querySelector('#audioIcon');
const stopBtn = document.querySelector('.stopBtn');
const playBtn = document.querySelector('.playBtn');
const closeBtn = document.querySelector('.close');
const controls = document.querySelector('.controls');
const controlsAfter = document.querySelector('.controlsAfter');
let isPlay = false;
let autoHideTimer = null;

audioIcon.addEventListener('click', audioIconClick)
function audioIconClick() {
  audioIcon.style.opacity = '0';
  controls.style.left = '0%';
  audioIcon.style.left = '-50%';
}
stopBtn.addEventListener('click', stopBtnClick)

function stopBtnClick() {
  bgm.pause();
  audioIcon.style.animationPlayState = 'paused';
  stopBtn.style.display = 'none';
  playBtn.style.display = 'block';
  isPlay = !isPlay;
}
playBtn.addEventListener('click', playBtnClick)

function playBtnClick() {
  bgm.play();
  audioIcon.style.animationPlayState = 'running';
  stopBtn.style.display = 'block';
  playBtn.style.display = 'none';
  isPlay = !isPlay;
}

closeBtn.addEventListener('click', closeBtnClick)
function closeBtnClick() {
  controls.style.left = '-100%';
  audioIcon.style.opacity = '1';
  bgm.pause();
  isPlay = false;
  setTimeout(function () {
    audioIcon.style.display = 'none';
    controls.style.display = 'none';
  }, 500)
}
controlsAfter.addEventListener('click', controlsAfterClick)
function controlsAfterClick() {
  if (autoHideTimer) clearTimeout(autoHideTimer);
  controls.style.left = '-100%';
  audioIcon.style.opacity = '1';
  audioIcon.style.left = '0%';
  autoHideTimer = setTimeout(function () {
    audioIcon.style.opacity = '0.6';
    audioIcon.style.left = '-50px';
  }, 5000)
}
