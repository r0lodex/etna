$( function() {

    var $modalempno = $('#empnograph');
    var $modalcompno = $('#compnograph');
    var $modaltrainerno = $('#trainernograph');
    var $modalcompetency = $('#competencygraph');

    $('.empnolink').on( 'click', function() {
        console.log('test');
        $modalempno.modal();
    });

    $('.compnolink').on( 'click', function() {
        console.log('test');
        $modalcompno.modal();
    });

    $('.trainernolink').on( 'click', function() {
        console.log('test');
        $modaltrainerno.modal();
    });
    $('.competencygraph').on( 'click', function() {
        console.log('test');
        $modalcompetency.modal();
    });
});


$(function () {

    // Radialize the colors
    Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function (color) {
        return {
            radialGradient: { cx: 0.5, cy: 0.3, r: 0.7 },
            stops: [
                [0, color],
                [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
            ]
        };
    });

    // Create the chart
    $('#containerempno').highcharts({
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Employee\'s Age Range Percentage.'
        },
        subtitle: {
            text: 'Click the slices to view industry details on these percentage.'
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}:</b> {point.percentage:.1f}%'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> employees<br/>'
        },
        series: [{
            name: "Age",
            colorByPoint: true,
            data: [{
                name: "18 to 23",
                y: 178264,
                drilldown: "18 to 23"
            }, {
                name: "24 to 29",
                y: 285221,
                drilldown: "24 to 29"
            }, {
                name: "30 to 35",
                y: 222829,
                drilldown: "30 to 35"
            }, {
                name: "36 to 41",
                y: 89132,
                drilldown: "36 to 41"
            }, {
                name: "42 to 47",
                y: 71305,
                drilldown: "42 to 47"
            }, {
                name: "47 and above",
                y: 44566,
                drilldown: "47 and above"
            }]
        }],
        drilldown: {
            series: [{
                name: "18 to 23",
                id: "18 to 23",
                data: [
                    ["Information Technology", 83210],
                    ["Engineering", 7120],
                    ["Business Management", 37230],
                    ["Lawsuit", 14894],
                    ["Banking", 12781],
                    ["Graphic and Design", 23029]
                ]
            }, {
                name: "24 to 29",
                id: "24 to 29",
                data: [
                    ["Information <br/> Technology", 68453],
                    ["Engineering", 45635],
                    ["Business Management", 85566],
                    ["Lawsuit", 28522],
                    ["Banking", 42783],
                    ["Graphic and Design", 14262]
                ]
            }, {
                name: "30 to 35",
                id: "30 to 35",
                data: [
                    ["Information <br/> Technology", 8913],
                    ["Engineering", 71305],
                    ["Business Management", 77990],
                    ["Lawsuit", 44565],
                    ["Banking", 17826],
                    ["Graphic and Design", 2230]
                ]
            }, {
                name: "36 to 41",
                id: "36 to 41",
                data: [
                    ["Information <br/> Technology", 2673],
                    ["Engineering", 8916],
                    ["Business Management", 35652],
                    ["Lawsuit", 13369],
                    ["Banking", 22283],
                    ["Graphic and Design", 6239]
                ]
            }, {
                name: "42 to 47",
                id: "42 to 47",
                data: [
                    ["Information <br/> Technology", 5704],
                    ["Engineering", 14261],
                    ["Business Management", 28522],
                    ["Lawsuit", 17826],
                    ["Banking", 3566],
                    ["Graphic and Design", 1426]
                ]
            }, {
                name: "47 and above",
                id: "47 and above",
                data: [
                    ["Information <br/> Technology", 1336],
                    ["Engineering", 445],
                    ["Business Management", 28522],
                    ["Lawsuit", 26739],
                    ["Banking", 1786],
                    ["Graphic and Design", 891]
                ]
            }]
        }
    });
});

