<template>
    <Layout>
        <div class="main-container" v-loading="isLoading">
            <BlogDetail :blog="data"  v-if="data" />
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

export default {
    mixins:[fetchData(null)],
    components:{
        Layout,
        BlogDetail,
        BlogTOC,
    },
    methods:{
        async fetchData(){
            console.log(this.$route.params)
            return await getBlog(this.$route.params); 
        }
    }
}
</script>

<style lang="less" scoped>
   
    .main-container{
        background: #373737;    
        color: aliceblue;
        
        overflow-y: scroll;
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

