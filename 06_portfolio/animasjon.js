//Animasjon kaffe kanne
const kanne = document.querySelector("#kaffe_kane_container");
window.addEventListener("load", sidenVises);

function sidenVises() {
  kanne.addEventListener("click", VippKaffeKanne);
}

function VippKaffeKanne() {
  //start vippe animasjon
  kanne.classList.add("vipp");
  //start kaffe med delay
  document.querySelector("#time_sprite").classList.add("time_animation", "delay");
  //animasjon ferdig
  kanne.addEventListener("animationend", VippDoneReset);
}

function VippDoneReset() {
  //stop timer kaffe
  document.querySelector("#time_sprite").classList.remove("time_animation");
  //fjern alt er på alle elementers container og sprite
  kanne.classList = "";
  kanne.firstElementChild.classList = "";
}
