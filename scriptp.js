console.log("Welcome to Sargam");
let songIndex = 0;
let audioElement = new Audio('punjabiSongs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Daku", filePath: "punjabiSongs/1.mp3", coverPath: "punjabiCovers/1.jpeg"},
    {songName: "Sarkar", filePath: "punjabiSongs/2.mp3", coverPath: "punjabiCovers/2.jpeg"},
    {songName: "Wakhra Swag", filePath: "punjabiSongs/3.mp3", coverPath: "punjabiCovers/3.jpeg"},
    {songName: "Haiye Mera Dil", filePath: "romanticSongs/4.mp3", coverPath: "punjabiCovers/4.jpeg"},
    {songName: "Hiriye", filePath: "punjabiSongs/5.mp3", coverPath: "punjabiCovers/5.jpeg"},
    {songName: "Suit Suit", filePath: "punjabiSongs/6.mp3", coverPath: "punjabiCovers/6.jpeg"},
    {songName: "Sakhiyaan", filePath: "punjabiSongs/7.mp3", coverPath: "punjabiCovers/7.jpeg"},
    {songName: "Naja Naja", filePath: "punjabiSongs/8.mp3", coverPath: "punjabiCovers/8.jpeg"},
    {songName: "Lahore", filePath: "romanticSongs/9.mp3", coverPath: "punjabiCovers/9.jpeg"},
    {songName: "Prada", filePath: "punjabiSongs/10.mp3", coverPath: "punjabiCovers/10.jpeg"},
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
        audioElement.src = `punjabiSongs/${songIndex+1}.mp3`;
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
    audioElement.src = `punjabiSongs/${songIndex+1}.mp3`;
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
    audioElement.src = `punjabiSongs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})