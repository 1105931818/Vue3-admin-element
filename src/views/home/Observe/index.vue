<template>
  <div class="observe">
    <el-row :gutter="10">
      <el-col :span="12">
        <Category />
      </el-col>
      <el-col :span="12">
        <Search />
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import Category from './Category/index.vue';
import Search from './Search/index.vue';
</script>

<style scoped lang="scss">
.observe {
  width: 99%;
  margin: auto;
  margin-top: 20px;
}
</style>
