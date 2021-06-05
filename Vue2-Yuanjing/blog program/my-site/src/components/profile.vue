<template>
<div class="profile">
   <h1>
    {{name}} BLOG</h1>
    <img class="portrait" style="border-radius: 20%;"
      :src="link"
      alt="">
</div>
</template>

<script>
export default {
    name:"profile",
    props:{
        name: String,
        link: String,
    }
}
</script>

<style scoped lang="less">
h1{
    text-align: center; 
    color: rgb(252, 250, 246);
}
.profile .portrait{
    position: relative; 
    width:10%;
    height: 10%;
    left: -40%;
}
</style>