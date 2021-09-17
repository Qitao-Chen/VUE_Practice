<template>
  <div>
 <h1>Blog</h1>
 <div>{{ routeParams}}</div>

<ul>
  <li v-for="item in currentCateData" :key="item.id">{{item.title}}</li>
</ul>
 <button @click="cateToArticle">category id => article</button>
  </div>
 
  
</template>

<script>
import * as blogApi from "@/api/blog.js";
export default {
  data(){
    return {
      routeParams:0,
      currentCateData:[],
    }
  },
  methods:{
    getRouteParams(){
     const params = this.$route.params;
      this.routeParams = +params.categoryId;
    },
    cateToArticle(){
      this.currentCateData=[]
      this.getRouteParams();
    blogApi.getBlogs().then(r => {     
       r.rows.forEach((ele) => { 
        //  console.log(i)       
       if(ele.category.id === this.routeParams){
        //  console.log(ele); 
         this.currentCateData.push(ele);
         
       }
       });
})
    }
  }
}
</script>

<style>

</style>