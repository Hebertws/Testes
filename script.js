// Espera todo o conteúdo da página carregar antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA PARA O MENU HAMBURGER ---
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });
    }

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (hamburger && navMenu) {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            }
        });
    });

    // --- LÓGICA PARA A GALERIA DE PRODUTOS ---
    const cards = document.querySelectorAll('.product-card');
    const galleries = document.querySelectorAll('.product-gallery');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const galleryId = card.dataset.gallery;
            if (!galleryId) return;

            const targetGallery = document.getElementById(galleryId + '-gallery');
            if (!targetGallery) return;

            const isAlreadyOpen = targetGallery.classList.contains('show');

            galleries.forEach(gallery => gallery.classList.remove('show'));
            cards.forEach(c => c.classList.remove('active'));

            if (!isAlreadyOpen) {
                targetGallery.classList.add('show');
                card.classList.add('active');
            }
        });
    });

    // --- LÓGICA PARA O CARROSSEL DE SERVIÇOS ---
    const servicesSwiper = new Swiper('.services-carousel', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40
            }
        }
    });

});