// Seleciona o botão hamburger e o menu de navegação
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

// Adiciona um evento de 'click' ao hamburger
hamburger.addEventListener("click", () => {
    // Adiciona/remove a classe 'active' para mostrar/esconder o menu
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Fecha o menu ao clicar em um dos links
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});