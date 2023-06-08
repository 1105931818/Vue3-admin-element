<template>
  <template v-for="menu in menus" :key="menu.path">
    <el-menu-item
      class="menu"
      v-if="!menu.children"
      :index="menu.path"
      @click="gotoRoute(menu.path)"
    >
      <el-icon>
        <component :is="menu.meta?.icon"></component>
      </el-icon>
      <span>{{ menu.meta?.title }}</span>
    </el-menu-item>
    <el-menu-item
      class="menu"
      v-else-if="menu.children.length === 1"
      :index="menu.path"
      @click="gotoRoute(menu.path)"
    >
      <el-icon>
        <component :is="menu.meta?.icon"></component>
      </el-icon>
      <span>{{ menu.meta?.title }}</span>
    </el-menu-item>
    <el-sub-menu :index="menu.path" v-else-if="menu.children.length > 1">
      <template #title>
        <el-icon>
          <component :is="menu.meta?.icon"></component>
        </el-icon>
        <span class="menu">{{ menu.meta?.title }}</span>
      </template>
      <el-menu-item-group>
        <SidebarItem :menus="menu.children" />
      </el-menu-item-group>
    </el-sub-menu>
  </template>
</template>

<script setup lang="ts">
import { RouteRecordRaw, useRouter } from 'vue-router';

const router = useRouter();
defineProps<{ menus: Array<RouteRecordRaw> }>();
const gotoRoute = (path: string) => {
  router.push(path);
};
</script>
<script lang="ts">
export default {
  name: 'SidebarItem',
};
</script>

<style scoped lang="scss">
.menu {
  font-size: 16px;
  font-weight: 600;
}

.item {
  color: white;
  text-decoration: none;
}
</style>
