document.addEventListener('DOMContentLoaded', function () {
   
    const menuHamburguesa = document.querySelector('.menu_hamburguesa');
    const menuDesplegable = document.querySelector('.menu_desplegable');
  
  
    menuHamburguesa.addEventListener('click', function () {
      
      menuHamburguesa.classList.toggle('active');
    });
  });


