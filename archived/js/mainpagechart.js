if(!!(window.addEventListener)) window.addEventListener('DOMContentLoaded', main);
else window.attachEvent('onload', main);

function main() {
    pietrendChart();
    piemarketChart();
}

function pietrendChart(){
    var piecourseData = [
        {
            value: 35,
            color:"#F7464A",
            highlight: "#FF5A5E",
            label: "Business and Management"
        },
        {
            value: 25,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Art and Graphic"
        },
        {
            value: 20,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "Information Technology"
        },
        {
            value: 15,
            color: "#949FB1",
            highlight: "#A8B3C5",
            label: "Engineering"
        },
        {
            value: 5,
            color: "#4D5360",
            highlight: "#616774",
            label: "Legal and Lawsuit"
        }

    ];

    var piecourseOptions = 
        {
            segmentStrokeColor : "#0000",
            segmentStrokeWidth : 1,
            legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>",
            tooltipTemplate: "<%=label%>: <%= numeral(circumference / 6.283).format('(0[.][00]%)') %>"
        };

    var coursectx = document.getElementById("chart-trendcourse-area").getContext("2d");
    window.mycoursePie = new Chart(coursectx).Pie(piecourseData, piecourseOptions);
    legend(document.getElementById("piecourseLegend"), piecourseData, window.mycoursePie);


}


function piemarketChart(){
    var piemarketData = [
        {
            value: 45,
            color:"#F7464A",
            highlight: "#FF5A5E",
            label: "Problem Solving & Decision Making"
        },
        {
            value: 20,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Teamwork"
        },
        {
            value: 15,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "Interpersonal Communication"
        },
        {
            value: 15,
            color: "#949FB1",
            highlight: "#A8B3C5",
            label: "Time & Stress Management"
        },
        {
            value: 5,
            color: "#4D5360",
            highlight: "#616774",
            label: "Project Management"
        }

    ];

    var piemarketOptions = 
        {
            scaleLabel: "<%=value%>",
            segmentStrokeColor : "#0000",
            segmentStrokeWidth : 1,
            legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>",
            tooltipTemplate: "<%=label%>: <%= numeral(circumference / 6.283).format('(0[.][00]%)') %>"
        };


    var marketctx = document.getElementById("chart-marketcourse-area").getContext("2d");
    window.mymarketPie = new Chart(marketctx).Pie(piemarketData, piemarketOptions);
    legend(document.getElementById("piemarketLegend"), piemarketData, window.mymarketPie);

}
