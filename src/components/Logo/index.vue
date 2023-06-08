<template>
  <div class="logo" v-if="setting.logoHidden">
    <img :src="setting.logo" />
    <p v-show="!SettingStore().isChange">{{ setting.title }}</p>
  </div>
</template>

<script setup lang="ts">
import setting from '@/setting';
import SettingStore from '@/store/setting';
</script>

<style scoped lang="scss">
.logo {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;

  img {
    width: 50px;
    height: 100%;
    border-radius: 8px;
  }

  p {
    font-size: 22px;
    font-weight: 700;
    color: white;
  }
}
</style>
