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

// --- LÓGICA PARA A GALERIA DE PRODUTOS ---

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.product-card');
    const galleries = document.querySelectorAll('.product-gallery');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Pega o ID da galeria a partir do atributo 'data-gallery' do card clicado
            const galleryId = card.dataset.gallery;
            const targetGallery = document.getElementById(galleryId + '-gallery');

            // Verifica se a galeria clicada já está aberta
            const isAlreadyOpen = targetGallery.classList.contains('show');

            // Primeiro, fecha todas as galerias e remove a classe ativa de todos os cards
            galleries.forEach(gallery => gallery.classList.remove('show'));
            cards.forEach(c => c.classList.remove('active'));

            // Se a galeria não estava aberta, abre-a e ativa o card correspondente
            if (!isAlreadyOpen) {
                targetGallery.classList.add('show');
                card.classList.add('active');
            }
        });
    });
});

// --- LÓGICA PARA O CARROSSEL DE SERVIÇOS ---

const servicesSwiper = new Swiper('.services-carousel', {
    // Quantos slides por visualização
    slidesPerView: 1,
    // Espaço entre os slides
    spaceBetween: 30,
    // Loop infinito
    loop: true,
    
    // Paginação (bolinhas)
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    
    // Navegação (setas)
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsividade (muda a quantidade de slides com base no tamanho da tela)
    breakpoints: {
        // quando a largura da tela for >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // quando a largura da tela for >= 1024px
        1024: {
          slidesPerView: 3,
          spaceBetween: 40
        }
    }
});