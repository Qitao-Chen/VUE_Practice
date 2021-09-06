<template>
  <div class="image-loader-container">
      <img v-if="!originImageCompleted" class="placeholder" :src="placeholder" alt="">
      <img @load="handleImageLoader" 
            :style="{
                opacity: originOpacity,
                transition: `${duration}ms`
            }"
           class="origin" 
           :src="src" alt="" >
  </div>
</template>

<script>
/**
 * 属性：src placeholder duration
 * 事件：imgLoad
 */
export default {
    props:{
        src:{
            type:String,
            required:true
        },
        placeholder:{
            type:String,
            required: true
        },
        duration:{
            type:Number,
            default: 500
        }

    },
    data(){
        return {
            originLoaded: false,//製作一個數據判斷原圖是否加載完成
            originImageCompleted:false//製作一個數據，黨原圖加載完成後，placeholder消失
        }
    },
    computed:{
        originOpacity(){
            return this.originLoaded ? 1 : 0
        }
    },
    methods:{
        handleImageLoader(){
            console.log('原圖加載完成')
            this.originLoaded =1;
            setTimeout(() => {
                this.originImageCompleted = 1;
            },this.duration)
            this.$emit('imgLoad')
        }
    }
}
</script>

<style lang="less" scoped >
@import "~@/styles/mixin.less";
.image-loader-container{
    position: relative;
    width: 100%;
    height: 100%;   
    img{
    .self-fill();
    object-fit: cover;
}
    .placeholder{
        opacity: 1;
        filter: blur(2vw);
    }
  
}

</style>