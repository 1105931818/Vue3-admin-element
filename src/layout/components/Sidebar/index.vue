<template>
  <div class="sidebar" :class="{ fold: SettingStore().isSwitch }">
    <div class="top">
      <Logo />
    </div>
    <div class="content">
      <el-scrollbar class="sidebar_item" native>
        <el-menu
          :background-color="SettingStore().isSwitch ? '#1a1a1a' : '#956A61'"
          text-color="white"
          active-text-color="black"
          :collapse="SettingStore().isChange"
          :default-active="router.path"
        >
          <SidebarItem :menus="menus" />
        </el-menu>
      </el-scrollbar>
    </div>
  </div>
</template>

<script setup lang="ts">
import SidebarItem from './item.vue';
import userInfo from '@/store/user';
import { computed, ComputedRef } from 'vue';
import { RouteRecordRaw, useRoute } from 'vue-router';
import SettingStore from '@/store/setting';

const router = useRoute();
const menulist: Array<RouteRecordRaw> = userInfo().menuRoute;
const menus: ComputedRef<Array<RouteRecordRaw>> = computed<RouteRecordRaw[]>(
  () => {
    return menulist.filter((item: RouteRecordRaw) => {
      return item.meta || item.children;
    });
  },
);
</script>

<style scoped lang="scss">
.sidebar {
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 0;
  box-sizing: border-box;
  background-color: $base-menu-background;

  &.fold {
    background-color: #1a1a1a;
    border-right: 2px solid #6b6b6b;
  }

  .top {
    width: 100%;
    height: 60px;
    margin-top: 15px;
  }

  .content {
    width: 100%;
    height: calc(100% - 70px);

    .sidebar_item {
      width: 100%;
      height: 100%;
      padding-top: 30px;
      box-sizing: border-box;
    }
  }
}
</style>
