window.onload=function(){
//----------------------------------------
// read data from table
//----------------------------------------
var hdr = [],
    data = [];

$('#execcomptable thead tr th').each(function (index, th) {
    hdr.push(d3.select($(th)[0]).text());
});


$('#execcomptable tbody tr').each(function (index, tr) {
    var cells = $(tr).find('td');
    var el = {};
    cells.toArray().forEach(function (d, i) {
        el[hdr[i]] = d3.select(d).text();
        if (i == 3) {
            var sel = d3.select(d).select('select');
            el[hdr[i]] = sel.property('value');
            sel.on('change', function (d) {
                var value = +d3.select(this).property('value');
                var dat = d3.select(this.parentNode.parentNode).datum();
                dat[hdr[3]] = value;
                refreshChart();
            });
        }
    });

    d3.select($(tr)[0]).datum(el); // bind data to dom
    data.push(el);
});


//----------------------------------------
// make chart
//----------------------------------------
var categories = [],
    series1 = [],
    series2 = [],
    series3 = [];

data.forEach(function (d, i) {
    if (!d[hdr[0]].match(/\w+/)) d[hdr[0]] = data[i - 1][hdr[0]];

    categories.push(d[hdr[1]]);
    series1.push(+d[hdr[2]]);
    series2.push(+d[hdr[3]]);
    series3.push(6);
});
console.log('data', data);



var hc = {
    chart: {
        polar: true,
        type: 'line',
        width: 950,
    },

    title: {
        text: 'Competency Gap Chart',
    },

    xAxis: {
        categories: categories,
        tickmarkPlacement: 'on',
        lineWidth: 0
    },

    yAxis: {
        gridLineInterpolation: 'polygon',
        lineWidth: 0,
        min: 0,
        max: 5
    },

    tooltip: {
        shared: true,
        pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
    },

    series: [{
        name: hdr[2],
        data: series1,
        pointPlacement: 'on',
        color: 'steelblue',
    }, {
        name: hdr[3],
        data: series2,
        pointPlacement: 'on',
        color: 'red'
    }]
};

console.log('hc', hc);

$('#execcomptable').before('<div id="chart"></div>')
var spider = $('#chart').highcharts(hc);

//----------------------------------------
// refresh data
//----------------------------------------
function refreshChart() {

    var series = [];

    d3.select('table').select('tbody')
        .selectAll('tr').data()
        .forEach(function (d, i) {
        series.push(+d[hdr[3]]);
    });

    var cht = spider.highcharts();
    cht.series[1].setData(series);

}
}//]]>  
