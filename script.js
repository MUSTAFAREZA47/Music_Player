const image = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const music = document.querySelector("audio");
const progressContainer = document.getElementById('progress-container')
const progress = document.getElementById('progress')
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");


// Music
const songs = [
  {
    name: "Jacinto-1",
    displayName: "Electric Chill Machine",
    artist: "Jacinto Design",
  },
  {
    name: "Jacinto-2",
    displayName: "Electric Chill Machine",
    artist: "Jacinto Design",
  },
  {
    name: "Jacinto-3",
    displayName: "Electric Chill Machine",
    artist: "Jacinto Design",
  },
  {
    name: "Jacinto-4",
    displayName: "Electric Chill Machine",
    artist: "Jacinto Design",
  }
];

// check if Playing
let isPlaying = false;

// play
function playSong() {
  isPlaying = true;
  playBtn.classList.replace("fa-play", "fa-pause");
  playBtn.setAttribute("title", "Pause");
  music.play();
}

// Pause
function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace("fa-pause", "fa-play");
  playBtn.setAttribute("title", "Play");
  music.pause();
}

// Updata DOM
function loadSong(songs) {
  title.textContent = songs.displayName;
  artist.textContent = songs.artist;
  music.src = `music/${songs.name}.mp3`;
  image.src = `image/${songs.name}.jpg`;
}

// Current Song
let songIndex = 0;

// Previous Song
function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
//   console.log(songIndex);
  loadSong(songs[songIndex]);
  playSong();
}

// Next Song
function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
//   console.log(songIndex);
  loadSong(songs[songIndex]);
  playSong();
}

// OnLoad
loadSong(songs[songIndex]);

// Update Progress Bar and TIme
function updataProgressBar(e) {
    if (isPlaying) {
        console.log(e)
    }

}

// Play or Pause Eventlistener
playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()));
nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);
music.addEventListener('timeUpdate', updataProgressBar)
