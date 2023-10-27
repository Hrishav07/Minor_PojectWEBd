console.log("Welcome to Sargam");
let songIndex = 0;
let audioElement = new Audio('romanticSongs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Rab ka Shukrana", filePath: "romanticSongs/1.mp3", coverPath: "romanticCovers/1.jpeg"},
    {songName: "Teri Yaddien", filePath: "romanticSongs/2.mp3", coverPath: "romanticCovers/2.jpeg"},
    {songName: "Tum Ho", filePath: "romanticSongs/3.mp3", coverPath: "romanticCovers/3.jpeg"},
    {songName: "Zara Sa", filePath: "romanticSongs/4.mp3", coverPath: "romanticCovers/4.jpeg"},
    {songName: "Tere Bin", filePath: "romanticSongs/5.mp3", coverPath: "romanticCovers/5.jpeg"},
    {songName: "Mehrama", filePath: "romanticSongs/6.mp3", coverPath: "romanticCovers/6.jpeg"},
    {songName: "Shayad", filePath: "romanticSongs/7.mp3", coverPath: "romanticCovers/7.jpeg"},
    {songName: "Zindagi Do Pal Ki", filePath: "romanticSongs/8.mp3", coverPath: "romanticCovers/8.jpeg"},
    {songName: "Tujhe Sochta Hoon", filePath: "romanticSongs/9.mp3", coverPath: "romanticCovers/9.jpeg"},
    {songName: "Be Intehaan", filePath: "romanticSongs/10.mp3", coverPath: "romanticCovers/10.jpeg"},
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
        audioElement.src = `romanticSongs/${songIndex+1}.mp3`;
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
    audioElement.src = `romanticSongs/${songIndex+1}.mp3`;
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
    audioElement.src = `romanticSongs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})