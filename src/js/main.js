// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import {Dropdown} from 'bootstrap';

// Select the video element
const video = document.getElementById('myVideo');

// Set the video to autoplay and loop
video.autoplay = true;
video.loop = true;

// If autoplay doesn't work, you can also trigger it using JavaScript
video.play().catch(function(error) {
    console.log('Autoplay failed: ', error);
});