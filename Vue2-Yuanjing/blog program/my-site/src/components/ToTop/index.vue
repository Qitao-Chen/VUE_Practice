<template>
  <div v-show="show" 
       @click="handleClick"
       class="to-top-container">
      <i class="iconfont">&#xe69e;</i>
  </div>
</template>

<script>
export default {
data(){
    return{
        show:false,
       
    }
},
created(){
    this.$bus.$on('mainScroll',this.handleScroll);
},
destroyed(){
    this.$bus.$off('mainScroll',this.handleScroll);
},
// computed:{
//     dynamicPosition(){
//         const dynamicScrollTop = this.idom.scrollTop;
//         console.log(this.idom)
//         return dynamicScrollTop;
//     }
// },
methods:{
    handleScroll(dom){
        if(!dom){
            this.show = false;
            return;
        }
        if(dom.scrollTop > 500){
            this.show = true;
        }else{
            this.show = false;
        }
    },
    handleClick(){
        
        this.$bus.$emit('setMainScroll',0)
    }
}
}
</script>

<style scoped lang="less">
@import url(~@/styles/var.less);
@font-face {
  font-family: 'iconfont';  /* Project id 2920777 */
  src: url('//at.alicdn.com/t/font_2920777_bhb68dgkpb9.woff2?t=1636283261886') format('woff2'),
       url('//at.alicdn.com/t/font_2920777_bhb68dgkpb9.woff?t=1636283261886') format('woff'),
       url('//at.alicdn.com/t/font_2920777_bhb68dgkpb9.ttf?t=1636283261886') format('truetype');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:30px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    }
  .to-top-container{
      position: fixed;
      z-index: 99;
      right: 50px;
      bottom: 50px;
      cursor: pointer;

  }
</style>