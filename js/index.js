var options = {
    id: 'main',
    titleText: 'ECharts 入门示例',
    legendData: ['销量'],
    xAxisData: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],
    series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
};
var aa = new tustChart(options);