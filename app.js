const startButton = document.getElementById("startButton");
const welcome = document.getElementById("welcome");
const wrapped = document.getElementById("wrapped");

const nextMusic = document.getElementById("nextMusic");
const music = document.getElementById("music");

const nextArtist = document.getElementById("nextArtist");

const nextArtists = document.getElementById("nextArtists");
const topArtists = document.getElementById("topArtists");

const artistName = document.getElementById("artistName");
const artistPlays = document.getElementById("artistPlays");

const topMusic = document.getElementById("topMusic");
const musicList = document.getElementById("musicList");
const nextTopMusic = document.getElementById("nextTopMusic");

const genres = document.getElementById("genres");
const nextGenres = document.getElementById("nextGenres");


const finalScreen = document.getElementById("finalScreen");
const restartButton = document.getElementById("restartButton");



const artista = {
    nome: "Jung Kook",
    reproducoes: 342
};


artistName.textContent = artista.nome;
artistPlays.textContent = artista.reproducoes + " reproduções";


startButton.addEventListener("click", function () {

    welcome.style.display = "none";

    wrapped.style.display = "flex";

});


nextArtist.addEventListener("click", function () {

    wrapped.style.display = "none";

    music.style.display = "flex";

});


nextMusic.addEventListener("click", function () {

    music.style.display = "none";

    topArtists.style.display = "flex";

});
const musicas = [
    "Seven — Jung Kook",
    "Standing Next to You — Jung Kook",
    "Dynamite — BTS",
    "Blinding Lights — The Weeknd",
    "Like Crazy — Jimin"
];


musicas.forEach(function (musica, index) {
    musicList.innerHTML += `
        <div class="music-item">
            <span>0${index + 1}</span>
            <strong>${musica}</strong>
        </div>
    `;
});


nextArtists.addEventListener("click", function () {

    topArtists.style.display = "none";
    topMusic.style.display = "flex";

});

nextTopMusic.addEventListener("click", function () {
    topMusic.style.display = "none";
    genres.style.display = "flex";
});


nextGenres.addEventListener("click", function () {
    genres.style.display = "none";
    finalScreen.style.display = "flex";
});

restartButton.addEventListener("click", function () {
    finalScreen.style.display = "none";
    welcome.style.display = "flex";
});