$(function () {

    $('#containercompno').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: 'Registered Employers According to Industry'
        },
        subtitle: {
            text: 'Year 2015'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Total Employers'
            },
        },
        tooltip: {
            shared: true,
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'Information Technology',
            data: [30, 134, 248, 316, 459, 542]
        }, {
            name: 'Engineering',
            data: [5, 8, 14, 26, 34, 40]
        }, {
            name: 'Business and Management',
            data: [10, 18, 45, 63, 89, 108]
        }, {
            name: 'Lawsuit',
            data: [3, 7, 18, 31, 52, 60]
        }, {
            name: 'Banking',
            data: [12, 40, 86, 121, 153, 184]
        }, {
            name: 'Graphic and Design',
            data: [20, 124, 214, 257, 289, 315]
        }]
    });
});

$(function () {

    // Create the chart
    $('#containertrainerno').highcharts({
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Trainer\'s Core Competency'
        },
        subtitle: {
            text: 'Click the slices to view competency details on these percentage.'
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}:</b> {point.percentage:.1f}%'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> trainers<br/>'
        },
        series: [{
            name: "Core Comptency",
            colorByPoint: true,
            data: [{
                name: "Organizational Effectiveness",
                y: 75,
                drilldown: "Organizational Effectiveness"
            }, {
                name: "Communication",
                y: 105,
                drilldown: "Communication"
            }, {
                name: "Managerial & Supervisory",
                y: 42,
                drilldown: "Managerial & Supervisory"
            }, {
                name: "Adobe",
                y: 35,
                drilldown: "Adobe"
            }, {
                name: "Oracle",
                y: 15,
                drilldown: "Oracle"
            }, {
                name: "Microsoft",
                y: 50,
                drilldown: "Microsoft"
            }]
        }],
        drilldown: {
            series: [{
                name: "Organizational Effectiveness",
                id: "Organizational Effectiveness",
                data: [
                    ["Teamwork", 25],
                    ["Conflict Management", 15],
                    ["Self & Team Motivation", 40]
                ]
            }, {
                name: "Communication",
                id: "Communication",
                data: [
                    ["Interpersonal Communication", 75],
                    ["Presentation", 15],
                    ["Public Relationship", 15]
                ]
            }, {
                name: "Managerial & Supervisory",
                id: "Managerial & Supervisory",
                data: [
                    ["Project Management", 22],
                    ["Managerial Skills", 5],
                    ["People Management", 15]
                ]
            }, {
                name: "Adobe",
                id: "Adobe",
                data: [
                    ["Adobe CS5", 14],
                    ["Adobe CS6", 16],
                    ["Basic Adobe", 5]
                ]
            }, {
                name: "Oracle",
                id: "Oracle",
                data: [
                    ["<br/>Oracle SOA & BPM", 3],
                    ["Oracle JAVA", 11],
                    ["Oracle Business Intelligence", 1]
                ]
            }, {
                name: "Microsoft",
                id: "Microsoft",
                data: [
                    ["System <br/>Center", 3],
                    ["Exchange Server", 4],
                    ["Lync Server", 2],
                    ["Visual Studio", 8],
                    ["Sharepoint Server", 6],
                    ["SQL Server", 27]
                ]
            }]
        }
    });
});

$(function () {
    $(document).ready(function () {
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });

        $('#traffic-graph').highcharts({
            chart: {
                type: 'spline',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                height: 250,
                events: {
                    load: function () {

                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function () {
                            var x = (new Date()).getTime(), // current time
                                y = Math.random()*2;
                            series.addPoint([x, y], true, true);
                        }, 1000);
                    }
                }
            },
            title: {
                text: 'Server Bandwidth'
            },
            xAxis: {
                minRange: 0.1,
                type: 'datetime',
                tickPixelInterval: 150
            },
            yAxis: {
                title: {
                    text: 'Megabytes/Sec'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Bandwidth MB/sec',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            y: Math.random()*2
                        });
                    }
                    return data;
                }())
            }]
        });
    });
});

