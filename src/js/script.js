// Боковое выезжающее меню
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var pageToggle = document.querySelector('.home-page');
var navToggleArrow = document.querySelector('.main-nav__toggle-arrow');

navToggle.addEventListener('click', function() {
   navMain.classList.toggle('main-nav--opened');
   pageToggle.classList.toggle('home-page--active');
});

navToggleArrow.addEventListener('click', function () {
   navMain.classList.toggle('main-nav--opened');
   pageToggle.classList.toggle('home-page--active');
});

$(document).ready(function() {

   // select
   $(".js-example-theme-single").select2({
        theme: 'my_select',
   });

   // Слайдер
    $('.multiple-items').slick({
        infinite: false,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable: false,
    });


});




