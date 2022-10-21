<template>
  <div class="carlist">
    <CartListItem v-for="(item,index) in $store.state.cartList"
    :itemInfo="item" :key="index">

    </CartListItem>
  </div>

</template>

<script>
    import scroll from "../../../components/common/scroll/scroll";
    import CartListItem from "./CartListItem";

    export default {
        name: "CartList",
      components:{
        CartListItem,
        scroll
      }
    }
</script>

<style scoped>
  .carlist{
    /*position: relative;*/
    /*!*background-color: #fff;*!*/
    /*!*z-index: 9;*!*/
    /*height:100%*/
  }
  /*#Cart{*/
  /*  position: relative;*/
  /*  !*background-color: #fff;*!*/
  /*  z-index: 9;*/
  /*  height: 100vh;*/
  /*}*/

</style>
