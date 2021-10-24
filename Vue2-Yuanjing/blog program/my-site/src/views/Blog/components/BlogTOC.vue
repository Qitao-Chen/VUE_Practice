<template>
<div class="blog-toc-container">
     <p class="notice">BlogTOC => child components of "Detail"</p>
     <h2>Category</h2>
     <RightList :list="toc" @select="handleSelect"/>
</div>
 
</template>

<script>
import RightList from "./RightList.vue";
export default {
    components:{
        RightList
    },
    props:{
        toc:{
            type:Array,
        }
    },
    methods:{
        handleSelect(item){
            location.hash = item.anchor
            console.log(item)
        }

    }
}
</script>

<style lang="less" scoped>
    .blog-toc-container{
        scroll-behavior: smooth;
        .notice{
            display: none;
        }
         h2{
        font-weight: bold;
        letter-spacing: 2px;
        font-size: 1em;
        margin: 0;
    }
    }
   
</style>