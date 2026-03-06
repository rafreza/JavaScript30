//Get elements 
const player = document.querySelector('.player'); //The main container of the video player
const video = player.querySelector('.viewer'); //The video element itself
const progress = player.querySelector('.progress'); //The progress bar container
const progressBar = player.querySelector('.progress__filled'); //The progress bar that fills up as the video plays
const toggle = player.querySelector('.toggle'); // The play/pause button
const skipButtons = player.querySelectorAll('[data-skip]'); // Skip buttons that have a data-skip attribute
const ranges = player.querySelectorAll('.player__slider'); // Range sliders for volume and playback rate
//Build out functions
function togglePlay() {
  const method = video.paused ? 'play' : 'pause'; // Determine whether to play or pause based on the video's paused property
  video[method](); // Call the appropriate method on the video element
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚'; // Choose the correct icon based on whether the video is paused
  toggle.textContent = icon; // Update the toggle button's text content to reflect the current state
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip); // Skip forward or backward by the amount specified in the data-skip attribute
}

function handleRangeUpdate() {
  video[this.name] = this.value; // Update the video's property (volume or playbackRate) based on the range input's name and value
}
//Hook up event listeners