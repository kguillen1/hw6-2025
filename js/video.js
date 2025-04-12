var video;

// window.addEventListener("load", function() {
// 	console.log("Good job opening the window")
// 	video=document.querySelector("#player1")
// 	video.autoplay=false;
// 	video.loop=false;

// 	playButton.addEventListener("click", function() {
//         video.play();
// 		volumeSpan.textContent = `${video.volume * 100}%`;
//     });

// });

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

var video;

window.addEventListener("load", function() {
    console.log("Good job opening the window");

    // Get the video element and other buttons
    video = document.querySelector("#player1");
    const playButton = document.getElementById("play");
    const pauseButton = document.getElementById("pause");
    const volumeSpan = document.getElementById("volume");
    const volumeSlider = document.getElementById("slider");
    const slowerButton = document.getElementById("slower");
    const fasterButton = document.getElementById("faster");
    const skipButton = document.getElementById("skip");
    const muteButton = document.getElementById("mute");
    const oldSchoolButton = document.getElementById('vintage');
    const originalButton = document.getElementById('orig');

    video.autoplay = false;
    video.loop = false;

    // Play video when play button is clicked
    playButton.addEventListener("click", function() {
        video.play();
        volumeSpan.textContent = `${video.volume * 100}%`;
    });

    // Pause video when pause button is clicked
    pauseButton.addEventListener("click", function() {
        video.pause();
    });

    // Slow the video speed by 10% each time the button is clicked
    slowerButton.addEventListener("click", function() {
        video.playbackRate *= 0.9;
        console.log(`New speed: ${video.playbackRate.toFixed(5)}x`);
    });

    // Increase the video speed each time the button is clicked
    fasterButton.addEventListener("click", function() {
        video.playbackRate /= 0.9;
        console.log(`New speed: ${video.playbackRate.toFixed(5)}x`);
    });

    // Skip ahead 10 seconds in the video when skip button is clicked
    skipButton.addEventListener("click", function() {
        if (video.currentTime + 10 >= video.duration) {
            video.currentTime = 0;
            console.log("Skipped to beginning: 0s");
        } else {
            video.currentTime += 10;
            console.log(`Skipped ahead to: ${video.currentTime.toFixed(2)}s`);
        }
    });

    // Mute/unmute the video when mute button is clicked
    muteButton.addEventListener("click", function() {
        video.muted = !video.muted;
        if (video.muted) {
            muteButton.textContent = "Unmute";
        } else {
            muteButton.textContent = "Mute";
        }
    });

    // Update the volume based on slider input
    volumeSlider.addEventListener('input', function() {
        const volume = volumeSlider.value / 100;
        video.volume = volume;
        volumeSpan.textContent = `${volumeSlider.value}%`;
    });

    // Toggle the 'oldSchool' class on the video element when the vintage button is clicked
    oldSchoolButton.addEventListener('click', function() {
        video.classList.add('oldSchool');
    });

    // Remove the 'oldSchool' class from the video element when the original button is clicked
    originalButton.addEventListener('click', function() {
        video.classList.remove('oldSchool');
    });
});
