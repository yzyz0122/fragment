// 图表基本配置
// 折线图、柱状图、饼图
import echarts from 'echarts/lib/echarts';

const CHARTSOPTION = {
  line: {
    xAxis: {
      type: 'category',
      data: []
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [],
      type: 'line'
    }]
  },
  bar: {
    grid: {
      top: '50px',
      left: '20px',
      right: '15px',
      bottom: '20px',
      containLabel: true
    },
    legend: {
      itemWidth: 10,
      itemHeight: 10,
      data: []
    },
    xAxis: {
      type: 'category',
      data: [],
      axisLine: {
        show: true,
        lineStyle: {
          color: '#454d55'
        }
      },
      axisLabel: {
        color: '#eee',
        rotate: -25,
        fontSize: 10
      },
      splitLine: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: "#bdbdbd"
        }
      }
    },
    yAxis: {
      type: 'value',
      minInterval: 1,
      splitLine: {
        show: true,
        lineStyle: {
          color: '#454d55'
        }
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#454d55'
        }
      },
      axisLabel: {
        color: '#eee',
        fontSize: 10
      }
    },
    tooltip: {
      axisPointer: {
        type: 'none'
      },
      trigger: 'axis'
    },
    series: [{
      type: 'bar',
      barWidth: 20, //柱图宽度
      data: [],
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [{
                offset: 0,
                color: '#00ea8b'
              },
              {
                offset: 0.5,
                color: '#00eaa6'
              },
              {
                offset: 1,
                color: '#00eace'
              }
            ]
          )
        }
      }

    }]
  },
  graph: {
    grid: {
      top: '15',
      left: '0%',
      right: '5%',
      bottom: '25px',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: [],
      axisLine: {
        show: true,
        lineStyle: {
          color: '#454d55'
        }
      },
      axisLabel: {
        color: '#eee',
        rotate: -25,
        fontSize: 10
      }
    },
    yAxis: {
      type: 'value',
      minInterval: 1,
      splitLine: {
        show: true,
        lineStyle: {
          color: '#454d55'
        }
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#454d55'
        }
      },
      axisLabel: {
        color: '#eee',
        fontSize: 10
      }
    },
    tooltip: {
      axisPointer: {
        type: 'none'
      },
      trigger: 'axis'
    },
    series: [{
      type: 'bar',
      barWidth: 20, //柱图宽度
      data: [],
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [{
                offset: 0,
                color: '#00ea8b'
              },
              {
                offset: 0.5,
                color: '#00eaa6'
              },
              {
                offset: 1,
                color: '#00eace'
              }
            ]
          )
        }
      }

    }]
  },
  pie: {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
      orient: "vertical",
      x: "left",
      data: []
    },
    series: [{
      name: "",
      type: "pie",
      radius: ["50%", "70%"],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false,
          position: "center"
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: "30",
            fontWeight: "bold"
          }
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data: []
    }]
  },
  radar: {
    title: {
      text: ''
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      x: 'center',
      data: ['']
    },
    radar: [{
        indicator: [],
        center: ['25%', '40%'],
        radius: 80
      },

    ],
    series: [{
        type: 'radar',
        tooltip: {
          trigger: 'item'
        },
        itemStyle: {
          normal: {
            areaStyle: {
              type: 'default'
            }
          }
        },
        data: []
      },

    ]
  },
  gauge: {
    series: [
      {
        type: 'gauge',
        detail: {
          show: false
        },
        data: []
      }
    ]
  }
}

export default CHARTSOPTION;
