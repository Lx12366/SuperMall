<template>
  <div v-if="Object.keys(comment).length!==0" id="comment">
<!--    判断当前是否有数据-->
    <div id="comm">
      <div style="float: left;">用户评价</div>
      <div style="float: right;">更多</div>
    </div>
    <div class="user">
      <img :src="comment.user.avatar" alt="" class="img1">
      <div class="d1">
        {{comment.user.uname}}
      </div>
    </div>
    <div class="d2">
      <span>{{comment.content}}</span>
      <div>{{comment.created | showTime}}</div>
      <div>{{comment.style}}</div>
    </div>


  </div>
</template>

<script>
  import {formatDate} from '../../../common/utils.js'
    export default {
        name: "DetailComment",
        props:{
          comment:{
            type:Object,
            default(){
              return {}
            }
          }
        },
      filters:{
          showTime(value){
            const date = new Date(value * 1000)
            //将时间戳转换为时间
            //1转换date对象
            //2 格式化为字符串
            return formatDate(date,'yyyy-MM-dd hh:mm:ss')
          }
      }

    }
</script>

<style scoped>
  #comment{
    border-top: 4px solid #ededed;
    padding-top: 1rem;
    margin-top: 0.8rem;
    margin-bottom: 3rem;
  }
  #comm{
    margin: auto;
    width: 95%;
    height: 1.8rem;
    border-bottom: 1px solid grey;
  }
  .user{
    height: 3rem;
    display: flex;
    margin-top: 1rem;
  }
  .img1{
    margin-left: 1rem;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 2.5rem;
  }
  .d1{
    text-align: center;
    line-height: 2.5rem;
    margin-left: 1rem;
    color: black;

  }
  .d2{
    margin: auto;
    margin-left: 1rem;
    width: 95%;
    height: 4rem;
  }
  .d2 span{
    font-size: 16px;
    color: black;
  }
  .d2 div{
    font-size: 13px;
    color: grey;
    margin-top: 1rem;
  }
</style>
