// Боковое выезжающее меню
let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');
let pageToggle = document.querySelector('.home-page');
let navToggleArrow = document.querySelector('.main-nav__toggle-arrow');

navToggle.addEventListener('click', function() {
   navMain.classList.toggle('main-nav--opened');
   pageToggle.classList.toggle('home-page--active');
});

navToggleArrow.addEventListener('click', function () {
   navMain.classList.toggle('main-nav--opened');
   pageToggle.classList.toggle('home-page--active');
});


// Показать/скрыть federal-projects__users-list
let usersList = document.querySelector('.federal-projects__users-list');
let btnToggle = document.querySelector('.federal-projects__users-btn');

btnToggle.addEventListener('click', function () {
   usersList.classList.toggle('federal-projects__users-list--hidden');
});





$(document).ready(function() {

   // Максимальная ширина item
   function getSize() {
      const itemMinWidth = 340;
      const gutterSize = 20;
      const columnsProject = Math.floor($('.projects__list').width() / (itemMinWidth + gutterSize));
      const itemProjectWidth = ($('.projects__list').width() - columnsProject * gutterSize) / columnsProject;
      $('.projects__item').css('max-width', `${itemProjectWidth}px`);

      const columnsMyProject = Math.floor($('.myProject-page__list').width() / (itemMinWidth + gutterSize));
      const itemMyProjectWidth = ($('.myProject-page__list').width() - columnsMyProject * gutterSize) / columnsMyProject;
      $('.myProject-page__item').css('max-width', `${itemMyProjectWidth}px`);

      $(window).resize(getSize);
   }
   getSize();


   // select
   $(".js-example-theme-single").select2({
        theme: 'my_select',
   });

   // Слайдер
   $('.recent__list').owlCarousel({
      loop: false,
      margin: 20,
      nav: true,
      dots: false,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      responsiveClass: true,
      responsive: {
         0: {
            items: 1,
         },
         1020: {
            items: 2,
         },
         1360: {
            items: 3,
         },
         1700: {
            items: 4,
         },
         2040: {
            items: 5,
         }
      }
   })
});








