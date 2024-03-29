google.charts.load("current", {packages: ["corechart", "bar", "calendar"]});
google.charts.setOnLoadCallback(drawChart);

function ifChartNeeded(chartDivid) {
    return (document.getElementById(chartDivid) != undefined);
}

function drawChart() {
    if (ifChartNeeded("donutchart")) {
        var data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Work', 11],
            ['Eat', 2],
            ['Commute', 2],
            ['Watch TV', 2],
            ['Sleep', 7]
        ]);

        var options = {
            title: 'My Daily Activities',
            pieHole: 0.4,
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
    }
    if (ifChartNeeded("piechart")) {
        var data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Work', 11],
            ['Eat', 2],
            ['Commute', 2],
            ['Watch TV', 2],
            ['Sleep', 7]
        ]);

        var options = {
            title: 'My Daily Activities'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
    }
    if (ifChartNeeded("barChart")) {
        var data = google.visualization.arrayToDataTable([
            ['City', '2010 Population', '2000 Population'],
            ['New York City, NY', 8175000, 8008000],
            ['Los Angeles, CA', 3792000, 3694000],
            ['Chicago, IL', 2695000, 2896000],
            ['Houston, TX', 2099000, 1953000],
            ['Philadelphia, PA', 1526000, 1517000]
        ]);

        var materialOptions = {
            chart: {
                title: 'Population of Largest U.S. Cities',
                subtitle: 'Based on most recent and previous census data'
            },
            hAxis: {
                title: 'Total Population',
                minValue: 0,
            },
            vAxis: {
                title: 'City'
            },
            bars: 'horizontal'
        };
        var materialChart = new google.charts.Bar(document.getElementById('barChart'));
        materialChart.draw(data, materialOptions);
    }
    if (ifChartNeeded("bubblechart")) {
        var data = google.visualization.arrayToDataTable([
            ['ID', 'Life Expectancy', 'Fertility Rate', 'Region', 'Population'],
            ['CAN', 80.66, 1.67, 'North America', 33739900],
            ['DEU', 79.84, 1.36, 'Europe', 81902307],
            ['DNK', 78.6, 1.84, 'Europe', 5523095],
            ['EGY', 72.73, 2.78, 'Middle East', 79716203],
            ['GBR', 80.05, 2, 'Europe', 61801570],
            ['IRN', 72.49, 1.7, 'Middle East', 73137148],
            ['IRQ', 68.09, 4.77, 'Middle East', 31090763],
            ['ISR', 81.55, 2.96, 'Middle East', 7485600],
            ['RUS', 68.6, 1.54, 'Europe', 141850000],
            ['USA', 78.09, 2.05, 'North America', 307007000]
        ]);

        var options = {
            title: 'Fertility rate vs life expectancy in selected countries (2010).' +
                ' X=Life Expectancy, Y=Fertility, Bubble size=Population, Bubble color=Region',
            hAxis: {title: 'Life Expectancy'},
            vAxis: {title: 'Fertility Rate'},
            bubble: {textStyle: {fontSize: 11}}
        };

        var chart = new google.visualization.BubbleChart(document.getElementById('bubblechart'));
        chart.draw(data, options);
    }
    if (ifChartNeeded("areaChart")) {
        var data = google.visualization.arrayToDataTable([
            ['Year', 'Sales', 'Expenses'],
            ['2013', 1000, 400],
            ['2014', 1170, 460],
            ['2015', 660, 1120],
            ['2016', 1030, 540]
        ]);

        var options = {
            title: 'Company Performance',
            hAxis: {title: 'Year', titleTextStyle: {color: '#333'}},
            vAxis: {minValue: 0}
        };

        var chart = new google.visualization.AreaChart(document.getElementById('areaChart'));
        chart.draw(data, options);
    }
    if (ifChartNeeded("calendarChart")) {
        var dataTable = new google.visualization.DataTable();
        dataTable.addColumn({type: 'date', id: 'Date'});
        dataTable.addColumn({type: 'number', id: 'Won/Loss'});
        dataTable.addRows([
            [new Date(2012, 3, 13), 37032],
            [new Date(2012, 3, 14), 38024],
            [new Date(2012, 3, 15), 38024],
            [new Date(2012, 3, 16), 38108],
            [new Date(2012, 3, 17), 38229],
            // Many rows omitted for brevity.
            [new Date(2013, 9, 4), 38177],
            [new Date(2013, 9, 5), 38705],
            [new Date(2013, 9, 12), 38210],
            [new Date(2013, 9, 13), 38029],
            [new Date(2013, 9, 19), 38823],
            [new Date(2013, 9, 23), 38345],
            [new Date(2013, 9, 24), 38436],
            [new Date(2013, 9, 30), 38447]
        ]);

        var chart = new google.visualization.Calendar(document.getElementById('calendarChart'));

        var options = {
            title: "Red Sox Attendance",
            height: 350,
        };

        chart.draw(dataTable, options);

    }
}

