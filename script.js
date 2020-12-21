// VARIABLES
let btnPlay, btnNext, btnPrev, btnMute, btnVolMax, btnLoop, btnRandom; //buttons
let sliderTime, sliderVol; //sliders
let listSong, listArtist, iniTime, endTime; //texts
let bgCover, playCover; //images
var indexVol = 50;
var indexTime = 50;

// ARRAYS OF MUSIC FILES, TITTLE SONGS, ARTIST NAMES AND COVER PICTURES
list = [
    "audio/ACDC - Highway to Hell.mp3",
    "audio/Audioslave - Show Me How To Live.mp3",
    "audio/Foo Fighters - Walk.mp3",
    "audio/Incubus - Megalomaniac.mp3",
    "audio/Jet - Are You Gonna Be My Girl.mp3",
    "audio/Linkin Park - One Step Closer.mp3",
    "audio/OneRepublic - Stop And Stare.mp3",
    "audio/Papa Roach - Last Resort.mp3",
    "audio/Pearl Jam - Alive.mp3",
    "audio/The Strokes - Last Nite.mp3"];

song = [
    "Highway to Hell",
    "Show Me How To Live",
    "Walk",
    "Megalomaniac",
    "Are You Gonna Be My Girl",
    "One Step Closer",
    "Stop And Stare",
    "Last Resort",
    "Alive",
    "Last Nite"];

artist = [
    "AC/DC",
    "Audioslave",
    "Foo Fighters",
    "Incubus",
    "Jet",
    "Linkin Park",
    "OneRepublic",
    "Papa Roach",
    "Pearl Jam",
    "The Strokes"];

cover = [
    "covers/acdc.jpg",
    "covers/audioslave.jpg",
    "covers/foofighters.jpg",
    "covers/incubus.jpg",
    "covers/jet.jpg",
    "covers/linkinpark.jpg",
    "covers/onerepublic.jpg",
    "covers/paparoach.jpg",
    "covers/pearljam.jpg",
    "covers/thestrokes.jpg"];


// OBJECT REFERENCES
btnPlay    = document.getElementById("player__control__buttons__play");
btnNext    = document.getElementById("player__control__buttons__next");
btnPrev    = document.getElementById("player__control__buttons__prev");
btnMute    = document.getElementById("player__control__volume__mute");
btnVolMax  = document.getElementById("player__control__volume__max");
btnLoop    = document.getElementById("player__time__loop");
btnRandom  = document.getElementById("player__time__random");
sliderTime = document.getElementById("player__time__info__bar");
sliderVol  = document.getElementById("player__control__volume__bar");
listSong   = document.getElementById("player__info__song");
listArtist = document.getElementById("player__info__artist");
iniTime    = document.getElementById("player__time__info__ini");
endTime    = document.getElementById("player__time__info__end");
bgCover    = document.getElementById("bgcover");
playCover  = document.getElementById("player__cover__image");


// STARTS THE AUDIO OBJECT AND LOADS THE FIRST SONG
audio = new Audio();
list_index = 0
audioTrack = 0;
sliderVol.value = 50;
randomStatus = false;
audio.loop = false;
audio.volume = sliderVol.value / 100;
audio.src = list[list_index];
bgCover.style.backgroundImage = "url('" + cover[list_index] + "')";
playCover.style.backgroundImage = "url('" + cover[list_index] + "')";
listSong.innerHTML = song[list_index];
listArtist.innerHTML = artist[list_index];


// LISTENING EVENTS
btnPlay.addEventListener("click", playPause);
btnNext.addEventListener("click", nextSong);
btnPrev.addEventListener("click", prevSong);
btnLoop.addEventListener("click", loop);
btnRandom.addEventListener("click", random);
sliderVol.addEventListener("mousemove", setVolume);
btnMute.addEventListener("click", mute);
btnVolMax.addEventListener("click", maxVolume);
sliderTime.addEventListener("click", changeTime);
audio.addEventListener("timeupdate", function() {
    timeUpdate();
});
audio.addEventListener("ended", function() {
    autoSwitchSong();
});


