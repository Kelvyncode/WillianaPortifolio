// ===== Menu mobile =====
const toggle = document.getElementById("nav-toggle");
const menu = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("aberto");
});

menu.querySelectorAll(".nav__link").forEach((link) => {
  link.addEventListener("click", () => menu.classList.remove("aberto"));
});

// ===== Animação de entrada ao rolar a página =====
const observador = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visivel");
        observador.unobserve(entrada.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => observador.observe(el));
