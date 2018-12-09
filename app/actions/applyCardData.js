export default function setApplyCardData(applyCardData) {
  return {
    title: {
        text: '申请办卡PV-UV'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            animation: false,
            label: {
                backgroundColor: '#505765'
            }
        }
    },
    legend: {
        data:['PV','UV']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: 40,
        containLabel: true
    },
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: applyCardData.date
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%']
    },
    dataZoom: [{
        show: true,
        realtime: true,
        start: 75,
        end: 100
    },
    {
        type: 'inside',
        realtime: true,
        start: 65,
        end: 85
    }],
    series: [
         applyCardData.PV,
         applyCardData.UV

    ]
  }

}
