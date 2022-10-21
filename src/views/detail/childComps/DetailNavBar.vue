<template>
  <div>
    <NavBar>
      <div slot="left" class="left" @click="leftClick">
        <img src="../../../assets/img/common/back.svg">
      </div>

      <div slot="center" class="title">
        <div v-for="(item,index) in titles" class="title-item"
             :class="{active:index==currentIndex}"
             @click="itemClick(index)">
          <span>{{item}}</span>
        </div>
    </div>
    </NavBar>
  </div>
</template>

<script>

  import NavBar from "../../../components/common/navbar/NavBar";
    export default {
        name: "DetailNavBar",
        components:{
          NavBar
        },
      data(){
          return{
            titles: ['商品','参数','评论','推荐'],
            currentIndex:0
          }
      },
      methods:{
          itemClick(index){
            this.currentIndex=index;
            this.$emit('titleClick',index)
          },
          leftClick(){
            this.$router.go(-1)//返回上一级
          }
      }
    }
</script>

<style scoped>
  .title{
    display: flex;

  }
  .title-item{
    flex: 1;
    font-size: 15px;
  }
  .active{
    color:var(--color-hight-text);
  }

  .left img{
    margin-top: 12px;
    margin-left: 6px;
  }
</style>
