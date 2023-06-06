<script setup lang="ts">
import { ref } from "vue";
import Child1 from "./components/Child1.vue";
let money = ref(100);
let page = ref("hello");
/* const handler = (sum: number) => {
  money.value = sum;
}; */
</script>

<template>
  <div class="main">
    <h1>父组件：{{ money }}---{{ page }}</h1>
    <input type="text" v-model="money" />
    <!-- <Child1 :mode-value="money" @update:mode-value="handler" /> -->
    <Child1 v-model:mode-value="money" v-model:page="page" />
  </div>
</template>

<style scoped lang="scss">
.main {
  width: 100%;
  height: 400px;
  background-color: aqua;
  text-align: center;
}
</style>
