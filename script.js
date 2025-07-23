document.addEventListener('DOMContentLoaded',()=>{
 
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
    audioSrc: "C:/Users/vivek/Desktop/MusicPlayer/assets/audio/calmdown.mp3",
    coverSrc: "./assets/images/calmdown.webp"
  }
];


const audio = document.getElementById('audio');
const title = document.getElementById('title')
const artist = document.getElementById('artist')
const coverImage = document.querySelector('.album-art');

const playButton = document.getElementById('pause')

function loadSong(song){
    title.textContent = song.title
    artist.textContent = song.artist
    coverImage.src=song.coverSrc
    // audio.src =song.audioSrc
}
loadSong(songs[0]);

playButton.addEventListener('click',()=>{
    if(audio.paused){
        audio.play();
        playButton.innerHTML = `<i class="fa-solid fa-pause"></i>`

    }else{
        audio.pause();
        playButton.innerHTML = `<i class="fa-solid fa-play"></i>`

    }
})

})