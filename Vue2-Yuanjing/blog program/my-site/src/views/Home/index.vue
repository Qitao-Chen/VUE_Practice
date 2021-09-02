<template>
  <div class="home-container" v-if="banners.length > 0">
    <ul>
      <li v-for="item in banners" :key="item.id">
        <Carouselitem />
      </li>
    </ul>
    <div class="icon icon-up">
      <Icon type="arrowUp" />
    </div>
    <div class="icon icon-down">
      <Icon type="arrowDown" />
    </div>
    <ul class="indicator">
      <li v-for="item in banners" :key="item.id"></li>
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
    };
  },
  async created() {
    this.banners = await getBanners();
    console.log(this.banners);
  },
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
  ul {
    margin: 0;
  }
  .icon {
    cursor: pointer;
    color: @gray;
    @distance: 25px;
    font-size: 30px;
    .self-center();
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
}
</style>>
