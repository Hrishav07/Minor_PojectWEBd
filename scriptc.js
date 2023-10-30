console.log("Welcome to Sargam");
let songIndex = 0;
let audioElement = new Audio('classicSongs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Tera Milna Do Pal Ka", filePath: "classicSongs/1.mp3", coverPath: "classicCovers/1.jpeg"},
    {songName: "Lag Ja Gale", filePath: "classicSongs/2.mp3", coverPath: "classicCovers/2.jpeg"},
    {songName: "Ek Pyaar ke Nagma Hai", filePath: "classicSongs/3.mp3", coverPath: "classicCovers/3.jpeg"},
    {songName: "Tujhse Naraz Nahin Zindagi", filePath: "classicSongs/4.mp3", coverPath: "classicCovers/4.jpeg"},
    {songName: "Tere Bina Zindagi Se", filePath: "classicSongs/5.mp3", coverPath: "classicCovers/5.jpeg"},
    {songName: "Ae Kash Ke Hum", filePath: "classicSongs/6.mp3", coverPath: "classicCovers/6.jpeg"},
    {songName: "Aap Ki Nazroon Nw", filePath: "classicSongs/7.mp3", coverPath: "classicCovers/7.jpeg"},
    {songName: "Mere Mehboob ", filePath: "classicSongs/8.mp3", coverPath: "classicCovers/8.jpeg"},
    {songName: "O Mere Dil Ke Chain", filePath: "classicSongs/9.mp3", coverPath: "classicCovers/9.jpeg"},
    {songName: "Yeh Mera Deewanapan Hai", filePath: "classicSongs/10.mp3", coverPath: "classicCovers/10.jpeg"},
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
        audioElement.src = `classicSongs/${songIndex+1}.mp3`;
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
    audioElement.src = `classicSongs/${songIndex+1}.mp3`;
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
    audioElement.src = `classicSongs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})