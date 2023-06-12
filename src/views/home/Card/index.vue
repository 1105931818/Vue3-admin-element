<template>
  <div class="card">
    <div class="left">
      <el-card class="el_card">
        <Detail title="总销售额" cont="¥ 12456">
          <template v-slot:charts>
            <gressChart />
          </template>
          <template v-slot:footer>
            <span style="font-size: 14px">
              日访问量 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6578
            </span>
          </template>
        </Detail>
      </el-card>

      <el-card class="el_card" style="margin-top: 10px">
        <Detail title="访问量" cont="52657">
          <template v-slot:charts>
            <barChart />
          </template>
          <template v-slot:footer>
            <span style="font-size: 14px">
              转化率 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;65%
            </span>
          </template>
        </Detail>
      </el-card>
    </div>

    <el-card class="right">
      <Detail title="支付笔数" cont="23916">
        <template v-slot:charts>
          <lineChart />
        </template>
        <template v-slot:footer>
          <span style="font-size: 14px">
            周同比 &nbsp;&nbsp; 12.7%
            <svg
              t="1683707068477"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3357"
              width="16"
              height="16"
            >
              <path
                d="M929.408 202.752l-205.269333 24.661333a8.234667 8.234667 0 0 0-4.864 13.994667l61.141333 60.928-232.96 232.32-104.874667-104.533333a16.469333 16.469333 0 0 0-23.296 0l-331.52 330.752a8.234667 8.234667 0 0 0 0 11.605333l46.336 46.464a8.277333 8.277333 0 0 0 11.648 0l285.184-284.288 104.789334 104.533333c6.485333 6.357333 16.896 6.357333 23.296 0l279.722666-278.784 61.098667 60.970667c4.821333 4.821333 13.226667 1.962667 14.037333-4.821333l24.746667-204.8a8.106667 8.106667 0 0 0-9.216-9.002667z"
                fill="#1afa29"
                p-id="3358"
              />
            </svg>
          </span>
          <span style="font-size: 14px">
            日同比 &nbsp;&nbsp; 11.16%
            <svg
              t="1683707186150"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4601"
              width="16"
              height="16"
            >
              <path
                d="M938.581333 812.117333l-24.746666-204.714666a8.277333 8.277333 0 0 0-13.994667-4.821334l-61.098667 61.013334-279.637333-278.698667a16.597333 16.597333 0 0 0-23.253333 0l-104.96 104.533333-285.141334-284.373333a8.277333 8.277333 0 0 0-11.648 0L87.722667 251.52a8.234667 8.234667 0 0 0 0 11.605333l331.52 330.794667c6.4 6.485333 16.938667 6.485333 23.338666 0l104.917334-104.533333 232.96 232.277333-61.098667 60.970667a8.234667 8.234667 0 0 0 4.864 13.952l205.312 24.661333a8.106667 8.106667 0 0 0 9.045333-9.130667z"
                fill="#d81e06"
                p-id="4602"
              />
            </svg>
          </span>
        </template>
      </Detail>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import Detail from './Detail/index.vue';
import gressChart from './gressChart/index.vue';
import barChart from './barChart/index.vue';
import lineChart from './lineChart/index.vue';
</script>

<style scoped lang="scss">
.card {
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-around;

  .left {
    width: 38%;
    height: 500px;

    .el_card {
      width: 100%;
      height: 245px;
    }
  }

  .right {
    width: 60%;
    height: 500px;
  }
}
</style>
