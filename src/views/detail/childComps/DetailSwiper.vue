<template>
    <swiper class="detail-swiper">
      <swiperItem v-for="(item,index) in topImages" :key="index" class="detail-swiperItem">
        <img :src="item" alt="" class="imgg">
      </swiperItem>
    </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from '../../../swiper/index'

    export default {
        name: "DetailSwiper",
        props:{
          topImages:{
            type:Array,
            default(){
              return []
            }
          }
        },
      components:{
          Swiper,
          SwiperItem
      }
    }
</script>

<style scoped>
  .detail-swiper{
    height: 300px;

  }

  .detail-swiperItem{

  }
  .imgg{
    /*height: 100%;*/
    /*width: 100%;*/
    /*background-position: 100%;*/
    /*background-size: cover;*/
  }
</style>
