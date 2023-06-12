<template>
  <div class="barchart" ref="barchart"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import * as echarts from 'echarts';

const barchart = ref<HTMLDivElement>();
onMounted(() => {
  const bar = echarts.init(barchart.value as HTMLDivElement);
  bar.setOption({
    xAxis: {
      // 隐藏X轴
      show: false,
      type: 'category',
    },
    yAxis: {
      // 隐藏Y轴
      show: false,
    },
    // 系列
    series: [
      {
        type: 'bar',
        data: [68, 48, 36, 53, 58, 64, 45, 41, 50, 75, 68, 99],
        color: 'green',
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
.barchart {
  width: 100%;
  height: 110px;
}
</style>
