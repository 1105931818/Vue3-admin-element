<template>
  <div class="search">
    <el-card>
      <div class="sear_header">
        <span>销售额类别占比</span>
        <div>
          <el-radio-group v-model="value">
            <el-radio-button label="全部渠道" />
            <el-radio-button label="线上" />
            <el-radio-button label="门店" />
          </el-radio-group>
        </div>
      </div>
      <div ref="charts" class="charts" />
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import * as echarts from 'echarts';

let value = ref<string>('');
const charts = ref<HTMLDivElement>();
onMounted(() => {
  const cont = echarts.init(charts.value as HTMLDivElement);
  cont.setOption({
    title: {
      text: '搜索引擎',
      subtext: 1048,
      left: 'center',
      top: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2,
        },
        label: {
          show: true,
          position: 'outsize',
        },
        labelLine: {
          show: true,
        },
        data: [
          { value: 1048, name: '搜索引擎' },
          { value: 735, name: '直接访问' },
          { value: 580, name: '邮件营销' },
          { value: 484, name: '联盟广告' },
          { value: 300, name: '视频广告' },
        ],
      },
    ],
  });
  cont.on('mouseover', (params) => {
    const { name, value } = params.data as { name: any; value: any };
    cont.setOption({
      title: {
        text: name,
        subtext: value,
      },
    });
  });
});
</script>

<style scoped lang="scss">
.search {
  width: 100%;
  .sear_header {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(192, 192, 192);
  }

  .charts {
    width: 100%;
    height: 393px;
  }
}
</style>
