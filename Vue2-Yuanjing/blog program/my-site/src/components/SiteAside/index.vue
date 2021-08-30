<template>
  <div class="site-aside-container">
      <div class="avatar-container">
        <Avatar url="https://avatars.githubusercontent.com/u/54574452?v=4"/>
        <h1 class="title">Eric的GitBlog</h1>
      </div>
    <Menu />
    <Contact />
       <p class="footer">
           沪ICP备17001719号
       </p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import Contact from "./Contact";
export default {
components:{
    Avatar,
    Menu,
    Contact,
}
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
@import "~@/styles/global.less";
.site-aside-container{
    width: 100%;
    height: 100%;
    background: @dark;
    padding: 20px 0;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
}
.avatar-container{
   margin:0 auto
}
.footer{
    text-align: center;
    font-size: 12px;
    color: @lightWords;
}
.title{
    font-size: 1.2em;
    text-align: center;
    color: #fff;
}

</style>