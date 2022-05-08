<script setup lang="ts">
import HeaderPage from './components/HeaderPage.vue';
import FooterPage from './components/FooterPage.vue';
</script>

<template>
  <header-page></header-page>
  <router-view></router-view>
  <footer-page></footer-page>
</template>
