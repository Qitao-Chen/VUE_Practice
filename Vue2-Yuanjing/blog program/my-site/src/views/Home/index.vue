<template>
  <div class="home-container" ref="container">
    <ul
      class="carousel-container"
      :style="{
        marginTop,
      }"
    >
      <li v-for="item in banners" :key="item.id"
      :style="{
        background,
      }"
      >
        <Carouselitem />
      </li>
    </ul>
    <div class="icon icon-up"
    v-show="index >= 1"
    @click="switchTo(index - 1)"
    >
      <Icon type="arrowUp" />
    </div>
    <div class="icon icon-down"
    v-show="index < banners.length-1"
     @click="switchTo(index + 1)"
    >
      <Icon type="arrowDown" />
    </div>
    <ul class="indicator">
      <li :class="{active: i === index }" v-for="(item,i) in banners" :key="item.id"
      @click="switchTo(i)"
      ></li>
    </ul>
  </div>
</template>

<script>
import { getBanners } from "@/api/banner.js";
import Carouselitem from "./Carouselitem.vue";
import Icon from "@/components/Icon";

export default {
  components: {
    Carouselitem,
    Icon,
  },
  data() {
    return {
      banners: [],
      index: 0, //当前显示地基张轮播图
      containerHeight: 0, //整个容器的高度
      
    };
  },
  async created() {
    this.banners = await getBanners();
    console.log(this.banners);
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
  },
  computed: {
    marginTop() {
      console.log(this.containerHeight);
      return -this.index * this.containerHeight + "px";
    }, 
    background(){
      const color= ["lightgreen","red","lightblue"];
      return color[this.index]
    }
  },
  methods:{
    switchTo(i){
    
      this.index = i;
      
    }
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
