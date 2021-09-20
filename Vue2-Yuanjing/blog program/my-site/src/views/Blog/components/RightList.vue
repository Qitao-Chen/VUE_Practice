
<template>
  <ul class="right-list-container">
      <li
      v-for="(item,i) in list" :key="i" 
      > 
      <span @click="handleClick(item)" :class="{active: item.isSelect}">{{ item.name }} </span>
      <span v-if="item.aside" class="aside">{{ item.aside }}</span>
      <RightList :list="item.children" @select="handleClick" />
      </li>  
  </ul>
</template>

<script>
export default {
name:"RightList",
props:{
    //[{name:"xxx", isSelect:true,children:[{name:"yyy", isSelect:false}]}]
    
    list:{
        type:Array,
        default:()=>{[]},
    }
},
methods:{
    handleClick(item){
        //自定义事件select 抛出给父组件
        this.$emit("select",item)
    }
}
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.right-list-container{
    list-style: none;
    padding: 0;
    .right-list-container{
        margin-left: 1em;
    }
    li{
        font-size: 14px;
        min-height: 40px;
        line-height: 40px;
        cursor: pointer;
        .active{
            color:@warn;
            font-weight: bold;
        }
        .aside{
            font-size: 12px;
            margin-left: 1em;
            color: @grey;
        }
    }
}
</style>