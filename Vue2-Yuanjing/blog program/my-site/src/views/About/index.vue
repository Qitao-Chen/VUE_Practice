<template>
  <div class="about-container" v-loading="loading">
    <iframe class="about-content" :src="data" frameborder="0"></iframe>
  </div>
</template>

<script>
import {mapState} from "vuex";
export default {
  created(){
    this.$store.dispatch("about/getAbout")
  },
  computed:{
    ...mapState("about",["loading","data"])
  }
}
</script>

<style scoped lang="less">
.about-container{
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.about-content{
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
}

</style>