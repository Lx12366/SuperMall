<template>
  <div class="div-class-item" @click="itemClick">
    <div v-if="!isActive"><slot name="img"></slot></div>
    <div v-else><slot name="img-active"></slot></div>
    <div :class="{active:isActive}"><slot name="text"></slot></div>
  </div>
</template>

<script>

    export default {
        name: "TabBarItem",
      props:{
        path:String
      },
      methods:{
          itemClick(){
            this.$router.replace(this.path)
          }
      },
      computed:{
        isActive(){
            return this.$route.path.indexOf(this.path)!=-1
          }
      }
    }
</script>

<style scoped>
  .div-class-item{
    flex: 1;
    text-align: center;
    height: 49px;
  }
  .div-class-item img{
    width: 24px;
    height: 24px;
  }

  .active{
    color: red;
  }
</style>
