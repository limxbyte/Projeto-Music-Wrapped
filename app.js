const startButton = document.getElementById("startButton");
const welcome = document.getElementById("welcome");
const wrapped = document.getElementById("wrapped");
const artistName = document.getElementById("artistName");
const artistPlays = document.getElementById("artistPlays");
const artista = {
    nome: "Jung Kook",
    reproducoes: 342
};
artistName.textContent = artista.nome;

artistPlays.textContent =
    artista.reproducoes + " reproduções";
startButton.addEventListener("click", function () {
    welcome.style.display = "none";
    wrapped.style.display = "flex";
});