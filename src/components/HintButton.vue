<template>
  <a :title="(titl.title as string | undefined)">
    <el-button :="attrs">{{ title }}</el-button>
  </a>
</template>

<script setup lang="ts">
import { useAttrs } from "vue";

const attrs = useAttrs();

const titl = defineProps(["title"]);
</script>

<style scoped lang="scss"></style>
