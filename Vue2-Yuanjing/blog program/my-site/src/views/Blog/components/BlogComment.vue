<template>
  <div class="blog-comment-container">
      <MessageArea title="Comment List"
      :subTitle="`(${data.total})`" 
      :list="data.rows"
      :isListLoading="isLoading" 
      @submit="handleSubmit"
      />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData.js";
import {getComments,postComment} from "@/api/blog.js";
export default {
    mixins:[fetchData({total:0,rows:[]})],
    components:{
        MessageArea,
    },
    data(){
        return{
            page:1,
            limit:10,
        }
    },
    computed:{
        hasMore(){
            return this.data.rows.length < this.data.total;
        }
    },
    created(){
        this.$bus.$on('mainScroll',this.handleScroll)
    },
    destroyed(){
        this.$bus.$off('mainScroll',this.handleScroll)
    },
    methods:{
        async handleScroll(dom){
            if(!dom){
                return
            }
            // const range =100;
            const distance =(dom.scrollTop + dom.clientHeight) - dom.scrollHeight
            // console.log(distance)
            if(distance === 0){
               await this.fetchMoreData()
            }      
        },
        async fetchData(){
            return await getComments(this.$route.params.id,this.page,this.limit);
        },
        async fetchMoreData(){
            if(!this.hasMore){
                //没有更多评论了
                alert("No More Comments")
                return;
            }
            this.isLoading = true;
            this.page++;
            const resp = await this.fetchData();
            this.data.rows = this.data.rows.concat(resp.rows);
            this.isLoading = false;
        },
        async handleSubmit(formData,callback){
            const resp = await postComment({
                blogId:this.$route.params.id,
                ...formData,
            });
            this.data.rows.unshift(resp);
            this.data.total++;
            callback('Successfully Submitted');
        }
    }
}
</script>

<style lang="less" scoped>
.blog-comment-container{
    margin: 30px 0;
}
</style>