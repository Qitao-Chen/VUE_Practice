<template>
  <div class="test-container">
      <Menu />
  </div>
</template>

<script>
import Menu from "./index.vue"
export default {
    name:"menu",
    components:{
        Menu,
    }
}
</script>

<style>
.test-container{
    width: 400px;
    height: 600px;
    border: 5px solid blue;
    background: #000;
    margin: 0 auto;
}
</style>