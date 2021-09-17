<template>
  <div>
      <div v-show="show" style="position:relative">
            <Loading />
      </div>
     
      <button @click="isShow(show)">switch/hide</button>
  </div>
</template>

<script>
import Loading from "./index.vue"
export default {
 components:{
     Loading,
 },
  data(){
        return{
            show: true,
        }
    },
    methods:{
        isShow(show){
            this.show = !show;
        }
    }
}
</script>

<style lang="less">

</style>