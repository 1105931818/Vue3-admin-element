<template>
  <div class="settings" :class="{ fold: SettingStore().isSwitch }">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" v-if="flag" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import SettingStore from '@/store/setting';
import { nextTick, ref, watch } from 'vue';

let flag = ref<boolean>(true);
watch(
  () => SettingStore().isRefsh,
  () => {
    flag.value = false;
    nextTick(() => {
      flag.value = true;
    });
  },
);
</script>

<style scoped lang="scss">
.settings {
  width: 100%;
  padding: 20px;
  margin: 0;
  box-sizing: border-box;
  background-image: linear-gradient(
    to bottom,
    $base-nav-background,
    $base-set-background
  );

  &.fold {
    background-image: linear-gradient(to bottom, #1a1a1a, #1a1a1a);
    color: white;
  }
}

.fade-enter-active {
  animation: setting 0.5s;
}

.fade-leave-active {
  animation: setting 0.001s reverse;
}

@keyframes setting {
  from {
    transform: translateX(-30%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>
