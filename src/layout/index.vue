<template>
  <div class="layout">
    <div class="navlink" :class="{ fold: SettingStore().isChange }">
      <Sidebar />
    </div>
    <div class="main">
      <div class="header">
        <Navbar />
      </div>
      <div class="content">
        <Setting />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar/index.vue';
import Sidebar from './components/Sidebar/index.vue';
import Setting from './components/Setting/index.vue';
import SettingStore from '@/store/setting';
</script>

<style scoped lang="scss">
.layout {
  width: 100%;
  height: 100vh;
  min-height: 800px;
  display: flex;

  .navlink {
    width: $base-menu-width;
    height: 100%;
    overflow: auto;
    transition: all 0.5s;

    &.fold {
      width: $base-menu-min-width;
    }
  }

  .main {
    flex: 1;
    height: 100%;
    .header {
      width: 100%;
      height: $base-nav-height;
    }
    .content {
      width: 100%;
      height: calc(100% - $base-nav-height);
      overflow: auto;
    }
  }
}
</style>
