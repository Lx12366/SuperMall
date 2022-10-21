<template>
  <div class="bottomBar">
    <div class="cc">
      <CheckButton class="cb" :is-checked="isAll" @click.native="checkClick"
      ></CheckButton>
      <span class="qx">全选</span>
    </div>
    <div class="heji">
      合计：{{totalPrice}}
    </div>
    <div class="calclate" @click="calcClick">
      结算：{{checkLength}}
    </div>
  </div>
</template>

<script>
    import CheckButton from "../../../components/content/checkButton/CheckButton";
    export default {
        name: "CartBottomBar",
      components: {CheckButton},
      computed:{
          // 返回加钱总数
        totalPrice(){
          return '￥'+this.$store.state.cartList.filter((item)=>{
            return item.checked
          }).reduce((preValue,item)=>{
            return preValue+item.price*item.count
          },0)
        },
        // 返回个数数量
        checkLength(){
          return this.$store.state.cartList.filter(item=> item.checked).length
        },
        isAll(){
          if(this.$store.state.length ===0) return false
          return !this.$store.state.cartList.find(item =>!item.checked)
        }
      },
      methods:{
        checkClick(){
          if(this.isAll){
            this.$store.state.cartList.forEach(item=>item.checked=false)
          }else{
            this.$store.state.cartList.forEach(item=>item.checked=true)
          }
        },
        calcClick(){
          if(!(this.$store.state.cartList.filter(item=>item.checked).length)){
            this.$toast.show('请选择购买的商品',1500)
          }
        }
      }
    }
</script>

<style scoped>
  .bottomBar{
    height: 40px;
    width: 100%;
    background-color: pink;
    position: fixed;
    bottom: 49px;
    z-index: 99;
    display: flex;
    align-items: center;
    font-size: 15px;
  }
  .cc{
    display: flex;
    align-items: center;
    height: 40px;
    width: 120px;
  }
  .cb{
    width: 1.2rem;
    height: 1.2rem;
    margin-left: 1rem;
  }
  .qx{
    /*display: inline-block;*/
    margin-left: 1rem;
  }
  .heji{
    margin-left: 1rem;
    flex: 1;
  }
  .calclate{
    width: 80px;
    height: 100%;
    background-color: red;
    text-align: center;
    line-height: 40px;
    color: white;
  }
</style>
