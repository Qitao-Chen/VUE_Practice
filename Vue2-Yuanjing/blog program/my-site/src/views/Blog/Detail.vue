<template>
    <Layout>
        <div ref="mainContainer" class="main-container" v-loading="isLoading">
            <BlogDetail :blog="data"  v-if="data" />
            <BlogComment v-if="!isLoading"/>
         
        </div>
        <template #right>
           <div class="right-container" v-loading="isLoading">
                <BlogTOC :toc="data.toc" v-if="data" />
           </div>
        </template>
    </Layout>
</template>


<script>
import fetchData from "@/mixins/fetchData.js";
import {getBlog} from "@/api/blog.js";
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail";
import BlogTOC from "./components/BlogTOC";
import BlogComment from "./components/BlogComment";
import mainScroll from '@/mixins/mainScroll.js';
export default {
    mixins:[fetchData(null),mainScroll('mainContainer')],
    components:{
        Layout,
        BlogDetail,
        BlogTOC,
        BlogComment,
    
    },
    methods:{
        async fetchData(){
            console.log(this.$route.params)
            return await getBlog(this.$route.params); 
        },
        // handlScroll(){
        //     //EventBus 实操
        //     this.$bus.$emit('mainScroll',this.$refs.mainContainer)
        // },
        // handleSetMainScroll(topPosition){
        //     this.$refs.mainContainer.scrollTop = topPosition;
        // }
    },
    // mounted(){
    //     this.$refs.mainContainer.addEventListener("scroll",this.handlScroll);
    //     this.$bus.$on('setMainScroll',this.handleSetMainScroll);
    // },
    // beforeDestroy(){
    //      // this.$bus.$emit('mainScroll',undefined或者不传)当Detail界面点击到其他界面时，取消 dom(this.$refs.mainContainer) 但是仍然保留scroll事件。
    //      //这样切换到其他页面得组件监听scroll事件得时候。图标不会还显示。
    //      this.$bus.$emit('mainScroll',undefined);
    //      this.$bus.$off('setMainScroll',this.handleSetMainScroll)
    //      this.$refs.mainContainer.removeEventListener("scroll",this.handlScroll);

    // },
     updated(){
        const hash = location.hash;
        location.hash = '';
        setTimeout(()=>{
            location.hash = hash
        },50)
    },
}
</script>

<style lang="less" scoped>
   
    .main-container{
        background: #373737;    
        color: aliceblue;
        overflow-y: scroll;
        scroll-behavior: smooth;
        height: 100%;
        box-sizing: border-box;
        padding: 20px;
        position: relative;
        width: 100%;
        overflow-x:hidden ;
    }
    .right-container{
        width: 300px;
        height: 100%;
        overflow-y: scroll;
        box-sizing: border-box;
        position: relative;
        padding: 2px;
    }
</style>

