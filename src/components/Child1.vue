<script setup lang="ts">
import { ref, onMounted } from 'vue';
import HintButton from './HintButton.vue';
const props = defineProps(['modeValue', 'page']);
const emit = defineEmits(['update:modeValue', 'update:page']);
const addnum = () => {
  emit('update:modeValue', props.modeValue + 1);
  emit('update:page', '你好');
};
const tick = () => {
  console.log(1);
};

const mybtn = ref(null);
onMounted(() => {
  console.log(mybtn.value);
});
</script>

<template>
  <div class="child1">
    <h1 ref="mybtn">我是子组件</h1>
    <h2>子组件：{{ modeValue }}--{{ page }}</h2>
    <el-button @click="addnum">点击+1</el-button>
    <hint-button
      type="primary"
      title="自定义按钮"
      @click.stop="tick"
    ></hint-button>
  </div>
</template>

<style scoped lang="scss">
.child1 {
  width: 400px;
  height: 200px;
  margin: auto;
  background-color: cadetblue;
}
</style>
