<template>
  <div id="Cart">
<!--    //导航-->
    <NavBar class="navbar">
      <h3 slot="center">购物车({{$store.state.cartList.length}})</h3>
    </NavBar>
<!--    /商品列表-->
    <scroll class="cc"
            ref="scroll"
    >
      <CartList></CartList>
    </scroll>

<!--    底部-->
    <CartBottomBar></CartBottomBar>
  </div>

</template>

<script>
    import scroll from "../../components/common/scroll/scroll";
    import NavBar from "../../components/common/navbar/NavBar";
    import CartList from "./childComps/CartList";
    import CartBottomBar from "./childComps/CartBottomBar";
    export default {
        name: "Cart",
      components:{
        CartBottomBar,
          CartList, NavBar,scroll
      },
      activated() {
        // console.log('6666666666666');
        // this.$refs.scroll.refresh()
      }

    }
</script>

<style scoped>
  .navbar{
    background: var(--color-tint);
    color: white;
  }
  #Cart{
    position: relative;
    height: 100vh;

  }
  .cc{
    position: absolute;
    top:44px;
    bottom: 90px;
    left: 0;
    right: 0;
    overflow: hidden;
    z-index: 9;
    /*height: 100%;*/
    /*overflow: hidden;*/
  }

</style>
