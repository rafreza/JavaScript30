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

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100; // Calculate the percentage of the video that has been played
  progressBar.style.flexBasis = `${percent}%`; // Update the progress bar's flex basis to reflect the current progress
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration; // Calculate the time to scrub to based on where the user clicked on the progress bar
  video.currentTime = scrubTime; // Update the video's current time to the scrub time
}
//Hook up event listeners
video.addEventListener('click', togglePlay); // Toggle play/pause when the video is clicked
video.addEventListener('play', updateButton); // Update the play/pause button when the video starts playing
video.addEventListener('pause', updateButton); // Update the play/pause button when the video is paused
video.addEventListener('timeupdate', handleProgress); // Update the progress bar as the video plays

toggle.addEventListener('click', togglePlay); // Toggle play/pause when the toggle button is clicked
skipButtons.forEach(button => button.addEventListener('click', skip)); // Add click event listeners to all skip buttons
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate)); // Add change event listeners to all range sliders
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate)); // Add mousemove event listeners to all range sliders for real-time updates

let mousedown = false; // Flag to track whether the mouse is currently down on the progress bar
progress.addEventListener('click', scrub); // Scrub to the clicked position on the progress bar
progress.addEventListener('mousemove', (e) => mousedown && scrub(e)); // Scrub to the current mouse position if the mouse is down
progress.addEventListener('mousedown', () => mousedown = true); // Set mousedown to true when the mouse button is pressed down on the progress bar
progress.addEventListener('mouseup', () => mousedown = false); // Set mousedown to false when the mouse button is released on the progress bar