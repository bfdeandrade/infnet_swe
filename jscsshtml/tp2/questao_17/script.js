const playButton = document.getElementById('play');
const progressBar = document.getElementById('progress-bar');

let isPlaying = false;
let progress = 0;
let interval;

playButton.addEventListener('click', () => {
    if (isPlaying) {
        clearInterval(interval);
        playButton.textContent = 'Play';
    } else {
        interval = setInterval(() => {
            progress += 1;
            if (progress > 100) {
                progress = 0;
            }
            progressBar.style.width = progress + '%';
        }, 100);
        playButton.textContent = 'Pause';
    }
    isPlaying = !isPlaying;
});