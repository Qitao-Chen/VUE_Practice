<template>
 <div ref="messageContainer" class="message-container">
   <MessageArea title="Message List" 
   :subTitle="`(${data.total})`"
   :list="data.rows"
   :isListLoading ="isLoading"
   @submit="handleSubmit"
   />
 </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData";
import mainScroll from "@/mixins/mainScroll";
import * as msgApi from "@/api/message.js";
export default {
  mixins:[fetchData({total:0,rows:[]}),mainScroll('messageContainer')],
  data(){
    return {
      page: 1,
      limit: 10,
    }
  },
  components:{
    MessageArea,
  },
  created(){
    this.$bus.$on('mainScroll',this.handleScroll)
  },
  destroyed(){
    this.$bus.$off('mainScroll',this.handleScroll)
  },
  computed:{
    hasMore(){
      //10 < 52
      return this.data.rows.length < this.data.total;
    }
  },
  methods:{
    async fetchData(){
      return msgApi.getMessages(this.page,this.limit)
    },
    async handleSubmit(formData,callback){
      const resp = await msgApi.postMessage(formData);  
      this.data.rows.unshift(resp);
      this.data.total++;
      callback("Successfully Submitted")
    },
    async handleScroll(dom){
      if(!dom){
        return;
      }
      const distance = (dom.scrollTop + dom.clientHeight) - dom.scrollHeight;
      if(distance === 0){
        await this.fetchMoreData();
      }
    },
    async fetchMoreData(){
      if(!this.hasMore){
        alert("No More Messages");
        return;
      }
      this.isLoading = true;
      this.page++;
      const resp = await this.fetchData(this.page,this.limit)
      this.data.rows =  this.data.rows.concat(resp.rows);
      this.isLoading = false;
    }
  }
}
</script>

<style>
.message-container{
  background-color: #2B7DA5;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 25px 10px;
  box-sizing: border-box;
}
.message-area-container{
  width: 700px;
  margin: 0 auto;
}
</style>