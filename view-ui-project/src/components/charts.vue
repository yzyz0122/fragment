<template>
  <div class="charts"
       :id="params.id"></div>
</template>

<script>
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/line";
import "echarts/lib/chart/bar";
import "echarts/lib/chart/pie";
import "echarts/lib/chart/radar";
import "echarts/lib/chart/gauge";
import "echarts/lib/component/legend";
import "echarts/lib/component/legendScroll";
import "echarts/lib/component/title";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/dataZoom";
import "echarts/lib/component/legendScroll";
export default {
  name: "Charts",
  props: ["params"],
  data() {
    return {};
  },
  mounted() {
    let that = this;
    that.initCharts(that.params);
  },
  watch: {
    params: {
      handler(val) {
        this.initCharts(val);
      },
      deep: true
    }
  },
  methods: {
    // 初始化图表
    initCharts(parm) {
      if (!parm) {
        console.log("绘制表格失败，参数错误！");
        return;
      }
      let that = this;
      that.$nextTick(() => {
        if (!parm) {
          console.log("绘制表格失败，参数错误！");
          return;
        }
        let myChart = echarts.getInstanceByDom(
          document.getElementById(parm.id)
        );
        if (!myChart) {
          myChart = echarts.init(document.getElementById(parm.id));
        }
        myChart.clear();
        myChart.setOption(parm.chartsOption);

        //重新渲染大小
        myChart.resize();

        window.addEventListener("resize", () => {
          myChart.resize();
        });
      });
    }
  }
};
</script>

<style lang="less" scoped>
.charts {
  width: 100%;
  height: 100%;
}
</style>