// KEYBOARD SHORTCUTS
document.onkeydown = function(e) {
    let key = e.which || e.keyCode; 
    
    // Play / Pause
    if (key == 32) { playPause(); }
    // Next Song
    if (key == 39) { nextSong(); }
    // Previous Song
    if (key == 37) { prevSong(); }
    // Forward Track 
    if (key == 70) { audio.currentTime += 10; }
    // Backward Track 
    if (key == 66) { audio.currentTime -= 10; }
    // Loop On/Off
    if (key == 76) { loop(); }
    // Random On/Off
    if (key == 82) { random(); }
    // Mute On/Off
    if (key == 77) { mute(); }
    // Maximum Volume
    if (key == 86) { maxVolume(); }
    
    // Volume Up
    if (key == 38) {
        if (sliderVol.value < 100) {
            indexVol += 10;
            sliderVol.value = indexVol;
            audio.volume = sliderVol.value / 100;
        } else {
            indexVol = 100;
        }
    }
    
    // Volume Down
    if (key == 40) {       
        if (sliderVol.value > 0) {
            indexVol -= 10;
            sliderVol.value = indexVol;
            audio.volume = sliderVol.value / 100;
        } else {
            indexVol = 0;
        }
    }
};


// FUNCTIONS
function changeMusic(){
    // Images
    btnPlay.style.backgroundImage = "url('icons/btn-pause.png')";
    bgCover.style.backgroundImage = "url('" + cover[list_index] + "')";
    playCover.style.backgroundImage = "url('" + cover[list_index] + "')";
    
    // Artist and Song Text
    listArtist.innerHTML = artist[list_index];
    listSong.innerHTML = song[list_index];
    
    // Song
    audio.src = list[list_index];
    audio.play();
}

function playPause() {
    if(audio.paused) {
        audio.play();
        btnPlay.style.backgroundImage = "url('icons/btn-pause.png')";
    } else {
        audio.pause();
        btnPlay.style.backgroundImage = "url('icons/btn-play.png')";
    }
}

function nextSong() {
    list_index++;
    if(list_index > list.length - 1) {
        list_index = 0;
    }
    changeMusic();
}

function prevSong() {
    list_index--;
    if(list_index < 0) {
        list_index = list.length - 1;
    }
    changeMusic();
}

function loop() {
    if(audio.loop) {
        audio.loop = false;
        btnLoop.style.color = "#FFF";
    } else {
        audio.loop = true;
        btnLoop.style.color = "#FF0069";
        randomStatus = false;
        btnRandom.style.color = "#FFF";
    }
}

function random() {
    if (randomStatus) {
        randomStatus = false;
        btnRandom.style.color = "#FFF";
    } else {
        randomStatus = true;
        btnRandom.style.color = "#FF0069";
        audio.loop = false;
        btnLoop.style.color = "#FFF";
    }
}

function setVolume() {
    audio.volume = sliderVol.value / 100;
}

function mute(){
    if(audio.muted){
        audio.muted = false;
        btnMute.style.backgroundImage = "url('icons/btn-mute.png')";
        sliderVol.value = audioTrack;
    } else {
        audio.muted = true;
        btnMute.style.backgroundImage = "url('icons/btn-mute-on.png')";
        audioTrack = sliderVol.value;
        sliderVol.value = 0;
    }
}

function maxVolume() {
    audio.volume = 1.0;
    sliderVol.value = 100;
    audio.muted = false;
    btnMute.style.backgroundImage = "url('icons/btn-mute.png')";
}

function changeTime() {
    audio.currentTime = (audio.duration * sliderTime.value) / 100;
}

function timeUpdate() {
    if(audio.duration) {
        sliderTime.value = audio.currentTime * (100 / audio.duration);
        let mins = Math.floor(audio.currentTime / 60);
        let secs = Math.floor(audio.currentTime - mins * 60);
        let minsTot = Math.floor(audio.duration / 60);
        let secsTot = Math.floor(audio.duration - minsTot * 60);
        if(secs < 10){ secs = "0" + secs}
        if(secsTot < 10){ secs = "0" + secsTot}
        if(mins < 10){ mins = "0" + mins}
        if(secsTot < 10){ secsTot = "0" + secsTot}
        iniTime.innerHTML = mins+":"+secs;
        endTime.innerHTML = minsTot+":"+secsTot;
    } else {
        iniTime.innerHTML = "00:00";
        endTime.innerHTML = "00:00";
    }
}

function autoSwitchSong() {
    if (randomStatus) {
        list_index = Math.floor(Math.random() * list.length);
    }else if (list_index == (list.length - 1)){
        list_index = 0;
    } else {
        list_index++;
    }
    changeMusic();
}