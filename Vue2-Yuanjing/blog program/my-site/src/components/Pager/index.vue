<template>
  <div class="pager-container" v-if="pageNumber > 1">
      <a class="noselect" @click="handleClick(1)" v-show="current > 1" :class="{disabled: current ===1}">|&lt;&lt;</a>
      <a class="noselect" @click="handleClick(current - 1)" :class="{disabled: current ===1}">Previous</a>
      <a class="noselect" @click="handleClick(n)" v-for="(n,i) in numbers" :key="i" :class="{active: n === current}">{{ n }}</a>
      <a class="noselect" @click="handleClick(current + 1)" :class="{disabled: current ===pageNumber}">Next</a>
      <a class="noselect" @click="handleClick(pageNumber)" v-show="current !== pageNumber" :class="{disabled: current ===pageNumber}">&gt;&gt;|</a>
    
  </div>
</template>

<script>
export default {
  props:{
    current:{
      type: Number,
      default:1 
    },
    total:{
      type: Number,
      default:0
    },
    limit:{
      type: Number,
      default:10
    },
    visibleNumber:{
      type: Number,
      default:10
    }
  },
  computed:{
    pageNumber(){
      return Math.ceil(this.total/this.limit);
    },
    visibleMin(){
      //得到显示的最小数字
      let min = this.current - Math.floor(this.visibleNumber / 2);
      if(min < 1){
        min = 1
      }
      return min;
    },
    visibleMax(){
      let max = this.visibleMin + this.visibleNumber - 1;
      if(max > this.pageNumber){
        //不能超过总页数
        max = this.pageNumber
      }
      return max
    },
    numbers(){
      let nums=[];
      for(var i = this.visibleMin; i <= this.visibleMax;i++){
        nums.push(i)
      }
      return nums;
    } 
  },
  methods:{
    handleClick(newPage){
      //current page number less than 1
      //current page number great than 'pageNumber'
      //current page number === new page number
      if(newPage < 1){
        newPage = 1
      }
      if(newPage > this.pageNumber){
        newPage =  this.pageNumber
      }
      if(newPage === this.current){
        return;
      }
      //else pop to father components handle
      this.$emit('pageChange',newPage)
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

  .pager-container{
    display: flex;
    justify-content: center;
    margin: 20px 0;
    a{
      color: @primary;
      margin: 0 6px;
      cursor: pointer;
      &.disabled{
        color: @lightWords;
        cursor: not-allowed;
      }
      &.active{
        color: @words;
        font-weight: bold;
        cursor: text;
      }
    }
    .noselect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
  }
</style>