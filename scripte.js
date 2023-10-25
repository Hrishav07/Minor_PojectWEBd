console.log("Welcome to Sargam");
let songIndex = 0;
let audioElement = new Audio('englishSongs/Fairytale.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "FairyTail", filePath: "englishSongs/Fairytale.mp3", coverPath: "englishCovers/fairytail.jpeg"},
    {songName: "RedBaron-Sabaton", filePath: "englishSongs/rb.mp3", coverPath: "englishCovers/rb.jpeg"},
    {songName: "I told you long ago", filePath: "englishSongs/itoldyou.mp3", coverPath: "englishCovers/itoldyou.jpeg"},
    {songName: "Hoist The color-POTC", filePath: "englishSongs/hoist.mp3", coverPath: "englishCovers/hoist.jpeg"},
    {songName: "Davy Jones-POTC", filePath: "englishSongs/davy.mp3", coverPath: "englishCovers/davy.jpeg"},
    {songName: "Beethove's 5th Symphony", filePath: "englishSongs/beethovens.mp3", coverPath: "englishCovers/bethovens.jpeg"},
    {songName: "Lay All Your Love-ABBA", filePath: "englishSongs/ABBA.mp3", coverPath: "englishCovers/ABBA.jpg"},
    {songName: "Bella Ciao", filePath: "englishSongs/Bella.mp3", coverPath: "englishCovers/bella.jpeg"},
    {songName: "Faded", filePath: "englishSongs/faded.mp3", coverPath: "englishCovers/faded.jpeg"},
    {songName: "Alone", filePath: "englishSongs/alone.mp3", coverPath: "englishCovers/alone.jpeg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `englishSongs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `englishSongs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `englishSongs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})