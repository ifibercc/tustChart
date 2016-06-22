// var options = {
//     id: 'main',
//     titleText: 'ECharts 入门示例',
//     titleSubtext: '柱状图',
//     legendData: ['销量'],
//     xAxisData: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],
//     series: [{
//                 name: '销量',
//                 type: 'bar',
//                 data: [5, 20, 36, 10, 10, 20]
//             }]
// };
// var aa = new tustChart(options);
var options = {
    title: {
        text: 'ECharts 入门示例',
        subtext: '柱状图',
        left: 'center'
    },
    legend: {
        data: ['销量'],
        left: 'right'
    },
    xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
    },
    yAxis: {

    },
    tooltip: {

    },
    toolbox: {
        show: true,
        feature: {
            // pie type will a bug
            magicType: {
                type: ['bar', 'line']
            },
            saveAsImage: {}
        },
        top: 'bottom'
    },
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    },
    {
        name: 'XX',
        type: 'line',
        data: [5, 10, 36, 10, 10, 20]
    }]
};


var chart = echarts.init(document.getElementById('main'));
chart.setOption(options);
