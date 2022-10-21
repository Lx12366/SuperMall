<template>
  <div id="MainTabBar">
    <TabBar v-if="$route.meta.showTabBar">
      <TabBarItem path="/home">
        <img src="../../../assets/img/tabbar/icon_home.svg" slot="img">
        <img src="../../../assets/img/tabbar/icon_home (1).svg" slot="img-active">
        <div slot="text">首页</div>
      </TabBarItem>

      <TabBarItem path="/category">
        <img src="../../../assets/img/tabbar/icon_photo.svg" slot="img">
        <img src="../../../assets/img/tabbar/icon_photo (1).svg" slot="img-active">
        <div slot="text">分类</div>
      </TabBarItem>

      <TabBarItem path="/cart">
        <img src="../../../assets/img/tabbar/icon_cart.svg" slot="img">
        <img src="../../../assets/img/tabbar/icon_cart (1).svg" slot="img-active">
        <div slot="text">购物车</div>
      </TabBarItem>

      <TabBarItem path="/profile">
        <img src="../../../assets/img/tabbar/icon_me.svg" slot="img">
        <img src="../../../assets/img/tabbar/icon_me (1).svg" slot="img-active">
        <div slot="text">我的</div>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
    import TabBar from '../../common/tabbar/TabBar.vue'
    import TabBarItem from "../../common/tabbar/TabBarItem.vue";
    export default {
        name: "MainTabBar",
        components:{
          TabBar,
          TabBarItem
        }
    }
</script>

<style scoped>
#MainTabBar{
  z-index: 999989;
}
</style>
