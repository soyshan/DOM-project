var mySwiperswiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 10,
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
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});






document.addEventListener('DOMContentLoaded', function () {
  
  const menuHamburguesa = document.querySelector('.menu_hamburguesa');
  const menuDesplegable = document.querySelector('.menu_desplegable');

 
  menuHamburguesa.addEventListener('click', function () {
   
    menuHamburguesa.classList.toggle('active');
  });
});




const darkModeToggle = document.getElementById('dark-mode-toggle');

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
