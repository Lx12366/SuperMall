<template>
  <div>
  <msn></msn>
    <keep-alive include="Home">
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
  import msn from './components/content/MainTabBar/MainTabBar.vue'
  export default {
    name: 'App',
    components: {
      msn
    }
  }
</script>

<style>
  @import "./assets/css/base.css";
</style>
