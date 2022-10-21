<template>
  <div class="item" @click="itemClick">
    <img :src="showImage" alt="" @load="imageLoad">
    <div class="neirong">
<!--      标题价格收藏-->
      <p>{{goodsItem.title}}</p>
      <span class="price">价格：{{goodsItem.price}}</span>
      <span class="collect">收藏：{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "GoodsListItem",
      props:{
          goodsItem:{
            type:Object,
            default(){
              return {}
            }
          }
      },
      methods:{
        imageLoad(){
          this.$bus.$emit('itemImageLoad') //利用事件总线给祖父级组件传值
        },
        itemClick(){
          this.$router.push('/detail/' + this.goodsItem.iid)
        }
      },
      computed:{
          showImage(){
            return this.goodsItem.image || this.goodsItem.show.img
          }
      }
    }
</script>

<style scoped>
  .item{
    position: relative;
    padding-bottom: 15px;
    width: 48%;

  }
  .item img{
    width: 100%;
    border-radius:5px;
  }
  .neirong{
    font-size: 12px;
    text-align: center;
  }
  .item p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
