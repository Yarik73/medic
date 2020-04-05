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
   }
   getSize();
   $(window).resize(getSize);


    //Боковое выезжающее меню
    $('.main-nav__toggle').on('click', function () {
        $('.main-nav').toggleClass('main-nav--opened');
        $('.home-page').toggleClass('home-page--active');
        setTimeout(getSize, 210);
    });

    $('.main-nav__toggle-arrow').on('click', function () {
        $('.main-nav').toggleClass('main-nav--opened');
        $('.home-page').toggleClass('home-page--active');
        setTimeout(getSize, 210);
    });



    // Показать/скрыть federal-projects__users-list
   $('.federal-projects__users-btn').on('click', function () {
      $('.federal-projects__users-wrap').toggleClass('federal-projects__users-wrap--hidden');
      $(this).text($(this).text() === 'развернуть' ? 'свернуть' : 'развернуть');
   });


   // select
   $(".js-example-theme-single").select2({
        theme: 'my_select',
   });


   // federal-projects__tabs
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


   // show myProject-page__item Detail
    $('.myProject-page__item').on('click', function() {
       let k = $(this).attr('data');
       $('#' + k).removeClass('hidden');
    });

    function showDetail() {
        const itemInLine = Math.floor($('.myProject-page__list').width() / $('.myProject-page__item').width());

        $('.myProject-page__item').each(function (i, el) {
            ($(this).css('order', i + 1))
        });
    }
    showDetail();




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
    if ($('#chart-bar').length) {
        function chartBar() {

            const ctx = $("#chart-bar");

            //bar chart data
            const data = {
                labels: ["2019", "2020", "2021", "2022", "2023", "2023"],
                datasets: [
                    {
                        label: false,
                        data: [250, 480, 399, 440, 380, 360],
                        backgroundColor: [
                            "#023DA2",
                            "#023DA2",
                            "#023DA2",
                            "#023DA2",
                            "#023DA2",
                            "#023DA2"
                        ],
                    },
                    {
                        label: "TeamB Score",
                        data: [360, 397, 390, 440, 380, 360],
                        backgroundColor: [
                            "rgba(0, 0, 0, 0.14)",
                            "rgba(0, 0, 0, 0.14)",
                            "rgba(0, 0, 0, 0.14)",
                            "rgba(0, 0, 0, 0.14)",
                            "rgba(0, 0, 0, 0.14)",
                            "rgba(0, 0, 0, 0.14)",
                        ],
                    }
                ]
            };

            const options = {
                responsive: true,
                title: {
                    display: false,
                },
                legend: {
                    display: false,
                },
                tooltips: {
                    enabled: false,
                },
                scales: {
                    yAxes: [
                        {
                            position: 'right',
                            gridLines: {
                                drawBorder: false,
                                color: 'rgba(0,0,0,0.05)',
                            },
                            ticks: {
                                min: 0,
                                maxTicksLimit: 5,
                                padding: 15,
                                fontSize: 14,
                                fontFamily: 'DIN',
                                fontColor: 'rgba(83,83,83,0.5)'
                            }
                        }
                    ],
                    xAxes: [
                        {
                            gridLines: {
                                lineWidth: 0,
                                zeroLineWidth: 0,
                                tickMarkLength: 14,
                            },
                            ticks: {
                                autoSkip: true,
                                autoSkipPadding: true,
                                fontSize: 14,
                                fontFamily: 'DIN',
                                fontColor: '#000',
                            }
                        }
                    ]
                }
            };

            const chart = new Chart(ctx, {
                type: "bar",
                data: data,
                options: options
            });
        }
        chartBar();
    }



    // chart2
    if ($('#chartPie1').length) {
        function chartPie1 () {
            const getPie1 = $('#chartPie1');

            const dataPie1 = {
                labels: ['blue', 'orange', 'green', 'yellow'],
                datasets: [
                    {
                        label: false,
                        data: [95, 5, 0, 0],
                        backgroundColor: [
                            '#023DA2',
                            '#F69952'
                        ]
                    }
                ]
            };

            const optionsPie1 = {
                responsive: true,
                legend: {
                    display: false,
                },
                aspectRatio: 1,
                cutoutPercentage: 75,
                layout: {
                    padding: 0
                },
                tooltips: {
                    enabled: false
                }
            };

            const pie1 = new Chart(getPie1, {
                type: 'doughnut',
                data: dataPie1,
                options: optionsPie1
            })

        }
        chartPie1();
    }



    // chart3
    if ($('#pieChart2').length) {
        function chartPie2() {
            const getPie2 = $('#pieChart2');

            const dataPie2 = {
                labels: ['orange'],
                datasets: [
                    {
                        data: [65],
                        label: false,
                        backgroundColor: ['#F69952']
                    },
                    {
                        data: [70],
                        label: false,
                        backgroundColor: ['#C4C4C4'],
                    }
                ]
            };

            const optionPie2 = {
                responsive: true,
                legend: { display: false },
                aspectRatio: 1,
                tooltips: { enabled: false }
            };

            const pie2 = new Chart(getPie2, {
                type: 'doughnut',
                data: dataPie2,
                options: optionPie2
            })
        }
        chartPie2();
    }


    // chart 4
    if ($('#chart4').length) {
        const chart = new Chart($('#chart4'), {
            type: 'line',
            data: {
                labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
                datasets: [
                    {
                        data: [1, 1.3, 1.5, 1.7, 1.9, 2.1, 2.2, 2.5, 3.1, 3.2, 3.3, 3.5],
                        borderColor: 'blue',
                        backgroundColor: 'blue',
                        fill: false,
                        label: false,
                        lineTension: 0
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                tooltips: { enabled: false },
                legend: { display: false},
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: false
                        },
                    }],
                    xAxes: [{
                        ticks: {
                            fontSize: 12
                        },
                        gridLines: {
                            display: false,
                        }
                    }]
                }
            }
        })
    }

});










