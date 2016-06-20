var tustChart = function (options) {
    var me = this;
    if (options.id === '' || options.id === null || document.getElementById(options.id) === null) {
        console.warn('container id not set or not exist!');
        return ;
    }
    var opt = {
        title: {
            text: '',
            subtext: '',
            left: 'center'
        },
        legend: {
            data: null,
            left: 'right'
        },
        xAxis: {
            data: null
        },
        yAxis: {

        },
        tooltip: {
        },
        toolbox: {
            show: true,
            feature: {
                saveAsImage: {},
                magicType: {
                    type: ['line', 'bar']
                }
            },
            top: 'bottom',
            orient: 'vertical'
        },
        series: null
    };
    opt.title.text = options.titleText || '';
    opt.title.subtext = options.titleSubtext || '';
    opt.legend.data = options.legendData || null;
    opt.xAxis.data = options.xAxisData || null;
    opt.yAxis.data = options.yAxisData || null;
    opt.series = options.series || null;

    var chart = echarts.init(document.getElementById(options.id));
    me.currentChart = chart;
    chart.setOption(opt);
};
tustChart.prototype.constructor = tustChart;
