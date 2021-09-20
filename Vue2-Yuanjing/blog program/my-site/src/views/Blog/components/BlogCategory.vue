<template>
  <div class="blog-category-container" v-loading="isLoading">
      <h2>Blog Category</h2>
      <RightList :list="list" @select="handleSelect"/>
  </div>
</template>

<script>
import RightList from "./RightList.vue";
import fetchData from "@/mixins/fetchData.js";
import {getBlogTypes} from "@/api/blog.js";
export default {
  mixins:[fetchData([])],
  components:{
    RightList,
  },
  computed:{
    categoryId(){
      return +this.$route.params.categoryId || -1;
    },
    limit(){
      return +this.$route.query.limit || 10;
    },
    list(){
      const totalArticleCount =  this.data.reduce((pre,current)=>{         
      return  pre + current.articleCount
      },0)
    const result = [
        {
        name:'Total',
        id:-1,
        articleCount: totalArticleCount
      },...this.data
      ];
      const mapRes= result.map(obj => {
        console.log(obj)
        if(obj.id === this.categoryId){
         return{
           isSelect:true,
           aside:`${obj.articleCount}articles`,
           ...obj,
         }
        }else{
           return {
             isSelect:false,
             aside:`${obj.articleCount}articles`,
           ...obj,
           }
         }
      })
      console.log(mapRes)
      return mapRes;
    }
    
},
  methods:{
    async fetchData(){
      return await getBlogTypes();
    },
    handleSelect(ele){
      const query ={
        page:1,
        limit:this.limit,
      }
      if(ele.id === -1){
        //default
        this.$router.push({
          name:"Blog",
          query,
        })
      }else{
      this.$router.push({
       name:'CategoryBlog',
       query,
       params:{
         categoryId:ele.id,
       }
     })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.blog-category-container{
    width: 300px;
    height: 95%;
    padding: 20px;
    box-sizing: border-box;
    overflow: hidden;
    overflow-y: scroll;
    position: relative;
    h2{
      font-weight: bold;
      letter-spacing: 2px;
      margin: 0;
      font-size: 1em;
    }
}
</style>

