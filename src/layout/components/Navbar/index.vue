<template>
  <div class="navbar" :class="{ fold: SettingStore().isSwitch }">
    <div class="navbar_left">
      <el-icon size="24" @click="changeIcon">
        <component
          :is="SettingStore().isChange ? 'Expand' : 'Fold'"
        ></component>
      </el-icon>
      <el-breadcrumb separator-icon="ArrowRight" style="margin-left: 30px">
        <el-breadcrumb-item
          class="bread"
          v-for="item in useRoute().matched"
          :key="item.path"
          :to="item.path"
        >
          <span style="color: white; display: flex; align-items: center">
            <el-icon style="margin-right: 10px" color="white" size="20">
              <component :is="item.meta.icon"></component>
            </el-icon>
            {{ item.meta.title }}
          </span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="navbar_right">
      <el-button icon="RefreshLeft" circle @click="Refsh" />
      <el-button icon="FullScreen" circle @click="fullScreen" />
      <el-button icon="Setting" circle @click="drawer = !drawer" />
      <el-drawer
        v-model="drawer"
        :with-header="false"
        size="24%"
        style="color: black"
      >
        <span style="font-size: 20px; font-weight: 600">系统设置</span>
        <div class="setting">
          <div class="switch">
            <h2>切换显示</h2>
            <el-switch
              size="large"
              v-model="SettingStore().isSwitch"
              active-icon="Sunny"
              inactive-icon="Moon"
              inline-prompt
              :change="change"
            />
          </div>
          <div class="switch">
            <h2>选择背景</h2>
            <el-color-picker v-model="color" />
          </div>
        </div>
      </el-drawer>
      <img :src="userStore().avatar" />
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <span
            :style="{
              color: SettingStore().isSwitch ? 'white' : 'black',
              fontSize: '18px',
            }"
          >
            {{ userStore().name }}
          </span>
          <el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu
            :style="{
              background: SettingStore().isSwitch ? '#1a1a1a' : '#DCD5CB',
            }"
          >
            <el-dropdown-item icon="Operation">
              <span
                :style="{ color: SettingStore().isSwitch ? 'white' : 'black' }"
              >
                个人主页
              </span>
            </el-dropdown-item>
            <a href="https://github.com/1105931818/Vue3-admin-element.git">
              <el-dropdown-item icon="Share">
                <span
                  :style="{
                    color: SettingStore().isSwitch ? 'white' : 'black',
                  }"
                >
                  Github
                </span>
              </el-dropdown-item>
            </a>
            <el-dropdown-item icon="CloseBold" @click="logout">
              <span
                :style="{ color: SettingStore().isSwitch ? 'white' : 'black' }"
              >
                退出登录
              </span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import SettingStore from '@/store/setting';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import userStore from '@/store/user';

const drawer = ref<boolean>(false);
const color = ref<string>('#A28887');
const router = useRouter();
const route = useRoute();

const changeIcon = () => {
  SettingStore().upChange();
};

const change = () => {
  SettingStore().upSwitch();
};

const Refsh = () => {
  SettingStore().upRefsh();
};

const fullScreen = () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen();
  }
};

const logout = () => {
  userStore().logout();
  router.push({ name: 'login', query: { redirect: route.path } });
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
  color: white;
  &.fold {
    background-color: #1a1a1a;
    border-bottom: 2px solid #6b6b6b;
  }

  .navbar_left {
    height: 100%;
    display: flex;
    align-items: center;

    .bread {
      padding: 5px;
      display: flex;
      font-size: 15px;
      align-items: center;
    }
  }

  .navbar_right {
    width: 22%;
    height: 100px;
    display: flex;
    align-items: center;
    img {
      width: 33px;
      height: 33px;
      border-radius: 20%;
      margin-left: 15px;
      margin-right: 15px;
    }

    .el-dropdown-link {
      color: black;
    }

    .setting {
      width: 100%;
      margin-top: 50px;

      .switch {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
