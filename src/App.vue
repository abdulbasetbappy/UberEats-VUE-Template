<script setup lang="ts">
</script>

<template>
  <router-view v-slot="{Component}" >
    <transition name="slide" mode="out-in">
     <component :is="Component" :key="$route.path"></component>
    </transition>
  </router-view>
</template>

<style lang="css" >
.slide-enter-active,
.slide-leave-active{
  transition:transform 0.6s, opacity 0.6s ;
}
.slide-enter-from,
.slide-leave-to{
  opacity: 0;
  transform: translateX(-30%);
}
</style>