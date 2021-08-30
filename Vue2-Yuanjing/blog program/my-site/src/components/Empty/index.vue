<template>
  <div class="empty-container">
      <Icon type="empty" />
      <p>{{ text }}</p>
  </div>
</template>

<script>
import Icon from "../Icon/index.vue"
export default {
    props:{
        text:{
            type: String,
            default: "无数据"
        }
    },
    components:{
        Icon,
    }
}
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.empty-container{
   .self-center();
   text-align: center;
   color: @grey;
}
.icon-container{
    font-size: 72px;
}

</style>