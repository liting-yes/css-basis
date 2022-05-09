<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const toHome = () => {
  router.push('/home');
}

const toGithub = () => {
  window.open('https://github.com/liting-yes/css-basis', '_blank');
}
</script>

<template>
  <div class="header">
    <div class="logo" @click="toHome">
      css-basis
    </div>

    <el-menu
      mode="horizontal"
      router
      class="header-nav"
    >
      <el-menu-item index="/basic">
        <el-icon :size="20"><svg t="1652074131763" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1196" width="200" height="200"><path d="M512 481.56672L190.7712 337.408 512 197.03808l321.20832 140.36992L512 481.56672zM291.9424 337.92L512 436.65408 732.03712 337.92 512 241.72544 291.9424 337.92zM512 650.52672l-279.01952-125.2352 16.75264-37.35552L512 605.61408l262.2464-117.67808 16.75264 37.35552zM511.97952 826.9824l-279.01952-125.2352 16.75264-37.376 262.26688 117.71904 262.26688-117.71904 16.75264 37.376z" fill="" p-id="1197"></path></svg></el-icon>
        <span>基础</span>
      </el-menu-item>
      <el-menu-item index="/advance">
        <el-icon :size="20"><svg t="1652073820059" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1045" width="200" height="200"><path d="M307 568.4v261.4h123V568.4l-61.5-51.3zM512 635v194.8h123V573.5l-97.4 82zM225 629.9l-123 97.4v102.5h123zM717 829.8h123V404.4L717 506.9z" p-id="1046"></path><path d="M537.6 583.8L840 337.7l82 76.9V194.2H686.2l97.4 92.3-251.1 205-164-138.4L102 563.2v92.3l266.5-210.1z" p-id="1047"></path></svg></el-icon>
        <span>进阶</span>
      </el-menu-item>
      <el-menu-item @click="toGithub" index="github">
        <el-icon :size="20"><svg t="1652074177375" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1350" width="200" height="200"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" p-id="1351"></path></svg></el-icon>
        <span>GitHub</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style lang="scss" scoped>
.header {
  position: position;
  top: 0;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-nav {
  width: 30vw;
  display: flex;
  justify-content: space-around;
  padding-right: 2vw;
}
</style>
