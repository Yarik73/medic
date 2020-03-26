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
   getSize();


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


   // chart1
   $("#chartContainer").CanvasJSChart({
          data: [{
             type: "column",
             dataPoints: [
                { x: 10, y: 171 },
                { x: 20, y: 155},
                { x: 30, y: 150 },
                { x: 40, y: 165 },
                { x: 50, y: 195 },
                { x: 60, y: 168 },
                { x: 70, y: 128 },
                { x: 80, y: 134 },
                { x: 90, y: 114}
             ]
          },
             {
                type: "column",
                dataPoints: [
                   { x: 10, y: 71 },
                   { x: 20, y: 55},
                   { x: 30, y: 50 },
                   { x: 40, y: 65 },
                   { x: 50, y: 95 },
                   { x: 60, y: 68 },
                   { x: 70, y: 28 },
                   { x: 80, y: 34 },
                   { x: 90, y: 14}
                ]
             }
          ]
       });


   // chart2
      $("#chartContainer2").CanvasJSChart({
         width: 110,
         height: 110,
         data: [
            {
               type: "doughnut",
               startAngle:  300,
               radius: '100%',
               innerRadius: '80%',
               dataPoints: [
                  {y: 98.8, color: '#023DA2'},
                  {y: 0.0},
                  {y: 1.2, color: '#F69952'},
                  {y: 0.0}
               ]
            }
         ]
      });


      //chart3
   $("#doughnutContainer").CanvasJSChart({
      data: [
         {
            type: "doughnut",
            startAngle:  270,
            radius: '100%',
            innerRadius: '80%',
            dataPoints: [
               { y: 57, color: '#F69952' },
               { y: 43, color: 'transparent'},
            ]
         },

      ]
   });
   $("#doughnutContainer1").CanvasJSChart({
      backgroundColor: "transparent",
      data: [
         {
            type: "doughnut",
            startAngle:  270,
            radius: '100%',
            innerRadius: '70%',
            dataPoints: [
               { y: 63, color: '#C4C4C4' },
               { y: 37, color: 'transparent'},
            ]
         }
      ]
   });

   $("#doughnutContainer1").hover(function(){
          $("#doughnutContainer .canvasjs-chart-tooltip").hide();
       }
   );

   $("#doughnutContainer").hover(function(){
          $("#doughnutContainer1 .canvasjs-chart-tooltip").hide();
       }
   );





});







