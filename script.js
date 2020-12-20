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


//OBJECT REFERENCES
btnPlay    = document.getElementById("player__control__buttons__play");
btnNext    = document.getElementById("player__control__buttons__next");
btnPrev    = document.getElementById("player__control__buttons__prev");
btnMute    = document.getElementById("player__control__volume__mute");
btnLoop    = document.getElementById("player__time__loop");
btnRandom  = document.getElementById("player__time__random");
sliderTime = document.getElementById("player__time__info__bar");
sliderVol  = document.getElementById("player__control__volume__bar");
listSong   = document.getElementById("player__info__song");
listArtist = document.getElementById("player__info__artist");
iniTime    = document.getElementById("player__time__info__ini");
endTime    = document.getElementById("player__time__info__end");
