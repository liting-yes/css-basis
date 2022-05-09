<script setup lang="ts">
import HeaderPage from './components/HeaderPage.vue';
</script>

<template>
    <el-container>
      <el-header>
        <header-page></header-page>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
</template>

<style lang="scss" scope>
</style>
