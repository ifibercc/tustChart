var tustChart = function (options) {
    var me = this;
    if (options.id === '' || options.id === null || document.getElementById(options.id) === null) {
        console.warn('container id not set or not exist!');
        return ;
    }
    var opt = {
        title: {
            text: ''
        },
        tooltip: {

        },
        legend: {
            data: null
        },
        xAxis: {
            data: null
        },
        yAxis: {

        },
        series: null
    };
    opt.title.text = options.titleText || '';
    opt.legend.data = options.legendData || null;
    opt.xAxis.data = options.xAxisData || null;
    opt.yAxis.data = options.yAxisData || null;
    opt.series = options.series || null;

    var chart = echarts.init(document.getElementById(options.id));
    me.currentChart = chart;
    chart.setOption(opt);
};
tustChart.prototype.constructor = tustChart;