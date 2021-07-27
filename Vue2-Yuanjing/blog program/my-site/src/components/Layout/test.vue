<template>
  <div class="test-container">
      <Layout>
          <template #left>
              <div class="left">
                  left area, width fit the content, overflow hidden
              </div>
          </template>
          <div class="main">
              main area, width fill remain area, overflow hidden
              main area, width fill remain area, overflow hidden
              main area, width fill remain area, overflow hidden
              main area, width fill remain area, overflow hidden
              main area, width fill remain area, overflow hidden
          </div>
          <template #right>
              <div class="right">
                  right area, width fit the content, overflow hidden
              </div>
          </template>
      </Layout>    
  </div>
</template>

<script>
import Layout from "./index.vue"
export default {
    name:"layout",
    components:{
        Layout
    }
}
</script>

<style scoped>
.test-container{
    width:1000px;
    height: 600px;
    border: 2px solid;
    white-space: nowrap;
}
.left{
    width: 200px;
    height: 100%;
    background: lightcoral;
}
.main{
    width: 100%;
    height: 100%;
    background: lightseagreen;
}
.right{
    width: 150px;
    height: 100%;
    background: lightblue;
}
</style>