<template>
  <div class="item">
    {{gooditem.title}}
  </div>
</template>

<script>
    export default {
        name: "CategoryLeftitem",
      props:{
        gooditem:{
          type:Object,
          default:{}
        }
      }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .item{
    width: 6.5rem;
    height: 3rem;
    text-align: center;
    line-height: 3rem;
    background-color: white;
    background-color: gainsboro;
  }
</style>
