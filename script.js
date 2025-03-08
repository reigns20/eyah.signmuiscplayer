const songs = [
    "songs/Pussycatgangs in the house.mp3",
    "songs/I got orange in my vein.mp3",
    "songs/Let's vibes.mp3",
    "songs/Orange dynasty tagalog.mp3",
    "songs/Orange for ever we ignite.mp3",
    "songs/This is my home.mp3",
    "songs/Together we rise - eyah.sign.mp3"
];

let currentSongIndex = 0;
const audio = document.getElementById("audio");
const playButton = document.getElementById("play");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const progressBar = document.getElementById("progress-bar");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const songTitle = document.getElementById("song-title");

function loadSong(index) {
    audio.src = songs[index];
    songTitle.textContent = songs[index].split("/")[1];
    audio.load();
}

function playPause() {
    if (audio.paused) {
        audio.play();
        playButton.innerText = "⏸️";
    } else {
        audio.pause();
        playButton.innerText = "▶️";
    }
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
    playButton.innerText = "⏸️";
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
    playButton.innerText = "⏸️";
}

function updateProgress() {
    progressBar.value = (audio.currentTime / audio.duration) * 100;
    currentTimeEl.textContent = formatTime(audio.currentTime);
    durationEl.textContent = formatTime(audio.duration);
}

function formatTime(time) {
    let min = Math.floor(time / 60);
    let sec = Math.floor(time % 60);
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
}

playButton.addEventListener("click", playPause);
nextButton.addEventListener("click", nextSong);
prevButton.addEventListener("click", prevSong);
audio.addEventListener("timeupdate", updateProgress);

loadSong(currentSongIndex);
