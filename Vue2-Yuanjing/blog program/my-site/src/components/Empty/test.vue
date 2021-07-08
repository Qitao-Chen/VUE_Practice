<template>
<div class="test-container">
    <Empty text="无数据" />
</div>  
</template>

<script>
import Empty from "./index.vue";
export default {
    name:'empty',
    components:{
        Empty
        }
}
</script>

<style>
.test-container{
    width: 500px;
    height: 500px;
    border: 2px solid;
    margin: 0 auto;
    position: relative;
}
</style>