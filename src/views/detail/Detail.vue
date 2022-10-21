<template>
<div id="detail">
<!--  顶部导航-->
  <DetailNavBar @titleClick="titleClick" ref="nav"></DetailNavBar>
  <scroll class="cc"  :pull-up-load="true"
          :probe-type="3"
          ref="scroll"
          @scroll="contentScroll"
  >
<!--    轮播图-->
    <DetailSwiper :top-images="topImages"></DetailSwiper>
    <DetailBaseInfo :goods="goods"></DetailBaseInfo>
    <DetailShopInfo :shop="shop"></DetailShopInfo>
<!--    参数详情-->
    <DetailParamInfo  ref="params" :paramInfo="paramInfo"></DetailParamInfo>
    <DetailGoodsInfo :detailInfo="detailInfo" @imageLoad="imageLoad"></DetailGoodsInfo>
<!--    评论详情-->
    <DetailComment ref="comment" :comment="comment"></DetailComment>
<!--    推荐详情-->
    <GoodsList ref="recommends" :goods="recommends"></GoodsList>
  </scroll>
  <DetailBottomBar @addCart="addToCart"></DetailBottomBar>
  <BackTop v-show="isshowBacktop" @click.native="topClick"></BackTop>
  <Toast></Toast>


</div>
</template>

<script>
  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import scroll from "../../components/common/scroll/scroll";

  import {getDetail,Goods,Shop,GoodsParam,getRecommend} from "../../network/detail";

  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
  import DetailParamInfo from "./childComps/DetailParamInfo";
  import DetailComment from "./childComps/DetailComment";
  import GoodsList from "../../components/content/goods/GoodsList";
  import DetailBottomBar from "./childComps/DetailBottomBar";
  import BackTop from "../../components/content/backtop/BackTop";
  import Toast from "../../components/common/toast/Toast";




  export default {
        name: "detail",
      data(){
          return{
            iid:null,
            topImages:[],
            goods: {},
            shop:{},
            detailInfo:{},
            paramInfo:{},
            comment:{},
            recommends:[],
            //滚动的值
            themeTopYs:[],
            currentIndex:0,
            isshowBacktop:false
            // message:'',
            // show:false

          }
      },
      components:{
        Toast,
        BackTop,
        DetailBottomBar,
        GoodsList,
        DetailComment,
        DetailParamInfo,
        DetailGoodsInfo,
        DetailShopInfo,
        DetailBaseInfo,
        DetailNavBar,
        DetailSwiper,
        scroll
      },
      created() {
          //保存传入iid
          this.iid = this.$route.params.iid
        // console.log(this.iid);
        //根据iid请求详情数据
        console.log('等待中')
        // setTimeout(()=>{

          getDetail(this.iid).then(res =>{
            //获取顶部轮播图数据
            const data = res.result
            // console.log('-----------',data);
            this.topImages = data.itemInfo.topImages

            //获取商品信息
            this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
            // console.log('详情页数据'+this.goods.title)

            //创建店铺信息
            this.shop=new Shop(data.shopInfo)

            //获取商品详细信息
            this.detailInfo=data.detailInfo

            //获取参数列表
            this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)

            //获取用户评价资源
            if(data.rate.cRate!==0){
              this.comment = data.rate.list[0]
            }

            this.$nextTick(()=>{
              //div渲染完毕立即执行此函数
              //有 bug 图片没有加载出来  ，就计算高度，导致导航栏错乱  208集解决

            })
          })
        // },1000)


        getRecommend().then(res=>{
          // console.log(res);
          this.recommends=res.data.list
        })
      },
    methods:{
      imageLoad(){
        this.$refs.scroll.refresh()
        this.themeTopYs=[]
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommends.$el.offsetTop)
        this.themeTopYs.push(Number.MAX_VALUE)
        console.log(this.themeTopYs);
          },
      titleClick(index){
        console.log(index);
        // console.log(this.themeTopYs)
        this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],100)
      },
      contentScroll(position){
        // 获取y值滚动
        const positionY = -position.y
        for(let i = 0;i<this.themeTopYs.length-1;i++){
          //电梯导航   大于第一个值小于第二个值时触发事件  变色
          if((this.currentIndex!==i)&&positionY>this.themeTopYs[i]&&positionY<this.themeTopYs[i+1]){
            this.currentIndex = i
            console.log(this.currentIndex);
            this.$refs.nav.currentIndex = this.currentIndex
          }

          //是否显示回到顶部
          this.isshowBacktop=(-position.y)>1000


        }

      },
      topClick(){
        this.$refs.scroll.scrollTo(0,0)
      },
      addToCart(){
        const pro = {}
        pro.image=this.topImages[0]
        pro.title=this.goods.title
        pro.desc=this.goods.desc
        pro.price=this.goods.realPrice
        pro.iid=this.iid

        //添加到购物车
        this.$store.dispatch('addCart',pro).then(res=>{
          this.$toast.show(res,1500)
          // console.log(this.$toast);
        })


      }

    },
    mounted() {

    }
  }
</script>

<style scoped>
  #detail{
    position: relative;
    background-color: #fff;
    z-index: 9;
    height: 100vh;
  }
  .cc{
    /*position: absolute;*/
    /*top: 44px;*/
    /*bottom: 0px;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 44px;*/
    /*height: 100vh;*/
    /*height: calc(100% - 44px);*/
    /*overflow: hidden;*/
    position: absolute;
    top:44px;
    bottom: 30px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
</style>
