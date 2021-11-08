<template>
<div class="blog-toc-container">
     <p class="notice">BlogTOC => child components of "Detail"</p>
     <h2>Category</h2>
     <RightList :list="tocWithSelect" @select="handleSelect"/>
</div>
 
</template>

<script>
import RightList from "./RightList.vue";
import {debounce} from '@/utils';
export default {
    components:{
        RightList
    },
    props:{
        toc:{
            type:Array,
        }
    },
     data() {
        return {
            activeAnchor:'article-md-title-2',
        }
    },
    created(){
        //先进行防抖处理
        this.setSelectDebounce= debounce(this.setSelect,50)
        this.$bus.$on('mainScroll',this.setSelectDebounce)
    },
    destroyed(){
        this.$bus.$off('mainScroll',this.setSelectDebounce)
    },
    methods:{
        handleSelect(item){
            location.hash = item.anchor
            // this.activeAnchor = item.anchor
        },
        setSelect(scrollDom){
            if(!scrollDom){
                return;
            }
             this.activeAnchor = ""; // 由于后续要重新设置，先清空之前的状态
            const range =200;
            for (const dom of this.getDom) {
                if(!dom){
                    continue;
                }
                const top = dom.getBoundingClientRect().top;
                if(top >=0 && top <=range){
                    //active 
                    this.activeAnchor = dom.id
                    return;
                }else if(top>range){
                    // not in the active area
                    return
                }else{
                    //at the top side of range
                    this.activeAnchor = dom.id
                }
            }
        }
    },
    computed:{
        tocWithSelect(){
            const getToc = (toc = []) =>{
                return toc.map((t) => ({
                     ...t,
                    isSelect: t.anchor ===  this.activeAnchor,
                    children:getToc(t.children),
                  
                }))
            }
            return getToc(this.toc);
        },
        getDom(){
            //根据toc的anchor 获取所有对应的dom元素
            const doms=[];
            const addTocDom = (toc) =>{
                for (const t of toc) {
                    console.log(t.anchor)
                    doms.push(document.getElementById(t.anchor));
                    //iterate toc children by callback
                    if(t.children && t.children.length){
                        addTocDom(t.children)
                    }
                }

            }
            addTocDom(this.toc);
            
            return doms;
        },
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