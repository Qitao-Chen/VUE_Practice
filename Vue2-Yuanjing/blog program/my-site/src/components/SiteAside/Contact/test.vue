
<template>
  <div class="test-container">
      <Contact :width="100" :height="200" backgroundColor="lightblue"/>
  </div>
</template>

<script>
import Contact from './index.vue';
import '@/styles/global.less'
export default {
    name:'contact',
    components:{
        Contact
    }
}
</script>

<style>
    .test-container{
        width: 400px;
        height: 800px;
        border: 2px solid red;        
        margin: 0 auto;
        background-color: black;
    }
</style>