<template>
  <div class="blog-list-container" ref="container" v-loading="isLoading">
      <ul>
        <li v-for="item in data.rows" :key="item.id">
          <div class="thumb" v-if="item.thumb">
            <RouterLink
            :to="{
              name:'BlogDetail',
              params:{
                id:item.id
              }
              }"
            >
              <img :src="item.thumb" :alt="item.title" :title="item.title">
            </RouterLink>
          </div>
          <div class="main">
           <RouterLink
            :to="{
              name:'BlogDetail',
              params:{
                id:item.id
              }
              }"
            >
              <h2>{{ item.title }}</h2>
            </RouterLink>         
          <div class="aside">
            <span>Date: {{ item.createDate }} </span>
            <span>views: {{ item.scanNumber }}</span>
            <span>comment:{{ item.commentNumber }}</span>
            <RouterLink
            :to="{
              name:'CategoryBlog',
              params:{
                categoryId:item.category.id
                }
            }"
            >{{ item.category.name }}</RouterLink>
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
          </div>
        </li>
      </ul>
  <!-- Pager here -->
        <Pager 
        v-if="data.total"
        :current=this.routeInfo.page
        :total=data.total
         @pageChange="handlePageChange($event)"
         />
    
  </div>
</template>

<script>
/**
 * 1st:To get all the routeInfo from the start page(in computed).
 * 2nd:To complete handlePageChange method. get all new route info when user click the page component.
 * 3rd:Using "watch api"  to observe $route and call "this.fetchData()" again. 
 */
import fetchData from "@/mixins/fetchData.js";
import {getBlogs} from "@/api/blog.js";
import Pager from "@/components/Pager";
export default {
  mixins:[fetchData({})],
components:{
  Pager,
},
computed:{
  routeInfo(){
    //getRouteParams
    //https://router.vuejs.org/guide/essentials/dynamic-matching.html
    const categoryId = +this.$route.params.categoryId || -1;
    const page = +this.$route.query.page ||1;
    const limit= +this.$route.query.limit ||10;
    return {
      categoryId,
      page,
      limit,
    }
    // cateToArticle
        // this.data.rows.forEach(element => {
        //   if(element.category.id === routeParams){
        //     this.currentCateData.push(element)
        //   }
        // });
}
},
methods:{
  async fetchData (){
      return await getBlogs(this.routeInfo.page,this.routeInfo.limit,this.routeInfo.categoryId);
    },
    handlePageChange(newPage){
      // 跳转到 当前的分类id  当前的页容量  newPage的页码
     const query = {
       page:newPage,
       limit:this.routeInfo.limit
     };
    if(this.routeInfo.categoryId === -1){
      //https://router.vuejs.org/guide/essentials/navigation.html
      //没有分类
      // 跳转到这个地址/article?page=${newPage}&limit=${this.routeInfo.limit}
      this.$router.push({
        name:"Blog",
        query,
      })
    }else{
      // /article/cate/${this.routeInfo.categoryId}?page=${newPage}&limit=${this.routeInfo.limit}
    this.$router.push({
      name:"CategoryBlog",
      query,
      params:{
        categoryId:this.routeInfo.categoryId,
      }
    })
    }
    }
},
watch:{
     // watch this.$route
     async $route(){
        this.isLoading =true;
        this.$refs.container.scrollTop = 0;
        this.data = await this.fetchData();
        this.isLoading = false;
      }
}
}
</script>

<style lang="less" scoped>
@import url(~@/styles/var.less);
.blog-list-container{
    position: relative;
    line-height: 1.7;
    padding: 20px;
    overflow-y: scroll;
    scroll-behavior: smooth;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    scroll-behavior: smooth;
    ul{
      list-style: none;
      margin: 0;
      padding: 0;
    }
    .pager-container{
      position: fixed;
      bottom: -10px;
      left: 50%;
      transform: translate(-50%,0);
    }
}
li{
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @grey;
  .thumb{
    flex: 0 0 auto;
    margin-right: 15px;
    img{
      display: block;
      max-width: 200px;
      border-radius: 5px;
    }
  }
  .main{
    flex: 1 1 auto;
    resize: horizontal;
    h2{
      margin: 0;
    }
  }
  .aside{
    font-size: 12px;
    color:@grey;
    span{
      margin-right: 15px;
    }
  }
  .desc{
    margin: 15px 0;
    font-size: 14px;
  }
}
</style>

