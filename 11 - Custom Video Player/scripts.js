//Get elements 
const player = document.querySelector('.player'); //The main container of the video player
const video = player.querySelector('.viewer'); //The video element itself
const progress = player.querySelector('.progress'); //The progress bar container
const progressBar = player.querySelector('.progress__filled'); //The progress bar that fills up as the video plays
const toggle = player.querySelector('.toggle'); // The play/pause button
const skipButtons = player.querySelectorAll('[data-skip]'); // Skip buttons that have a data-skip attribute
const ranges = player.querySelectorAll('.player__slider'); // Range sliders for volume and playback rate
//Build out functions
//Hook up event listeners