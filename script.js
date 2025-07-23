document.addEventListener('DOMContentLoaded',()=>{
 let i =0;
const songs = [
  {
    title: "Faded",
    artist: "Alan Walker",
    audioSrc: "./assets/audio/faded.mp3",
    coverSrc: "assets/images/faded.jpg"
  },
   {
    title: "Calm Down",
    artist: "Selena Gomez & Rema",
    audioSrc: "./assets/audio/calmdown.mp3",
    coverSrc: "./assets/images/calmdown.webp"
  },
  {
    title: "Ava",
    artist: "Famy",
    audioSrc: "./assets/audio/famyava.mp3",
    coverSrc: "./assets/images/famyava.webp"
  },
  {
    title: "Chaleya",
    artist: "Arijit Singh",
    audioSrc: "./assets/audio/chaleya.m4a",
    coverSrc: "./assets/images/chaleya.webp"
  }
];


const audio = document.getElementById('audio');
const title = document.getElementById('title')
const artist = document.getElementById('artist')
const coverImage = document.querySelector('.album-art');
const playButton = document.getElementById('pause')
 const progressFill = document.getElementById('progress-bar-fill')
const currentTime = document.getElementById('current-time')
const totalDuration = document.getElementById('total-duration')
const previousButton = document.getElementById('previous')
const nextButton = document.getElementById('next')



function loadSong(song){
    title.textContent = song.title
    artist.textContent = song.artist
    coverImage.src=song.coverSrc
    audio.src =song.audioSrc
}

playButton.addEventListener('click',()=>{
    if(audio.paused){
        audio.play();
        playButton.innerHTML = `<i class="fa-solid fa-pause"></i>`

    }else{
        audio.pause();
        playButton.innerHTML = `<i class="fa-solid fa-play"></i>`

    }
})

audio.addEventListener('timeupdate',() =>{
  const current = audio.currentTime;
  const duration = audio.duration;
  currentTime.textContent = formatTime(current)
  if(!isNaN(duration)){
    totalDuration.textContent = formatTime(duration);
  }
   const percent = (audio.currentTime / audio.duration) * 100;
  progressFill.style.width = `${percent}%`;
})

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}
loadSong(songs[i]);
previousButton.addEventListener('click',()=>{
  if(i===0){
    i=songs.length-1;
    loadSong(songs[i]);
  }else{
    loadSong(songs[--i])
  }
  if(audio.paused){
        audio.play();
        playButton.innerHTML = `<i class="fa-solid fa-pause"></i>`

    }
})

nextButton.addEventListener('click',()=>{
 loadSong(songs[++i%songs.length])
 if(audio.paused){
        audio.play();
        playButton.innerHTML = `<i class="fa-solid fa-pause"></i>`

    }
})

})