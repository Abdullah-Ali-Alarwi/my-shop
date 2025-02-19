<template>
  <nav-bar style="position: sticky; top: 0; width: 100%; z-index: 1000;"></nav-bar>
  <RouterView />
    <FooterVue ></FooterVue>
  </template>
  
  <script setup>
  import { useStore } from 'vuex';
  import { onMounted, computed } from 'vue';
  import { RouterView } from 'vue-router';
  import { defineAsyncComponent } from 'vue';
  import FooterVue from '@/component/Footer.vue';
  
  const NavBar = defineAsyncComponent(() => import('./component/NavBar.vue'));
  
  const store = useStore();
  
  const products = computed(() => store.state.localProduct);
  
  onMounted(() => {
    store.dispatch('getProduct');
  });
  </script>
  
  <style scoped>

  </style>
  
