let botaoSom = document.querySelector(".botao-som");
let video = document.querySelector(".video");
let botao = document.querySelector(".link-info");
let modal = document.querySelector(".modal");
let audio = document.querySelector(".audio");

// Ligar SOM
botaoSom.addEventListener("click", ligarSOM);

function ligarSOM() {
  video.muted = !video.muted;
}

// ! = inverso / inverte tudo
// Se ta mudo, ele vai tocar, se tiver tocando ele vai deixar mudo
botao.addEventListener("click", mostrarModal);
botao.addEventListener("click", esconderModal);

function mostrarModal() {
  modal.style.display = "block";
}

function esconderModal() {
  modal.style.display = "none";
}

// TOCAR TUDUN
window.addEventListener("load", tocarAudio);

function tocarAudio() {
  audio.play();
}