$(function () {
    $('#competency-graph').highcharts({
        chart: {
            height: 250
        },

        title: {
            text: 'Employee Competency Level',
            x: -20 //center
        },
        subtitle: {
            text: 'Click to enlarge',
            x: -20
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
        },
        yAxis: {
            title: {
                text: 'Number of Employees'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: ' employees'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Adobe',
            data: [15, 18, 25, 38, 45, 60]
        }, {
            name: 'Organizational <br/> Effectiveness',
            data: [30, 42, 58, 75, 86, 104]
        }, {
            name: 'Managerial & Supervisory',
            data: [10, 18, 29, 43, 49, 56]
        }, {
            name: 'Communication',
            data: [12, 27, 34, 49, 58, 68]
        }, {
            name: 'Oracle',
            data: [6, 15, 18, 19, 22, 25]
        }, {
            name: 'Microsoft',
            data: [25, 37, 49, 60, 79, 90]
        }]
    });
});

$(function () {
    $('#containercompetency').highcharts({
        chart: {
        },

        title: {
            text: 'Employee Competency Level',
            x: -20 //center
        },
        subtitle: {
            text: 'Employee who has top competency level',
            x: -20
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
        },
        yAxis: {
            title: {
                text: 'Number of Employees'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: ' employees'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Adobe',
            data: [15, 18, 25, 38, 45, 60]
        }, {
            name: 'Organizational <br/> Effectiveness',
            data: [30, 42, 58, 75, 86, 104]
        }, {
            name: 'Managerial & Supervisory',
            data: [10, 18, 29, 43, 49, 56]
        }, {
            name: 'Communication',
            data: [12, 27, 34, 49, 58, 68]
        }, {
            name: 'Oracle',
            data: [6, 15, 18, 19, 22, 25]
        }, {
            name: 'Microsoft',
            data: [25, 37, 49, 60, 79, 90]
        }]
    });
});





/*$('#empnograph').on('shown.bs.modal', function() {

    // Radialize the colors
    Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function (color) {
        return {
            radialGradient: { cx: 0.5, cy: 0.3, r: 0.7 },
            stops: [
                [0, color],
                [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
            ]
        };
    });

    // Create the chart
    $('#container').highcharts({
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Employee\'s Age Range Percentage.'
        },
        subtitle: {
            text: 'Click the slices to view industry details on these percentage.'
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}:</b> {point.percentage:.1f}%'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> employees<br/>'
        },
        series: [{
            name: "Age",
            colorByPoint: true,
            data: [{
                name: "18 to 23",
                y: 178264,
                drilldown: "18 to 23"
            }, {
                name: "24 to 29",
                y: 285221,
                drilldown: "24 to 29"
            }, {
                name: "30 to 35",
                y: 222829,
                drilldown: "30 to 35"
            }, {
                name: "36 to 41",
                y: 89132,
                drilldown: "36 to 41"
            }, {
                name: "42 to 47",
                y: 71305,
                drilldown: "42 to 47"
            }, {
                name: "47 and above",
                y: 44566,
                drilldown: "47 and above"
            }]
        }],
        drilldown: {
            series: [{
                name: "18 to 23",
                id: "18 to 23",
                data: [
                    ["Information Technology", 83210],
                    ["Engineering", 7120],
                    ["Business Management", 37230],
                    ["Lawsuit", 14894],
                    ["Banking", 12781],
                    ["Graphic and Design", 23029]
                ]
            }, {
                name: "Chrome",
                id: "Chrome",
                data: [
                    ["v40.0", 5],
                    ["v41.0", 4.32],
                    ["v42.0", 3.68],
                    ["v39.0", 2.96],
                    ["v36.0", 2.53],
                    ["v43.0", 1.45],
                    ["v31.0", 1.24],
                    ["v35.0", 0.85],
                    ["v38.0", 0.6],
                    ["v32.0", 0.55],
                    ["v37.0", 0.38],
                    ["v33.0", 0.19],
                    ["v34.0", 0.14],
                    ["v30.0", 0.14]
                ]
            }, {
                name: "Firefox",
                id: "Firefox",
                data: [
                    ["v35", 2.76],
                    ["v36", 2.32],
                    ["v37", 2.31],
                    ["v34", 1.27],
                    ["v38", 1.02],
                    ["v31", 0.33],
                    ["v33", 0.22],
                    ["v32", 0.15]
                ]
            }, {
                name: "Safari",
                id: "Safari",
                data: [
                    ["v8.0", 2.56],
                    ["v7.1", 0.77],
                    ["v5.1", 0.42],
                    ["v5.0", 0.3],
                    ["v6.1", 0.29],
                    ["v7.0", 0.26],
                    ["v6.2", 0.17]
                ]
            }, {
                name: "Opera",
                id: "Opera",
                data: [
                    ["v12.x", 0.34],
                    ["v28", 0.24],
                    ["v27", 0.17],
                    ["v29", 0.16]
                ]
            }]
        }
    });
});*/

