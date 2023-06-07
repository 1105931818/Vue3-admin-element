<template>
  <svg
    :style="{ width: width ? width : '40px', height: height ? height : '40px' }"
  >
    <use :xlink:href="'#icon-' + type" fill="red"></use>
  </svg>
</template>

<script setup lang="ts">
type T = {
  type: string;
  color?: string;
  width?: string;
  height?: string;
};

defineProps<T>();
</script>

<style scoped lang="scss"></style>
