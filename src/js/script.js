var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var pageToggle = document.querySelector('.home-page');

navToggle.addEventListener('click', function() {
   navMain.classList.toggle('main-nav--opened');
   pageToggle.classList.toggle('page-active');
});


$(document).ready(function() {
   $(".select2_example").select2();
});
