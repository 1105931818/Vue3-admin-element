<template>
  <div class="settings">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.settings {
  width: 100%;
  height: 100%;
  padding: 20px;
  margin: 0;
  box-sizing: border-box;
  background-image: linear-gradient(
    to bottom,
    $base-nav-background,
    $base-set-background
  );
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
