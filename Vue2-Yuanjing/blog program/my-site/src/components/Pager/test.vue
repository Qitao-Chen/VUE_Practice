<template>
  <div>

    <Pager 
    :total="total" 
    :current="current" 
    @pageChange="handlePageChange($event)" />
   
    
  </div>
</template>

<script>
import Pager from './index.vue'
export default {
  name: 'pager',
  components: {
    Pager
  },
  data(){
    return {
      current: 1,
      total:302,
    }
  },
  methods:{
    handlePageChange(newPage){
      this.current = newPage
    }
  }
}
</script>

<style scoped>

</style>
