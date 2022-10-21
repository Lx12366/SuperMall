<template>
  <div class="ccc">
    <CategoryLeftitem v-for="(item,index) in goods.list" :gooditem="item" :key="index">

    </CategoryLeftitem>
  </div>
</template>

<script>
    import CategoryLeftitem from "./CategoryLeftitem";
    export default {
        name: "CategoryLeft",
      components: {CategoryLeftitem},
      props:{
          goods:{
            type:Object,
            default:{}
          }
      }
    }
</script>

<style scoped>

</style>
