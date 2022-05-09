<script lang="ts" setup></script>

<template>
  <div class="home">
    <div class="home-content">主页写啥好呢！</div>
    <footer class="footer">MIT Licensed | Copyright © 2022-present liting</footer>
  </div>
</template>

<style lang="scss" scoped>
.home {
  position: absolute;
  width: 100vw;
  height: calc(100vh - 60px);
}

.home-content {
  position: absolute;
  width: 100vw;
  height: 50vh;
  text-align: center;
  line-height: 40vh;
  font-size: 40px;
}

.footer {
  position: absolute;
  width: 100vw;
  height: 20px;
  bottom: 20px;
  padding: 5px;
  text-align: center;
  font-size: 10px;
}
</style>
