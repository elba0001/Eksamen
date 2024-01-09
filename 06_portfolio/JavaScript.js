//Globale konstanter
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu li a");

//Burger meny
// klikk på burger
burger.addEventListener("click", () => {
  //aktiverer meny
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    //fjerner meny
    burger.classList.remove("active");
    nav.classList.remove("active");
  });
});
