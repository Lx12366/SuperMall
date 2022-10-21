<template>
<div class="wrapper" ref="wrapper">
  <div class="content">
    <slot></slot>
  </div>
</div>
</template>

<script>
  import BScroll from 'better-scroll'
    export default {
        name: "scroll",
      props:{
          probeType: {
            type:Number,
            default:0
          },
        pullUpLoad:{
            type:Boolean,
          default: false
        }
      },
      data(){
        return {
          scroll:null,
          message:666
        }
      },
      mounted() {
          this.scroll=new BScroll(this.$refs.wrapper,{
            click:true,
            ObserveDOM:true,
            ObserveImage:true,
            PullUp:true,
            probeType: this.probeType,
            pullUpLoad: this.pullUpLoad
          })

        //监听当前scroll窗口滚动，数值传递给父组件  ‘scroll’不可变
        this.scroll.on('scroll',(position) => {
          this.$emit('scroll',position)
        })

        //监听当前滚动事件 滚动到底部执行操作  'pullingUp'不可变
        this.scroll.on('pullingUp',() =>{
          this.$emit('pullingUp')
        })
      },
      methods:{
          //执行方法  x=y=0时  当前窗口回到顶部
          scrollTo(x,y,time=300){
            this.scroll.scrollTo(x,y,time)
  },
          refresh(){
            this.scroll && this.scroll.refresh()
          },
        finishPullUp(){
            this.scroll && this.scroll.finishPullUp()
        },
        getscrollY(){
            return this.scroll ? this.scroll.y :0
        }
      }
    }
</script>

<style scoped>
  /*.wrapper{*/
  /*  position:relative;*/
  /*  height: 100vh;*/
  /*}*/
</style>
