$('#empnograph').on('shown.bs.modal', function() {
    var piecourseData = [
        {
            value: 35,
            color:"#F7464A",
            highlight: "#FF5A5E",
            label: "18-22"
        },
        {
            value: 25,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "23-27"
        },
        {
            value: 20,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "28-32"
        },
        {
            value: 15,
            color: "#949FB1",
            highlight: "#A8B3C5",
            label: "33-37"
        },
        {
            value: 5,
            color: "#4D5360",
            highlight: "#616774",
            label: "38-42"
        },
        {
            value: 5,
            color: "#19bf40",
            highlight: "#00d532",
            label: "43 and above"
        }

    ];

    var piecourseOptions = 
        {
            segmentStrokeColor : "#0000",
            segmentStrokeWidth : 1,
            legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>",
            tooltipTemplate: "<%=label%>:<%=value%> - <%= numeral(circumference / 6.283).format('(0[.][00]%)') %>"
        };
    $( "#empnocanvas" ).empty(); //clear chart so it doesn't create multiple if multiple clicks
    var canvas = document.getElementById('empnocanvas');
    var ctx = canvas.getContext("2d");    
    var chart = new Chart(ctx).Pie(piecourseData, piecourseOptions);
    legend(document.getElementById("piecourseLegend"), piecourseData, chart);
});    

$('#modChart').on('shown.bs.modal', function() {
    $( "#canvas" ).empty(); //clear chart so it doesn't create multiple if multiple clicks
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext("2d");
    var chart = new Chart(ctx).Line({        
        responsive: true,
        labels: ['A', 'B', 'C', 'D', 'E', 'F'],
        datasets: [{
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [10, 20, 15, 15, 20, 10]
        },{
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "#F7464A",
            pointColor: "#FF5A5E",
            pointStrokeColor: "#FF5A5E",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "red",
            data: [10, 10, 10, 10, 10, 10]
        }]
    },{});    
});

$( "#morris-chart-versions" ).empty(); //clear chart so it doesn't create multiple if multiple clicks
