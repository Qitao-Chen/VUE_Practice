<template>
  <div class="test-container">
      <SiteAside />
  </div>
</template>

<script>
import SiteAside from "./index.vue";
import "@/styles/global.less"
export default {
name:"siteAside",
components:{
    SiteAside,
}
}
</script>

<style>
.test-container{
    width: 250px;
    height: 600px;
    border: 2px solid;
}
</style>