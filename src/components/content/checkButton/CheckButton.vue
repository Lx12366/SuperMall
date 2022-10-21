<template>
  <div class="button" :class="{check:!isChecked}">
    <img src="../../../assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
    export default {
        name: "CheckButton",
      props:{
          isChecked:{
            type:Boolean,
            default:false
          }
      }
    }
</script>

<style scoped>
  .button{
    border-radius: 50%;
    background-color: pink;
    border: 0.5px solid gainsboro;
  }
  .check{
    border-color: red;
    background-color: white;
  }
</style>