/*$(".ClickMe").click(function(){
    var theModal = $("#empnograph").modal({
        show: false
    });  

     // Radialize the colors
    Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function (color) {
        return {
            radialGradient: { cx: 0.5, cy: 0.3, r: 0.7 },
            stops: [
                [0, color],
                [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
            ]
        };
    });

    var chart = $('#container').highcharts({
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Employee\'s Age Range Percentage.'
        },
        subtitle: {
            text: 'Click the slices to view industry details on these percentage.'
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}:</b> {point.percentage:.1f}%'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> employees<br/>'
        },
        series: [{
            name: "Age",
            colorByPoint: true,
            data: [{
                name: "18 to 23",
                y: 178264,
                drilldown: "18 to 23"
            }, {
                name: "24 to 29",
                y: 285221,
                drilldown: "24 to 29"
            }, {
                name: "30 to 35",
                y: 222829,
                drilldown: "30 to 35"
            }, {
                name: "36 to 41",
                y: 89132,
                drilldown: "36 to 41"
            }, {
                name: "42 to 47",
                y: 71305,
                drilldown: "42 to 47"
            }, {
                name: "47 and above",
                y: 44566,
                drilldown: "47 and above"
            }]
        }],
        drilldown: {
            series: [{
                name: "18 to 23",
                id: "18 to 23",
                data: [
                    ["Information Technology", 83210],
                    ["Engineering", 7120],
                    ["Business Management", 37230],
                    ["Lawsuit", 14894],
                    ["Banking", 12781],
                    ["Graphic and Design", 23029]
                ]
            }, {
                name: "24 to 29",
                id: "24 to 29",
                data: [
                    ["Information Technology", 57044],
                    ["Engineering", 57044],
                    ["Business Management", 57044],
                    ["Lawsuit", 57044],
                    ["Banking", 57044],
                    ["Graphic and Design", 57045]
                ]
            }, {
                name: "30 to 35",
                id: "30 to 35",
                data: [
                    ["v35", 2.76],
                    ["v36", 2.32],
                    ["v37", 2.31],
                    ["v34", 1.27],
                    ["v38", 1.02],
                    ["v31", 0.33],
                    ["v33", 0.22],
                    ["v32", 0.15]
                ]
            }, {
                name: "36 to 41",
                id: "36 to 41",
                data: [
                    ["v8.0", 2.56],
                    ["v7.1", 0.77],
                    ["v5.1", 0.42],
                    ["v5.0", 0.3],
                    ["v6.1", 0.29],
                    ["v7.0", 0.26],
                    ["v6.2", 0.17]
                ]
            }, {
                name: "42 to 47",
                id: "42 to 47",
                data: [
                    ["v12.x", 0.34],
                    ["v28", 0.24],
                    ["v27", 0.17],
                    ["v29", 0.16]
                ]
                },
                {
                name: "47 and above",
                id: "47 and above",
                data: [
                    ["v12.x", 0.34],
                    ["v28", 0.24],
                    ["v27", 0.17],
                    ["v29", 0.16]
            }]
        }
    });


    theModal.on('shown',function(){
       // Recreate the chart now and it will be correct
    });

    theModal.modal("show");
});
*/