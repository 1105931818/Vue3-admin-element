<template>
  <div class="navbar">
    <div class="navbar_left">
      <el-icon size="24" @click="changeIcon">
        <component
          :is="SettingStore().isChange ? 'Expand' : 'Fold'"
        ></component>
      </el-icon>
      <el-breadcrumb separator-icon="ArrowRight" style="margin-left: 30px">
        <el-breadcrumb-item :to="{ path: '/' }" class="bread">
          商品管理
        </el-breadcrumb-item>
        <el-breadcrumb-item class="bread">
          <span>商品管理</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="navbar_right">
      <el-button icon="RefreshLeft" circle />
      <el-button icon="FullScreen" circle />
      <el-button icon="Setting" circle />
      <el-switch size="large" style="margin-left: 15px" />
      <img :src="setting.logo" />
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          Admin
          <el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item icon="Operation">个人主页</el-dropdown-item>
            <a href="https://github.com/1105931818/Vue3-admin-element.git">
              <el-dropdown-item icon="Share">Github</el-dropdown-item>
            </a>
            <el-dropdown-item icon="CloseBold">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import setting from '@/setting';
import SettingStore from '@/store/setting';

const changeIcon = () => {
  SettingStore().upChange();
};
</script>

<style scoped lang="scss">
.navbar {
  width: 100%;
  height: 100%;
  padding: 0px 30px;
  margin: 0;
  box-sizing: border-box;
  background-color: $base-nav-background;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .navbar_left {
    height: 100%;
    display: flex;
    align-items: center;

    .bread {
      padding: 5px;
      display: flex;
      align-items: center;
    }
  }

  .navbar_right {
    width: 26%;
    height: 100px;
    display: flex;
    align-items: center;
    img {
      width: 33px;
      height: 33px;
      border-radius: 50%;
      margin-left: 15px;
      margin-right: 15px;
    }

    .el-dropdown-link {
      color: black;
    }
  }
}
</style>
