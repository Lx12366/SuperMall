<template>
  <div class="wrapper">
    <NavBar class="navbar">
      <div slot="center">商品分类</div>
    </NavBar>
    <div class="content">
      <CategoryLeft :goods="goods" class="categoryleft">

      </CategoryLeft>
      <scroll class="cc"  :pull-up-load="true"
              :probe-type="3"
              ref="scroll"
              @scroll="contentScroll"
      >
      <div>13211111111111111111111111111555</div>
      <div>13211111111111111111111111111555</div>
      <div>13211111111111111111111111111555</div>
      <div>13211111111111111111111111111555</div>
      <div>13211111111111111111111111111555</div>
      <div>13211111111111111111111111111555</div>
      <div>13211111111111111111111111111555</div>
      <div>13211111111111111111111111111555</div>
      <div>13211111111111111111111111111555</div>
      <div>13211111111111111111111111111555</div>
      <div>13211111111111111111111111111555</div>
      <div>13211111111111111111111111111555</div>
      <div>13211111111111111111111111111555</div>
      <div>13211111111111111111111111111555</div>
      <div>13211111111111111111111111111555</div>
      <div>13211111111111111111111111111555</div>
      <div>13211111111111111111111111111555</div>
      <div>13211111111111111111111111111555</div>
      <div>13211111111111111111111111111555</div>
      <div>13211111111111111111111111111555</div>
      <div>13211111111111111111111111111555</div>
      <div>13211111111111111111111111111555</div>
      <div>13211111111111111111111111111555</div>
      <div>13211111111111111111111111111555</div>
      <div>13211111111111111111111111111555</div>
      <div>13211111111111111111111111111555</div>
      <div>13211111111111111111111111111555</div>
      <div>13211111111111111111111111111555</div>
      <div>13211111111111111111111111111555</div>
      <div>13211111111111111111111111111555</div>
      <div>13211111111111111111111111111555</div>
      <div>13211111111111111111111111111555</div>
      <div>13211111111111111111111111111555</div>
      <div>13211111111111111111111111111555</div>
      <div>13211111111111111111111111111555</div>
      <div>13211111111111111111111111111555</div>

      </scroll>
    </div>

  </div>
</template>

<script>
    import {getCategory} from '../../network/category'
    import CategoryLeft from "./childComps/CategoryLeft";
    import NavBar from "../../components/common/navbar/NavBar";
    import scroll from "../../components/common/scroll/scroll";

    export default {
        name: "Category",
      components: {NavBar, CategoryLeft,scroll},
      data(){
          return {
            goods:{}
          }
      },
      created() {
        getCategory().then((res)=>{
          this.goods=res.data.category
          console.log(this.goods);
        })
          },
      mounted() {
        this.$refs.scroll.refresh()
      },
      methods:{
        contentScroll(){

        }
      }
    }
</script>

<style scoped>
  .wrapper{
    height: 100vh;
    /*background-color: red;*/
    overflow: hidden;
    position: relative;
  }
  .navbar{
    background-color: pink;;
  }
  .categoryleft{
    /*width: 50px;*/
  }
  .cc{
    position: absolute;
    top:44px;
    bottom: 30px;
    left: 7rem;
    right: 0.5rem;
    overflow: hidden;
  }
</style>
