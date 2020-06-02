<template>
  <Content>
    <div class="content" id="content" >
  

      <section class="section">
        <div class="section-title">
          <div class="title-bar">质量数据趋势分析</div>
        </div>


        <div class="section-content ">

          <div class="item" :key="key" v-for="(item,key) in chartList">
            <h3 class="item-title">质量趋势<span>{{ key }}</span></h3>
            <div class="chart-wrap">
              <Charts :ref="'charts'+key" :params="item"></Charts>
            </div>
          </div>
        </div>

      </section>

    </div>

  </Content>
</template>

<script>
  import CHARTSOPTION from "../utils/chartsOption";
  import problemTrend1 from "../chartoption/problemTrend1"; // 问题趋势1
  import Charts from "../components/charts";
  const minStartTime = "2019-09-30";
  export default {
    name: "qualityBroader-homePage",
    data() {
      return {
        problemTrend1,
        isShowChart: true,
        productList: [],
        isContentEmpty: true,

        // 渲染图标列表
        chartList : [

        ],

      };
    },

        components: {
      Charts
    },

    mounted() {

      // 多图表循环渲染
      let that = this;
      for( let i = 0;i<5;i++){
        let temp = that.$util.deepCopy(that.problemTrend1);
        temp.id = 'chart_'+i;

        let data1 = [];
        let data2 = [];
        let data3 = [];
        let data4 = [];

        for(let i=0;i<=6;i++){
          data1.push(that.randomNum(1,1000));
          data2.push(that.randomNum(1,1000));
          data3.push(that.randomNum(1,1000));
          data4.push(that.randomNum(1,1000));
        }
        temp.chartsOption.series[0].data = data1;
        temp.chartsOption.series[1].data = data2;
        temp.chartsOption.series[2].data = data3;
        temp.chartsOption.series[3].data = data4;
        that.chartList.push(temp);
      }

      console.log(that.chartList)

  
       

    },
    methods: {


    randomNum(minNum, maxNum) {
      switch (arguments.length) {
        case 1:
          return parseInt(Math.random() * minNum + 1, 10);
          break;
        case 2:
          return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
          break;
        default:
          return 0;
          break;
      }
    },

      //问题趋势分析
      fetchLineDts15_5() {

        this.isShowChart = true;
      }
    }
  };
</script>

<style lang="less" scoped>
  .no-data {
    text-align: center;
    line-height: 200px;
    color: #999;
    width: 160%;
  }

  .header,
  .header2 {
    height: 50px;
    padding: 10px 20px 0 0;
    background: #fff;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    border-bottom: 20px solid #f5f7f9;
    box-sizing: content-box;
    .searchForm {
      // border: 1px solid pink;
      flex: 1;
    }
    // .filter {
    // }
  }

  .content-empty {
    height: 400px;
    background-color: #ffffff;
    .empty-data {
      text-align: center;
      line-height: 400px;
    }
  }

  .content {
    background: #f5f7f9;

    .section {
      .section-title {
        padding-bottom: 10px;
        padding-top: 10px;
      }
      .section-content {
        background: #fff;
        padding: 5px;
        .num {
          font-size: 13px;
        }
        .percent {
          font-size: 12px;
        }
        .percent.plus {
          color: #ff4856;
        }
        .percent.min {
          color: #b1de88;
        }

        .item {
          .item-title {
            font-size: 14px;
            font-weight: normal;
            padding-top: 10px;
            padding-bottom: 10px;
          }
        }
      }
    }

    .chart-wrap {
      width: 100%;
      height: 320px;
      border: 1px solid #ccc;
      padding-top: 10px;
    }
  }
</style>
