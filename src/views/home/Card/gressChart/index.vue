<template>
  <div class="chart" ref="gressChart"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
const gressChart = ref<HTMLDivElement>();
onMounted(() => {
  const gress = echarts.init(gressChart.value as HTMLDivElement);
  gress.setOption({
    xAxis: {
      // 隐藏X轴
      show: false,
      type: 'category',
      boundaryGap: false,
    },
    yAxis: {
      // 隐藏Y轴
      show: false,
    },
    // 系列
    series: [
      {
        type: 'line',
        smooth: true,
        data: [28, 18, 36, 43, 32, 54, 75, 88],
        // 拐点样式设置
        itemStyle: {
          opactiy: 0,
        },
        // 线条样式
        lineStyle: {
          color: 'purple',
        },
        // 区域填充颜色
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'purple',
              },
              {
                offset: 1,
                color: '#fff',
              },
            ],
            global: false,
          },
        },
      },
    ],
    // 布局调试
    grid: {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
    },
    tooltip: {},
  });
});
</script>

<style scoped lang="scss">
.chart {
  width: 100%;
  height: 110px;
}
</style>
