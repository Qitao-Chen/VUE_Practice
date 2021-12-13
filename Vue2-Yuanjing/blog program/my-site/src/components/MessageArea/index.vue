<template>
  <div class="message-area-container">
      <DataForm v-on="$listeners" />
      <h3>
          {{title}}
          <span>{{ subTitle }}</span>
      </h3>
      <DataList :list="list"/>
      <div class="loading" v-loading="isListLoading"></div>
  </div>
</template>

<script>
import DataForm from "./DataForm.vue";
import DataList from "./DataList.vue";
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
    list: {
      type: Array,
      default: () => [],
    },
    isListLoading: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    DataForm,
    DataList,
  },
  //如果不使用v-on="$listeners" 则需要使用以下方法往上抛
  //  <DataFom @submit="handleSubmit" />
  // methods:{
  //   handleSubmit(formData,callback){
  //     //继续往上抛。让blogComment组件处理
  //     console.log("index")
  //     this.$emit("submit", formData,callback)
  //   }
}
</script>

<style scoped lang="less">
.loading {
  position: relative;
  height: 100px;
}
</style>