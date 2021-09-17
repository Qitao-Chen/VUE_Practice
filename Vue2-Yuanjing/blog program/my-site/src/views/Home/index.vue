<template>
  <div class="home-container" ref="container" @wheel="handleWheel">
    <ul
    @transitionend="handleTransition"
      class="carousel-container"
      :style="{
        marginTop,
      }"
    >
      <li v-for="(item) in data" :key="item.id"
      :style="{
        background,
      }"
      >
        <Carouselitem :carousel="item" />
      </li>
    </ul>
    <div class="icon icon-up"
    v-show="index >= 1"
    @click="switchTo(index - 1)"
    >
      <Icon type="arrowUp" />
    </div>
    <div class="icon icon-down"
    v-show="index < data.length-1"
     @click="switchTo(index + 1)"
    >
      <Icon type="arrowDown" />
    </div>
    <ul class="indicator">
      <li :class="{active: i === index }" v-for="(item,i) in data" :key="item.id"
      @click="switchTo(i)"
      ></li>
    </ul>
    <div v-loading="isLoading"></div>
    <!-- <Loading v-if="isLoading" /> -->
  </div>
</template>

<script>
import { getBanners } from "@/api/banner.js";
import Carouselitem from "./Carouselitem.vue";
import Icon from "@/components/Icon";
import Loading from "@/components/Loading";
import fetchData from "@/mixins/fetchData.js";

export default {
  mixins:[fetchData([])],
  components: {
    Carouselitem,
    Icon,
    Loading,
  },
  data() {
    return {
      // data: [],
      index: 0, //当前显示地基张轮播图
      containerHeight: 0, //整个容器的高度
      switching:false,// switching photos?
      // isLoading:true,// loading svg
    };
  },
  // async created() {
  //   this.data = await getdata();
  //   this.isLoading = false;
  // },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize",this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize",this.handleResize)
  },
  computed: {
    marginTop() {
      console.log(this.containerHeight);
      return -this.index * this.containerHeight + "px";
    }, 
    background(){
      const color= ["white","#033672","#006D87","#FE6012"];
      return color[this.index]
    }
  },
  methods:{
    switchTo(i){
    
      this.index = i;
        console.log("====",this.index)
    },
    handleWheel(e){
      console.log(e.deltaY,e)
      if(this.switching){
        console.log("正在切换。。。")
        return;
      }    
      if(e.deltaY < -5 && this.index > 0){
        //往上
         this.switching = true;
         this.index--;
        console.log('上一个')
      }else if(e.deltaY > 5 && this.index < this.data.length-1){
        //往下
         this.switching = true;
         this.index++;
        console.log("下一个")
      }
      //利用transition end 来决定this.switching的值。
      // this.switching=false
    },
    handleTransition(){
      console.log("transition end")
      this.switching = false;
    },
    handleResize(){
      this.containerHeight = this.$refs.container.clientHeight;
    },
    async fetchData(){
      return await getBanners();
    },
  }
};
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  background: @dark;
  ul {
    
    margin: 0;
    list-style: none;
    padding: 0;
  }
  .carousel-container {
    transition: 500ms;
    width: 100%;
    height: 100%;
    li {
      width: 100%;
      height: 100%;
    }
  }
  .icon {
    cursor: pointer;
    color: @gray;
    @distance: 25px;
    font-size: 30px;
    .self-center(fixed);
    transform: translateX(-50%);
    &.icon-up {
      top: @distance;
      animation: jump-up 2s infinite;
    }
    &.icon-down {
      top: auto;
      bottom: @distance;
      animation: jump-down 2s infinite;
    }
    @jump: 5px;
    @keyframes jump-up {
      0% {
        transform: translate(-50%, @jump);
      }
      50% {
        transform: translate(-50%, -@jump);
      }
      100% {
        transform: translate(-50%, @jump);
      }
    }
    @keyframes jump-down {
      0% {
        transform: translate(-50%, -@jump);
      }
      50% {
        transform: translate(-50%, @jump);
      }
      100% {
        transform: translate(-50%, -@jump);
      }
    }
  }
  .indicator {
    .self-center(fixed);
    transform: translateY(-50%);
    left: auto;
    right: 20px;
    li {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: @words;
      cursor: pointer;
      margin-bottom: 10px;
      border: 1px solid #fff;
      box-sizing: border-box;
      &.active {
        background: #fff;
      }
    }
  }
}
</style>>
