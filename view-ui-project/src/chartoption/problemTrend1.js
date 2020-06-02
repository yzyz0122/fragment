import CHARTSOPTION from "../utils/chartsOption";
import { genuuID } from "../utils/helper";
//环形图颜色集合
const pieColorList = [
  "#0095ff",
  "#0ed79b",
  "#fbd437",
  "#f2637b",
  "#36cbcb",
  "#975fe5",
  "#534cf9",
  "#ff8b36",
  "#c569f0",
  "#de8d5b",
  "#61b6d5",
  "#c870c1",
  "#71d381",
  "#b1a14a"
];

let options = Object.assign({}, CHARTSOPTION.line.chartsOption, {
  tooltip: {
    trigger: "axis"
  },
  legend: {
    x: "right",
    icon: "circle",
    data: [
      "新增问题总数",
      "修复问题总数",
      "关闭问题总数",
      "重开问题总数",
      "遗留问题总数"
    ]
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "20%"
  },
  color: ["#a252ff", "#959595", "#10e5df", "#F14963"],
  toolbox: {
    show: true,
    feature: {
      dataZoom: {
        yAxisIndex: "none"
      },
      dataView: { readOnly: false },
      magicType: { type: ["line", "bar"] },
      restore: {},
      saveAsImage: {}
    }
  },
  xAxis: {
    name: '',
    type: "category",
    axisLine: { show: false }, //轴线不显示
      data: ["06-05", "06-06", "06-07", "06-08", "06-09", "06-10", "06-11"],
    boundaryGap: false,
    // data: that.defectStatisticsTrendMap.timeList
  },
  yAxis: {
    name: "个",
    type: "value",
    axisLine: {
      show: false,
      lineStyle: {
        color: "#bdbdbd"
      }
    }, //轴线不显示
    splitLine: {
      show: true,
      lineStyle: {
        type: "dashed"
      }
    },
    axisLabel: {
      formatter: "{value}"
    }
  },
  /*dataZoom: [
        {
          show: true,
          start: 0,
          end: 30,
          height: 20
        },
        {
          type: "inside",
          start: 20,
          end: 100
        }
      ],*/
  series: [
    {
      name: "新增问题总数",
      type: "line",
      data: [11, 11, 15, 13, 12, 13, 10],
      // data: that.defectStatisticsTrendMap.addbugList,
      markPoint: {
        data: [
          { type: "max", name: "最大值" },
          { type: "min", name: "最小值" }
        ]
      },
      markLine: {
        data: [{ type: "average", name: "平均值" }]
      }
    },
    {
      name: "修复问题总数",
      type: "line",
      data: [1, 3, 2, 5, 3, 2, 0],
      // data: that.defectStatisticsTrendMap.resolvebugList,
      markPoint: {
        data: [{ name: "周最低", value: -2, xAxis: 1, yAxis: -1.5 }]
      },
      markLine: {
        data: [
          { type: "average", name: "平均值" },
          [
            {
              symbol: "none",
              x: "90%",
              yAxis: "max"
            },
            {
              symbol: "circle",
              label: {
                normal: {
                  position: "start",
                  formatter: "最大值"
                }
              },
              type: "max",
              name: "最高点"
            }
          ]
        ]
      }
    },
    {
      name: "关闭问题总数",
      type: "line",
      data: [1, 3, 2, 5, 3, 2, 0],
      // data: that.defectStatisticsTrendMap.closebugList,
      markPoint: {
        data: [{ name: "周最低", value: -2, xAxis: 1, yAxis: -1.5 }]
      },
      markLine: {
        data: [
          { type: "average", name: "平均值" },
          [
            {
              symbol: "none",
              x: "90%",
              yAxis: "max"
            },
            {
              symbol: "circle",
              label: {
                normal: {
                  position: "start",
                  formatter: "最大值"
                }
              },
              type: "max",
              name: "最高点"
            }
          ]
        ]
      }
    },
    {
      name: "重开问题总数",
      type: "line",
      data: [17, 15, 12, 11, 22, 18, 10],
      // data: that.defectStatisticsTrendMap.reopenedbugList,
      markPoint: {
        data: [
          { type: "max", name: "最大值" },
          { type: "min", name: "最小值" }
        ]
      },
      markLine: {
        data: [{ type: "average", name: "平均值" }]
      }
    },
    {
      name: "遗留问题总数",
      type: "line",
      data: [14, 12, 3, 13, 2, 23, 10],
      // data: that.defectStatisticsTrendMap.legacydbugList,
      markPoint: {
        data: [
          { type: "max", name: "最大值" },
          { type: "min", name: "最小值" }
        ]
      },
      markLine: {
        data: [{ type: "average", name: "平均值" }]
      }
    }
  ]
});

const obj = {
  id: genuuID(16),
  chartsOption: options
};

export default obj;
