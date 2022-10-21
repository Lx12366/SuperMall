<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" class="controlitem"
         :class="{active:index==currentindex}"
         @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "TabControl",
      data(){
          return{
            currentindex:0
          }
      },
      props:{
          titles:{
            type:Array,
            default(){
              return []
            }
          }
      },
      methods:{
          itemClick(index){
            this.currentindex=index
            this.$emit('tabClick',index)
          }
      }
    }
</script>

<style scoped>
  .tab-control{
    display: flex;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    background-color: #fff;
  }
  .controlitem{
    flex:1;
    text-align: center;
  }
  .controlitem span{
    padding: 6px;

  }

  .active{
    color: var(--color-hight-text);
  }
  .active span{
    border-bottom: 2px solid var(--color-hight-text);
  }


</style>
