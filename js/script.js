// Menu mobile: abre/fecha ao tocar no botão ☰
const toggle = document.getElementById("nav-toggle");
const menu = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("aberto");
});

// Fecha o menu ao clicar em um link (útil no celular)
menu.querySelectorAll(".nav__link").forEach((link) => {
  link.addEventListener("click", () => menu.classList.remove("aberto"));
});
