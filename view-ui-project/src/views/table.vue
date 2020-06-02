<template>
  <Content>
    <!-- 头部 -->

    <div class="content-empty" v-if="isContentEmpty">
      <div class="empty-data">
        ~ 暂无数据 ~
      </div>
    </div>
    <!-- 内容 -->
    <div class="content" id="content" v-else>
      <section class="section">
        <div class="section-title">
          <div class="title-bar">质量数据总览</div>
        </div>
        <div class="section-content reportTable">
          <Table size="small" :columns="columns11" :data="overviewData" :span-method="handleSpan" border>
                  <template v-for="(item,key) in slotList" slot-scope="{ row }" :slot="item">
                      <span>
                          <span>{{ row[item].val }}</span>
                          <span :class="'percent ' +   row[item].trend">{{ row[item].percent }}</span>
                      </span>
                  </template>
          </Table>
        </div>

      </section>

      <section class="section">
        <div class="section-title">
          <div class="title-bar">质量数据趋势分析</div>
        </div>

      </section>

    </div>

  </Content>
</template>

<script>
export default {
  name: "qualityBroader-homePage",
  data() {
    return {
      slotList:[],
      columns11: [
        {
          title: "指标分类",
          key: "name",
          align: "center",
          width: 200,
          fixed: "left"
        },
        {
          title: "指标子分类",
          key: "name2",
          align: "center",
          width: 200,
          fixed: "left"
        }
      ],
      columns12: [
        {
          title: "产品线",
          key: "productline",
          align: "center",
          width: 200,
          fixed: "left",
          children: [
            {
              title: "",
              key: "name",
              align: "center",
              fixed: "left",

              width: 160
            },
            {
              title: "",
              key: "line",
              align: "center",
              fixed: "left",

              width: 160
            }
          ]
        },
        {
          title: "线上质量",
          key: "onlinequality",
          align: "center",
          width: 200,
          children: [
            {
              title: "线上问题总数",
              key: "val1",
              align: "center",
              // slot: "val1",
              width: 160
            },
            {
              title: "线上事故总数",
              key: "val2",
              // slot: "val2",
              align: "center",
              width: 160
            }
          ]
        },

        {
          title: "测试质量",
          key: "testq",
          align: "center",
          width: 200,
          children: [
            {
              title: "测试率",
              key: "val3",
              align: "center",
              // slot: "val3",
              width: 160
            },
            {
              title: "很难发现缺陷占比",
              key: "val4",
              // slot: "val4",
              align: "center",
              width: 160
            },
            {
              title: "人均发现缺陷数",
              key: "val5",
              // slot: "val5",
              align: "center",
              width: 160
            },
            {
              title: "很难发现缺陷占比",
              key: "val6",
              // slot: "val6",
              align: "center",
              width: 160
            },
            {
              title: "漏测问题中设计未覆盖占比",
              key: "val7",
              // slot: "val7",
              align: "center",
              width: 160
            },
            {
              title: "非用例发现占比",
              key: "val8",
              // slot: "val8",
              align: "center",
              width: 160
            }
          ]
        },

        {
          title: "研发质量",
          key: "xfsrf",
          align: "center",
          width: 200,
          children: [
            {
              title: "容易发现缺陷占比",
              key: "val9",
              align: "center",
              // slot: "val9",
              width: 160
            },
            {
              title: "严重缺陷率",
              key: "val10",
              // slot: "val10",
              align: "center",
              width: 160
            },
            {
              title: "千行bug率",
              key: "val11",
              // slot: "val11",
              align: "center",
              width: 160
            },
            {
              title: "自测率",
              key: "val12",
              // slot: "val12",
              align: "center",
              width: 160
            }
          ]
        },

        {
          title: "需求质量",
          key: "xfsrf",
          align: "center",
          width: 200,
          children: [
            {
              title: "研发设计缺陷占比",
              key: "val13",
              align: "center",
              // slot: "curr",
              width: 160
            },
            {
              title: "需求引发缺陷占比",
              key: "val14",
              // slot: "base",
              align: "center",
              width: 160
            }
          ]
        }
      ],
      data10: [],
      overviewData:[],
      isContentEmpty: false
    };
  },

  mounted() {
    let that = this;
    this.overviewData = [
      {
        key: 0,
        name: "线上质量",
        name2: "线上问题总数",
      },
      {
        key: 1,
        name: "线上质量",
        name2: "线上事故总数",
      },
      {
        key: 2,
        name: "测试质量",
        name2: "漏测率",
      },
      {
        key: 3,
        name: "测试质量",
        name2: "很难发现缺陷占比",
      },
      {
        key: 4,
        name: "测试质量",
        name2: "人均发现缺陷数",
      },
      {
        key: 5,
        name: "测试质量",
        name2: "漏测问题中设计未覆盖占比",
      },
      {
        key: 6,
        name: "测试质量",
        name2: "非用例发现缺陷占比",
      },
      {
        key: 7,
        name: "研发质量",
        name2: "容易发现缺陷占比",
      },
      {
        key: 8,
        name: "研发质量",
        name2: "严重缺陷率",
      },
      {
        key: 9,
        name: "研发质量",
        name2: "千行bug率",
      },
      {
        key: 10,
        name: "研发质量",
        name2: "提测通过率",
      },
      {
        key: 11,
        name: "研发质量",
        name2: "自测率",
      },
      {
        key: 12,
        name: "研发质量",
        name2: "研发设计缺陷占比",
      },
      {
        key: 13,
        name: "需求质量",
        name2: "需求引发缺陷占比",
      },
      {
        key: 14,
        name: "需求质量",
        name2: "线上设计如此缺陷占比",
      }
    ];

    // 假设 5个产品
    // 处理表头

    let item = {
      title: "讯飞输入法1",
      key: "",
      align: "center",
      width: 200,
      children: [
        {
          title: "当前值",
          key: "curr",
          align: "center",
          width: 160
        },
        {
          title: "基线值",
          key: "base",
          align: "center",
          width: 160
        }
      ]
    };

    for (let i = 1; i <= 5; i++) {
      let temp = that.$util.deepCopy(item);
      temp.title = temp.title + i;
      temp.children[0].key = "value_curr_" + i;
      temp.children[1].key = "value_base_" + i;
      temp.children[0].slot = "value_curr_" + i;
      temp.children[1].slot = "value_base_" + i;
      this.columns11.push(temp);
    }

    console.log(this.columns11)
      for (let i = 1; i <= 5; i++) {
        that.slotList.push("value_curr_" + i);
        that.slotList.push("value_base_" + i);
      }

    //   console.log(that.slotList)

    this.overviewData.forEach(function(item, index) {
    //   console.log(item);

      // 每个产品占两列 假设 5个产品
      for (let i = 1; i <= 5; i++) {
        item["value_curr_" + i] = {
            val:that.randomNum(1, 2000),
            percent : '+' + that.randomNum(1, 50) + "%",
            trend: ["min", "plus"][that.randomNum(0, 1)],
        };

        item["value_base_" + i] = {
            val:that.randomNum(1, 2000),
            percent : '+' + that.randomNum(1, 50) + "%",
            trend: ["min", "plus"][that.randomNum(0, 1)],
        };

      }
    });

    // console.log(this.overviewData)
    this.caculateMerge(this.overviewData);

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
    // 计算首列指标分类合并
    caculateMerge(data) {
      let span = 1;
      for (let i = 0; i < data.length; i++) {
        // 最后一行
        if (i == data.length - 1) {
          data[i - span + 1].rowspan = span;
          return;
        }
        if (data[i].name == data[i + 1].name) {
          span = span + 1;
        } else {
          data[i - span + 1].rowspan = span;
          span = 1;
        }
      }
    },

    // 总览表 行合并
    handleSpan({ row, column, rowIndex, columnIndex }) {
      if (columnIndex == 0 && row.rowspan) {
        return {
          rowspan: row.rowspan,
          colspan: 1
        };
      } else if (columnIndex == 0) {
        return {
          rowspan: 0,
          colspan: 0
        };
      }
    }
  }
};
</script>

<style lang="less" scoped>



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
