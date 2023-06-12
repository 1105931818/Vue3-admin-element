<template>
  <div class="sale">
    <el-card class="sale_box">
      <div class="top">
        <el-tabs v-model="activeName" class="tabs" @tab-click="handleClick">
          <el-tab-pane label="销售额" name="sale"></el-tab-pane>
          <el-tab-pane label="访问量" name="visite"></el-tab-pane>
        </el-tabs>
        <div class="right">
          <el-date-picker
            v-model="value"
            type="daterange"
            range-separator="-"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            :size="'default'"
            value-format="yyyy-MM-dd"
          />
        </div>
      </div>
      <div class="cont">
        <el-row>
          <el-col :span="19"><div class="charts" ref="charts"></div></el-col>
          <el-col :span="5">
            <div class="grid-content bg-purple-light">
              <div class="list">
                <h3>门店{{ title }}排名</h3>
                <ul>
                  <li>
                    <p>
                      <span class="rindex">1</span>
                      肯德基
                    </p>
                    <span>362,156</span>
                  </li>
                  <li>
                    <p>
                      <span class="rindex">2</span>
                      麦当劳
                    </p>
                    <span>348,764</span>
                  </li>
                  <li>
                    <p>
                      <span class="rindex">3</span>
                      华莱士
                    </p>
                    <span>298,114</span>
                  </li>
                  <li>
                    <p>
                      <span>4</span>
                      海底捞
                    </p>
                    <span>244,312</span>
                  </li>
                  <li>
                    <p>
                      <span>5</span>
                      汉堡王
                    </p>
                    <span>219,778</span>
                  </li>
                  <li>
                    <p>
                      <span>6</span>
                      小龙虾
                    </p>
                    <span>215,189</span>
                  </li>
                  <li>
                    <p>
                      <span>7</span>
                      烧烤
                    </p>
                    <span>209,889</span>
                  </li>
                </ul>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import * as echarts from 'echarts';

const activeName = ref<string>('sale');
const value = ref<string>('');
const charts = ref<HTMLDivElement>();
const title = computed<string>(() => {
  return activeName.value === 'sale' ? '销售额' : '访问量';
});
const arrlist = computed<number[]>(() => {
  return activeName.value === 'sale'
    ? [180, 392, 200, 154, 170, 160, 200, 152, 176, 234, 290, 330]
    : [280, 332, 340, 204, 140, 150, 170, 162, 216, 204, 230, 220];
});
const handleClick = () => {
  console.log(1);
};
watch(title, () => {
  const cont = echarts.init(charts.value as HTMLDivElement);
  cont.setOption({
    title: {
      text: title.value + '趋势',
    },
    series: [
      {
        name: title.value,
        type: 'bar',
        barWidth: '60%',
        data: arrlist.value,
      },
    ],
  });
});
onMounted(() => {
  const cont = echarts.init(charts.value as HTMLDivElement);
  cont.setOption({
    title: {
      text: title.value + '趋势',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: [
          '1月',
          '2月',
          '3月',
          '4月',
          '5月',
          '6月',
          '7月',
          '8月',
          '9月',
          '10月',
          '11月',
          '12月',
        ],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: title.value,
        type: 'bar',
        barWidth: '60%',
        data: arrlist.value,
      },
    ],
  });
});
</script>

<style scoped lang="scss">
.sale {
  margin-top: 20px;

  .sale_box {
    width: 99%;
    margin: auto;
    height: 600px;
    box-sizing: border-box;

    .top {
      width: 100%;
      position: relative;

      .right {
        position: absolute;
        right: 0;
        top: 0;
      }
    }

    .cont {
      .charts {
        width: 100%;
        height: 520px;
      }

      .list {
        width: 100%;
        height: 100%;
        h3 {
          margin: 0;
          padding: 0;
          margin-bottom: 25px;
          margin-top: 15px;
          font-size: 20px;
          font-weight: 600;
          text-align: center;
        }
        ul {
          width: 90%;
          height: 100%;
          li {
            width: 100%;
            height: 60px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            p {
              display: flex;
              width: 80px;

              span {
                margin-right: 10px;
              }
              .rindex {
                display: block;
                width: 18px;
                height: 18px;
                border-radius: 50%;
                background-color: black;
                color: white;
                text-align: center;
                line-height: 18px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
