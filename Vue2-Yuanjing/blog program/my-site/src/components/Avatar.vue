<template>
  <img 
  :src="url" 
  :style="{
      width:size + 'px',
      height:size + 'px',
      borderRadius:percent + '%',
  }">
</template>

<script>
export default {
    name: "avatar",
    props:{
        url: {
        type:String,
        required: true, //属性必传
        },
        size:{
        type: Number,
        required: true
        },
        percent:{
        type: Number,
        }
      
    }
}
</script>

<style>

</style>