demo = {
    initPickColor: function () {
        $('.pick-class-label').click(function () {
            var new_class = $(this).attr('new-class');
            var old_class = $('#display-buttons').attr('data-class');
            var display_div = $('#display-buttons');
            if (display_div.length) {
                var display_buttons = display_div.find('.btn');
                display_buttons.removeClass(old_class);
                display_buttons.addClass(new_class);
                display_div.attr('data-class', new_class);
            }
        });
    },

    initDocChart: function () {
        chartColor = "#FFFFFF";

        ctx = document.getElementById('chartHours').getContext("2d");

        myChart = new Chart(ctx, {
            type: 'line',

            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
                datasets: [{
                    borderColor: "#6bd098",
                    backgroundColor: "#6bd098",
                    pointRadius: 0,
                    pointHoverRadius: 0,
                    borderWidth: 3,
                    data: [300, 310, 316, 322, 330, 326, 333, 345, 338, 354]
                },
                    {
                        borderColor: "#f17e5d",
                        backgroundColor: "#f17e5d",
                        pointRadius: 0,
                        pointHoverRadius: 0,
                        borderWidth: 3,
                        data: [320, 340, 365, 360, 370, 385, 390, 384, 408, 420]
                    },
                    {
                        borderColor: "#fcc468",
                        backgroundColor: "#fcc468",
                        pointRadius: 0,
                        pointHoverRadius: 0,
                        borderWidth: 3,
                        data: [370, 394, 415, 409, 425, 445, 460, 450, 478, 484]
                    }
                ]
            },
            options: {
                legend: {
                    display: false
                },

                tooltips: {
                    enabled: false
                },

                scales: {
                    yAxes: [{

                        ticks: {
                            fontColor: "#9f9f9f",
                            beginAtZero: false,
                            maxTicksLimit: 5,
                            //padding: 20
                        },
                        gridLines: {
                            drawBorder: false,
                            zeroLineColor: "#ccc",
                            color: 'rgba(255,255,255,0.05)'
                        }

                    }],

                    xAxes: [{
                        barPercentage: 1.6,
                        gridLines: {
                            drawBorder: false,
                            color: 'rgba(255,255,255,0.1)',
                            zeroLineColor: "transparent",
                            display: false,
                        },
                        ticks: {
                            padding: 20,
                            fontColor: "#9f9f9f"
                        }
                    }]
                },
            }
        });

    },

    initChartsPages: function () {
        chartColor = "#FFFFFF";


        if (ifChartNeeded("chartEmail")) {
            ctx = document.getElementById('chartEmail').getContext("2d");

            myChart = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: [1, 2, 3],
                    datasets: [{
                        label: "Emails",
                        pointRadius: 0,
                        pointHoverRadius: 0,
                        backgroundColor: [
                            '#e3e3e3',
                            '#4acccd',
                            '#fcc468',
                            '#ef8157'
                        ],
                        borderWidth: 0,
                        data: [342, 480, 530, 120]
                    }]
                },

                options: {

                    legend: {
                        display: false
                    },

                    pieceLabel: {
                        render: 'percentage',
                        fontColor: ['white'],
                        precision: 2
                    },

                    tooltips: {
                        enabled: false
                    },

                    scales: {
                        yAxes: [{

                            ticks: {
                                display: false
                            },
                            gridLines: {
                                drawBorder: false,
                                zeroLineColor: "transparent",
                                color: 'rgba(255,255,255,0.05)'
                            }

                        }],

                        xAxes: [{
                            barPercentage: 1.6,
                            gridLines: {
                                drawBorder: false,
                                color: 'rgba(255,255,255,0.1)',
                                zeroLineColor: "transparent"
                            },
                            ticks: {
                                display: false,
                            }
                        }]
                    },
                }
            });

            var speedCanvas = document.getElementById("speedChart");

            var dataFirst = {
                data: [0, 19, 15, 20, 30, 40, 40, 50, 25, 30, 50, 70],
                fill: false,
                borderColor: '#fbc658',
                backgroundColor: 'transparent',
                pointBorderColor: '#fbc658',
                pointRadius: 4,
                pointHoverRadius: 4,
                pointBorderWidth: 8,
            };

            var dataSecond = {
                data: [0, 5, 10, 12, 20, 27, 30, 34, 42, 45, 55, 63],
                fill: false,
                borderColor: '#51CACF',
                backgroundColor: 'transparent',
                pointBorderColor: '#51CACF',
                pointRadius: 4,
                pointHoverRadius: 4,
                pointBorderWidth: 8
            };

            var speedData = {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [dataFirst, dataSecond]
            };

            var chartOptions = {
                legend: {
                    display: false,
                    position: 'top'
                }
            };

            var lineChart = new Chart(speedCanvas, {
                type: 'line',
                hover: false,
                data: speedData,
                options: chartOptions
            });

        }
    },

    initGoogleMaps: function () {
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
            zoom: 13,
            center: myLatlng,
            scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
            styles: [{
                "featureType": "water",
                "stylers": [{
                    "saturation": 43
                }, {
                    "lightness": -11
                }, {
                    "hue": "#0088ff"
                }]
            }, {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [{
                    "hue": "#ff0000"
                }, {
                    "saturation": -100
                }, {
                    "lightness": 99
                }]
            }, {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#808080"
                }, {
                    "lightness": 54
                }]
            }, {
                "featureType": "landscape.man_made",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ece2d9"
                }]
            }, {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ccdca1"
                }]
            }, {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#767676"
                }]
            }, {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#ffffff"
                }]
            }, {
                "featureType": "poi",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "landscape.natural",
                "elementType": "geometry.fill",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "color": "#b8cb93"
                }]
            }, {
                "featureType": "poi.park",
                "stylers": [{
                    "visibility": "on"
                }]
            }, {
                "featureType": "poi.sports_complex",
                "stylers": [{
                    "visibility": "on"
                }]
            }, {
                "featureType": "poi.medical",
                "stylers": [{
                    "visibility": "on"
                }]
            }, {
                "featureType": "poi.business",
                "stylers": [{
                    "visibility": "simplified"
                }]
            }]

        }
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,
            title: "Hello World!"
        });

        // To add the marker to the map, call setMap();
        marker.setMap(map);
    },

    showNotification: function (from, align) {
        color = 'primary';

        $.notify({
            icon: "nc-icon nc-bell-55",
            message: "Welcome to <b>Paper Dashboard</b> - a beautiful bootstrap dashboard for every web developer."

        }, {
            type: color,
            timer: 8000,
            placement: {
                from: from,
                align: align
            }
        });
    }

};