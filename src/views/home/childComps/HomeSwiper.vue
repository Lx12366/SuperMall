<template>
  <div>
    <Swiper>
      <SwiperItem v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" @load="imageLoad"><!--   @load 监听图片-->
        </a>
      </SwiperItem>
    </Swiper>
  </div>

</template>

<script>
  import {Swiper,SwiperItem} from '../../../swiper'
    export default {
        name: "HomeSwiper",
      props:{
          banners: {
            type:Array,
            default(){
              return []
            }
          }
      },

      data(){
          return{
        isLoad:false
          }
      },
      components:{
          SwiperItem,
          Swiper
      },
      methods:{
          imageLoad(){
            if(!this.isLoad){
              this.$emit('swiperImageLoad')
              this.isLoad=true
            }

          }
      }
    }
  console.log(this.banners);
</script>

<style scoped>

</style>
