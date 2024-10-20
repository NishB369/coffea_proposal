// Get the up and down buttons
const upButton = document.getElementById('up_btn');
const downButton = document.getElementById('down_btn');

// Get the video container
const videoContainer = document.querySelector('.vid_container');

// Array of video sources
const videoSources = [
    'media/videos/Reel-1.mp4',
    'media/videos/Reel-2.mp4',
    'media/videos/Reel-3.mp4',
    // Add more video sources as needed
];

let currentVideoIndex = 0;

// Function to change the video
function changeVideo(direction) {
    if (direction === 'up') {
        currentVideoIndex = (currentVideoIndex - 1 + videoSources.length) % videoSources.length;
    } else {
        currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
    }
    
    const videoElement = videoContainer.querySelector('video');
    videoElement.src = videoSources[currentVideoIndex];
    videoElement.load();
    videoElement.play();
}

// Add click event listeners to the buttons
upButton.addEventListener('click', () => changeVideo('up'));
downButton.addEventListener('click', () => changeVideo('down'));