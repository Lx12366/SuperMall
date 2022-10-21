<template>
  <div id="home">
  <NavBar class="homenav"><div slot="center">购物街</div></NavBar>
    <TabControl :titles="['流行','新款','精选']" class="tabcontrol"
                @tabClick="tabClick"
                ref="tabControl1"
                v-show="isTabFixed"
    ></TabControl>
    <scroll class="content" ref="scroll" :probe-type="3"
            @scroll="contentScroll" :pull-up-load="true"
            @pullingUp="loadMore"
    >
      <HomeSwiper :banners="banners" @swiperImageLoad="swiperImageLoad"></HomeSwiper>
      <RecommendView :recommends="recommends"></RecommendView>
      <FeatureView></FeatureView>
      <TabControl :titles="['流行','新款','精选']"
                  @tabClick="tabClick"
                  ref="tabControl2"

      ></TabControl>
      <GoodsList :goods="showGoods"></GoodsList>
    </scroll>
    <BackTop @click.native="topClick" v-show="isshowBacktop"></BackTop>

  </div>
</template>

<script>
    import {
      getHomeMultidata,
      getHomeGoods
    } from "../../network/home";
    import TabControl from "../../components/content/tabControl/TabControl";


    import NavBar from "../../components/common/navbar/NavBar";
    import HomeSwiper from "./childComps/HomeSwiper"; //l轮播图
    import RecommendView from "./childComps/RecommendView";
    import FeatureView from "./childComps/FeatureView";
    import GoodsList from "../../components/content/goods/GoodsList";
    import scroll from "../../components/common/scroll/scroll";
    import BackTop from "../../components/content/backtop/BackTop";


    export default {
        name: "Home",
      components:{
          NavBar,
        HomeSwiper,
        RecommendView,
        FeatureView,
        TabControl,
        GoodsList,
        scroll,
        BackTop
      },
      data(){
         return{
           banners:[],
           recommends:[],
           goods:{
             'pop':{page:0, list:[]},
             'new':{page:0,list:[]},
             'sell':{page:0,list:[]}
           },
           currentprop:'pop',
           isshowBacktop:false,
           tabOffsetTop:0,
           isTabFixed:false,
           saveY:0
         }
      },
      created() {
          //请求多个数据
        this.getHomeMultidata()
//请求商品数据
        this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')

      },
      activated() {
        this.$refs.scroll.scrollTo(0,this.saveY,0)
        this.$refs.scroll.refresh()
      },
      deactivated() {
        this.saveY=this.$refs.scroll.getscrollY()
      },
      mounted() {
        // 监听item中图片加载完成

        const refresh = this.debounce(this.$refs.scroll.refresh,500)
        this.$bus.$on('itemImageLoad',() =>{
          refresh()
        })


      },
      computed:{
        showGoods(){
          return this.goods[this.currentprop].list
        }
      },
      methods:{
          debounce(func,delay){
            let timer=null
            return function (...args) {
              if (timer) clearTimeout(timer)
              timer=setTimeout(()=>{
                func.apply(this,args)
              },delay)
            }

          },
          //事件监听
        tabClick(index){
          // console.log(index);
          switch (index) {
            case 0:this.currentprop='pop'
                  break
            case 1:this.currentprop='new'
                  break
            case 2:this.currentprop='sell'
                  break
          }

          this.$refs.tabControl1.currentindex=index;
          this.$refs.tabControl2.currentindex=index;
        },
        topClick(){
          this.$refs.scroll.scrollTo(0,0)
        },
        contentScroll(position){
          // console.log(position);
          //判断BackTop 是否显示
          this.isshowBacktop=(-position.y)>1000

          //决定tabControl是否吸顶
          this.isTabFixed=(-position.y)>this.tabOffsetTop
        },
        //加载更多
        loadMore(){
          this.getHomeGoods(this.currentprop)
        },

          // 网络请求方法
        getHomeMultidata(){
            getHomeMultidata().then(res => {
              console.log(res),
                this.banners=res.data.banner.list,
                this.recommends=res.data.recommend.list
            })
          },
        getHomeGoods(type){
          const page=this.goods[type].page+1
          getHomeGoods(type,page).then(res =>{
            this.goods[type].list.push(...res.data.list)
            this.goods[type].page+=1

            this.$refs.scroll.finishPullUp()

          })
        },
        swiperImageLoad(){
          this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop
        }

      }
    }
</script>

<style scoped>
  .homenav{
    background: var(--color-tint);
    color: white;


    /*position:fixed;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 0;*/
    /*z-index: 10;*/

  }

  #home{
    /*padding-top: 44px;*/
    position: relative;
    height: 100vh;
  }

  .tabcontrol{
    position: relative;
    z-index: 9;
  }

  .content{
    position: absolute;
    overflow: hidden;
    top:44px;
    bottom:49px;
    left: 0;
    right: 0;
  }

  /*.fixed{*/
  /*  position: fixed;*/
  /*  left: 0;*/
  /*  right: 0;*/
  /*  top: 0;*/
  /*}*/
</style>
