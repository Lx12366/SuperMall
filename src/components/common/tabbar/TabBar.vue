<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>
  #tabbar{
    display: flex;
    margin: 0;
    padding: 0;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0px -2px 1px #eee;
    background: white;
    z-index: 9;
  }
</style>
