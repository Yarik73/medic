$(document).ready(function() {

   //Боковое выезжающее меню
   $('.main-nav__toggle').on('click', function () {
      $('.main-nav').toggleClass('main-nav--opened');
      $('.home-page').toggleClass('home-page--active');
   });

   $('.main-nav__toggle-arrow').on('click', function () {
      $('.main-nav').toggleClass('main-nav--opened');
      $('.home-page').toggleClass('home-page--active');
   });


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


   // Показать/скрыть federal-projects__users-list
   $('.federal-projects__users-btn').on('click', function () {
      $('.federal-projects__users-wrap').toggleClass('federal-projects__users-wrap--hidden');
      $(this).text($(this).text() == 'развернуть' ? 'свернуть' : 'развернуть');
   });


   // select
   $(".js-example-theme-single").select2({
        theme: 'my_select',
   });


   //Табы
   let tab = $('#tabs .federal-projects__tabs-body > div');
   tab.hide().filter(':first').show();

   // Клики по вкладкам.
   $('#tabs .federal-projects__tabs-item').click(function(){
      tab.hide();
      tab.filter(this.hash).show();
      $('#tabs .federal-projects__tabs-item').removeClass('active');
      $(this).addClass('active');
      return false;
   }).filter(':first').click();
   

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
   });


   //График
   window.onload = function () {

      var options = {
         title: {
            text: ""
         },

         data: [{
            type: "column",
            yValueFormatString: "#,###",
            indexLabel: "{y}",
            color: "#546BC1",
            dataPoints: [
               { label: "Home", y: 196 },
               { label: "Gallery", y: 263 },
               { label: "Dashboards", y: 134 },
               { label: "Docs", y: 216 },
               { label: "Support", y: 174 },
               { label: "Blog", y: 122 },
               { label: "Others", y: 182 }
            ]
         }]
      };
      $("#chartContainer").CanvasJSChart(options);
   };




   getSize();

});







